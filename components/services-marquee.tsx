"use client";

import { useEffect, useRef } from "react";

type ServiceItem = {
  title: string;
  description: string;
  examples: string[];
};

export function ServicesMarquee({ services }: { services: ServiceItem[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let frame = 0;
    let previousTime = 0;
    let resumeAt = 0;
    let isDragging = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = prefersReducedMotion ? 8 : 22;

    const markInteraction = () => {
      resumeAt = performance.now() + 1400;
    };
    const onPointerDown = () => {
      isDragging = true;
    };
    const onPointerEnd = () => {
      isDragging = false;
      markInteraction();
    };

    const animate = (time: number) => {
      if (previousTime && !document.hidden && !isDragging && time >= resumeAt) {
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        if (maxScroll > 0 && viewport.scrollLeft >= maxScroll - 1) {
          viewport.scrollLeft = 0;
        } else {
          viewport.scrollLeft = Math.min(maxScroll, viewport.scrollLeft + ((time - previousTime) / 1000) * speed);
        }
      }
      previousTime = time;
      frame = requestAnimationFrame(animate);
    };

    viewport.addEventListener("wheel", markInteraction, { passive: true });
    viewport.addEventListener("keydown", markInteraction);
    viewport.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerEnd);
    window.addEventListener("pointercancel", onPointerEnd);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener("wheel", markInteraction);
      viewport.removeEventListener("keydown", markInteraction);
      viewport.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerEnd);
      window.removeEventListener("pointercancel", onPointerEnd);
    };
  }, []);

  return (
    <div className="service-marquee" ref={viewportRef} role="region" aria-label="Jenis layanan website. Geser untuk melihat layanan lainnya." tabIndex={0}>
      <div className="service-marquee-track">
        {services.map(({ title, description, examples }, index) => (
          <a className={`service-tile service-tile--${index + 1}`} href="#contact" key={title}>
            <div className="service-tile-copy">
              <span className="service-tile-number">0{index + 1} / WEBSITE</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-tile-includes">Cakupan layanan</span>
              <ul className="service-tile-list">
                {examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            </div>
            <span className="service-tile-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
