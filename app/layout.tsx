import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "JCPWebSolutions | Jasa Pembuatan Website Profesional",
  description:
    "JCPWebSolutions membantu bisnis dan organisasi membuat website profesional, mulai dari company profile, landing page, toko online, hingga aplikasi web.",
  applicationName: "JCPWebSolutions — Jogja Creative Production",
  alternates: { canonical: "/" },
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: "JCPWebSolutions | Jasa Pembuatan Website Profesional",
    description:
      "Jasa pembuatan website profesional untuk bisnis dan organisasi. Diskusikan kebutuhan website Anda bersama tim JCPWebSolutions.",
    type: "website",
    locale: "id_ID",
    siteName: "JCPWebSolutions — Jogja Creative Production",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCPWebSolutions | Jasa Pembuatan Website Profesional",
    description:
      "Website profesional untuk membantu bisnis tampil lebih meyakinkan di dunia digital.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
