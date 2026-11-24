"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const links = [
  ["Beranda", "home"],
  ["Layanan", "services"],
  ["Contoh Website", "projects"],
  ["Kontak", "contact"],
];

export function SiteNav({ homePage = true }: { homePage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className={`site-header${homePage ? "" : " is-detail"}${scrolled ? " is-scrolled" : ""}`}>
      <nav className={`nav wrap${scrolled ? " is-scrolled" : ""}`} aria-label="Navigasi utama">
        <a className="brand" href={`${homePage ? "" : "/"}#home`} aria-label="Beranda JCPWebSolutions">
          <Image className="brand-logo" src="/logo.png" alt="JCPWebSolutions" width={112} height={70} />
          <span className="brand-wordmark"><strong>JCP</strong>WebSolutions</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links${open ? " is-open" : ""}`} id="nav-links">
          {links.map(([label, section]) => (
            <a key={section} href={`${homePage ? "" : "/"}#${section}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button button-small" href={`${homePage ? "" : "/"}#contact`} onClick={() => setOpen(false)}>
            Konsultasi Website <MessageCircle size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
