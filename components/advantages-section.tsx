import {
  Check,
  Gauge,
  Layers,
  MessageSquareMore,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type AdvantageVariant = "primary" | "accent" | "standard" | "wide";

interface AdvantageItem {
  number: string;
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant: AdvantageVariant;
  chips?: readonly string[];
}

const advantages: readonly AdvantageItem[] = [
  {
    number: "01",
    tag: "Fokus Utama",
    title: "Desain sesuai karakter bisnis",
    description:
      "Struktur halaman, warna, dan alur informasi disusun mengikuti karakter usaha Anda, bukan memakai template kaku yang terasa seragam di berbagai sektor.",
    icon: Layers,
    variant: "primary",
    chips: ["Tata letak custom", "Selaras identitas brand", "Fokus pesan bisnis"],
  },
  {
    number: "02",
    tag: "Performa Seluler",
    title: "Cepat dibuka di HP maupun desktop",
    description:
      "Tata letak responsif di berbagai ukuran layar dengan optimasi aset supaya calon pelanggan nyaman membaca tanpa menunggu lama.",
    icon: Gauge,
    variant: "accent",
  },
  {
    number: "03",
    tag: "SEO Dasar",
    title: "Struktur rapi dan ramah mesin pencari",
    description:
      "Hierarki heading, metadata halaman, dan susunan konten disiapkan sejak awal agar website mudah dipahami oleh Google.",
    icon: SearchCheck,
    variant: "standard",
  },
  {
    number: "04",
    tag: "Konversi Cepat",
    title: "Terhubung langsung ke WhatsApp",
    description:
      "Tombol konsultasi, formulir pesan, dan tautan lokasi diarahkan langsung ke kontak tim Anda supaya prospek tidak terlewat.",
    icon: MessageSquareMore,
    variant: "standard",
  },
  {
    number: "05",
    tag: "Kontrol Kualitas",
    title: "Tinjau dan revisi sebelum tayang",
    description:
      "Anda memeriksa preview website terlebih dahulu untuk menyelaraskan teks, foto, dan detail tampilan sebelum domain resmi dirilis.",
    icon: RefreshCw,
    variant: "standard",
  },
  {
    number: "06",
    tag: "Kepemilikan Jelas",
    title: "Akses domain dan pengelolaan milik Anda",
    description:
      "Kepemilikan domain, akun hosting, dan akses pengelolaan konten diserahkan secara transparan dengan pendampingan tim aktif dari Yogyakarta.",
    icon: ShieldCheck,
    variant: "wide",
    chips: [
      "Domain atas nama klien",
      "Akses hosting transparan",
      "Dukungan tim Yogyakarta",
    ],
  },
];

/** Section A1 presented as an asymmetric Bento Grid for visual variety between uniform card sections. */
export function AdvantagesSection() {
  return (
    <section
      className="advantages section"
      id="advantages"
      aria-labelledby="advantages-title"
    >
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-main">
            <p className="advantages-eyebrow">
              <span aria-hidden="true" />
              KEUNGGULAN KERJA
            </p>
            <h2 id="advantages-title">
              Dibangun rapi, bukan
              <br />
              <span>sekadar jadi.</span>
            </h2>
          </div>
          <p className="section-summary">
            Setiap website kami kerjakan dengan fokus pada kejelasan pesan bisnis, kenyamanan pengunjung di ponsel, serta kesiapan pakai untuk jangka panjang.
          </p>
        </div>

        <div className="advantage-grid">
          {advantages.map((item) => {
            const Icon = item.icon;
            const variantClass =
              item.variant === "standard" ? "" : ` is-${item.variant}`;

            return (
              <article
                className={`advantage-card${variantClass}`}
                key={item.number}
              >
                <span className="advantage-card-number" aria-hidden="true">
                  {item.number}
                </span>
                <div className="advantage-card-main">
                  <div className="advantage-card-top">
                    <div className="advantage-card-identity">
                      <span className="advantage-card-icon" aria-hidden="true">
                        <Icon size={20} strokeWidth={2.1} />
                      </span>
                      <span className="advantage-card-tag">{item.tag}</span>
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {item.chips && item.chips.length > 0 ? (
                  <ul className="advantage-chips" aria-label="Poin kunci">
                    {item.chips.map((chip) => (
                      <li key={chip}>
                        <Check size={13} strokeWidth={2.6} aria-hidden="true" />
                        <span>{chip}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
