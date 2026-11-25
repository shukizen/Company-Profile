"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Code2, MessageCircle, PanelsTopLeft, Rocket } from "lucide-react";

const workSteps = [
  {
    icon: MessageCircle,
    title: "Diskusi kebutuhan",
    text: "Ceritakan bisnis, tujuan website, konten, serta fitur yang Anda perlukan.",
    output: "Cakupan & tujuan website",
  },
  {
    icon: PanelsTopLeft,
    title: "Struktur & desain",
    text: "Kami menyusun halaman dan tampilan website berdasarkan kebutuhan yang disepakati.",
    output: "Susunan halaman & tampilan",
  },
  {
    icon: Code2,
    title: "Pengembangan website",
    text: "Desain diwujudkan menjadi website responsif, lalu ditinjau bersama sebelum peluncuran.",
    output: "Website responsif siap ditinjau",
  },
  {
    icon: Rocket,
    title: "Peluncuran",
    text: "Website disiapkan untuk tayang dan kami membahas dukungan lanjutan sesuai kebutuhan.",
    output: "Website tayang & siap digunakan",
  },
];

function getTimelineMetrics(
  section: HTMLElement,
  firstNode: HTMLButtonElement,
  lastNode: HTMLButtonElement,
) {
  const vh = window.innerHeight;
  const sectionRect = section.getBoundingClientRect();
  const firstRect = firstNode.getBoundingClientRect();
  const lastRect = lastNode.getBoundingClientRect();
  const firstCenter = firstRect.top + firstRect.height / 2;
  const lastCenter = lastRect.top + lastRect.height / 2;
  const isSticky = window.getComputedStyle(section).position === "sticky";
  const headerEl = document.querySelector<HTMLElement>(".site-header");
  const headerHeight = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 88;

  const startCenterY = vh * 0.56;
  const spanByCards = Math.max(200, lastCenter - firstCenter + (startCenterY - vh * 0.45));
  const endSectionBottom = Math.min(vh, headerHeight + sectionRect.height);
  const spanByBottom = Math.max(
    160,
    startCenterY + (sectionRect.bottom - firstCenter) - (endSectionBottom + 24),
  );
  const totalSpan = isSticky ? Math.min(spanByBottom, spanByCards) : spanByCards;

  return { firstCenter, startCenterY, totalSpan, isSticky, endSectionBottom };
}

export function ProcessWorkflow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rafId = 0;

    const syncTimeline = () => {
      rafId = 0;
      const steps = stepRefs.current.filter((el): el is HTMLLIElement => el !== null);
      const nodes = nodeRefs.current.filter((el): el is HTMLButtonElement => el !== null);
      if (steps.length === 0 || nodes.length === 0) return;

      if (reduceMotionQuery.matches) {
        steps.forEach((step) => {
          step.style.setProperty("--segment-fill", "1");
        });
        return;
      }

      const { firstCenter, startCenterY, totalSpan } = getTimelineMetrics(
        section,
        nodes[0],
        nodes[nodes.length - 1],
      );
      const overallProgress = Math.max(0, Math.min(1, (startCenterY - firstCenter) / totalSpan));
      const segmentCount = Math.max(1, steps.length - 1);
      const scaled = overallProgress * segmentCount;

      let nextActive = 0;
      for (let i = 0; i < steps.length - 1; i++) {
        const fill = Math.max(0, Math.min(1, scaled - i));
        steps[i].style.setProperty("--segment-fill", fill.toFixed(3));
        if (fill >= 0.86) {
          nextActive = i + 1;
        }
      }

      steps[steps.length - 1].style.setProperty("--segment-fill", "0");
      setActiveIndex((prev) => (prev === nextActive ? prev : nextActive));
    };

    const scheduleSync = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(syncTimeline);
    };

    syncTimeline();
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync, { passive: true });
    reduceMotionQuery.addEventListener("change", scheduleSync);

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      reduceMotionQuery.removeEventListener("change", scheduleSync);
    };
  }, []);

  const jumpToStep = (index: number) => {
    const section = sectionRef.current;
    const firstNode = nodeRefs.current[0];
    const lastNode = nodeRefs.current[nodeRefs.current.length - 1];
    if (!section || !firstNode || !lastNode) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { firstCenter, startCenterY, totalSpan, isSticky, endSectionBottom } =
      getTimelineMetrics(section, firstNode, lastNode);
    const ratio = index === 0 ? 0 : index / Math.max(1, workSteps.length - 1);
    const targetFirstCenter = startCenterY - ratio * totalSpan;
    const projectsEl = document.querySelector<HTMLElement>(".projects");
    const stuckOverlap =
      isSticky && projectsEl
        ? Math.max(0, endSectionBottom - projectsEl.getBoundingClientRect().top)
        : 0;
    const deltaY = firstCenter - targetFirstCenter - (ratio < 1 ? stuckOverlap : 0);

    setActiveIndex(index);
    window.scrollBy({
      top: deltaY,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const activeStep = workSteps[activeIndex] ?? workSteps[0];
  const progressRatio = (activeIndex + 1) / workSteps.length;

  return (
    <section
      ref={sectionRef}
      className="process section"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="wrap process-layout">
        <div className="process-aside">
          <div className="process-head-copy">
            <p className="process-eyebrow">
              <span aria-hidden="true" />
              CARA KERJA KAMI
            </p>
            <h2 id="process-title">
              Dari obrolan pertama
              <br />
              sampai <span>siap tayang.</span>
            </h2>
            <p className="process-summary">
              Tahapannya jelas dan Anda terlibat dalam setiap keputusan penting sebelum website diluncurkan.
            </p>
          </div>

          <div className="process-tracker" aria-live="polite">
            <div className="process-tracker-count">
              <strong>0{activeIndex + 1}</strong>
              <span>/ 0{workSteps.length}</span>
            </div>
            <p className="process-tracker-title">{activeStep.title}</p>
            <p className="process-tracker-output">{activeStep.output}</p>
            <div className="process-tracker-bar" aria-hidden="true">
              <span style={{ transform: `scaleX(${progressRatio})` }} />
            </div>
          </div>
        </div>

        <ol className="process-timeline">
          {workSteps.map(({ title, text, output, icon: Icon }, index) => {
            const isActive = index === activeIndex;
            const isPassed = index < activeIndex;
            const stateClass = isActive ? " is-active" : isPassed ? " is-passed" : "";

            return (
              <li
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`process-step${stateClass}`}
                key={title}
              >
                <button
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  type="button"
                  className="process-step-node"
                  aria-label={`Tahap 0${index + 1}: ${title}`}
                  aria-current={isActive ? "step" : undefined}
                  onClick={() => jumpToStep(index)}
                >
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </button>

                <article className="process-step-card">
                  <div className="process-step-head">
                    <h3>{title}</h3>
                    <span className="process-step-num" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="process-step-desc">{text}</p>
                  <p className="process-step-output">
                    <span className="process-step-check" aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{output}</span>
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
