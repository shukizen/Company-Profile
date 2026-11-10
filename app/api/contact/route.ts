import { NextResponse, type NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { inquirySchema } from "@/lib/inquiry-schema";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const requests = new Map<string, { count: number; expiresAt: number }>();
let operations = 0;

function rateLimit(key: string, now: number) {
  operations += 1;
  if (requests.size > 5_000 && operations % 128 === 0) {
    for (const [storedKey, value] of requests) {
      if (value.expiresAt <= now) requests.delete(storedKey);
    }
    while (requests.size > 5_000) {
      const oldestKey = requests.keys().next().value;
      if (!oldestKey) break;
      requests.delete(oldestKey);
    }
  }
  const current = requests.get(key);
  if (!current || current.expiresAt <= now) {
    requests.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.expiresAt - now) / 1000)) };
  }
  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ message: "Asal permintaan tidak valid." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ message: "Ukuran permintaan terlalu besar." }, { status: 413 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor ?? request.headers.get("x-real-ip") ?? "unknown";
  const limit = rateLimit(ip, Date.now());
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Terlalu banyak permintaan. Silakan coba lagi beberapa saat lagi." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 12_000) {
      return NextResponse.json({ message: "Ukuran permintaan terlalu besar." }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "Periksa formulir dan coba lagi." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Periksa kolom formulir dan coba lagi.", errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Quietly accept automated submissions caught by the hidden honeypot.
  if (parsed.data.website) {
    return NextResponse.json({ message: "Terima kasih — permintaan Anda telah kami terima." }, { status: 201 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Formulir permintaan belum terhubung. Silakan coba lagi nanti." },
      { status: 503 },
    );
  }

  try {
    const prisma = getPrisma();
    await prisma.contactInquiry.create({
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        serviceInterest: parsed.data.serviceInterest,
        projectDescription: parsed.data.projectDescription,
      },
    });
    return NextResponse.json({ message: "Terima kasih — permintaan Anda telah kami terima." }, { status: 201 });
  } catch {
    console.error("Unable to save contact inquiry");
    return NextResponse.json(
      { message: "Permintaan Anda belum dapat disimpan. Silakan coba lagi nanti." },
      { status: 500 },
    );
  }
}
