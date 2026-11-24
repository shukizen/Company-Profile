import Image from "next/image";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { WhatsAppMark } from "@/components/whatsapp-mark";

const navigationLinks = [
  ["Beranda", "home"],
  ["Layanan", "services"],
  ["Proses pembuatan", "process"],
  ["Referensi website", "projects"],
  ["Pertanyaan umum", "faq"],
  ["Kontak", "contact"],
] as const;

const serviceLinks = [
  ["Company profile", "website-company-profile"],
  ["Landing page promosi", "landing-page-promosi"],
  ["Toko online", "toko-online"],
  ["Booking & reservasi", "booking-reservasi"],
  ["Website portofolio", "website-portofolio"],
  ["Website custom", "website-custom"],
] as const;

export function SiteFooter({ homePage = true }: { homePage?: boolean }) {
  const sectionHref = (section: string) => (homePage ? `#${section}` : `/#${section}`);

  return (
    <footer className="footer">
      <svg className="footer-wave" viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#FFE30F" d="M0 30 C150 4 235 23 350 48 C480 78 570 88 690 65 C815 42 890 14 1010 8 C1125 3 1170 29 1285 23 C1350 19 1395 12 1440 17 L1440 31 C1395 26 1350 33 1285 37 C1170 43 1125 17 1010 22 C890 28 815 56 690 79 C570 102 480 92 350 62 C235 37 150 18 0 44 Z" />
        <path fill="#0047BD" d="M0 44 C150 18 235 37 350 62 C480 92 570 102 690 79 C815 56 890 28 1010 22 C1125 17 1170 43 1285 37 C1350 33 1395 26 1440 31 L1440 45 C1395 40 1350 47 1285 51 C1170 57 1125 31 1010 36 C890 42 815 70 690 93 C570 116 480 106 350 76 C235 51 150 32 0 58 Z" />
        <path fill="#040506" d="M0 58 C150 32 235 51 350 76 C480 106 570 116 690 93 C815 70 890 42 1010 36 C1125 31 1170 57 1285 51 C1350 47 1395 40 1440 45 V190 H0 Z" />
      </svg>
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href={sectionHref("home")} aria-label="Beranda JCPWebSolutions">
              <Image className="brand-logo" src="/logo.png" alt="" width={112} height={70} />
              <span className="footer-wordmark"><strong>JCP</strong>WebSolutions</span>
            </a>
            <p className="footer-tagline">Website untuk kebutuhan dan tujuan bisnis Anda, dirancang bersama tim Jogja Creative Production di Yogyakarta.</p>
            <a className="footer-location-link" href="https://maps.app.goo.gl/dxHBpge1sCeYmigX8" target="_blank" rel="noreferrer">
              <MapPin size={15} aria-hidden="true" />
              <span>Yogyakarta, Indonesia</span>
            </a>
          </div>
          <div className="footer-col">
            <span className="footer-heading" id="footer-nav-heading">
              NAVIGASI
            </span>
            <nav className="footer-nav" aria-labelledby="footer-nav-heading">
              {navigationLinks.map(([label, section]) => (
                <a href={sectionHref(section)} key={section}>{label}</a>
              ))}
            </nav>
          </div>
          <div className="footer-col">
            <span className="footer-heading" id="footer-services-heading">
              JENIS WEBSITE
            </span>
            <nav className="footer-nav" aria-labelledby="footer-services-heading">
              {serviceLinks.map(([label, slug]) => (
                <a href={`/layanan/${slug}`} key={slug}>{label}</a>
              ))}
            </nav>
          </div>
          <div className="footer-locale">
            <span className="footer-heading">
              HUBUNGI KAMI
            </span>
            <p className="footer-locale-lead">Diskusikan kebutuhan website Anda bersama tim kami.</p>
            <div className="footer-contact-list">
              <a className="footer-contact-link" href="https://wa.me/6285600604388" target="_blank" rel="noreferrer">
                <span className="footer-contact-icon" aria-hidden="true">
                  <WhatsAppMark className="whatsapp-mark" />
                </span>
                <span className="footer-contact-copy">
                  <span className="footer-contact-label">WhatsApp</span>
                  <span className="footer-contact-value">+62 856-0060-4388</span>
                </span>
              </a>
              <a className="footer-contact-link" href="mailto:jogjacreativeproduction@gmail.com">
                <span className="footer-contact-icon" aria-hidden="true">
                  <Mail size={16} />
                </span>
                <span className="footer-contact-copy">
                  <span className="footer-contact-label">Email</span>
                  <span className="footer-contact-value">jogjacreativeproduction@gmail.com</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <a className="footer-signoff" href={sectionHref("home")} aria-label="Beranda JCPWebSolutions">
          <Image className="footer-signoff-logo" src="/logo.png" alt="" width={112} height={70} />
          <span className="footer-signoff-wordmark"><strong>JCP</strong>WebSolutions</span>
        </a>
        <div className="footer-bottom">
          <span className="footer-meta">JCPWebSolutions · Jogja Creative Production, Yogyakarta</span>
          <a className="footer-top-link" href={sectionHref("home")}>
            <span>Kembali ke atas</span>
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
