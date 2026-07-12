"use client";
import { motion } from "framer-motion";
import { useParallaxScroll } from "@/hooks/useParallaxScroll";

export default function AboutHero() {
  const bgRef = useParallaxScroll(0.4);

  return (
    <header className="relative w-full h-[716px] flex items-center justify-center overflow-hidden">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      
      {/* Bottom fog — fades hero into the page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-background))" }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="w-full h-[130%] bg-cover bg-center will-change-transform"
          style={{ backgroundImage: "url('/abt.png')" }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 text-center px-gutter max-w-4xl"
      >
        <span className="text-on-primary font-label-sm uppercase tracking-widest block mb-6">
          Our Legacy
        </span>
        <h1 className="text-on-primary font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
          Crafting <span className="text-editorial">Exceptional</span> Careers
        </h1>
        <p className="text-on-primary/90 font-body-lg max-w-2xl mx-auto">
          We believe in the power of human potential. GlobalPath is more than a recruitment agency; we are architects of professional identity.
        </p>
      </motion.div>
    </header>
  );
}
