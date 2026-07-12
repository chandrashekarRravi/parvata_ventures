"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import TextReveal from "@/components/forgeui/text-reveal";

const services = [
  "Education Consultancy",
  "Overseas MBBS Admissions",
  "International Job Placement",
  "Domestic Job Placement",
  "Event Management",
  "Tourism Services",
  "Marketing & Admission Support",
];

function CyclingServices({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="space-y-2">
      {services.map((service, i) => {
        const isActive = i === activeIndex;
        const isPrev = i === (activeIndex - 1 + services.length) % services.length;
        return (
          <motion.div
            key={service}
            animate={{
              opacity: isActive ? 1 : isPrev ? 0.9 : 0.75,
              x: isActive ? 0 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center gap-3"
          >
            {isActive ? (
              <motion.span layoutId="arrow" className="text-primary text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                ▶
              </motion.span>
            ) : (
              <span className="w-3" />
            )}
            <span
              className={`text-base font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-white/75"}`}
              style={{ fontFamily: "var(--font-body-lg)" }}
            >
              {service}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Shared cycling state for both desktop card + mobile badge
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveIndex((p) => (p + 1) % services.length), 2000);
    return () => clearInterval(t);
  }, []);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D tilt for the main content
  const rotateX = useTransform(smoothY, [0, 1], [3, -3]);
  const rotateY = useTransform(smoothX, [0, 1], [-3, 3]);

  // Subtle movement for the light ray background
  const lightRayX = useTransform(smoothX, [0, 1], [-30, 30]);
  const lightRayY = useTransform(smoothY, [0, 1], [-30, 30]);

  // Video parallax — slight zoom shift as cursor moves
  const videoX = useTransform(smoothX, [0, 1], [-15, 15]);
  const videoY = useTransform(smoothY, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0806]"
      style={{ perspective: 1200 }}
    >

      {/* ── Animated Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Background image with parallax on mouse move */}
        <motion.div
          className="absolute inset-[-5%] w-[110%] h-[110%]"
          style={{ x: videoX, y: videoY }}
        >
          <img
            src="/hero-bg.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Text protection overlays — always on, independent of background */}
        {/* Left-side scrim: ensures white text on left is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        {/* Bottom fade — fades image into black at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" style={{ top: '50%' }} />
        {/* Top fade for navbar area */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

        {/* ── Animated light shaft from top-left ── */}
        <motion.div
          className="absolute -top-40 -left-40 w-[900px] h-[900px]"
          style={{
            background:
              "conic-gradient(from 215deg at 18% 18%, transparent 55deg, rgba(255,255,255,0.25) 72deg, rgba(227,115,67,0.45) 85deg, rgba(212,175,55,0.35) 100deg, transparent 130deg)",
            x: lightRayX,
            y: lightRayY,
          }}
          animate={{ rotate: [0, 4, -2, 0], opacity: [0.7, 1, 0.8, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Primary warm glow orb — left-center ── */}
        <motion.div
          className="absolute top-[15%] -left-24 w-[520px] h-[420px] rounded-full blur-[110px]"
          style={{ background: "rgba(227,115,67,0.18)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6], y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Gold accent glow orb — center ── */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-[360px] h-[260px] rounded-full blur-[90px]"
          style={{ background: "rgba(212,175,55,0.08)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* ── Animated SVG wave lines (bottom) ── */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{ height: "220px" }}
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,140 C200,80 400,180 600,120 C800,60 1000,160 1200,110 C1320,80 1400,130 1440,110 L1440,220 L0,220 Z"
            fill="none"
            stroke="rgba(212,175,55,0.18)"
            strokeWidth="1.5"
            animate={{
              d: [
                "M0,140 C200,80 400,180 600,120 C800,60 1000,160 1200,110 C1320,80 1400,130 1440,110 L1440,220 L0,220 Z",
                "M0,120 C180,170 420,90 640,150 C820,190 1020,80 1240,130 C1360,155 1410,100 1440,120 L1440,220 L0,220 Z",
                "M0,140 C200,80 400,180 600,120 C800,60 1000,160 1200,110 C1320,80 1400,130 1440,110 L1440,220 L0,220 Z",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,160 C260,110 480,190 700,140 C900,90 1100,170 1300,130 C1390,108 1430,145 1440,140 L1440,220 L0,220 Z"
            fill="none"
            stroke="rgba(227,115,67,0.14)"
            strokeWidth="1"
            animate={{
              d: [
                "M0,160 C260,110 480,190 700,140 C900,90 1100,170 1300,130 C1390,108 1430,145 1440,140 L1440,220 L0,220 Z",
                "M0,175 C220,130 460,195 680,155 C880,115 1080,185 1300,145 C1400,123 1430,160 1440,155 L1440,220 L0,220 Z",
                "M0,160 C260,110 480,190 700,140 C900,90 1100,170 1300,130 C1390,108 1430,145 1440,140 L1440,220 L0,220 Z",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.path
            d="M0,185 C300,150 540,200 760,165 C960,130 1160,190 1360,160 C1420,148 1440,165 1440,165 L1440,220 L0,220 Z"
            fill="none"
            stroke="rgba(212,175,55,0.10)"
            strokeWidth="0.8"
            animate={{
              d: [
                "M0,185 C300,150 540,200 760,165 C960,130 1160,190 1360,160 C1420,148 1440,165 1440,165 L1440,220 L0,220 Z",
                "M0,195 C280,165 520,205 760,175 C970,145 1140,198 1360,172 C1418,160 1440,175 1440,175 L1440,220 L0,220 Z",
                "M0,185 C300,150 540,200 760,165 C960,130 1160,190 1360,160 C1420,148 1440,165 1440,165 L1440,220 L0,220 Z",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          {/* Bottom fade fill */}
          <defs>
            <linearGradient id="waveFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#07050a" stopOpacity="0" />
              <stop offset="100%" stopColor="#07050a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="220" fill="url(#waveFade)" />
        </svg>

        {/* Top vignette */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to bottom, rgba(7,5,10,0.6), transparent)" }}
        />
      </div>


      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 flex-1 flex items-center px-6 md:px-16 lg:px-24 py-24 w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-center w-full">

          {/* LEFT: Headline + body + CTA */}
          <div className="space-y-8 max-w-[800px]">
            {/* Small label */}
            <div
              className="flex items-center gap-3"
              style={{
                color: "#e37343",
                fontFamily: "var(--font-label-sm)",
              }}
            >
              <TextReveal
                staggerDelay={0.05}
                text={"EmpoweringCareers. EnablingEducation"}
                className="text-xs tracking-[0.25em] uppercase"
              />
            </div>

            {/* Headline */}
            <div
              style={{
                fontFamily: "var(--font-display-lg)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 400,
              }}
            >
              <TextReveal
                staggerDelay={0.1}
                text={"Empowering Careers.\nEnabling Education."}
                className="text-white leading-[1.1] tracking-tight"
              />
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/60 leading-relaxed max-w-lg"
              style={{
                fontFamily: "var(--font-body-lg)",
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--text-body-lg--line-height)",
              }}
            >
              We connect aspiring students and job seekers with the right
              opportunities through expert career guidance, admissions support,
              skill development, and placement assistance.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#explore"
                className="inline-flex items-center gap-3 px-6 py-3 border border-white/25 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/50 group"
                style={{
                  fontFamily: "var(--font-label-sm)",
                  letterSpacing: "0.08em",
                }}
              >
                Book a Free Consultation
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Services card — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block w-[270px] shrink-0"
          >
            <div
              style={{
                background: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <p className="text-white text-xs tracking-widest uppercase font-bold mb-5" style={{ fontFamily: "var(--font-label-sm)" }}>
                We deliver trusted solutions
              </p>
              <CyclingServices activeIndex={activeIndex} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Mobile: top-right active service badge ── */}
      <div className="lg:hidden absolute top-20 right-4 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "6px 14px",
            }}
            className="flex items-center gap-2"
          >
            <span className="text-primary text-xs">▶</span>
            <span className="text-white text-xs font-medium" style={{ fontFamily: "var(--font-body-lg)" }}>
              {services[activeIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom logo strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-black py-6"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center gap-5">
          <span
            className="text-white/40 text-xs tracking-[0.2em] uppercase text-center"
            style={{ fontFamily: "var(--font-label-sm)" }}
          >
            You&apos;re in good company
          </span>

          <div
            className="w-full overflow-hidden relative py-2"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
          >
            <style jsx>{`
              @keyframes scrollMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll-marquee {
                animation: scrollMarquee 30s linear infinite;
              }
            `}</style>
            <div className="animate-scroll-marquee flex items-center gap-16 md:gap-24 whitespace-nowrap w-max">
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex items-center gap-16 md:gap-24">
                  {["EduBridge", "CareerVault", "SkillAxis", "PlaceFirst", "NextGen", "TalentHub"].map(
                    (brand, index) => (
                      <span
                        key={`${arrayIndex}-${index}`}
                        className="text-white/30 text-lg md:text-xl font-semibold tracking-wider hover:text-white/60 transition-colors cursor-default"
                        style={{ fontFamily: "var(--font-body-lg)" }}
                      >
                        {brand}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
