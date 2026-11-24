export type ServiceReference = {
  name: string;
  category: string;
  note: string;
  href: string;
  previewImage?: string;
  highlights?: readonly string[];
};

export type ServicePreparationStep = {
  title: string;
  text: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  description: string;
  detailParagraphs: readonly string[];
  pageDescription: string;
  examples: readonly string[];
  scopeItems: readonly string[];
  preparationSteps: readonly ServicePreparationStep[];
  references: readonly ServiceReference[];
};

export const services = [
  {
    slug: "website-company-profile",
    title: "Website Company Profile",
    description:
      "Website resmi untuk mengenalkan perusahaan, menjelaskan layanan, dan membantu calon pelanggan menghubungi Anda.",
    detailParagraphs: [
      "Website company profile adalah situs resmi yang memperkenalkan perusahaan, bidang usaha, dan layanan kepada calon pelanggan. Melalui halaman ini, pengunjung dapat mengenal latar belakang bisnis Anda dan melihat informasi yang membantu mereka memahami apa yang perusahaan kerjakan.",
      "Isinya dapat mencakup cerita perusahaan, rincian layanan, portofolio, testimoni, kontak, dan lokasi. Kami menyusun urutan informasi bersama Anda berdasarkan hal yang ingin ditonjolkan, supaya pengunjung lebih mudah mengenali bisnis dan tahu cara menghubungi tim.",
    ],
    pageDescription:
      "Kenali layanan pembuatan website company profile JCPWebSolutions dan lihat contoh situs perusahaan serta organisasi.",
    examples: ["Profil dan cerita perusahaan", "Halaman layanan", "Portofolio dan testimoni", "Kontak dan lokasi"],
    scopeItems: [
      "Cerita perusahaan dan bidang usaha",
      "Uraian layanan dan cara kerja",
      "Proyek pilihan dan testimoni",
      "Kontak, lokasi, dan ajakan konsultasi",
    ],
    preparationSteps: [
      { title: "Pilih informasi inti", text: "Tentukan cerita, bidang usaha, dan layanan yang perlu dikenal calon pelanggan." },
      { title: "Kumpulkan materi", text: "Pilih proyek, foto, testimoni, lokasi, dan kontak yang siap ditampilkan." },
      { title: "Susun alur halaman", text: "Urutkan profil, layanan, proyek pilihan, hingga cara menghubungi perusahaan." },
    ],
    references: [
      {
        name: "Telkom Indonesia",
        category: "Telekomunikasi",
        note: "Profil dan sejarah, struktur grup, lini bisnis, tata kelola, dan informasi investor.",
        href: "https://www.telkom.co.id/",
        previewImage: "/images/service-references/telkom-indonesia.png",
      },
      {
        name: "Pertamina",
        category: "Energi",
        note: "Profil perusahaan energi dengan informasi bisnis, keberlanjutan, berita, dan layanan.",
        href: "https://www.pertamina.com/",
        previewImage: "/images/service-references/pertamina.png",
      },
      {
        name: "PLN",
        category: "Ketenagalistrikan",
        note: "Profil perusahaan dengan informasi layanan kelistrikan, program, berita, dan keberlanjutan.",
        href: "https://www.pln.co.id/main",
        previewImage: "/images/service-references/pln.png",
      },
      {
        name: "Astra International",
        category: "Otomotif dan multiindustri",
        note: "Profil grup yang memperkenalkan bidang usaha, perjalanan perusahaan, dan informasi korporat.",
        href: "https://www.astra.co.id/",
        previewImage: "/images/service-references/astra.png",
      },
      {
        name: "Bank BCA",
        category: "Perbankan",
        note: "Situs bank dengan navigasi produk, layanan, informasi perusahaan, berita, dan kanal kontak.",
        href: "https://www.bca.co.id/",
        previewImage: "/images/service-references/bank-bca.png",
      },
      {
        name: "Bank Mandiri",
        category: "Perbankan",
        note: "Profil korporat, grup usaha, hubungan investor, keberlanjutan, dan layanan perbankan.",
        href: "https://www.bankmandiri.co.id/",
        previewImage: "/images/service-references/bank-mandiri.png",
      },
    ],
  },
  {
    slug: "landing-page-promosi",
    title: "Landing Page Promosi",
    description:
      "Halaman fokus untuk mempromosikan produk, layanan, atau kampanye dengan ajakan yang jelas.",
    detailParagraphs: [
      "Landing page promosi adalah halaman website yang berfokus pada satu produk, layanan, atau kampanye. Halaman ini menyampaikan inti penawaran dengan runtut agar pengunjung dapat memahami apa yang sedang dipromosikan.",
      "Kontennya dapat memuat pengenalan produk atau layanan, rincian penawaran, serta ajakan untuk berkonsultasi, memesan, atau mendaftar. Urutan informasi mengikuti tujuan kampanye, sehingga pengunjung dapat membaca penjelasan lalu memilih langkah yang tersedia.",
    ],
    pageDescription:
      "Lihat layanan landing page promosi JCPWebSolutions dan contoh halaman yang menonjolkan kampanye, produk, serta ajakan tindakan.",
    examples: ["Halaman kampanye", "Informasi produk atau layanan", "Tombol konsultasi/pemesanan", "Form pendaftaran"],
    scopeItems: [
      "Ringkasan produk, layanan, atau kampanye",
      "Informasi utama yang ingin disampaikan",
      "Ajakan konsultasi atau pemesanan",
      "Formulir untuk pendaftaran atau tindak lanjut",
    ],
    preparationSteps: [
      { title: "Tentukan tujuan", text: "Pilih tindakan utama dari promosi, seperti konsultasi, pemesanan, atau pendaftaran." },
      { title: "Susun pesan penawaran", text: "Rangkum informasi, rincian, dan materi pendukung untuk pengunjung." },
      { title: "Pilih ajakan", text: "Tentukan tombol atau formulir yang mengarahkan pengunjung ke langkah berikutnya." },
    ],
    references: [
      {
        name: "Gojek",
        category: "Layanan digital",
        note: "Halaman utama yang memperkenalkan ekosistem Gojek, layanan, manfaat, dan jalur bergabung.",
        href: "https://www.gojek.com/id-id",
        previewImage: "/images/service-references/gojek.png",
      },
      {
        name: "Wonderful Indonesia",
        category: "Kampanye pariwisata",
        note: "Situs kampanye wisata yang mempromosikan destinasi dan pengalaman Indonesia melalui konten visual serta ajakan menjelajah.",
        href: "https://www.indonesia.travel/id/id",
        previewImage: "/images/service-references/wonderful-indonesia.png",
      },
      {
        name: "Ruangguru",
        category: "Pendidikan digital",
        note: "Situs pendidikan yang memperkenalkan layanan belajar dan pilihan program untuk pelajar.",
        href: "https://www.ruangguru.com/",
        previewImage: "/images/service-references/ruangguru.png",
      },
      {
        name: "Telkomsel",
        category: "Telekomunikasi",
        note: "Halaman produk dan promosi dengan kategori layanan, penawaran, serta ajakan menggunakan produk.",
        href: "https://www.telkomsel.com/",
        previewImage: "/images/service-references/telkomsel.png",
      },
      {
        name: "DANA",
        category: "Dompet digital",
        note: "Situs promosi layanan keuangan digital dengan informasi produk dan ajakan mengunduh aplikasi.",
        href: "https://www.dana.id/",
        previewImage: "/images/service-references/dana.png",
      },
      {
        name: "Bibit",
        category: "Investasi digital",
        note: "Landing page produk investasi yang menjelaskan pilihan aset, fitur, dan langkah untuk mulai.",
        href: "https://bibit.id/",
        previewImage: "/images/service-references/bibit.png",
      },
    ],
  },
  {
    slug: "toko-online",
    title: "Website Toko Online",
    description:
      "Website untuk menampilkan produk dan menerima pesanan, dengan alur belanja yang disesuaikan dengan bisnis Anda.",
    detailParagraphs: [
      "Website toko online adalah situs yang menampilkan katalog produk dan menerima pesanan melalui internet. Pengunjung dapat menjelajahi pilihan yang tersedia, membuka detail produk, lalu mengikuti langkah pemesanan yang disiapkan untuk toko Anda.",
      "Sesuai kebutuhan bisnis, alurnya dapat mencakup keranjang atau formulir pemesanan, pilihan pembayaran, dan informasi pengiriman. Kami menyusun katalog serta proses belanja berdasarkan jenis produk dan cara Anda melayani pembeli.",
    ],
    pageDescription:
      "Pelajari layanan pembuatan website toko online JCPWebSolutions dan lihat contoh katalog serta pengalaman belanja digital.",
    examples: ["Katalog dan detail produk", "Keranjang atau formulir pesanan", "Pembayaran sesuai kebutuhan", "Informasi pengiriman"],
    scopeItems: [
      "Katalog produk dengan kategori",
      "Detail produk dan pilihan yang tersedia",
      "Keranjang atau formulir pemesanan",
      "Informasi pembayaran dan pengiriman",
    ],
    preparationSteps: [
      { title: "Kelompokkan produk", text: "Tentukan kategori dan informasi produk yang perlu ditampilkan." },
      { title: "Atur cara pemesanan", text: "Pilih alur belanja lewat keranjang atau formulir sesuai proses toko." },
      { title: "Lengkapi info transaksi", text: "Tentukan informasi pembayaran dan pengiriman yang perlu diketahui pembeli." },
    ],
    references: [
      {
        name: "Brodo",
        category: "Alas kaki dan apparel lokal",
        note: "Katalog sepatu dan apparel dengan kategori koleksi, detail produk, serta alur belanja langsung.",
        href: "https://bro.do/",
        previewImage: "/images/service-references/brodo.png",
      },
      {
        name: "Buttonscarves",
        category: "Modest fashion",
        note: "Katalog scarves, apparel, tas, dan aksesori dengan kategori produk serta informasi pembelian.",
        href: "https://www.buttonscarves.com/id/",
        previewImage: "/images/service-references/buttonscarves.png",
      },
      {
        name: "Erigo",
        category: "Fesyen lokal",
        note: "Toko resmi brand lokal dengan katalog pakaian, koleksi terbaru, dan detail produk untuk belanja online.",
        href: "https://erigostore.co.id/",
        previewImage: "/images/service-references/erigo.png",
      },
      {
        name: "Sociolla",
        category: "Kecantikan dan personal care",
        note: "E-commerce kecantikan dengan pilihan produk dan brand, kategori belanja, serta informasi penawaran.",
        href: "https://www.sociolla.com/",
        previewImage: "/images/service-references/sociolla.png",
      },
      {
        name: "Blibli",
        category: "Marketplace Indonesia",
        note: "Marketplace multi-kategori dengan pencarian produk, katalog terstruktur, dan informasi transaksi.",
        href: "https://www.blibli.com/",
        previewImage: "/images/service-references/blibli.png",
      },
      {
        name: "Lazada Indonesia",
        category: "Marketplace Indonesia",
        note: "Marketplace dengan kategori beragam, pencarian, penawaran, dan alur belanja dalam satu situs.",
        href: "https://www.lazada.co.id/",
        previewImage: "/images/service-references/lazada.png",
      },
    ],
  },
  {
    slug: "booking-reservasi",
    title: "Website Booking & Reservasi",
    description:
      "Website yang memudahkan pelanggan melihat ketersediaan layanan dan mengajukan pemesanan secara online.",
    detailParagraphs: [
      "Website booking dan reservasi adalah situs yang menampilkan informasi layanan serta cara pelanggan mengajukan pemesanan untuk jadwal tertentu. Pengunjung dapat melihat pilihan yang tersedia dan mengirim permintaan reservasi secara online.",
      "Halaman dapat memuat rincian layanan, jadwal, formulir pemesanan, dan petunjuk konfirmasi. Alurnya mengikuti cara bisnis Anda menerima reservasi, baik untuk akomodasi, perjalanan, maupun layanan lain yang memakai jadwal.",
    ],
    pageDescription:
      "Lihat layanan website booking dan reservasi JCPWebSolutions beserta contoh situs akomodasi, wisata, restoran, dan pelatihan.",
    examples: ["Jadwal dan ketersediaan", "Form pemesanan", "Konfirmasi reservasi", "Informasi layanan"],
    scopeItems: [
      "Informasi layanan atau paket reservasi",
      "Jadwal dan ketersediaan layanan",
      "Formulir permintaan pemesanan",
      "Langkah konfirmasi dan kontak bisnis",
    ],
    preparationSteps: [
      { title: "Tentukan layanan dan jadwal", text: "Pilih paket, waktu, dan ketersediaan yang akan ditampilkan." },
      { title: "Rancang formulir reservasi", text: "Tentukan data yang perlu diminta saat pelanggan mengajukan jadwal." },
      { title: "Jelaskan konfirmasi", text: "Susun kontak dan langkah setelah permintaan reservasi diterima." },
    ],
    references: [
      {
        name: "Tiket.com",
        category: "Perjalanan dan hiburan",
        note: "Platform booking hotel, tiket pesawat, kereta api, dan aktivitas wisata dalam satu alur pemesanan.",
        href: "https://www.tiket.com/",
        previewImage: "/images/service-references/tiket.png",
      },
      {
        name: "Airbnb",
        category: "Penginapan dan akomodasi",
        note: "Pencarian penginapan, vila, dan pengalaman berdasarkan lokasi, tanggal check-in/out, serta jumlah tamu.",
        href: "https://www.airbnb.co.id/",
        previewImage: "/images/service-references/airbnb.png",
      },
      {
        name: "Booking.com",
        category: "Reservasi hotel global",
        note: "Situs reservasi akomodasi dengan filter fasilitas, ketersediaan kamar real-time, dan ulasan tamu.",
        href: "https://www.booking.com/",
        previewImage: "/images/service-references/booking-com.png",
      },
      {
        name: "Alodokter",
        category: "Janji temu dokter dan klinik",
        note: "Layanan buat janji konsultasi dokter dan rumah sakit sesuai jadwal praktik yang tersedia.",
        href: "https://www.alodokter.com/",
        previewImage: "/images/service-references/alodokter.png",
      },
      {
        name: "redBus Indonesia",
        category: "Tiket bus dan travel",
        note: "Pemesanan tiket bus dan shuttle antarkota dengan fitur pemilihan kursi serta jadwal keberangkatan.",
        href: "https://www.redbus.id/",
        previewImage: "/images/service-references/redbus.png",
      },
      {
        name: "Calendly",
        category: "Penjadwalan janji temu",
        note: "Sistem penjadwalan pertemuan dan konsultasi online berbasis kalender dengan konfirmasi otomatis.",
        href: "https://calendly.com/",
        previewImage: "/images/service-references/calendly.png",
      },
    ],
  },
  {
    slug: "website-portofolio",
    title: "Website Portofolio",
    description:
      "Website untuk menampilkan karya, keahlian, dan pengalaman profesional secara menarik dan mudah diakses.",
    detailParagraphs: [
      "Website portofolio adalah situs yang merangkum karya, keahlian, dan pengalaman profesional dalam satu tempat. Pengunjung dapat melihat jenis proyek yang pernah dikerjakan dan memahami bidang yang menjadi fokus Anda.",
      "Setiap proyek dapat disertai judul dan ringkasan singkat. Halaman ini juga dapat memuat profil, keahlian, testimoni, serta kontak profesional, sehingga calon klien memiliki gambaran sebelum menghubungi Anda untuk membahas pekerjaan.",
    ],
    pageDescription:
      "Lihat layanan website portofolio JCPWebSolutions dan contoh portofolio profesional serta studio kreatif.",
    examples: ["Galeri proyek", "Profil dan keahlian", "Testimoni klien", "Kontak profesional"],
    scopeItems: [
      "Galeri karya atau proyek pilihan",
      "Ringkasan proyek dan kontribusi Anda",
      "Profil, keahlian, dan pengalaman",
      "Testimoni dan kontak profesional",
    ],
    preparationSteps: [
      { title: "Pilih karya", text: "Kurasi proyek yang ingin ditampilkan dan sesuai dengan fokus Anda." },
      { title: "Tambahkan konteks", text: "Tuliskan ringkasan proyek dan peran Anda di dalamnya." },
      { title: "Lengkapi profil", text: "Sertakan keahlian, pengalaman, dan cara menghubungi Anda." },
    ],
    references: [
      {
        name: "Afid",
        category: "Portofolio full-stack developer",
        note: "Portofolio developer Indonesia yang menyatukan profil, layanan, proyek, pengalaman, dan kontak.",
        href: "https://afid.my.id/",
        previewImage: "/images/service-references/afid.png",
      },
      {
        name: "Januar Maksum",
        category: "Portofolio frontend engineer",
        note: "Pilihan proyek web dan aplikasi ditampilkan bersama profil serta keahlian pengembang Jakarta.",
        href: "https://heyjanuar.id/",
        previewImage: "/images/service-references/januar-maksum.png",
      },
      {
        name: "A. Syauli Nadima",
        category: "Portofolio software engineer",
        note: "Portofolio full-stack developer Indonesia yang menampilkan proyek web, keahlian teknis, dan profil profesional.",
        href: "https://nadima-ahmad.my.id/",
        previewImage: "/images/service-references/nadima-ahmad.png",
      },
      {
        name: "Bagus Erlangga",
        category: "Portofolio full-stack developer",
        note: "Situs profesional dengan proyek, layanan, dan informasi kontak pengembang dari Depok.",
        href: "https://www.baguserlangga.dev/",
        previewImage: "/images/service-references/bagus-erlangga.png",
      },
      {
        name: "Fadlan Achmad Frizal",
        category: "Portofolio full-stack developer",
        note: "Portofolio web developer Indonesia dengan daftar proyek pilihan, layanan, dan kontak untuk kolaborasi.",
        href: "https://fadlanportofolio.com/",
        previewImage: "/images/service-references/fadlan-frizal.png",
      },
      {
        name: "Achmad Farizy",
        category: "Portofolio developer",
        note: "Profil profesional dengan karya web, layanan, dan kontak untuk calon klien.",
        href: "https://achfarizy.biz.id/",
        previewImage: "/images/service-references/achmad-farizy.png",
      },
    ],
  },
  {
    slug: "website-custom",
    title: "Website Custom",
    description:
      "Website yang dirancang dan dikembangkan sesuai tujuan, kebutuhan, dan alur bisnis Anda.",
    detailParagraphs: [
      "Website custom adalah situs yang dirancang mengikuti tujuan, proses, dan kebutuhan khusus bisnis Anda. Struktur halaman dan fitur ditentukan dari kebutuhan tersebut, sehingga website dapat mendukung cara kerja yang sudah digunakan atau alur baru yang ingin disiapkan.",
      "Prosesnya dimulai dengan membahas tujuan website, siapa penggunanya, dan informasi apa yang perlu disediakan. Setelah itu, kami menyusun halaman, fitur, tampilan, serta integrasi yang dibutuhkan dan menyepakati cakupannya sebelum pengembangan dimulai.",
    ],
    pageDescription:
      "Jelajahi layanan website custom JCPWebSolutions dan contoh platform dengan alur serta fitur yang disesuaikan.",
    examples: ["Tampilan sesuai identitas bisnis", "Halaman sesuai kebutuhan", "Fitur yang disepakati", "Integrasi sesuai kebutuhan"],
    scopeItems: [
      "Halaman sesuai tujuan website",
      "Fitur mengikuti alur bisnis",
      "Tampilan mengikuti identitas usaha",
      "Integrasi sesuai kebutuhan yang disepakati",
    ],
    preparationSteps: [
      { title: "Petakan kebutuhan", text: "Bahas tujuan website, pengguna, dan proses yang perlu didukung." },
      { title: "Rinci fungsi", text: "Tentukan halaman, fitur, data, dan integrasi yang diperlukan." },
      { title: "Sepakati ruang lingkup", text: "Susun prioritas, tampilan, dan fungsi sebelum pengembangan dimulai." },
    ],
    references: [
      {
        name: "Inn Oasis",
        category: "Akomodasi dan reservasi",
        note: "Website penginapan dengan pencarian properti, pilihan kamar, dukungan dua bahasa, dan alur reservasi.",
        href: "https://innoasisstay.com/",
        previewImage: "/project-reference-innoasis.webp",
      },
      {
        name: "JCP Digital Training",
        category: "Platform pelatihan digital",
        note: "Platform pelatihan dengan pencarian kelas, jadwal, in-house training, galeri kegiatan, dan pendaftaran peserta.",
        href: "https://jcpdigitaltraining.duckdns.org/",
        previewImage: "/project-reference-jcp-digital-training.png",
      },
      {
        name: "HILLSI Sleman",
        category: "Platform pelatihan kerja",
        note: "Platform lembaga pelatihan kerja dengan pencarian kelas, kategori pelatihan, dan informasi koordinasi LPK di Sleman.",
        href: "https://hillsisleman.duckdns.org/",
        previewImage: "/project-reference-hillsi-sleman.png",
      },
      {
        name: "Kagama Digi",
        category: "Komunitas digital",
        note: "Website komunitas alumni dengan program, dokumentasi kegiatan, struktur pengurus, dan pendaftaran anggota.",
        href: "https://kagamadigi.id/",
        previewImage: "/project-reference-kagama-digi.png",
      },
      {
        name: "Kopkamenwagama",
        category: "Etalase koperasi dan anggota",
        note: "Etalase koperasi untuk menemukan barang dan jasa, lengkap dengan pencarian produk, akses layanan, dan pendaftaran anggota.",
        href: "https://kopkamenwagama.duckdns.org/",
        previewImage: "/project-reference-kopkamenwagama.png",
      },
      {
        name: "FORKOM UMKM Kepuharjo",
        category: "Direktori UMKM lokal",
        note: "Website komunitas UMKM dengan katalog produk dan layanan lokal, kategori usaha, serta profil pelaku UMKM Kepuharjo.",
        href: "https://umkmkepuharjo.my.id/",
        previewImage: "/project-reference-umkm-kepuharjo.png",
      },
    ],
  },
] as const satisfies readonly ServicePageData[];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return services.find((service) => service.slug === slug);
}
