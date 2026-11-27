import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppMark } from "@/components/whatsapp-mark";

interface ServiceCtaSectionProps {
  serviceTitle: string;
  slug: string;
}

/** Compact CTA banner on /layanan/[slug] straddling seamlessly from #06245a references into the dark footer. */
export function ServiceCtaSection({ serviceTitle, slug }: ServiceCtaSectionProps) {
  const lowerTitle = serviceTitle.toLowerCase();
  const waMessage = `Halo JCPWebSolutions, saya ingin konsultasi mengenai layanan ${serviceTitle}.`;
  const waHref = `https://wa.me/6285600604388?text=${encodeURIComponent(waMessage)}`;
  const fadeId = `serviceCtaOrbitFade-${slug}`;
  const maskId = `serviceCtaOrbitMask-${slug}`;

  return (
    <section
      className="service-cta-section"
      id="service-cta"
      aria-labelledby="service-cta-title"
    >
      <div className="wrap">
        <div className="service-cta-card">
          <svg
            className="service-cta-orbit"
            viewBox="0 0 900 320"
            preserveAspectRatio="xMaxYMid slice"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id={fadeId} cx="84%" cy="50%" r="58%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <mask id={maskId}>
                <rect width="900" height="320" fill={`url(#${fadeId})`} />
              </mask>
            </defs>
            <g mask={`url(#${maskId})`}>
              <circle cx="760" cy="160" r="110" fill="none" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.2" />
              <circle cx="760" cy="160" r="185" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.2" strokeDasharray="5 8" />
              <circle cx="760" cy="160" r="265" fill="none" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1.2" />
              <circle cx="575" cy="160" r="4" fill="#ffe30f" fillOpacity="0.55" />
            </g>
          </svg>

          <div className="service-cta-copy">
            <p className="service-cta-eyebrow">
              <span aria-hidden="true" />
              KONSULTASI LAYANAN
            </p>
            <h2 id="service-cta-title">
              Siap bangun {lowerTitle} <span>untuk bisnis Anda?</span>
            </h2>
            <p className="service-cta-lead">
              Ceritakan tujuan dan fitur yang dibutuhkan. Tim kami bantu menyusun rancangan halaman dan estimasi pengerjaan yang jelas.
            </p>
          </div>

          <div className="service-cta-actions">
            <a className="service-cta-primary" href={waHref} target="_blank" rel="noreferrer">
              <WhatsAppMark className="whatsapp-mark" />
              <span>Konsultasi via WhatsApp</span>
            </a>
            <Link className="service-cta-secondary" href="/#services">
              <span>Lihat layanan lain</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
