import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Globe,
  MapPin,
  PanelsTopLeft,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { Mercury } from "@/components/mercury";
import { ProjectCarousel } from "@/components/project-carousel";
import { ScrollTransitions } from "@/components/scroll-transitions";
import { SiteNav } from "@/components/site-nav";
import { ServicesGrid } from "@/components/services-grid";

const services = [
  {
    title: "Website Company Profile",
    description: "Website resmi untuk mengenalkan perusahaan, menjelaskan layanan, dan membantu calon pelanggan menghubungi Anda.",
    examples: ["Profil dan cerita perusahaan", "Halaman layanan", "Portofolio dan testimoni", "Kontak dan lokasi"],
  },
  {
    title: "Landing Page Promosi",
    description: "Halaman fokus untuk mempromosikan produk, layanan, atau kampanye dengan ajakan yang jelas.",
    examples: ["Halaman kampanye", "Informasi produk atau layanan", "Tombol konsultasi/pemesanan", "Form pendaftaran"],
  },
  {
    title: "Website Toko Online",
    description: "Website untuk menampilkan produk dan menerima pesanan, dengan alur belanja yang disesuaikan dengan bisnis Anda.",
    examples: ["Katalog dan detail produk", "Keranjang atau formulir pesanan", "Pembayaran sesuai kebutuhan", "Informasi pengiriman"],
  },
  {
    title: "Website Booking & Reservasi",
    description: "Website yang memudahkan pelanggan melihat ketersediaan layanan dan mengajukan pemesanan secara online.",
    examples: ["Jadwal dan ketersediaan", "Form pemesanan", "Konfirmasi reservasi", "Informasi layanan"],
  },
  {
    title: "Website Portofolio",
    description: "Website untuk menampilkan karya, keahlian, dan pengalaman profesional secara menarik dan mudah diakses.",
    examples: ["Galeri proyek", "Profil dan keahlian", "Testimoni klien", "Kontak profesional"],
  },
  {
    title: "Website Custom",
    description: "Website yang dirancang dan dikembangkan sesuai tujuan, kebutuhan, dan alur bisnis Anda.",
    examples: ["Tampilan sesuai identitas bisnis", "Halaman sesuai kebutuhan", "Fitur yang disepakati", "Integrasi sesuai kebutuhan"],
  },
];

