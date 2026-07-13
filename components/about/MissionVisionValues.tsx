"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    icon: "target",
    tagline: "Our Purpose",
    content: (
      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
        To provide reliable, innovative, and result-oriented services in education consultancy,
        international admissions, job placements, tourism, event management, and institutional
        support — while creating meaningful opportunities for growth and success.
      </p>
    ),
  },
  {
    id: "vision",
    label: "Vision",
    icon: "visibility",
    tagline: "Where We're Headed",
    content: (
      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
        To become a trusted and globally recognized organization that empowers individuals,
        educational institutions, and businesses through quality education solutions, career
        opportunities, and professional services.
      </p>
    ),
  },
  {
    id: "values",
    label: "Values",
    icon: "diversity_3",
    tagline: "What We Stand For",
    content: (
      <ul className="space-y-3">
        {["Integrity", "Excellence & Innovation", "Trust & Respect", "Social Responsibility"].map((v) => (
          <li key={v} className="flex items-center gap-3 text-on-surface-variant text-sm md:text-base">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            {v}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "objectives",
    label: "Objectives",
    icon: "flag",
    tagline: "Our Goals",
    content: (
      <ul className="space-y-2.5">
        {[
          "To provide expert guidance and support in education and career development.",
          "To help students access quality international education opportunities.",
          "To connect skilled candidates with suitable employment opportunities.",
          "To support schools and colleges with effective marketing.",
          "To deliver professional event management and tourism services.",
          "To build long-term partnerships globally.",
          "To create sustainable opportunities for learning, employment, and growth.",
        ].map((obj, i) => (
          <li key={i} className="flex gap-2.5 items-start text-on-surface-variant text-xs md:text-sm leading-snug">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {obj}
          </li>
        ))}
      </ul>
    ),
  },
];

const SCROLL_PER_TAB = 380;
const TOTAL_SCROLL = SCROLL_PER_TAB * (tabs.length + 0.8);
const RADIUS = 18;
const CIRC = 2 * Math.PI * RADIUS;

function getTransform(pos: number) {
  const abs = Math.abs(pos);
  return {
    x: pos * 280,
    y: abs * 60 + abs * abs * 10,
    rotate: pos * 13,
    scale: abs === 0 ? 1 : Math.max(0.58, 1 - abs * 0.19),
    opacity: abs === 0 ? 1 : Math.max(0.15, 1 - abs * 0.38),
    zIndex: 20 - Math.round(abs * 4),
    blur: abs > 1,
  };
}

/* ── Pill indicator shared between mobile + desktop ── */
function PillIndicator({
  activeIndex,
  progress,
  sectionRef,
}: {
  activeIndex: number;
  progress: number;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="flex items-center gap-2 bg-surface rounded-full px-4 py-2.5 border border-outline-variant shadow-sm">
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex;
        const isDone = i < activeIndex;
        const ringProg = isActive ? progress : isDone ? 1 : 0;
        return (
          <button
            key={tab.id}
            onClick={() => {
              if (!sectionRef.current) return;
              const top =
                sectionRef.current.getBoundingClientRect().top +
                window.scrollY +
                i * SCROLL_PER_TAB +
                1;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="relative flex items-center justify-center"
            style={{ width: 40, height: 40 }}
            title={tab.label}
          >
            <svg className="absolute inset-0 -rotate-90" width={40} height={40} viewBox="0 0 40 40">
              <circle cx={20} cy={20} r={RADIUS} fill="none" stroke="var(--color-outline-variant)" strokeWidth={2} />
              <motion.circle
                cx={20} cy={20} r={RADIUS}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray={CIRC}
                animate={{ strokeDashoffset: CIRC * (1 - ringProg) }}
                transition={{ duration: 0 }}
              />
            </svg>
            <motion.div
              className="rounded-full"
              animate={{
                width: isActive ? 14 : 8,
                height: isActive ? 14 : 8,
                backgroundColor: isActive || isDone ? "var(--color-primary)" : "var(--color-outline)",
                opacity: isActive || isDone ? 1 : 0.35,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function MissionVisionValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, Math.min(-rect.top, TOTAL_SCROLL));
      const rawIndex = scrolled / SCROLL_PER_TAB;
      const tabIndex = Math.min(Math.floor(rawIndex), tabs.length - 1);
      const tabProgress =
        tabIndex === tabs.length - 1
          ? Math.min((scrolled - tabIndex * SCROLL_PER_TAB) / SCROLL_PER_TAB, 1)
          : (scrolled % SCROLL_PER_TAB) / SCROLL_PER_TAB;
      setActiveIndex(tabIndex);
      setProgress(tabProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)` }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-container-low px-4 md:px-0">

        {/* Header */}
        <div className="text-center mb-6 z-10 shrink-0">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] text-xs block mb-2">
            Our Foundations
          </span>
          <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface">
            Driving the Future
          </h2>
        </div>

        {/* ══ MOBILE: single full-width card ══ */}
        {isMobile ? (
          <div className="w-full max-w-sm mx-auto z-10 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border-2 border-primary/40 rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Card header */}
                <div className="px-5 pt-5 pb-4 border-b border-outline-variant/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {tabs[activeIndex].icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                      {tabs[activeIndex].tagline}
                    </p>
                    <p className="font-bold text-base text-primary">Our {tabs[activeIndex].label}</p>
                  </div>
                </div>
                {/* Content */}
                <div className="px-5 py-4">
                  {tabs[activeIndex].content}
                </div>
                {/* Progress */}
                <div className="px-5 pb-4">
                  <div className="h-1 bg-outline-variant rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary origin-left rounded-full"
                      style={{ scaleX: progress }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* ══ DESKTOP: 3D Arc Fan ══ */
          <div
            className="relative flex items-end justify-center w-full shrink-0 z-10"
            style={{ height: 560, perspective: "1400px" }}
          >
            {tabs.map((tab, i) => {
              const pos = i - activeIndex;
              const t = getTransform(pos);
              const isActive = pos === 0;

              return (
                <motion.div
                  key={tab.id}
                  animate={{ x: t.x, y: t.y, rotate: t.rotate, scale: t.scale, opacity: t.opacity }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    zIndex: t.zIndex,
                    position: "absolute",
                    bottom: 0,
                    transformOrigin: "bottom center",
                    cursor: !isActive ? "pointer" : "default",
                    filter: t.blur ? "blur(1px)" : "none",
                  }}
                  onClick={() => {
                    if (isActive || !sectionRef.current) return;
                    const top =
                      sectionRef.current.getBoundingClientRect().top +
                      window.scrollY + i * SCROLL_PER_TAB + 1;
                    window.scrollTo({ top, behavior: "smooth" });
                  }}
                >
                  <div
                    className="bg-surface border-2 rounded-[28px] flex flex-col overflow-hidden"
                    style={{
                      width: isActive ? 420 : 260,
                      /* No fixed height — let content determine height, capped by max */
                      minHeight: isActive ? 480 : 340,
                      maxHeight: isActive ? 540 : 380,
                      transition:
                        "width 0.45s cubic-bezier(0.16,1,0.3,1), min-height 0.45s cubic-bezier(0.16,1,0.3,1)",
                      borderColor: isActive ? "var(--color-primary)" : "var(--color-outline-variant)",
                      boxShadow: isActive
                        ? "0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px var(--color-primary)"
                        : "0 8px 24px rgba(0,0,0,0.07)",
                    }}
                  >
                    {/* Card header */}
                    <div className="px-7 pt-7 pb-5 shrink-0 border-b border-outline-variant/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <span
                            className="material-symbols-outlined text-2xl text-primary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {tab.icon}
                          </span>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                            {tab.tagline}
                          </p>
                          <p className="font-bold text-xl text-primary">Our {tab.label}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content — no scroll, stretches card */}
                    <div
                      className="px-7 py-6 flex-1"
                      style={{ opacity: isActive ? 1 : 0.45 }}
                    >
                      {tab.content}
                    </div>

                    {/* Progress bar on active */}
                    {isActive && (
                      <div className="px-7 pb-6 shrink-0">
                        <div className="h-1 bg-outline-variant rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary origin-left rounded-full"
                            style={{ scaleX: progress }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ── Indicator row ── */}
        <div className="flex items-center gap-4 mt-6 z-10 shrink-0">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-on-surface font-semibold text-base md:text-xl min-w-[110px] text-right"
            >
              Our {tabs[activeIndex].label}
            </motion.span>
          </AnimatePresence>

          <PillIndicator activeIndex={activeIndex} progress={progress} sectionRef={sectionRef} />

          <span className="text-on-surface-variant font-semibold text-base md:text-xl min-w-[50px]">
            {activeIndex + 1}
            <span className="text-on-surface-variant/40 text-sm"> / {tabs.length}</span>
          </span>
        </div>

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/30 z-10 shrink-0">
          Scroll to explore ↓
        </p>
      </div>
    </div>
  );
}
