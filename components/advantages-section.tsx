import {
  Gauge,
  Layers,
  MessageSquareMore,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Desain sesuai karakter bisnis",
    description:
      "Struktur halaman, warna, dan alur informasi disusun mengikuti kebutuhan usaha Anda, bukan memakai template yang terasa seragam.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Cepat dibuka di HP maupun desktop",
    description:
      "Tata letak responsif untuk berbagai ukuran layar dengan optimasi aset agar calon pelanggan nyaman membaca tanpa menunggu lama.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Struktur rapi dan ramah mesin pencari",
    description:
      "Hierarki heading, metadata halaman, dan susunan konten disiapkan sejak awal agar website mudah ditemukan lewat pencarian Google.",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "Terhubung langsung ke WhatsApp",
    description:
      "Tombol konsultasi, formulir pesan, dan tautan lokasi diarahkan langsung ke saluran komunikasi tim Anda agar prospek tidak terlewat.",
    icon: MessageSquareMore,
  },
  {
    number: "05",
    title: "Tinjau dan revisi sebelum tayang",
    description:
      "Anda dapat memeriksa preview website lebih dulu untuk menyelaraskan teks, foto, dan detail tampilan sebelum rilis resmi.",
    icon: RefreshCw,
  },
  {
    number: "06",
    title: "Akses domain dan pengelolaan jelas",
    description:
      "Kepemilikan domain, akun hosting, dan akses pembaruan konten diserahkan secara transparan dengan dukungan tim dari Yogyakarta.",
    icon: ShieldCheck,
  },
] as const;

/** Section A1 showcasing core quality guarantees and practical delivery standards. */
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
            return (
              <article className="advantage-card" key={item.number}>
                <div className="advantage-card-top">
                  <span className="advantage-card-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={2.1} />
                  </span>
                  <span className="advantage-card-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
