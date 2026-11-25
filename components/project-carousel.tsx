"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

const AUTO_ADVANCE_MS = 2400;
const RESUME_AFTER_PAUSE_MS = 900;
const TOUCH_PAUSE_MS = 1400;

export function ProjectCarousel({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const interactionPauseTimerRef = useRef<number | null>(null);
  const wasPausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [totalCards, setTotalCards] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPausedByHover, setIsPausedByHover] = useState(false);
  const [isPausedByFocus, setIsPausedByFocus] = useState(false);
  const [isPausedByTouch, setIsPausedByTouch] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const getTrackMetrics = useCallback(() => {
    const track = trackRef.current;
    if (!track) return null;

    const cards = track.querySelectorAll<HTMLElement>(".project-card");
    const count = cards.length;
    if (count === 0) return null;

    const firstCard = cards[0];
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    const paddingInline =
      (Number.parseFloat(styles.paddingLeft) || 0) +
      (Number.parseFloat(styles.paddingRight) || 0);
    const innerWidth = Math.max(0, track.clientWidth - paddingInline);
    const step = firstCard.getBoundingClientRect().width + gap;
    const visible = step > 0 ? Math.max(1, Math.min(count, Math.round((innerWidth + gap) / step))) : 1;
    const maxIndex = Math.max(0, count - visible);
    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);

    return { track, count, step, visible, maxIndex, maxScrollLeft };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setPrefersReducedMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateState = () => {
      const metrics = getTrackMetrics();
      if (!metrics) return;

      const { count, step, visible, maxIndex, maxScrollLeft } = metrics;
      setTotalCards(count);
      setVisibleCount(visible);

      const idx = step > 0 ? Math.min(maxIndex, Math.max(0, Math.round(track.scrollLeft / step))) : 0;
      setActiveIndex(idx);

      if (maxScrollLeft <= 2) {
        setProgress(100);
      } else {
        const minPct = Math.max(10, Math.round((visible / count) * 100));
        const ratio = track.scrollLeft / maxScrollLeft;
        setProgress(Math.min(100, Math.round(minPct + ratio * (100 - minPct))));
      }
    };

    updateState();
    track.addEventListener("scroll", updateState, { passive: true });
    const resizeObserver = new ResizeObserver(updateState);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateState);
      resizeObserver.disconnect();
    };
  }, [getTrackMetrics]);

  const scrollStep = useCallback(
    (direction: -1 | 1, wrap = true) => {
      const metrics = getTrackMetrics();
      if (!metrics) return;

      const { track, step, maxIndex, maxScrollLeft } = metrics;
      if (maxIndex === 0 || step <= 0) return;

      const currentIndex = Math.min(maxIndex, Math.max(0, Math.round(track.scrollLeft / step)));
      let targetIndex = currentIndex + direction;

      if (wrap) {
        if (targetIndex > maxIndex) targetIndex = 0;
        else if (targetIndex < 0) targetIndex = maxIndex;
      } else {
        targetIndex = Math.max(0, Math.min(maxIndex, targetIndex));
      }

      const targetScrollLeft = Math.min(maxScrollLeft, targetIndex * step);
      track.scrollTo({
        left: targetScrollLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [getTrackMetrics, prefersReducedMotion],
  );

  useEffect(() => {
    const isPaused =
      prefersReducedMotion || isPausedByHover || isPausedByFocus || isPausedByTouch || !isInView;

    if (isPaused) {
      if (isPausedByHover || isPausedByFocus || isPausedByTouch) {
        wasPausedRef.current = true;
      }
      return;
    }

    let intervalId: number | null = null;
    let resumeTimerId: number | null = null;

    if (wasPausedRef.current) {
      wasPausedRef.current = false;
      resumeTimerId = window.setTimeout(() => {
        scrollStep(1, true);
        intervalId = window.setInterval(() => {
          scrollStep(1, true);
        }, AUTO_ADVANCE_MS);
      }, RESUME_AFTER_PAUSE_MS);
    } else {
      intervalId = window.setInterval(() => {
        scrollStep(1, true);
      }, AUTO_ADVANCE_MS);
    }

    return () => {
      if (resumeTimerId !== null) window.clearTimeout(resumeTimerId);
      if (intervalId !== null) window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion, isPausedByHover, isPausedByFocus, isPausedByTouch, isInView, scrollStep]);

  useEffect(() => {
    return () => {
      if (interactionPauseTimerRef.current !== null) {
        window.clearTimeout(interactionPauseTimerRef.current);
      }
    };
  }, []);

  const handleTouchPause = () => {
    setIsPausedByTouch(true);
    if (interactionPauseTimerRef.current !== null) {
      window.clearTimeout(interactionPauseTimerRef.current);
    }
    interactionPauseTimerRef.current = window.setTimeout(() => {
      setIsPausedByTouch(false);
    }, TOUCH_PAUSE_MS);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollStep(-1, true);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollStep(1, true);
    }
  };

  const total = totalCards || 20;
  const start = Math.min(activeIndex + 1, total);
  const end = Math.min(total, activeIndex + visibleCount);
  const startLabel = String(start).padStart(2, "0");
  const endLabel = String(end).padStart(2, "0");
  const rangeLabel = end > start ? `${startLabel}-${endLabel}` : startLabel;
  const totalLabel = String(total).padStart(2, "0");
  const canNavigate = total > visibleCount;

  return (
    <div
      className="project-carousel"
      ref={rootRef}
      onMouseEnter={() => setIsPausedByHover(true)}
      onMouseLeave={() => setIsPausedByHover(false)}
      onFocus={(event) => {
        if (event.target.matches(":focus-visible")) {
          setIsPausedByFocus(true);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPausedByFocus(false);
        }
      }}
      onTouchStart={handleTouchPause}
    >
      <div
        className="project-grid"
        role="region"
        aria-label="Contoh website, bergerak otomatis satu per satu atau gunakan tombol panah untuk navigasi"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={trackRef}
      >
        {children}
      </div>
      <div className="project-carousel-bar wrap">
        <div className="project-carousel-status">
          <span className="project-carousel-counter" aria-live="polite">
            <strong>{rangeLabel}</strong>
            <span aria-hidden="true">/</span>
            <span>{totalLabel} referensi</span>
          </span>
          <div className="project-carousel-progress" aria-hidden="true">
            <span className="project-carousel-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="project-carousel-controls">
          <button
            className="project-carousel-button"
            type="button"
            aria-label="Geser referensi ke kiri"
            onClick={() => scrollStep(-1, true)}
            disabled={!canNavigate}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            className="project-carousel-button"
            type="button"
            aria-label="Geser referensi ke kanan"
            onClick={() => scrollStep(1, true)}
            disabled={!canNavigate}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
