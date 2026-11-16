import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Lightbulb,
  MapPin,
  PanelsTopLeft,
  MessageCircle,
  Rocket,
  Target,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { Copper } from "@/components/copper";
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
    title: "Aplikasi Web Khusus",
    description: "Sistem berbasis web yang dibangun mengikuti proses kerja dan kebutuhan operasional bisnis Anda.",
    examples: ["Dashboard dan laporan", "Sistem pemesanan", "Portal pelanggan", "Aplikasi internal"],
  },
  {
    title: "Website Portofolio",
    description: "Website untuk menampilkan karya, keahlian, dan pengalaman profesional secara menarik dan mudah diakses.",
    examples: ["Galeri proyek", "Profil dan keahlian", "Testimoni klien", "Kontak profesional"],
  },
  {
    title: "Website Booking & Reservasi",
    description: "Website yang memudahkan pelanggan melihat ketersediaan layanan dan mengajukan pemesanan secara online.",
    examples: ["Jadwal dan ketersediaan", "Form pemesanan", "Konfirmasi reservasi", "Informasi layanan"],
  },
];

const advantages = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Berangkat dari Kebutuhan",
    text: "Setiap website dirancang berdasarkan tujuan, kebutuhan, dan karakter bisnis Anda.",
  },
  {
    number: "02",
    icon: Target,
    title: "Optimal di Semua Perangkat",
    text: "Tampilan responsif yang memberikan pengalaman nyaman di smartphone, tablet, maupun desktop.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Informasi Lebih Terstruktur",
    text: "Konten dan navigasi disusun secara intuitif agar pengunjung mudah memahami bisnis Anda.",
  },
  {
    number: "04",
    icon: Check,
    title: "Pendampingan Profesional",
    text: "Kami mendampingi proses pengembangan hingga website siap diluncurkan sesuai kesepakatan.",
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
    alternateName: "JCP — Jasa Pembuatan Website",
    url: siteUrl,
    logo: `${siteUrl}/jcp-logo.svg`,
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
          <Copper className="hero-gradient" />
          <div className="hero-copy">
            <h1 id="hero-title">Jasa pembuatan website<br /><span>untuk bisnis yang berkembang.</span></h1>
            <p className="hero-lede">JCP merancang company profile, landing page, toko online, dan aplikasi web yang sesuai dengan tujuan bisnis Anda.</p>
            <div className="hero-actions">
              <Link className="button" href="#contact">Ceritakan kebutuhan Anda <ArrowUpRight size={17} /></Link>
              <Link className="text-link" href="#projects">Lihat contoh website <ArrowDown size={16} /></Link>
            </div>
            <div className="hero-assurance"><span><Check size={14} /> Desain sesuai bisnis</span><span><Check size={14} /> Responsif di semua perangkat</span><span><Check size={14} /> Dari desain hingga siap tayang</span></div>
          </div>
        </section>

        <section className="intro section wrap" id="about" aria-labelledby="intro-title">
          <div className="intro-layout">
            <div><h2 id="intro-title">Website membantu bisnis <span>lebih dikenal dan dipercaya.</span></h2></div>
            <div className="intro-copy">
              <p>Website menjadi pusat informasi resmi bisnis Anda. Calon pelanggan dapat mengenal usaha, memahami layanan atau produk, melihat keunggulan, dan menemukan cara menghubungi Anda kapan saja.</p>
              <p>Kami merancang website untuk membangun kredibilitas, menjangkau calon pelanggan lebih luas, dan membuka peluang bisnis. Setiap halaman disusun sesuai tujuan Anda—mulai dari company profile dan landing page hingga toko online dan aplikasi web.</p>
              <a className="text-link" href="#services">Pilih layanan website <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="advantage-grid" id="why-jcp" role="group" aria-label="Prinsip kerja JCP">
            {advantages.map(({ number, icon: Icon, title, text }) => (
              <article className="advantage" key={title}><span className="advantage-number">{number}</span><span className="advantage-icon"><Icon size={21} strokeWidth={1.6} /></span><h3>{title}</h3><p>{text}</p></article>
            ))}
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
          <div className="project-grid">
            <a className="project-card" href="https://innoasisstay.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Inn Oasis Accommodation">
              <div className="project-art project-art-reference" aria-label="Referensi halaman utama Inn Oasis Accommodation" role="img">
                <Image src="/project-reference-innoasis.webp" alt="" aria-hidden="true" width={1200} height={800} />
                <span className="concept-label">SITUS REFERENSI · INN OASIS</span>
              </div>
              <div className="project-info"><div><span className="project-category">AKOMODASI · RESERVASI</span><h3>Inn Oasis — Website akomodasi</h3><p>Referensi website penginapan dengan pencarian properti, pilihan kamar, dukungan dua bahasa, dan ajakan untuk bertanya.</p><div className="tech-tags"><span>Pencarian properti</span><span>Multibahasa</span><span>Reservasi</span></div><span className="text-link">Kunjungi website <ArrowUpRight size={16} /></span></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
            </a>
            <a className="project-card" href="https://jogjacreativepro.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogja Creative Production">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jogja Creative Production">
                <Image src="/project-reference-jcp.png" alt="" aria-hidden="true" width={1467} height={713} />
              </div>
              <div className="project-info"><div><span className="project-category">PRODUKSI VISUAL · BRANDING</span><h3>Jogja Creative Production — Company profile</h3><p>Referensi company profile kreatif dengan tipografi ekspresif, visual cahaya sinematik, dan navigasi yang ringkas.</p><div className="tech-tags"><span>Company profile</span><span>Visual production</span><span>Branding</span></div><span className="text-link">Kunjungi website <ArrowUpRight size={16} /></span></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
            </a>
            <a className="project-card" href="https://jeepfuntripmerapi.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jeep Funtrip Merapi">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jeep Funtrip Merapi">
                <Image src="/project-reference-jeepfuntrip.png" alt="" aria-hidden="true" width={1472} height={705} />
              </div>
              <div className="project-info"><div><span className="project-category">WISATA | JELAJAH MERAPI</span><h3>Jeep Funtrip Merapi - Website wisata</h3><p>Referensi website wisata dengan paket jeep, galeri perjalanan, artikel, pilihan destinasi, dan pemesanan melalui WhatsApp.</p><div className="tech-tags"><span>Paket wisata</span><span>Multibahasa</span><span>Booking WhatsApp</span></div><span className="text-link">Kunjungi website <ArrowUpRight size={16} /></span></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
            </a>
            <a className="project-card" href="https://pelatihandronejogja.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Indonesia Drone Training Center">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Indonesia Drone Training Center">
                <Image src="/project-reference-idtc.png" alt="" aria-hidden="true" width={1377} height={701} />
              </div>
              <div className="project-info"><div><span className="project-category">PELATIHAN | TEKNOLOGI DRONE</span><h3>IDTC - Pusat pelatihan drone</h3><p>Referensi website pelatihan drone profesional yang menampilkan program keselamatan penerbangan, fotogrametri dan pemetaan, serta dokumentasi udara di Yogyakarta.</p><div className="tech-tags"><span>Pelatihan drone</span><span>Fotogrametri</span><span>Dokumentasi udara</span></div><span className="text-link">Kunjungi website <ArrowUpRight size={16} /></span></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
            </a>
          </div>
          <details className="project-more">
            <summary className="project-more-toggle">
              <span className="project-more-label project-more-label-closed">Lihat semua referensi</span>
              <span className="project-more-label project-more-label-open">Tutup referensi</span>
              <ArrowDown size={16} aria-hidden="true" />
            </summary>
            <div className="project-grid project-grid-extra">
              <a className="project-card" href="https://migastraining.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Migas Training">
                <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Migas Training">
                  <Image src="/project-reference-migas.png" alt="" aria-hidden="true" width={1458} height={713} />
                </div>
                <div className="project-info"><div><span className="project-category">PELATIHAN · MINYAK &amp; GAS</span><h3>Migas Training — Portal pelatihan</h3><p>Referensi portal pelatihan profesional dengan navigasi program, layanan reliability, dan ajakan pendaftaran yang jelas.</p><div className="tech-tags"><span>Portal pelatihan</span><span>Program kursus</span><span>Oil &amp; gas</span></div><span className="text-link">Kunjungi website <ArrowUpRight size={16} /></span></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
              </a>
              <a className="project-card" href="https://jogprotraining.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogpro Training Center">
                <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jogpro Training Center">
                  <Image src="/project-reference-jogpro.png" alt="" aria-hidden="true" width={1457} height={702} />
                </div>
                <div className="project-info"><div><span className="project-category">PELATIHAN · PENGEMBANGAN SDM</span><h3>Jogpro Training Center — Katalog pelatihan</h3><p>Referensi situs training provider dengan pencarian pelatihan, jadwal kelas, dan akses cepat ke pembayaran.</p><div className="tech-tags"><span>Katalog pelatihan</span><span>Jadwal training</span><span>Pencarian</span></div><span className="text-link">Kunjungi website <ArrowUpRight size={16} /></span></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
              </a>
            </div>
          </details>
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
              <div className="contact-intro"><h2 id="contact-title">Siap punya website untuk <span>bisnis Anda?</span></h2><a className="button contact-cta" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">Konsultasi via WhatsApp <ArrowUpRight size={17} /></a><p>Ceritakan kebutuhan website Anda. Tim JCP siap membantu merencanakannya.</p></div>
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
                    <span className="contact-map-badge"><MapPin size={14} /> Studio JCP</span>
                    <iframe className="contact-map" title="Peta lokasi Jogja Creative Production" src="https://maps.google.com/maps?q=-7.7304157%2C110.3609453&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-main">
            <div className="footer-brand"><Link href="#home" aria-label="Beranda JCP"><Image src="/jcp-logo.svg" alt="JCP — Jogja Creative Production" width={124} height={74} /></Link><p>Jasa pembuatan website profesional untuk bisnis.</p></div>
            <div className="footer-col"><span>JELAJAHI</span><Link href="#about">Tentang JCP</Link><Link href="#services">Layanan</Link><Link href="#projects">Contoh website</Link><Link href="#faq">Pertanyaan umum</Link></div>
            <div className="footer-col"><span>LAYANAN KAMI</span><Link href="#services">Website company profile</Link><Link href="#services">Landing page</Link><Link href="#services">Toko online</Link><Link href="#services">Aplikasi web</Link></div>
            <div className="footer-locale"><span>MARI TERHUBUNG</span><p>Ceritakan potensi ide Anda.</p><a className="footer-contact-link" href="mailto:jogjacreativeproduction@gmail.com">jogjacreativeproduction@gmail.com</a><a className="footer-contact-link" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">WhatsApp +62 856-0060-4388</a><Link className="footer-contact-link" href="#contact">Mulai percakapan <ArrowUpRight size={15} /></Link></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} PT Jogja Creative Production</span><span>JASA PEMBUATAN WEBSITE · YOGYAKARTA</span><Link href="#home">Kembali ke atas ↑</Link></div>
        </div>
      </footer>
    </>
  );
}

