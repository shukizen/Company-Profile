"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Beranda", "#home"],
  ["Tentang", "#about"],
  ["Layanan", "#services"],
  ["Contoh Website", "#projects"],
  ["Kontak", "#contact"],
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className={`nav wrap${scrolled ? " is-scrolled" : ""}`} aria-label="Navigasi utama">
        <Link className="brand" href="#home" aria-label="Beranda JCP">
          <Image
            src="/jcp-logo.svg"
            alt="JCP — Jogja Creative Production"
            width={124}
            height={74}
            priority
          />
        </Link>
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
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="button button-small" href="#contact" onClick={() => setOpen(false)}>
            Konsultasi website <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
