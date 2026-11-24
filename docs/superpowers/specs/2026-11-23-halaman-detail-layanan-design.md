# Rancangan: Halaman Detail Layanan

## Maksud dan alasan

Pengunjung perlu memahami layanan yang mereka pilih sebelum menghubungi JCPWebSolutions. Saat ini, semua kartu layanan di beranda langsung menuju bagian kontak. Setelah perubahan, tiap kartu membuka halaman yang menjelaskan layanan itu dan menampilkan enam situs rujukan yang relevan agar pengunjung dapat membayangkan hasil yang mungkin dibuat.

## Tujuan

- Keenam layanan memiliki alamat halaman sendiri dan dapat dibuka langsung.
- Setiap halaman menjelaskan tujuan layanan dan cakupan yang sudah disebutkan di beranda.
- Setiap halaman menampilkan tepat enam referensi situs yang sesuai dengan layanan tersebut.
- Pengunjung dapat membuka situs referensi dan menghubungi JCPWebSolutions.
- Seluruh teks baru menggunakan Bahasa Indonesia, kecuali nama merek dan istilah yang memang perlu dipertahankan.

## Bukan tujuan

- Membangun sistem bahasa atau pilihan bahasa.
- Mengubah bagian lain di situs yang tidak terkait dengan navigasi dan halaman layanan.
- Menampilkan referensi sebagai proyek yang dibuat JCPWebSolutions.
- Membuat gambar cuplikan situs pada tahap ini.

## Batasan dan temuan

- Proyek memakai Next.js 16 App Router dan TypeScript.
- Enam jenis layanan dan deskripsi awal sudah berada di `app/page.tsx`; komponen `ServicesGrid` saat ini mengarahkan semua kartu ke `#contact`.
- Carousel beranda berisi 20 situs rujukan yang sudah dikurasi. Jumlahnya tidak merata untuk semua jenis layanan, terutama website portofolio.
- Pemilik memilih menambah situs rujukan bila koleksi yang ada belum cukup, dan meminta cuplikan gambar dibiarkan kosong untuk sekarang.
- Referensi adalah inspirasi dari situs publik, bukan klaim portofolio JCP. Setiap tautan baru harus diperiksa sebelum ditampilkan. Hindari mengarang kemampuan atau isi situs.

## Pendekatan yang dipilih

1. **Halaman terpisah yang ditulis satu per satu:** mudah memberi tata letak berbeda, tetapi menggandakan struktur enam kali.
2. **Satu templat dengan rute dinamis per layanan:** setiap layanan memiliki URL dan isi sendiri dengan struktur yang konsisten serta satu sumber untuk kartu referensi.

Pendekatan kedua dipilih karena keenam halaman memiliki kebutuhan yang sama: penjelasan layanan, cakupan, enam referensi, dan ajakan konsultasi. Dialog atau modal tidak dipakai karena pengunjung meminta halaman baru.

## Rancangan halaman

```text
Navigasi situs
Beranda / Layanan / [Nama layanan]
[Nama layanan]
Penjelasan singkat dan cakupan layanan
[Ajakan konsultasi]
Enam contoh referensi yang relevan
  Nama situs · alasan singkat relevan · Buka situs
Ajakan konsultasi dan footer yang sudah ada
```

Tautan kartu di beranda membuka halaman pada pola `/layanan/[slug]` di tab yang sama. Slug ditetapkan untuk enam layanan: `website-company-profile`, `landing-page-promosi`, `toko-online`, `booking-reservasi`, `website-portofolio`, dan `website-custom`. Halaman berbagi satu templat, dengan judul, deskripsi, cakupan, metadata, dan enam referensi yang berbeda menurut slug. Navigasi header dan footer di halaman layanan harus menuju bagian beranda yang sesuai (misalnya `/#services`), bukan fragmen yang tidak ada pada halaman layanan.

Kartu referensi berupa teks tanpa wadah gambar kosong: kategori singkat, nama situs, satu kalimat tentang aspek yang dapat dipelajari, dan tautan eksternal yang jelas. Grid menampilkan tiga kolom di layar lebar, dua di tablet, dan satu di ponsel. Situs yang sama boleh muncul pada layanan berbeda hanya jika benar-benar relevan; satu halaman tidak memuat duplikasi. Setiap halaman membedakan referensi inspirasi dari karya JCP.

Tautan konsultasi memakai tujuan WhatsApp yang sudah digunakan situs. Navigasi menyediakan tautan kembali ke daftar layanan. Slug yang tidak dikenal menampilkan halaman 404.

## Arah visual dan nada

Reading this as: halaman pemasaran layanan untuk calon pelanggan JCPWebSolutions, memakai bahasa visual JCP yang sudah ada: kontras hitam, kuning, dan biru dengan tipografi Inter. Dial ENERGY 2 / RHYTHM 2 / MOTION 1. Judul dan nama layanan menjadi fokus; variasi ritme datang dari intro singkat, daftar cakupan, lalu grid referensi. Gerak dibatasi pada hover dan fokus yang sudah sesuai dengan pola situs. Semua teks baru ditulis dalam Bahasa Indonesia yang lugas.

## Pilihan yang masih untuk pelaksana

- Memilih enam referensi yang paling cocok untuk tiap layanan dari koleksi saat ini dan situs tambahan yang sudah diperiksa.
- Menulis ringkasan satu kalimat berdasarkan isi yang benar-benar terlihat pada situs rujukan.
- Menggunakan komponen dan token CSS situs yang sudah ada, serta menjaga keterbacaan, fokus keyboard, dan tata letak pada layar kecil.
- Menambahkan metadata judul dan deskripsi untuk tiap halaman.

## Ukuran pekerjaan

Ini sebuah proyek kecil: perubahan tautan layanan, satu templat rute dengan enam variasi konten, kurasi referensi tambahan, dan gaya responsif untuk kartu teks.
