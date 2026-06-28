"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

export default function TextReveal({
  text,
  className = "",
  staggerDelay = 0.1,
}: TextRevealProps) {
  const lines = text.split("\n");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split(" ").map((word, wordIndex) => {
            if (!word) return null;
            return (
              <span key={`${lineIndex}-${wordIndex}`} className="inline-block overflow-hidden mr-[0.25em] pb-1">
                <motion.span
                  variants={child}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
          {/* Insert a responsive break between lines */}
          {lineIndex < lines.length - 1 && <br className="hidden md:block" />}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
