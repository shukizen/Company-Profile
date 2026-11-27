import Image from "next/image";
import {
  ArrowDown,
  Check,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { AdvantagesSection } from "@/components/advantages-section";
import { Mercury } from "@/components/mercury";
import { PackagesSection } from "@/components/packages-section";
import { ProcessWorkflow } from "@/components/process-workflow";
import { ProjectCarousel } from "@/components/project-carousel";
import { ScrollTransitions } from "@/components/scroll-transitions";
import { ServiceMarquee } from "@/components/service-marquee";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ServicesGrid } from "@/components/services-grid";
import { WhatsAppMark } from "@/components/whatsapp-mark";
import { services } from "@/lib/services";

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
      <div id="home" className="scroll-top-anchor" aria-hidden="true" />
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <SiteNav />
      <ScrollTransitions />
      {organizationSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationSchema }} />}
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <Mercury className="hero-gradient" />
          <div className="hero-copy">
            <h1 id="hero-title">Website Bisnis Anda<br /><span>Lebih Berkembang</span></h1>
            <p className="hero-lede">JCPWebSolutions merancang company profile, landing page, toko online, dan aplikasi web yang sesuai dengan tujuan bisnis Anda.</p>
            <ul className="hero-assurance" aria-label="Keunggulan layanan">
              <li>
                <span className="hero-assurance-icon" aria-hidden="true"><Check size={13} strokeWidth={2.75} /></span>
                <span>Desain sesuai bisnis</span>
              </li>
              <li>
                <span className="hero-assurance-icon" aria-hidden="true"><Check size={13} strokeWidth={2.75} /></span>
                <span>Responsif di semua perangkat</span>
              </li>
              <li>
                <span className="hero-assurance-icon" aria-hidden="true"><Check size={13} strokeWidth={2.75} /></span>
                <span>Dari desain hingga siap tayang</span>
              </li>
            </ul>
            <div className="hero-actions">
              <a className="hero-cta-primary" href="#projects">
                <span>Lihat contoh website</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="services section" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head-main"><p className="services-eyebrow"><span aria-hidden="true" />PILIH JENIS WEBSITE</p><h2 id="services-title">Jasa pembuatan website<br /><span>untuk kebutuhan Anda.</span></h2></div>
              <p className="section-summary">Pilih kartu untuk melihat fitur dan cakupan layanan yang paling sesuai dengan kebutuhan bisnis Anda.</p>
            </div>
            <ServicesGrid services={services} />
          </div>
        </section>

        <ServiceMarquee />

        <AdvantagesSection />

        <ProcessWorkflow />

        <section className="projects section" id="projects" aria-labelledby="projects-title">
          <div className="projects-surface">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head-main"><p className="projects-eyebrow"><span aria-hidden="true" />REFERENSI WEBSITE</p><h2 id="projects-title">Lihat inspirasi website<br /><span>untuk bisnis Anda.</span></h2></div>
                <p className="section-summary">Contoh situs nyata ini menunjukkan berbagai arah desain. Struktur, fitur, dan tampilannya dapat menjadi inspirasi yang disesuaikan dengan kebutuhan bisnis Anda.</p>
              </div>
            </div>
            <ProjectCarousel>
              <a className="project-card" href="https://innoasisstay.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Inn Oasis Accommodation">
                <div className="project-art project-art-reference" aria-label="Referensi halaman utama Inn Oasis Accommodation" role="img">
                  <Image src="/project-reference-innoasis.webp" alt="" aria-hidden="true" width={1200} height={800} />
                  <span className="concept-label">WEBSITE REFERENSI · INN OASIS</span>
                </div>
                <div className="project-info"><div><span className="project-category">AKOMODASI · RESERVASI</span><h3>Inn Oasis: Website akomodasi</h3><p>Referensi website penginapan dengan pencarian properti, pilihan kamar, dukungan dua bahasa, dan ajakan untuk bertanya.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://jogjacreativepro.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogja Creative Production">
                <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jogja Creative Production">
                  <Image src="/project-reference-jcp.png" alt="" aria-hidden="true" width={1467} height={713} />
                  <span className="concept-label">WEBSITE REFERENSI · JOGJA CREATIVE PRODUCTION</span>
                </div>
                <div className="project-info"><div><span className="project-category">PRODUKSI VISUAL · BRANDING</span><h3>Jogja Creative Production: Company profile</h3><p>Referensi company profile kreatif dengan tipografi ekspresif, visual cahaya sinematik, dan navigasi yang ringkas.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://pelatihandronejogja.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Indonesia Drone Training Center">
                <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Indonesia Drone Training Center">
                  <Image src="/project-reference-idtc.png" alt="" aria-hidden="true" width={1377} height={701} />
                  <span className="concept-label">WEBSITE REFERENSI · IDTC</span>
                </div>
                <div className="project-info"><div><span className="project-category">PELATIHAN | TEKNOLOGI DRONE</span><h3>IDTC: Pusat pelatihan drone</h3><p>Referensi website pelatihan drone profesional yang menampilkan program keselamatan penerbangan, fotogrametri dan pemetaan, serta dokumentasi udara di Yogyakarta.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://migastraining.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Migas Training">
                <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Migas Training">
                  <Image src="/project-reference-migas.png" alt="" aria-hidden="true" width={1458} height={713} />
                  <span className="concept-label">WEBSITE REFERENSI · MIGAS TRAINING</span>
                </div>
                <div className="project-info"><div><span className="project-category">PELATIHAN · MINYAK &amp; GAS</span><h3>Migas Training: Portal pelatihan</h3><p>Referensi portal pelatihan profesional dengan navigasi program, layanan reliability, dan ajakan pendaftaran yang jelas.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://jogprotraining.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogpro Training Center">
                <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jogpro Training Center">
                  <Image src="/project-reference-jogpro.png" alt="" aria-hidden="true" width={1457} height={702} />
                  <span className="concept-label">WEBSITE REFERENSI · JOGPRO TRAINING CENTER</span>
                </div>
                <div className="project-info"><div><span className="project-category">PELATIHAN · PENGEMBANGAN SDM</span><h3>Jogpro Training Center: Katalog pelatihan</h3><p>Referensi situs training provider dengan pencarian pelatihan, jadwal kelas, dan akses cepat ke pembayaran.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://angeliaperfume.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Angelia Perfume">
                <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Angelia Perfume">
                  <Image src="/project-reference-angelia-perfume.png" alt="" aria-hidden="true" width={1472} height={712} />
                  <span className="concept-label">WEBSITE REFERENSI · ANGELIA PERFUME</span>
                </div>
                <div className="project-info"><div><span className="project-category">TOKO ONLINE | PARFUM</span><h3>Angelia Perfume: Toko parfum online</h3><p>Referensi toko parfum dengan pilihan decant dan full size, katalog merek, pencarian produk, dan alur belanja.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://hillsisleman.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs HILLSI Sleman">
                <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs HILLSI Sleman">
                  <Image src="/project-reference-hillsi-sleman.png" alt="" aria-hidden="true" width={1477} height={715} />
                  <span className="concept-label">WEBSITE REFERENSI · HILLSI SLEMAN</span>
                </div>
                <div className="project-info"><div><span className="project-category">PELATIHAN KERJA | SLEMAN</span><h3>HILLSI Sleman: Platform pelatihan kerja</h3><p>Referensi platform lembaga pelatihan kerja dengan pencarian kelas, kategori pelatihan, dan informasi koordinasi LPK di Kabupaten Sleman.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://jcpdigitaltraining.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs JCP Digital Training">
                <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs JCP Digital Training">
                  <Image src="/project-reference-jcp-digital-training.png" alt="" aria-hidden="true" width={1476} height={710} />
                  <span className="concept-label">WEBSITE REFERENSI · JCP DIGITAL TRAINING</span>
                </div>
                <div className="project-info"><div><span className="project-category">EDUKASI | PELATIHAN DIGITAL</span><h3>JCP Digital Training: Platform pelatihan</h3><p>Referensi platform pelatihan dengan pencarian kelas, jadwal, in-house training, galeri kegiatan, dan pendaftaran peserta.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://umkmkepuharjo.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs FORKOM UMKM Kepuharjo">
                <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs FORKOM UMKM Kepuharjo">
                  <Image src="/project-reference-umkm-kepuharjo.png" alt="" aria-hidden="true" width={1480} height={715} />
                  <span className="concept-label">WEBSITE REFERENSI · FORKOM UMKM KEPUHARJO</span>
                </div>
                <div className="project-info"><div><span className="project-category">UMKM | KATALOG PRODUK</span><h3>FORKOM UMKM Kepuharjo: Direktori UMKM</h3><p>Referensi website komunitas UMKM dengan katalog produk dan layanan lokal, kategori usaha, serta informasi pelaku UMKM Kepuharjo.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://kagamadigi.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Kagama Digi">
                <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Kagama Digi">
                  <Image src="/project-reference-kagama-digi.png" alt="" aria-hidden="true" width={1472} height={712} />
                  <span className="concept-label">WEBSITE REFERENSI · KAGAMA DIGI</span>
                </div>
                <div className="project-info"><div><span className="project-category">KOMUNITAS DIGITAL | INOVASI</span><h3>Kagama Digi: Website komunitas digital</h3><p>Referensi website komunitas alumni dengan program, dokumentasi kegiatan, struktur pengurus, dan pendaftaran anggota.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://jogjaaisolutions.my.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jogja AI Solutions">
                <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Jogja AI Solutions">
                  <Image src="/project-reference-jogja-ai-solutions.png" alt="" aria-hidden="true" width={1462} height={702} />
                  <span className="concept-label">WEBSITE REFERENSI · JOGJA AI SOLUTIONS</span>
                </div>
                <div className="project-info"><div><span className="project-category">TEKNOLOGI | SOLUSI AI</span><h3>Jogja AI Solutions: Layanan AI</h3><p>Referensi website layanan AI dengan visual digital yang kuat, ringkasan manfaat, akses ke layanan, dan ajakan konsultasi.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://kopkamenwagama.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Koperasi Alumni Menwa UGM">
                <div className="project-art project-art-reference" role="img" aria-label="Pratinjau situs Koperasi Alumni Menwa UGM">
                  <Image src="/project-reference-kopkamenwagama.png" alt="" aria-hidden="true" width={1475} height={710} />
                  <span className="concept-label">WEBSITE REFERENSI · KOPKAMENWAGAMA</span>
                </div>
                <div className="project-info"><div><span className="project-category">KOPERASI | ALUMNI UGM</span><h3>Kopkamenwagama: Koperasi Alumni Menwa UGM</h3><p>Referensi etalase koperasi untuk menemukan barang dan jasa, dengan pencarian produk, akses layanan, dan pendaftaran anggota.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
              <a className="project-card" href="https://jeepfuntripmerapi.duckdns.org/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Jeep Funtrip Merapi">
                <div className="project-art project-art-reference" role="img" aria-label="Screenshot beranda Jeep Funtrip Merapi">
                  <Image src="/project-reference-jeepfuntrip.png" alt="" aria-hidden="true" width={1472} height={705} />
                  <span className="concept-label">WEBSITE REFERENSI · JEEP FUNTRIP MERAPI</span>
                </div>
                <div className="project-info"><div><span className="project-category">WISATA | JELAJAH MERAPI</span><h3>Jeep Funtrip Merapi: Website wisata</h3><p>Referensi website wisata dengan paket jeep, galeri perjalanan, artikel, pilihan destinasi, dan pemesanan melalui WhatsApp.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
              </a>
            <a className="project-card" href="https://www.telkom.co.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Telkom Indonesia">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot halaman utama Telkom Indonesia">
                <Image src="/project-reference-telkom.png" alt="" aria-hidden="true" width={1481} height={761} />
                <span className="concept-label">WEBSITE REFERENSI · TELKOM INDONESIA</span>
              </div>
              <div className="project-info"><div><span className="project-category">COMPANY PROFILE · TELEKOMUNIKASI</span><h3>Telkom Indonesia: Company profile</h3><p>Referensi situs korporat dengan hero visual yang dominan, navigasi ke profil dan lini bisnis, serta akses ke informasi investor, berita, dan karier.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://erigostore.co.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Erigo Official Store">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot halaman promosi Erigo Official Store">
                <Image src="/project-reference-erigo.png" alt="" aria-hidden="true" width={1470} height={760} />
                <span className="concept-label">WEBSITE REFERENSI · ERIGO</span>
              </div>
              <div className="project-info"><div><span className="project-category">LANDING PAGE · FASHION</span><h3>Erigo: Landing page promosi</h3><p>Referensi halaman promosi fashion dengan banner koleksi dan tombol belanja, dilanjutkan promo toko, produk baru, serta opsi pickup in store.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://www.eigeradventure.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Eiger Adventure Official">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot halaman utama Eiger Adventure Official">
                <Image src="/project-reference-eiger.png" alt="" aria-hidden="true" width={1474} height={760} />
                <span className="concept-label">WEBSITE REFERENSI · EIGER ADVENTURE</span>
              </div>
              <div className="project-info"><div><span className="project-category">TOKO ONLINE · PERLENGKAPAN OUTDOOR</span><h3>Eiger Adventure: Toko online</h3><p>Referensi toko online dengan kategori perlengkapan, banner koleksi unggulan, promo, dan akses ke katalog produk outdoor.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://declan.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Declan Kulinari Nusantara">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot website Declan Kulinari Nusantara">
                <Image src="/project-reference-declan.png" alt="" aria-hidden="true" width={1461} height={754} />
                <span className="concept-label">WEBSITE REFERENSI · DECLAN</span>
              </div>
              <div className="project-info"><div><span className="project-category">WEBSITE BOOKING &amp; RESERVASI · RESTORAN</span><h3>Declan Kulinari Nusantara: Booking restoran</h3><p>Referensi website restoran dengan menu, galeri, pilihan bahasa, serta akses untuk memesan menu dan melakukan reservasi meja.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://www.baleayu.com/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs Bale Ayu Resto">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot halaman utama Bale Ayu Resto">
                <Image src="/project-reference-baleayu.png" alt="" aria-hidden="true" width={1472} height={762} />
                <span className="concept-label">WEBSITE REFERENSI · BALE AYU</span>
              </div>
              <div className="project-info"><div><span className="project-category">WEBSITE CUSTOM · KULINER</span><h3>Bale Ayu: Website custom restoran</h3><p>Referensi website restoran dengan karakter visual khas, menu keluarga, reservasi meja, pemesanan online, dan pengalaman digital untuk keluarga.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://drh.co.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi situs DRH.co.id">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot halaman utama DRH.co.id">
                <Image src="/project-reference-drh.png" alt="" aria-hidden="true" width={1458} height={754} />
                <span className="concept-label">WEBSITE REFERENSI · DRH.CO.ID</span>
              </div>
              <div className="project-info"><div><span className="project-category">WEBSITE CUSTOM · LAYANAN HEWAN</span><h3>DRH.co.id: Platform dokter hewan</h3><p>Referensi platform layanan hewan dengan pencarian dokter, tanya-jawab keluhan, dan pengingat perawatan melalui WhatsApp.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            <a className="project-card" href="https://achfarizy.biz.id/" target="_blank" rel="noreferrer" aria-label="Kunjungi portofolio Achmad Farizy">
              <div className="project-art project-art-reference" role="img" aria-label="Screenshot portofolio Achmad Farizy">
                <Image src="/project-reference-achmad-farizy.png" alt="" aria-hidden="true" width={1472} height={760} />
                <span className="concept-label">WEBSITE REFERENSI · ACHMAD FARIZY</span>
              </div>
              <div className="project-info"><div><span className="project-category">WEBSITE PORTOFOLIO · DEVELOPER</span><h3>Achmad Farizy: Website portofolio</h3><p>Referensi portofolio personal dengan perkenalan singkat, proyek pilihan, informasi jasa, dan ajakan untuk menghubungi pemiliknya.</p><span className="text-link">Kunjungi website <Globe size={15} /></span></div><span className="project-arrow"><ExternalLink size={18} /></span></div>
            </a>
            </ProjectCarousel>
          </div>
        </section>

        <PackagesSection />

        <section className="faq-section section" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-layout">
            <div className="faq-intro">
              <p className="faq-eyebrow"><span aria-hidden="true" />PERTANYAAN UMUM</p>
              <h2 id="faq-title">Pertanyaan,<br /><span>terjawab.</span></h2>
              <p className="faq-lead">Masih ada hal yang ingin ditanyakan tentang proses, waktu pengerjaan, atau kebutuhan website Anda? Tim kami siap membantu membahasnya.</p>
              <a className="faq-cta" href="#contact">
                <WhatsAppMark className="faq-whatsapp-mark" />
                <span>Tanyakan langsung</span>
              </a>
            </div>
            <FAQ />
          </div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <div className="contact-surface">
            <div className="wrap">
              <div className="contact-card">
                <svg
                  className="contact-orbit-art"
                  viewBox="0 0 1200 600"
                  preserveAspectRatio="xMaxYMid slice"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="contactOrbitFade" cx="74%" cy="50%" r="62%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="70%" stopColor="#ffffff" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    <mask id="contactOrbitMask">
                      <rect width="1200" height="600" fill="url(#contactOrbitFade)" />
                    </mask>
                  </defs>
                  <g mask="url(#contactOrbitMask)">
                    <line x1="890" y1="0" x2="890" y2="600" stroke="#9ec0ff" strokeOpacity="0.08" strokeWidth="1" />
                    <line x1="200" y1="300" x2="1200" y2="300" stroke="#9ec0ff" strokeOpacity="0.08" strokeWidth="1" />
                    <circle cx="890" cy="300" r="165" fill="none" stroke="#9ec0ff" strokeOpacity="0.11" strokeWidth="1.2" />
                    <circle
                      className="contact-orbit-ring-slow"
                      cx="890"
                      cy="300"
                      r="260"
                      fill="none"
                      stroke="#ffffff"
                      strokeOpacity="0.1"
                      strokeWidth="1.2"
                      strokeDasharray="6 9"
                    />
                    <circle cx="890" cy="300" r="365" fill="none" stroke="#9ec0ff" strokeOpacity="0.085" strokeWidth="1.2" />
                    <circle
                      className="contact-orbit-ring-slow is-reverse"
                      cx="890"
                      cy="300"
                      r="480"
                      fill="none"
                      stroke="#ffffff"
                      strokeOpacity="0.065"
                      strokeWidth="1.2"
                      strokeDasharray="3 10"
                    />
                    <circle cx="890" cy="300" r="600" fill="none" stroke="#9ec0ff" strokeOpacity="0.05" strokeWidth="1.2" />
                    <circle cx="525" cy="300" r="4.5" fill="#ffe30f" fillOpacity="0.45" />
                    <circle cx="525" cy="300" r="11" fill="none" stroke="#ffe30f" strokeOpacity="0.22" strokeWidth="1.2" />
                    <circle cx="670" cy="161" r="3.5" fill="#7cb3ff" fillOpacity="0.42" />
                    <circle cx="598" cy="519" r="4" fill="#ffe30f" fillOpacity="0.34" />
                  </g>
                </svg>
                <div className="contact-intro">
                  <p className="contact-eyebrow"><span aria-hidden="true" />HUBUNGI KAMI</p>
                  <h2 id="contact-title">Siap punya website untuk <span>bisnis Anda?</span></h2>
                  <p className="contact-lead">Ceritakan kebutuhan website Anda. Tim JCPWebSolutions siap membantu merencanakannya dari struktur hingga siap tayang.</p>
                  <div className="contact-actions">
                    <a className="button contact-cta" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">
                      <WhatsAppMark className="whatsapp-mark" />
                      <span>Konsultasi via WhatsApp</span>
                    </a>
                  </div>
                  <div className="contact-channels" aria-label="Saluran kontak langsung">
                    <a className="contact-channel" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">
                      <span className="contact-channel-icon" aria-hidden="true"><WhatsAppMark className="whatsapp-mark" /></span>
                      <span className="contact-channel-copy">
                        <span className="contact-channel-label">WhatsApp</span>
                        <span className="contact-channel-value">+62 856-0060-4388</span>
                      </span>
                    </a>
                    <a className="contact-channel" href="mailto:jogjacreativeproduction@gmail.com">
                      <span className="contact-channel-icon" aria-hidden="true"><Mail size={18} /></span>
                      <span className="contact-channel-copy">
                        <span className="contact-channel-label">Email</span>
                        <span className="contact-channel-value">jogjacreativeproduction@gmail.com</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="contact-details-panel">
                  <div className="contact-map-wrap">
                    <div className="contact-map-heading">
                      <div className="contact-map-heading-copy">
                        <span className="contact-map-eyebrow">LOKASI STUDIO</span>
                        <h3>Jogja Creative Production</h3>
                        <p><MapPin size={14} aria-hidden="true" /> Yogyakarta, Indonesia</p>
                      </div>
                      <a className="contact-map-link" href="https://maps.app.goo.gl/dxHBpge1sCeYmigX8" target="_blank" rel="noreferrer">
                        Buka peta
                      </a>
                    </div>
                    <div className="contact-map-frame">
                      <iframe
                        className="contact-map"
                        title="Peta lokasi Jogja Creative Production"
                        src="https://maps.google.com/maps?q=-7.7304157%2C110.3609453&z=16&output=embed"
                        width={600}
                        height={360}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

