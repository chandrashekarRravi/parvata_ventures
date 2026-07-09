"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Track mouse coordinates exactly
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Add spring physics for smooth, fluid following
  const springConfig = { damping: 20, stiffness: 150, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over anything interactive
      if (target.closest('a, button, [role="button"], input, select, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        /* Hide the default cursor everywhere */
        body, a, button, [role="button"], input, select, textarea {
          cursor: none !important;
        }
      `}</style>
      {/* Outer wrapper tracks the exact mouse position */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        {/* Inner wrapper perfectly centers the circle regardless of changing width/height */}
        <motion.div
          animate={{
            width: isHovering ? 100 : 80,
            height: isHovering ? 100 : 80,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="rounded-full bg-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-lg"
        >
          <AnimatePresence>
            {isHovering && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-black font-bold tracking-[0.2em] text-[10px] uppercase whitespace-nowrap"
                style={{ fontFamily: "var(--font-label-sm)" }}
              >
                Click
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}
