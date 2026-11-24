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
    <footer className={`footer${homePage ? " footer-home" : ""}`}>
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
