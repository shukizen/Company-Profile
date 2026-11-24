import { ChevronDown } from "lucide-react";

const items = [
  {
    question: "Website seperti apa yang bisa dibuat JCPWebSolutions?",
    answer:
      "Kami mengerjakan website company profile, landing page promosi, toko online, booking dan reservasi, website portofolio, hingga website custom. Jenis website serta fiturnya disesuaikan dengan kebutuhan bisnis Anda.",
  },
  {
    question: "Apakah JCPWebSolutions melayani UMKM dan bisnis kecil?",
    answer:
      "Ya. Kami terbuka untuk berdiskusi dengan UMKM, bisnis, organisasi, maupun individu yang membutuhkan website.",
  },
  {
    question: "Bagaimana cara memulai pembuatan website?",
    answer:
      "Hubungi kami melalui WhatsApp dan ceritakan bisnis, tujuan website, serta fitur yang Anda butuhkan. Kami akan membahas cakupan dan langkah selanjutnya bersama Anda.",
  },
  {
    question: "Apakah website dapat dibuka melalui ponsel?",
    answer:
      "Ya. Website dirancang responsif agar tampil dan digunakan dengan nyaman di ponsel, tablet, maupun komputer.",
  },
  {
    question: "Berapa biaya pembuatan website?",
    answer:
      "Biaya bergantung pada jenis website, jumlah halaman, dan fitur yang dibutuhkan. Hubungi kami untuk berdiskusi dan mendapat gambaran biaya sesuai kebutuhan Anda.",
  },
];

export function FAQ() {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.question} open={index === 0}>
          <summary>
            <span className="faq-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="faq-question">{item.question}</span>
            <span className="faq-toggle" aria-hidden="true">
              <ChevronDown className="faq-chevron" size={18} />
            </span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
