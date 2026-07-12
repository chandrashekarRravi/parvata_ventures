"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";

const ICONS = [
  "school", "medical_services", "flight", "location_on", "event",
  "travel_explore", "campaign", "public", "work", "groups", "auto_stories", "apartment"
];

// 40 deterministic icons filling left (2-28%) and right (72-98%) flanks
const bgIcons = Array.from({ length: 40 }).map((_, i) => {
  const isLeft = i % 2 === 0;
  const x = isLeft ? 2 + (i * 7) % 26 : 72 + (i * 11) % 26;
  const y = (i * 13.7) % 100;
  const size = 30 + (i * 17) % 80; // 30px to 110px
  const depth = size / 110; // 0.27 to 1.0 (bigger = closer)
  const icon = ICONS[i % ICONS.length];
  const delay = (i * 0.3) % 4;
  const duration = 4 + (i % 4);
  const opacity = 0.04 + (i % 5) * 0.02; // 0.04 to 0.12

  return { id: i, x, y, size, depth, icon, delay, duration, opacity };
});

function AmbientIcon({
  data,
  smoothX,
  smoothY
}: {
  data: typeof bgIcons[0];
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}) {
  // Parallax: closer (bigger depth) move more. Negative so it moves opposite to mouse.
  const parallaxX = useTransform(smoothX, [-1, 1], [-120 * data.depth, 120 * data.depth]);
  const parallaxY = useTransform(smoothY, [-1, 1], [-120 * data.depth, 120 * data.depth]);

  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none z-0"
      style={{
        left: `${data.x}%`,
        top: `${data.y}%`,
        x: parallaxX,
        y: parallaxY,
        opacity: data.opacity,
      }}
    >
      <motion.span
        className="material-symbols-outlined text-primary"
        style={{ fontSize: data.size, fontVariationSettings: "'FILL' 1" }}
        animate={{ y: ["-20px", "20px", "-20px"] }}
        transition={{
          repeat: Infinity,
          duration: data.duration,
          delay: data.delay,
          ease: "easeInOut",
        }}
      >
        {data.icon}
      </motion.span>
    </motion.div>
  );
}

const cardsData = [
  {
    title: "Our Mission",
    icon: "target",
    content: (
      <p className="text-on-surface-variant font-body-lg text-base leading-relaxed">
        To provide reliable, innovative, and result-oriented services in education consultancy, international admissions, job placements, tourism, event management, and institutional support while creating meaningful opportunities for growth and success.
      </p>
    ),
  },
  {
    title: "Our Vision",
    icon: "visibility",
    content: (
      <p className="text-on-surface-variant font-body-lg text-base leading-relaxed">
        To become a trusted and globally recognized organization that empowers individuals, educational institutions, and businesses through quality education solutions, career opportunities, and professional services.
      </p>
    ),
  },
  {
    title: "Our Values",
    icon: "diversity_3",
    content: (
      <ul className="space-y-3 text-on-surface-variant font-body-lg text-base">
        <li className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-primary rounded-full"></span> Integrity
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-primary rounded-full"></span> Excellence & Innovation
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-primary rounded-full"></span> Trust & Respect
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-primary rounded-full"></span> Social Responsibility
        </li>
      </ul>
    ),
  },
  {
    title: "Our Objectives",
    icon: "flag",
    content: (
      <ul className="space-y-2.5 text-on-surface-variant font-body-lg text-[13px] md:text-sm">
        {[
          "To provide expert guidance and support in education and career development.",
          "To help students access quality international education opportunities.",
          "To connect skilled candidates with suitable employment opportunities.",
          "To support schools and colleges with effective marketing.",
          "To deliver professional event management and tourism services.",
          "To build long-term partnerships globally.",
          "To create sustainable opportunities for learning, employment, and growth.",
        ].map((obj, i) => (
          <li key={i} className="flex gap-3 items-start leading-tight">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <p>{obj}</p>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function MissionVisionValues() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll logic for the cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mouse parallax logic for the background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1 based on screen center
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-surface-container-low">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12">

        {/* Ambient 3D Parallax Background */}
        {bgIcons.map((icon) => (
          <AmbientIcon key={icon.id} data={icon} smoothX={smoothX} smoothY={smoothY} />
        ))}

        {/* Header (Pinned with the cards) */}
        <div className="text-center px-6 mb-10 shrink-0 z-10">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] text-xs block mb-3">
            Our Foundations
          </span>
          <h2 className="font-display-lg text-headline-md text-on-surface">
            Driving the Future
          </h2>
        </div>

        {/* Stack Container */}
        <div className="relative w-full max-w-md mx-auto px-6 h-[520px] md:h-[560px]">
          {cardsData.map((card, i) => {
            const isLast = i === cardsData.length - 1;

            const start = i * (1 / 3);
            const end = (i + 1) * (1 / 3);

            const localProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

            const lift = useTransform(localProgress, (p) => Math.sin(p * Math.PI) * -18);
            const scale = useTransform(localProgress, (p) => 1 + Math.sin(p * Math.PI) * 0.02);
            const dropY = useTransform(localProgress, (p) => (p > 0.5 ? (p - 0.5) * 2 * 120 : 0));
            const opacity = useTransform(localProgress, (p) => (p > 0.5 ? 1 - (p - 0.5) * 2 : 1));

            const y = useTransform(() => lift.get() + dropY.get());

            return (
              <motion.div
                key={i}
                className="absolute left-0 right-0 mx-auto w-full origin-bottom"
                style={{
                  top: 0,
                  zIndex: cardsData.length - i,
                  y: isLast ? 0 : y,
                  scale: isLast ? 1 : scale,
                  opacity: isLast ? 1 : opacity,
                }}
              >
                <div className="bg-surface rounded-[2rem] overflow-hidden border border-outline-variant/60 shadow-[0_30px_80px_rgba(0,0,0,0.15)] flex flex-col w-full h-[520px] md:h-[560px]">

                  {/* Icon & Phase Area */}
                  <div className="p-8 pb-4 flex justify-between items-start shrink-0 bg-background">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {card.icon}
                      </span>
                    </div>

                  </div>

                  {/* Content Area */}
                  <div className="px-8 flex flex-col flex-grow bg-background">
                    <h3 className="font-display-lg text-3xl text-on-surface mb-4">
                      {card.title}
                    </h3>
                    <div className="text-on-surface-variant font-body-lg text-base md:text-lg leading-relaxed flex-grow overflow-y-auto pr-2 custom-scrollbar">
                      {card.content}
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pb-6 pt-5 border-t border-outline-variant flex items-center justify-between shrink-0">
                      <span className="text-[12px] font-semibold tracking-[0.2em] text-on-surface-variant/70 uppercase">
                        Step {i + 1}
                      </span>
                      <span className="material-symbols-outlined text-on-surface text-xl">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
