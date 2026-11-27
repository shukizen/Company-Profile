"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { WhatsAppMark } from "@/components/whatsapp-mark";
import { getServiceIcon } from "@/lib/service-icons";
import { services } from "@/lib/services";

export function SiteNav({ homePage = true }: { homePage?: boolean }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    const media = window.matchMedia("(max-width: 760px)");
    const updateMedia = () => {
      setIsMobile(media.matches);
      if (media.matches) setServicesOpen(false);
    };

    updateScrolled();
    updateMedia();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    media.addEventListener("change", updateMedia);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      media.removeEventListener("change", updateMedia);
    };
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    const frameId = window.requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const isExpanded = isMobile ? mobileOpen : desktopOpen;
  const isServiceRoute = pathname.startsWith("/layanan/");
  const sectionHref = (section: string) => `${homePage ? "" : "/"}#${section}`;

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleDesktopMouseEnter = () => {
    if (isMobile || !desktopOpen) return;
    clearCloseTimer();
    setServicesOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    if (isMobile) return;
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  const closeAllMenus = () => {
    clearCloseTimer();
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const handleBrandToggle = () => {
    if (window.matchMedia("(max-width: 760px)").matches) {
      setMobileOpen((value) => {
        if (value) setServicesOpen(false);
        return !value;
      });
    } else {
      setDesktopOpen((value) => {
        if (value) setServicesOpen(false);
        return !value;
      });
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
          onClick={() =>
            setMobileOpen((value) => {
              if (value) setServicesOpen(false);
              return !value;
            })
          }
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links${mobileOpen ? " is-open" : ""}`} id="nav-links">
          <a href={sectionHref("home")} onClick={closeAllMenus}>
            Beranda
          </a>

          <div
            className={`nav-dropdown${servicesOpen ? " is-open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={handleDesktopMouseEnter}
            onMouseLeave={handleDesktopMouseLeave}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger${servicesOpen ? " is-open" : ""}${isServiceRoute ? " is-active" : ""}`}
              aria-expanded={servicesOpen}
              aria-controls="nav-services-menu"
              onClick={() => setServicesOpen((value) => !value)}
            >
              <span>Layanan</span>
              <ChevronDown className="nav-dropdown-chevron" size={15} aria-hidden="true" />
            </button>

            <div
              className={`nav-dropdown-panel${servicesOpen ? " is-open" : ""}`}
              id="nav-services-menu"
              hidden={!servicesOpen}
            >
              <div className="nav-dropdown-head">
                <span className="nav-dropdown-label">JELAJAHI LAYANAN</span>
                <a className="nav-dropdown-all" href={sectionHref("services")} onClick={closeAllMenus}>
                  Ringkasan di beranda
                </a>
              </div>
              <div className="nav-dropdown-grid" role="list">
                {services.map((item, index) => {
                  const href = `/layanan/${item.slug}`;
                  const isCurrent = pathname === href;
                  const ItemIcon = getServiceIcon(item.slug);

                  return (
                    <Link
                      key={item.slug}
                      href={href}
                      scroll={false}
                      className={`nav-dropdown-item${isCurrent ? " is-current" : ""}`}
                      aria-current={isCurrent ? "page" : undefined}
                      onClick={(event) => {
                        closeAllMenus();
                        if (isCurrent) {
                          event.preventDefault();
                          if (document.documentElement.classList.contains("lenis-smooth")) {
                            window.dispatchEvent(new CustomEvent("jcp:scroll-by", { detail: { top: -window.scrollY } }));
                          } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }
                      }}
                      role="listitem"
                    >
                      <span className="nav-dropdown-icon" aria-hidden="true">
                        <ItemIcon size={16} strokeWidth={2} />
                      </span>
                      <span className="nav-dropdown-copy">
                        <span className="nav-dropdown-num">0{index + 1}</span>
                        <span className="nav-dropdown-title">{item.title}</span>
                      </span>
                      {isCurrent ? (
                        <span className="nav-dropdown-badge">Aktif</span>
                      ) : (
                        <ArrowRight className="nav-dropdown-arrow" size={14} aria-hidden="true" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <a href={sectionHref("projects")} onClick={closeAllMenus}>
            Contoh Website
          </a>
          <a href={sectionHref("contact")} onClick={closeAllMenus}>
            Kontak
          </a>
          <a className="button button-small" href={sectionHref("contact")} onClick={closeAllMenus}>
            Konsultasi Website <WhatsAppMark className="whatsapp-mark" />
          </a>
        </div>
      </nav>
    </header>
  );
}
