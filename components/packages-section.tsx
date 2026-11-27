import { ArrowRight, Check, Clock3 } from "lucide-react";
import { WhatsAppMark } from "@/components/whatsapp-mark";

interface PackageScheme {
  id: string;
  tag: string;
  title: string;
  badge?: string;
  timeline: string;
  suitableFor: string;
  highlights: readonly string[];
  ctaLabel: string;
  waMessage: string;
  featured?: boolean;
}

const packageSchemes: readonly PackageScheme[] = [
  {
    id: "starter",
    tag: "SKEMA 01 · PROFIL & LANDING",
    title: "Starter Bisnis",
    timeline: "Estimasi ± 5-10 hari kerja",
    suitableFor:
      "Cocok untuk UMKM, company profile perdana, jasa profesional, maupun halaman promo terfokus.",
    highlights: [
      "Desain rapi menyesuaikan identitas usaha (non-template kaku)",
      "1 landing page lengkap atau hingga 5 halaman inti",
      "Tombol WhatsApp, formulir kontak, & sematan Google Maps",
      "Struktur SEO dasar serta optimasi kecepatan muat seluler",
      "Preview terlebih dahulu dan revisi terarah sebelum rilis",
    ],
    ctaLabel: "Konsultasi Skema Starter",
    waMessage:
      "Halo JCPWebSolutions, saya ingin konsultasi mengenai pembuatan website Skema Starter Bisnis.",
  },
  {
    id: "growth",
    tag: "SKEMA 02 · KATALOG & PENJUALAN",
    title: "Pertumbuhan & Toko Online",
    badge: "Paling sering dipilih",
    timeline: "Estimasi ± 2-3 minggu kerja",
    suitableFor:
      "Cocok untuk bisnis berkembang yang butuh katalog produk, toko online, atau sistem reservasi.",
    highlights: [
      "Susunan halaman bertingkat untuk banyak kategori layanan/produk",
      "Katalog produk, filter pencarian, atau alur booking terstruktur",
      "Panel admin ringkas untuk pembaruan konten dan harga secara mandiri",
      "Integrasi checkout WhatsApp, ongkos kirim, atau payment gateway",
      "Pendampingan penyesuaian tampilan hingga website siap digunakan",
    ],
    ctaLabel: "Konsultasi Skema Pertumbuhan",
    waMessage:
      "Halo JCPWebSolutions, saya ingin konsultasi mengenai pembuatan website Skema Pertumbuhan & Toko Online.",
    featured: true,
  },
  {
    id: "custom",
    tag: "SKEMA 03 · SISTEM & WEB CUSTOM",
    title: "Custom & Terintegrasi",
    timeline: "Menyesuaikan ruang lingkup",
    suitableFor:
      "Cocok untuk perusahaan, instansi, atau platform dengan alur kerja khusus dan integrasi sistem.",
    highlights: [
      "Perancangan arsitektur fitur custom mengikuti proses operasional Anda",
      "Dashboard admin, manajemen peran pengguna, atau portal mitra",
      "Integrasi API pihak ketiga, sistem internal, maupun database khusus",
      "Uji coba alur fungsional menyeluruh bersama tim sebelum rilis",
      "Panduan penggunaan sistem & opsi pendampingan pemeliharaan",
    ],
    ctaLabel: "Diskusikan Kebutuhan Custom",
    waMessage:
      "Halo JCPWebSolutions, saya ingin berdiskusi mengenai pembuatan website Skema Custom & Terintegrasi.",
  },
];

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/6285600604388?text=${encodeURIComponent(message)}`;
}

/** Section A2 presenting transparent project schemes aligned with custom scoping. */
export function PackagesSection() {
  return (
    <section
      className="packages section"
      id="packages"
      aria-labelledby="packages-title"
    >
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-main">
            <p className="packages-eyebrow">
              <span aria-hidden="true" />
              GAMBARAN SKEMA WEBSITE
            </p>
            <h2 id="packages-title">
              Pilih skema website
              <br />
              <span>sesuai target bisnis.</span>
            </h2>
          </div>
          <p className="section-summary">
            Setiap bisnis memiliki prioritas berbeda. Gunakan panduan skema berikut untuk memperkirakan ruang lingkup fitur, sementara estimasi biaya dihitung transparan sesuai kebutuhan riil Anda.
          </p>
        </div>

        <div className="package-grid">
          {packageSchemes.map((scheme) => (
            <article
              key={scheme.id}
              className={`package-card${scheme.featured ? " is-featured" : ""}`}
            >
              <div className="package-card-head">
                <div className="package-card-meta">
                  <span className="package-card-tag">{scheme.tag}</span>
                  {scheme.badge ? (
                    <span className="package-card-badge">{scheme.badge}</span>
                  ) : null}
                </div>
                <h3>{scheme.title}</h3>
                <p className="package-card-fit">{scheme.suitableFor}</p>
                <div className="package-card-timeline">
                  <Clock3 size={15} aria-hidden="true" />
                  <span>{scheme.timeline}</span>
                </div>
              </div>

              <div className="package-card-body">
                <p className="package-list-label">Cakupan utama</p>
                <ul className="package-card-list">
                  {scheme.highlights.map((point) => (
                    <li key={point}>
                      <span className="package-check" aria-hidden="true">
                        <Check size={13} strokeWidth={2.6} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                className="package-card-cta"
                href={buildWhatsAppUrl(scheme.waMessage)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppMark className="package-wa-mark" />
                <span>{scheme.ctaLabel}</span>
              </a>
            </article>
          ))}
        </div>

        <div className="packages-note">
          <p>
            Masih menimbang fitur yang diperlukan? Kirim gambaran singkat usaha Anda lewat WhatsApp, tim kami bantu petakan kebutuhan halaman dan estimasi penawarannya secara terbuka.
          </p>
          <a className="packages-note-link" href="#faq">
            <span>Lihat detail pertanyaan biaya &amp; proses</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
