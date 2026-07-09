"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[614px] flex items-center justify-center overflow-hidden bg-surface-container-low px-gutter py-section-padding-sm">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-container-max mx-auto text-center z-10"
      >
        <span className="font-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
          Our Expertise
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 max-w-4xl mx-auto leading-tight">
          Tailored Pathways for Global Ambitions
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We bridge the gap between where you are and where you aspire to be through specialized consultancy in professional growth and academic excellence.
        </p>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </section>
  );
}
