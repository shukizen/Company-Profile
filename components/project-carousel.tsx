"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function ProjectCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateButtons = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollLeft(track.scrollLeft > 2);
      setCanScrollRight(track.scrollLeft < maxScrollLeft - 2);
    };

    updateButtons();
    track.addEventListener("scroll", updateButtons, { passive: true });
    const resizeObserver = new ResizeObserver(updateButtons);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateButtons);
      resizeObserver.disconnect();
    };
  }, []);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>(".project-card");
    if (!firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const currentIndex = Math.round(track.scrollLeft / step);
    const targetScrollLeft = Math.max(
      0,
      Math.min(maxScrollLeft, (currentIndex + direction) * step),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: targetScrollLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="project-carousel">
      <div
        className="project-grid"
        role="region"
        aria-label="Contoh website, geser ke kanan untuk melihat semua referensi"
        tabIndex={0}
        ref={trackRef}
      >
        {children}
      </div>
      <div className="project-carousel-control project-carousel-control-previous">
        <button
          className="project-carousel-button"
          type="button"
          aria-label="Geser ke kiri"
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
        >
          <ArrowLeft size={19} aria-hidden="true" />
        </button>
      </div>
      <div className="project-carousel-control project-carousel-control-next">
        <button
          className="project-carousel-button"
          type="button"
          aria-label="Geser ke kanan"
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
        >
          <ArrowRight size={19} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
