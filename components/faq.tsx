import { ChevronDown } from "lucide-react";

const items = [
  {
    question: "Website seperti apa yang bisa dibuat JCP?",
    answer:
      "Kami mengerjakan website company profile, landing page, toko online, dan aplikasi web. Jenis website serta fitur akan disesuaikan dengan kebutuhan bisnis Anda.",
  },
  {
    question: "Apakah JCP melayani UMKM dan bisnis kecil?",
    answer:
      "Ya. Kami terbuka untuk berdiskusi dengan UMKM, bisnis, organisasi, maupun individu yang membutuhkan website.",
  },
  {
    question: "Bagaimana cara memulai pembuatan website?",
    answer:
      "Hubungi kami melalui WhatsApp dan ceritakan bisnis, tujuan website, dan fitur yang Anda butuhkan. Kami akan membahas cakupan dan langkah selanjutnya bersama Anda.",
  },
  {
    question: "Apakah website dapat dibuka melalui ponsel?",
    answer:
      "Ya. Website dirancang responsif agar tampil dan digunakan dengan nyaman di ponsel, tablet, dan komputer.",
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
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <ChevronDown className="faq-chevron" size={19} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
