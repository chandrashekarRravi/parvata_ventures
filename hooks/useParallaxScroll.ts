"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches a smooth scroll-based parallax transform to a ref element.
 * @param speed - multiplier (0.3 = subtle, 0.5 = moderate). Default 0.4.
 */
export function useParallaxScroll(speed = 0.4) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translateY(${window.scrollY * speed}px)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
