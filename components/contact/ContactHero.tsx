"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="px-gutter pt-section-padding-lg pb-section-padding-sm max-w-container-max mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <span className="text-primary font-label-sm uppercase tracking-[0.2em] mb-4 block">Let&apos;s connect</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-8">
          Get in Touch
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-xl">
          Whether you are looking to elevate your career or transform your recruitment strategy, our team of experts is ready to navigate the path with you.
        </p>
      </motion.div>
    </section>
  );
}
