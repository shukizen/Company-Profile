"use client";

import { useEffect } from "react";
import { animate, inView, scroll } from "motion";

const revealSelectors = [
  ".hero-copy > .hero-badge",
  ".hero-copy > h1",
  ".hero-copy > .hero-lede",
  ".hero-copy > .hero-actions",
  ".hero-copy > .hero-assurance",
  ".hero-visual",
  ".section-head-main",
  ".section-summary",
  ".service-card",
  ".project-card",
  ".faq-intro",
  ".faq-item",
  ".contact-intro",
  ".contact-map-wrap",
  ".service-detail-panel",
  ".service-scope-card",
  ".service-prep-card",
  ".service-reference-card",
];

export function ScrollTransitions() {
  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reduceMotion = reduceMotionQuery.matches;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(",")),
    );
    const heroSection = document.querySelector<HTMLElement>(".hero");
    const processSection = document.querySelector<HTMLElement>(".process");
    const headerEl = document.querySelector<HTMLElement>(".site-header");
    const root = document.documentElement;
    const cleanups: VoidFunction[] = [];

    root.classList.add("has-scroll-reveal");

    // Staggered item reveals.
    const groups = new Map<HTMLElement, HTMLElement[]>();
    items.forEach((item) => {
      item.classList.add("scroll-reveal-item");
      const parent = item.parentElement;
      if (!parent) return;
      const siblings = groups.get(parent) ?? [];
      siblings.push(item);
      groups.set(parent, siblings);
    });

    groups.forEach((siblings) => {
      siblings.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 80, 320)}ms`);
      });
    });

    const revealed = new WeakSet<Element>();
    const revealItem = (element: HTMLElement) => {
      if (revealed.has(element)) return;
      revealed.add(element);

      const delay = Number.parseFloat(element.style.getPropertyValue("--reveal-delay")) || 0;
      const controls = animate(
        element,
        reduceMotion ? { opacity: 1 } : { opacity: 1, translate: "0px 0px" },
        {
          duration: reduceMotion ? 0.35 : 0.72,
          delay: delay / 1000,
          ease: [0.22, 1, 0.36, 1],
        },
      );
      cleanups.push(() => controls.stop());
      controls.finished
        .then(() => {
          if (!element.isConnected) return;
          element.classList.remove("scroll-reveal-item");
          element.style.removeProperty("opacity");
          element.style.removeProperty("translate");
          element.style.removeProperty("--reveal-delay");
        })
        .catch(() => {});
    };

    const viewportThreshold = window.innerHeight * 0.96;
    const deferredItems: HTMLElement[] = [];
    items.forEach((item) => {
      if (item.getBoundingClientRect().top < viewportThreshold) {
        revealItem(item);
      } else {
        deferredItems.push(item);
      }
    });

    if (deferredItems.length > 0) {
      cleanups.push(
        inView(
          deferredItems,
          (element) => {
            revealItem(element as HTMLElement);
          },
          { amount: 0.06, margin: "0px 0px -20px 0px" },
        ),
      );
    }

    // Apply sticky stacking only to key focal transitions (Hero -> Services, Process -> Projects).
    const syncStickyOffsets = () => {
      if (reduceMotion || !desktopQuery.matches) {
        root.classList.remove("has-sticky-hero", "has-sticky-process");
        heroSection?.style.removeProperty("--sticky-top");
        processSection?.style.removeProperty("--sticky-top");
        return;
      }

      const vh = window.innerHeight;
      const headerHeight = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 88;

      if (heroSection) {
        const heroHeight = Math.round(heroSection.getBoundingClientRect().height);
        const heroTop = Math.min(0, vh - heroHeight);
        heroSection.style.setProperty("--sticky-top", `${heroTop}px`);
        root.classList.add("has-sticky-hero");
      }

      if (processSection) {
        const processHeight = Math.round(processSection.getBoundingClientRect().height);
        const processTop = Math.min(headerHeight, vh - processHeight);
        processSection.style.setProperty("--sticky-top", `${processTop}px`);
        root.classList.add("has-sticky-process");
      }
    };

    syncStickyOffsets();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(syncStickyOffsets);
      if (heroSection) observer.observe(heroSection);
      if (processSection) observer.observe(processSection);
      cleanups.push(() => observer.disconnect());
    }

    window.addEventListener("resize", syncStickyOffsets, { passive: true });
    desktopQuery.addEventListener("change", syncStickyOffsets);
    cleanups.push(() => {
      window.removeEventListener("resize", syncStickyOffsets);
      desktopQuery.removeEventListener("change", syncStickyOffsets);
    });

    // Focused y-axis parallax on key transition moments without scaling/zoom distortion.
    if (!reduceMotion) {
      const compact = window.matchMedia("(max-width: 767px)").matches;
      const factor = compact ? 0.5 : 1;

      const servicesSection = document.querySelector<HTMLElement>(".services");
      const heroGradient = document.querySelector<HTMLElement>(".hero-gradient");
      const heroCopy = document.querySelector<HTMLElement>(".hero-copy");

      if (servicesSection && heroGradient) {
        cleanups.push(
          scroll(
            animate(
              heroGradient,
              { y: [0, Math.round(44 * factor)] },
              { ease: "linear" },
            ),
            { target: servicesSection, offset: ["start end", "start 88px"] },
          ),
        );
      }

      if (servicesSection && heroCopy) {
        cleanups.push(
          scroll(
            animate(
              heroCopy,
              { y: [0, Math.round(-40 * factor)], opacity: [1, 0.3] },
              { ease: "linear" },
            ),
            { target: servicesSection, offset: ["start end", "start 88px"] },
          ),
        );
      }

      const contactSection = document.querySelector<HTMLElement>(".contact");
      const contactCard = document.querySelector<HTMLElement>(".contact .contact-card");
      if (contactSection && contactCard) {
        cleanups.push(
          scroll(
            animate(
              contactCard,
              { y: [Math.round(22 * factor), 0] },
              { ease: "linear" },
            ),
            { target: contactSection, offset: ["start 95%", "start 50%"] },
          ),
        );
      }
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove("has-scroll-reveal", "has-sticky-hero", "has-sticky-process");
      heroSection?.style.removeProperty("--sticky-top");
      processSection?.style.removeProperty("--sticky-top");
      items.forEach((item) => {
        item.classList.remove("scroll-reveal-item");
        item.style.removeProperty("opacity");
        item.style.removeProperty("translate");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
