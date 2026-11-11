"use client";

import { useEffect } from "react";
import { animate, inView } from "motion";

const revealSelectors = [
  ".hero-copy > .hero-badge",
  ".hero-copy > h1",
  ".hero-copy > .hero-lede",
  ".hero-copy > .hero-actions",
  ".hero-copy > .hero-assurance",
  ".hero-visual",
  ".intro-layout > div",
  ".advantage",
  ".section-head-main",
  ".section-summary",
  ".service-card",
  ".process-step",
  ".project-card",
  ".faq-intro",
  ".faq-item",
  ".contact-intro",
  ".contact-map-wrap",
];

export function ScrollTransitions() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section, footer.footer"));
    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors.join(",")));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("has-scroll-reveal");
    sections.forEach((section) => section.classList.add("scroll-reveal"));

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
        item.style.setProperty("--reveal-delay", `${Math.min(index * 120, 480)}ms`);
      });
    });

    document
      .querySelector<HTMLElement>(".hero-visual.scroll-reveal-item")
      ?.style.setProperty("--reveal-delay", "560ms");

    const stopWatching = inView(
      [...sections, ...items],
      (element) => {
        if (element.classList.contains("scroll-reveal-item")) {
          const delay = Number.parseFloat(
            (element as HTMLElement).style.getPropertyValue("--reveal-delay"),
          ) || 0;
          animate(
            element,
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, translate: "0px 0px", scale: 1 },
            {
              duration: reduceMotion ? 0.35 : 0.85,
              delay: delay / 1000,
              ease: [0.22, 1, 0.36, 1],
            },
          );
        } else {
          element.classList.add("is-visible");
        }
      },
      { amount: 0.08, margin: "0px 0px -36px 0px" },
    );

    return () => {
      stopWatching();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return null;
}
