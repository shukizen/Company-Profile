# Situs Marketing JCP

Situs PT Jogja Creative Production berbasis Next.js 16 App Router.

## Persiapan lokal

1. Pasang dependensi dengan `npm install`.
2. Salin `.env.example` menjadi `.env`, lalu isi `DATABASE_URL` PostgreSQL.
3. Atur `NEXT_PUBLIC_SITE_URL` ke alamat publik situs sebelum deployment.
4. Terapkan migrasi inquiry dengan `npm run db:migrate`.
5. Jalankan situs dengan `npm run dev`.

Perintah `npm run dev` dan `npm run build` membuat Prisma Client sebelum menjalankan Next.js. Formulir inquiry akan menampilkan status belum tersedia hingga alamat PostgreSQL diatur dan migrasi diterapkan.

## Penyimpanan inquiry

Formulir publik mengirim data ke `POST /api/contact`. Validasi di browser dan server memakai skema Zod yang sama di `lib/inquiry-schema.ts`. Endpoint memvalidasi data kembali, memakai pembatasan permintaan berbasis IP dalam memori serta honeypot, lalu menyimpan inquiry menggunakan Prisma.

Pembatasan dalam memori berfungsi sebagai perlindungan dasar pada satu instance. Deployment dengan beberapa instance memerlukan penyimpanan pembatasan bersama. Notifikasi email dan tautan kontak atau media sosial resmi belum diatur karena informasinya tidak tercantum dalam PRD.
