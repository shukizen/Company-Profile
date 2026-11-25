"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppMark } from "@/components/whatsapp-mark";

const links = [
  ["Beranda", "home"],
  ["Layanan", "services"],
  ["Contoh Website", "projects"],
  ["Kontak", "contact"],
];

export function SiteNav({ homePage = true }: { homePage?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    const media = window.matchMedia("(max-width: 760px)");
    const updateMedia = () => setIsMobile(media.matches);

    updateScrolled();
    updateMedia();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    media.addEventListener("change", updateMedia);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      media.removeEventListener("change", updateMedia);
    };
  }, []);

  const isExpanded = isMobile ? mobileOpen : desktopOpen;

  const handleBrandToggle = () => {
    if (window.matchMedia("(max-width: 760px)").matches) {
      setMobileOpen((value) => !value);
    } else {
      setDesktopOpen((value) => !value);
    }
  };

  return (
    <header
      className={`site-header${homePage ? "" : " is-detail"}${scrolled ? " is-scrolled" : ""}${desktopOpen ? "" : " is-collapsed"}`}
    >
      <nav
        className={`nav wrap${scrolled ? " is-scrolled" : ""}${desktopOpen ? "" : " is-collapsed"}`}
        aria-label="Navigasi utama"
      >
        <button
          className="brand brand-toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls="nav-links"
          aria-label={isExpanded ? "Tutup menu navigasi" : "Buka menu navigasi"}
          title={isExpanded ? "Klik untuk tutup navbar" : "Klik untuk buka navbar"}
          onClick={handleBrandToggle}
        >
          <Image className="brand-logo" src="/logo.png" alt="" width={112} height={70} />
          <span className="brand-wordmark">
            <strong>JCP</strong>WebSolutions
          </span>
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="nav-links"
          aria-label={mobileOpen ? "Tutup navigasi" : "Buka navigasi"}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links${mobileOpen ? " is-open" : ""}`} id="nav-links">
          {links.map(([label, section]) => (
            <a
              key={section}
              href={`${homePage ? "" : "/"}#${section}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="button button-small"
            href={`${homePage ? "" : "/"}#contact`}
            onClick={() => setMobileOpen(false)}
          >
            Konsultasi Website <WhatsAppMark className="whatsapp-mark" />
          </a>
        </div>
      </nav>
    </header>
  );
}
