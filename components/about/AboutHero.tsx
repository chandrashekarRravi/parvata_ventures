"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full h-[716px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 z-0">
        <div
          ref={bgRef}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJskoqZZpK7MMqpjnAvoXkvR2ro2FY5P9qFZz6EwoXJPwlFN-nPNyMw9LliWjcgzkszhFvXklJrw31hbk4ohR3_HbdKyishobkqN9UQ8Ug7Y0Dj62vVIx83iwd0-7TaBTqzsuYaFT-8I6qJDHz1z26a_w_keLFpXPvLCrpEAevvg8iVJ6d6DlLA5TyZjWwkOVCRbL-HxFVfSaSohwK2eIMJJeLyFZrAzBa2vNUQ9FIoA_aIc9DSJdwONSIfkgWGsTTRcVjUzPxebgW')",
          }}
        ></div>
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