const workSteps = [
  {
    icon: MessageCircle,
    title: "Diskusi kebutuhan",
    text: "Ceritakan bisnis, tujuan website, konten, serta fitur yang Anda perlukan.",
  },
  {
    icon: PanelsTopLeft,
    title: "Struktur & desain",
    text: "Kami menyusun halaman dan tampilan website berdasarkan kebutuhan yang disepakati.",
  },
  {
    icon: Code2,
    title: "Pengembangan website",
    text: "Desain diwujudkan menjadi website responsif, lalu ditinjau bersama sebelum peluncuran.",
  },
  {
    icon: Rocket,
    title: "Peluncuran",
    text: "Website disiapkan untuk tayang dan kami membahas dukungan lanjutan sesuai kebutuhan.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const organizationSchema = siteUrl
  ? JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Jogja Creative Production",
    alternateName: "JCPWebSolutions — Jasa Pembuatan Website",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
  }).replace(/</g, "\\u003c")
  : null;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <SiteNav />
      <ScrollTransitions />
      {organizationSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationSchema }} />}
      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <Mercury className="hero-gradient" />
          <div className="hero-copy">
            <h1 id="hero-title">Website Bisnis Anda<br /><span>Lebih Berkembang</span></h1>
            <p className="hero-lede">JCPWebSolutions merancang company profile, landing page, toko online, dan aplikasi web yang sesuai dengan tujuan bisnis Anda.</p>
            <div className="hero-actions">
              <a className="text-link" href="#projects">Lihat contoh website <ArrowDown size={16} /></a>
            </div>
            <div className="hero-assurance"><span><Check size={14} /> Desain sesuai bisnis</span><span><Check size={14} /> Responsif di semua perangkat</span><span><Check size={14} /> Dari desain hingga siap tayang</span></div>
          </div>
        </section>

        <section className="services section" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head-main"><p className="eyebrow">PILIH JENIS WEBSITE</p><h2 id="services-title">Jasa pembuatan website<br /><span>untuk kebutuhan Anda.</span></h2></div>
              <p className="section-summary">Dari profil perusahaan dan toko online hingga portofolio dan sistem reservasi, kami merancang website sesuai tujuan dan kebutuhan bisnis Anda.</p>
            </div>
            <ServicesGrid services={services} />
          </div>
        </section>

        <section className="process section" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="section-head process-head">
              <div className="section-head-main"><h2 id="process-title">Dari obrolan pertama<br />sampai <span>siap tayang.</span></h2></div>
              <p className="section-summary">Tahapannya jelas dan Anda terlibat dalam keputusan penting sebelum website diluncurkan.</p>
            </div>
            <div className="process-grid">
              {workSteps.map(({ title, text, icon: Icon }, index) => <article className="process-step" key={title}><span className="process-number">0{index + 1}</span><span className="process-dot" aria-hidden="true"><Icon size={17} strokeWidth={1.8} /></span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="projects section wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-head">
            <div className="section-head-main"><p className="eyebrow">REFERENSI WEBSITE</p><h2 id="projects-title">Lihat inspirasi website<br /><span>untuk bisnis Anda.</span></h2></div>
            <p className="section-summary">Contoh situs nyata ini menunjukkan berbagai arah desain. Struktur, fitur, dan tampilannya dapat menjadi inspirasi yang disesuaikan dengan kebutuhan bisnis Anda.</p>
          </div>
          <ProjectCarousel>
            <a className="project-card" href="https://innoasisstay.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Inn Oasis Accommodation">
              <div className="project-art project-art-reference" aria-label="Referensi halaman utama Inn Oasis Accommodation" role="img">
                <Image src="/project-reference-innoasis.webp" alt="" aria-hidden="true" width={1200} height={800} />
                <span className="concept-label">SITUS REFERENSI · INN OASIS</span>
              </div>
              <div className="project-info"><div><span className="project-category">AKOMODASI · RESERVASI</span><h3>Inn Oasis — Website akomodasi</h3><p>Referensi website penginapan dengan pencarian properti, pilihan kamar, dukungan dua bahasa, dan ajakan untuk bertanya.</p><div className="tech-tags"><span>Pencarian properti</span><span>Multibahasa</span><span>Reservasi</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://jogjacreativepro.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogja Creative Production">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jogja Creative Production">
                <Image src="/project-reference-jcp.png" alt="" aria-hidden="true" width={1467} height={713} />
              </div>
              <div className="project-info"><div><span className="project-category">PRODUKSI VISUAL · BRANDING</span><h3>Jogja Creative Production — Company profile</h3><p>Referensi company profile kreatif dengan tipografi ekspresif, visual cahaya sinematik, dan navigasi yang ringkas.</p><div className="tech-tags"><span>Company profile</span><span>Visual production</span><span>Branding</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://pelatihandronejogja.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Indonesia Drone Training Center">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Indonesia Drone Training Center">
                <Image src="/project-reference-idtc.png" alt="" aria-hidden="true" width={1377} height={701} />
              </div>
              <div className="project-info"><div><span className="project-category">PELATIHAN | TEKNOLOGI DRONE</span><h3>IDTC - Pusat pelatihan drone</h3><p>Referensi website pelatihan drone profesional yang menampilkan program keselamatan penerbangan, fotogrametri dan pemetaan, serta dokumentasi udara di Yogyakarta.</p><div className="tech-tags"><span>Pelatihan drone</span><span>Fotogrametri</span><span>Dokumentasi udara</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://migastraining.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Migas Training">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Migas Training">
                <Image src="/project-reference-migas.png" alt="" aria-hidden="true" width={1458} height={713} />
              </div>
              <div className="project-info"><div><span className="project-category">PELATIHAN · MINYAK &amp; GAS</span><h3>Migas Training — Portal pelatihan</h3><p>Referensi portal pelatihan profesional dengan navigasi program, layanan reliability, dan ajakan pendaftaran yang jelas.</p><div className="tech-tags"><span>Portal pelatihan</span><span>Program kursus</span><span>Oil &amp; gas</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://jogprotraining.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogpro Training Center">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jogpro Training Center">
                <Image src="/project-reference-jogpro.png" alt="" aria-hidden="true" width={1457} height={702} />
              </div>
              <div className="project-info"><div><span className="project-category">PELATIHAN · PENGEMBANGAN SDM</span><h3>Jogpro Training Center — Katalog pelatihan</h3><p>Referensi situs training provider dengan pencarian pelatihan, jadwal kelas, dan akses cepat ke pembayaran.</p><div className="tech-tags"><span>Katalog pelatihan</span><span>Jadwal training</span><span>Pencarian</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://angeliaperfume.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Angelia Perfume">
              <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Angelia Perfume">
                <Image src="/project-reference-angelia-perfume.png" alt="" aria-hidden="true" width={1472} height={712} />
              </div>
              <div className="project-info"><div><span className="project-category">TOKO ONLINE | PARFUM</span><h3>Angelia Perfume — Toko parfum online</h3><p>Referensi toko parfum dengan pilihan decant dan full size, katalog merek, pencarian produk, dan alur belanja.</p><div className="tech-tags"><span>Decant &amp; full size</span><span>Katalog parfum</span><span>Pencarian produk</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://hillsisleman.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs HILLSI Sleman">
              <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs HILLSI Sleman">
                <Image src="/project-reference-hillsi-sleman.png" alt="" aria-hidden="true" width={1477} height={715} />
              </div>
              <div className="project-info"><div><span className="project-category">PELATIHAN KERJA | SLEMAN</span><h3>HILLSI Sleman — Platform pelatihan kerja</h3><p>Referensi platform lembaga pelatihan kerja dengan pencarian kelas, kategori pelatihan, dan informasi koordinasi LPK di Kabupaten Sleman.</p><div className="tech-tags"><span>Pencarian pelatihan</span><span>Kategori kelas</span><span>Info LPK</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://jcpdigitaltraining.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs JCP Digital Training">
              <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs JCP Digital Training">
                <Image src="/project-reference-jcp-digital-training.png" alt="" aria-hidden="true" width={1476} height={710} />
              </div>
              <div className="project-info"><div><span className="project-category">EDUKASI | PELATIHAN DIGITAL</span><h3>JCP Digital Training — Platform pelatihan</h3><p>Referensi platform pelatihan dengan pencarian kelas, jadwal, in-house training, galeri kegiatan, dan pendaftaran peserta.</p><div className="tech-tags"><span>Pelatihan digital</span><span>Jadwal kelas</span><span>Pendaftaran online</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://umkmkepuharjo.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs FORKOM UMKM Kepuharjo">
              <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs FORKOM UMKM Kepuharjo">
                <Image src="/project-reference-umkm-kepuharjo.png" alt="" aria-hidden="true" width={1480} height={715} />
              </div>
              <div className="project-info"><div><span className="project-category">UMKM | KATALOG PRODUK</span><h3>FORKOM UMKM Kepuharjo — Direktori UMKM</h3><p>Referensi website komunitas UMKM dengan katalog produk dan layanan lokal, kategori usaha, serta informasi pelaku UMKM Kepuharjo.</p><div className="tech-tags"><span>Katalog produk</span><span>Kategori usaha</span><span>Profil UMKM</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://kagamadigi.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Kagama Digi">
              <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Kagama Digi">
                <Image src="/project-reference-kagama-digi.png" alt="" aria-hidden="true" width={1472} height={712} />
              </div>
              <div className="project-info"><div><span className="project-category">KOMUNITAS DIGITAL | INOVASI</span><h3>Kagama Digi — Website komunitas digital</h3><p>Referensi website komunitas alumni dengan program, dokumentasi kegiatan, struktur pengurus, dan pendaftaran anggota.</p><div className="tech-tags"><span>Komunitas digital</span><span>Program &amp; kegiatan</span><span>Profil pengurus</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://jogjaaisolutions.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogja AI Solutions">
              <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Jogja AI Solutions">
                <Image src="/project-reference-jogja-ai-solutions.png" alt="" aria-hidden="true" width={1462} height={702} />
              </div>
              <div className="project-info"><div><span className="project-category">TEKNOLOGI | SOLUSI AI</span><h3>Jogja AI Solutions — Layanan AI</h3><p>Referensi website layanan AI dengan visual digital yang kuat, ringkasan manfaat, akses ke layanan, dan ajakan konsultasi.</p><div className="tech-tags"><span>Layanan AI</span><span>Produktivitas</span><span>Konsultasi</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://kopkamenwagama.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Koperasi Alumni Menwa UGM">
              <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Koperasi Alumni Menwa UGM">
                <Image src="/project-reference-kopkamenwagama.png" alt="" aria-hidden="true" width={1475} height={710} />
              </div>
              <div className="project-info"><div><span className="project-category">KOPERASI | ALUMNI UGM</span><h3>Kopkamenwagama — Koperasi Alumni Menwa UGM</h3><p>Referensi etalase koperasi untuk menemukan barang dan jasa, dengan pencarian produk, akses layanan, dan pendaftaran anggota.</p><div className="tech-tags"><span>Katalog barang &amp; jasa</span><span>Pemesanan online</span><span>Layanan anggota</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://jeepfuntripmerapi.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jeep Funtrip Merapi">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jeep Funtrip Merapi">
                <Image src="/project-reference-jeepfuntrip.png" alt="" aria-hidden="true" width={1472} height={705} />
              </div>
              <div className="project-info"><div><span className="project-category">WISATA | JELAJAH MERAPI</span><h3>Jeep Funtrip Merapi - Website wisata</h3><p>Referensi website wisata dengan paket jeep, galeri perjalanan, artikel, pilihan destinasi, dan pemesanan melalui WhatsApp.</p><div className="tech-tags"><span>Paket wisata</span><span>Multibahasa</span><span>Booking WhatsApp</span></div><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
          </ProjectCarousel>

        </section>

        <section className="faq-section section" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-layout">
            <div className="faq-intro"><h2 id="faq-title">Pertanyaan,<br /><span>terjawab.</span></h2><p>Ingin tahu lebih banyak tentang proses pembuatan website? Kami siap membantu membahas kebutuhan Anda.</p><a className="text-link" href="#contact">Tanyakan langsung <ArrowUpRight size={16} /></a></div>
            <FAQ />
          </div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-card">
              <div className="contact-intro"><h2 id="contact-title">Siap punya website untuk <span>bisnis Anda?</span></h2><a className="button contact-cta" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer"><svg className="whatsapp-mark" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.2 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.2-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.8 81.2 56.8 130.5-.1 101.8-86.8 184.6-187.3 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-1.9 2.8-4.2 4.2-6.5 1.4-2.3.5-4.4-.2-6.5-.7-2.1-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.1-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.4-5-3.8-10.5-6.6z" /></svg>Konsultasi via WhatsApp <ArrowUpRight size={17} /></a><p>Ceritakan kebutuhan website Anda. Tim JCPWebSolutions siap membantu merencanakannya.</p></div>
              <div className="contact-details-panel">
                <div className="contact-map-wrap">
                  <div className="contact-map-heading">
                    <div className="contact-map-heading-copy">
                      <span className="contact-map-eyebrow">LOKASI KAMI</span>
                      <h3>Jogja Creative Production</h3>
                      <p>Yogyakarta, Indonesia</p>
                    </div>
                    <a className="contact-map-link" href="https://maps.app.goo.gl/dxHBpge1sCeYmigX8" target="_blank" rel="noreferrer">Buka peta <ArrowUpRight size={15} /></a>
                  </div>
                  <div className="contact-map-frame">
                    <span className="contact-map-badge"><MapPin size={14} /> Studio JCPWebSolutions</span>
                    <iframe className="contact-map" title="Peta lokasi Jogja Creative Production" src="https://maps.google.com/maps?q=-7.7304157%2C110.3609453&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <svg className="footer-wave" viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#FFE30F" d="M0 30 C150 4 235 23 350 48 C480 78 570 88 690 65 C815 42 890 14 1010 8 C1125 3 1170 29 1285 23 C1350 19 1395 12 1440 17 L1440 31 C1395 26 1350 33 1285 37 C1170 43 1125 17 1010 22 C890 28 815 56 690 79 C570 102 480 92 350 62 C235 37 150 18 0 44 Z" />
          <path fill="#0047BD" d="M0 44 C150 18 235 37 350 62 C480 92 570 102 690 79 C815 56 890 28 1010 22 C1125 17 1170 43 1285 37 C1350 33 1395 26 1440 31 L1440 45 C1395 40 1350 47 1285 51 C1170 57 1125 31 1010 36 C890 42 815 70 690 93 C570 116 480 106 350 76 C235 51 150 32 0 58 Z" />
          <path fill="#040506" d="M0 58 C150 32 235 51 350 76 C480 106 570 116 690 93 C815 70 890 42 1010 36 C1125 31 1170 57 1285 51 C1350 47 1395 40 1440 45 V190 H0 Z" />
        </svg>
        <div className="wrap">
          <div className="footer-main">
              <div className="footer-brand"><a className="brand" href="#home" aria-label="Beranda JCPWebSolutions"><Image className="brand-logo" src="/logo.png" alt="" width={112} height={70} /><span className="footer-wordmark"><strong>JCP</strong>WebSolutions</span></a><p>Jasa pembuatan website profesional untuk bisnis.</p></div>
            <div className="footer-col"><span>JELAJAHI</span><a href="#services">Layanan</a><a href="#projects">Contoh website</a><a href="#faq">Pertanyaan umum</a></div>
            <div className="footer-col"><span>LAYANAN KAMI</span><a href="#services">Website company profile</a><a href="#services">Landing page</a><a href="#services">Toko online</a><a href="#services">Aplikasi web</a></div>
            <div className="footer-locale"><span>MARI TERHUBUNG</span><p>Ceritakan potensi ide Anda.</p><a className="footer-contact-link" href="mailto:jogjacreativeproduction@gmail.com">jogjacreativeproduction@gmail.com</a><a className="footer-contact-link" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">WhatsApp +62 856-0060-4388</a><a className="footer-contact-link" href="#contact">Mulai percakapan <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} PT Jogja Creative Production</span><span>JASA PEMBUATAN WEBSITE · YOGYAKARTA</span><a href="#home">Kembali ke atas ↑</a></div>
        </div>
      </footer>
    </>
  );
}

