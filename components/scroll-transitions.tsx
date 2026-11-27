"use client";

import { useEffect } from "react";
import Lenis from "lenis";
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
  ".advantage-card",
  ".package-card",
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
    const guideSection = document.querySelector<HTMLElement>(".service-guide-section");
    const headerEl = document.querySelector<HTMLElement>(".site-header");
    const root = document.documentElement;
    const cleanups: VoidFunction[] = [];

    let lenis: Lenis | null = null;
    if (!reduceMotion) {
      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 1,
        autoRaf: true,
        anchors: { offset: -88 },
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      });

      const handleScrollBy = (event: Event) => {
        const customEvent = event as CustomEvent<{ top?: number }>;
        const deltaY = customEvent.detail?.top;
        if (!lenis || typeof deltaY !== "number" || Number.isNaN(deltaY)) return;
        lenis.scrollTo(window.scrollY + deltaY, { lerp: 0.09 });
      };

      window.addEventListener("jcp:scroll-by", handleScrollBy);
      cleanups.push(() => {
        window.removeEventListener("jcp:scroll-by", handleScrollBy);
        lenis?.destroy();
        lenis = null;
      });
    }

    root.classList.add("has-scroll-reveal");

    // Staggered item reveals.
    const groups = new Map<HTMLElement, HTMLElement[]>();
    items.forEach((item) => {
      item.classList.add("scroll-reveal-item");
      const groupRoot = item.closest<HTMLElement>(".service-reference-grid") ?? item.parentElement;
      if (!groupRoot) return;
      const siblings = groups.get(groupRoot) ?? [];
      siblings.push(item);
      groups.set(groupRoot, siblings);
    });

    groups.forEach((siblings) => {
      siblings.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
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
          duration: reduceMotion ? 0.35 : 0.85,
          delay: delay / 1000,
          ease: [0.16, 1, 0.3, 1],
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
          { amount: 0.04, margin: "0px 0px -36px 0px" },
        ),
      );
    }

    // Apply sticky stacking only to key focal transitions (Hero -> Services, Process -> Projects, Guide -> References).
    const syncStickyOffsets = () => {
      if (reduceMotion || !desktopQuery.matches) {
        root.classList.remove("has-sticky-hero", "has-sticky-process", "has-sticky-service-guide");
        heroSection?.style.removeProperty("--sticky-top");
        processSection?.style.removeProperty("--sticky-top");
        guideSection?.style.removeProperty("--sticky-top");
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

      if (guideSection) {
        const guideHeight = Math.round(guideSection.getBoundingClientRect().height);
        const guideTop = Math.min(headerHeight, vh - guideHeight);
        guideSection.style.setProperty("--sticky-top", `${guideTop}px`);
        root.classList.add("has-sticky-service-guide");
      }

      lenis?.resize();
    };

    syncStickyOffsets();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(syncStickyOffsets);
      if (heroSection) observer.observe(heroSection);
      if (processSection) observer.observe(processSection);
      if (guideSection) observer.observe(guideSection);
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

      const projectsSection = document.querySelector<HTMLElement>(".projects");
      const projectsSurface = document.querySelector<HTMLElement>(".projects .projects-surface");
      if (projectsSection && projectsSurface) {
        const insetX = compact ? 14 : 28;
        const insetRadius = compact ? 28 : 44;
        cleanups.push(
          scroll(
            animate(
              projectsSurface,
              {
                clipPath: [
                  `inset(0px ${insetX}px 0px ${insetX}px round ${insetRadius}px)`,
                  "inset(0px 0px 0px 0px round 0px)",
                ],
                scale: [compact ? 0.985 : 0.98, 1],
              },
              { ease: "linear" },
            ),
            { target: projectsSection, offset: ["start 94%", "start 24%"] },
          ),
          () => {
            projectsSurface.style.removeProperty("clip-path");
            projectsSurface.style.removeProperty("transform");
          },
        );
      }

      const contactSection = document.querySelector<HTMLElement>(".contact");
      const contactCard = document.querySelector<HTMLElement>(".contact .contact-card");
      if (contactSection && contactCard) {
        cleanups.push(
          scroll(
            animate(
              contactCard,
              {
                y: [Math.round(24 * factor), 0],
                scale: [compact ? 0.985 : 0.97, 1],
                opacity: [0.85, 1],
              },
              { ease: "linear" },
            ),
            { target: contactSection, offset: ["start 96%", "start 46%"] },
          ),
          () => {
            contactCard.style.removeProperty("transform");
            contactCard.style.removeProperty("opacity");
          },
        );
      }

      const referenceSection = document.querySelector<HTMLElement>(".service-reference-section");
      const referenceGlow = document.querySelector<HTMLElement>(".service-reference-glow");
      const referenceHeading = document.querySelector<HTMLElement>(".service-reference-heading");
      const referenceSlots = Array.from(document.querySelectorAll<HTMLElement>(".service-reference-slot"));

      if (referenceSection && referenceGlow) {
        cleanups.push(
          scroll(
            animate(
              referenceGlow,
              { y: [Math.round(-36 * factor), Math.round(44 * factor)] },
              { ease: "linear" },
            ),
            { target: referenceSection, offset: ["start end", "end start"] },
          ),
        );
      }

      if (referenceSection && referenceHeading) {
        cleanups.push(
          scroll(
            animate(
              referenceHeading,
              { y: [Math.round(28 * factor), 0] },
              { ease: "linear" },
            ),
            { target: referenceSection, offset: ["start 96%", "start 32%"] },
          ),
        );
      }

      if (referenceSection && referenceSlots.length > 0) {
        const tabletQuery = window.matchMedia("(min-width: 641px) and (max-width: 1023px)");
        const wideQuery = window.matchMedia("(min-width: 1024px)");
        let slotStops: VoidFunction[] = [];

        const bindReferenceSlots = () => {
          slotStops.forEach((stop) => stop());
          slotStops = [];
          referenceSlots.forEach((slot) => slot.style.removeProperty("transform"));

          const cols = wideQuery.matches ? 3 : tabletQuery.matches ? 2 : 1;
          if (cols === 1) return;

          referenceSlots.forEach((slot, index) => {
            const col = index % cols;
            const range =
              cols === 3
                ? col === 1
                  ? [28, -22]
                  : [10, -8]
                : col === 1
                  ? [16, -12]
                  : [6, -4];

            slotStops.push(
              scroll(
                animate(slot, { y: range }, { ease: "linear" }),
                { target: referenceSection, offset: ["start end", "end start"] },
              ),
            );
          });
        };

        bindReferenceSlots();
        tabletQuery.addEventListener("change", bindReferenceSlots);
        wideQuery.addEventListener("change", bindReferenceSlots);
        cleanups.push(() => {
          slotStops.forEach((stop) => stop());
          tabletQuery.removeEventListener("change", bindReferenceSlots);
          wideQuery.removeEventListener("change", bindReferenceSlots);
          referenceSlots.forEach((slot) => slot.style.removeProperty("transform"));
        });
      }
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove(
        "has-scroll-reveal",
        "has-sticky-hero",
        "has-sticky-process",
        "has-sticky-service-guide",
      );
      heroSection?.style.removeProperty("--sticky-top");
      processSection?.style.removeProperty("--sticky-top");
      guideSection?.style.removeProperty("--sticky-top");
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
