"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-section-padding-lg overflow-hidden">
      {/* ── Editorial Header ── */}
      <div className="px-gutter max-w-container-max mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline gap-6"
        >
          <span className="font-label-sm text-primary text-[11px] uppercase tracking-[0.3em]">Our Story</span>
          <div className="flex-1 h-px bg-outline-variant" />
        </motion.div>
      </div>

      {/* ── Main Two-Column Layout ── */}
      <div className="px-gutter max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

        {/* Left: Text Block */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-lg text-[2.6rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-on-surface"
          >
            The <span className="text-primary">Parvatha</span><br />
            Global Ventures<br />
            <span className="italic text-secondary">Story.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-body-lg text-[17px] text-on-surface-variant leading-[1.8] max-w-md"
          >
            Founded with a vision to bridge the gap between elite talent and prestigious organizations, we emerged from a desire to{" "}
            <strong className="font-semibold text-on-surface">humanize the recruitment experience.</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="font-body-lg text-[17px] text-on-surface-variant leading-[1.8] max-w-md"
          >
            Our journey started in a small boutique office with a single mission: to provide intentional, high-touch consulting that treats every candidate like an esteemed partner.
          </motion.p>

          {/* Stat callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="border-t border-outline-variant pt-8 flex gap-12"
          >
            <div>
              <p className="font-display-lg text-[3rem] text-primary leading-none mb-1">15+</p>
              <p className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">Years of Excellence</p>
            </div>
            <div>
              <p className="font-display-lg text-[3rem] text-secondary leading-none mb-1">25+</p>
              <p className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">Global Markets</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Image with floating card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Main Image */}
          <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD68YCmjGbPFycRYimtWXr-dQO_yQ9Fy9yM9VNZ1zao7Ze-tfXlHPzb0Hl1cg0BqKLGWA-6GOilJoJP-3MX5ve7pY_2AyNlWGepyMFUNT2okpS02YHis8NqMGlzNOAiKP8hf08ktAQGHnsIkudfTLjdxgIVTj-5eP_XP5NAulm8x8Q9C35rSzGpLFLLIStWCaoXRiOTxcP-AKZpNn8pfDnIf0rA3c7QjXq1tGygvKA06eWGizl9kp8zQW5-wxrARvrgf3JwugdtvcV0"
              alt="Boutique office space"
              fill
              className="object-cover"
            />
            {/* Tonal overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
          </div>

          {/* Floating Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-6 -left-6 bg-white border border-outline-variant rounded-xl p-6 max-w-[240px] shadow-lg hidden md:block"
          >
            <p className="font-display-lg italic text-secondary text-[15px] leading-snug mb-3">
              &ldquo;Boutique consulting. Global ambition.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant">Our Ethos</span>
            </div>
          </motion.div>

          {/* Decorative label top-right */}
          <div className="absolute top-6 right-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5">
            <span className="font-label-sm text-primary text-[10px] uppercase tracking-[0.2em]">Est. 2009</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
