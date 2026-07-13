"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export interface ImageRevealListItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  number: string;
  href?: string;
}

export interface ImageRevealListProps {
  items: ImageRevealListItem[];
  className?: string;
}

export function ImageRevealList({ items, className }: ImageRevealListProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<{ item: ImageRevealListItem; isLeft: boolean } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleClick = (e: React.MouseEvent, item: ImageRevealListItem) => {
    if (isTouchDevice) {
      if (expandedId === item.id) {
        if (item.href) router.push(item.href);
      } else {
        e.preventDefault();
        setExpandedId(item.id);
      }
    } else {
      if (item.href) router.push(item.href);
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <div className={cn("relative w-full mx-auto max-w-5xl", className)}>

      {/* Single shared floating image rendered at the container level.
          Left-col cards → image floats to the LEFT of the grid.
          Right-col cards → image floats to the RIGHT of the grid.
          This avoids any overlap with adjacent cards. */}
      {!isTouchDevice && (
        <AnimatePresence>
          {hoveredItem && (
            <motion.img
              key={hoveredItem.item.id}
              src={hoveredItem.item.image}
              alt={hoveredItem.item.title}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "absolute top-1/2 -translate-y-1/2 w-[150px] h-[190px] rounded-2xl object-cover shadow-2xl pointer-events-none z-50 hidden md:block",
                hoveredItem.isLeft
                  ? "-left-[180px]"  // left column → image appears LEFT of grid
                  : "-right-[180px]" // right column → image appears RIGHT of grid
              )}
            />
          )}
        </AnimatePresence>
      )}

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="list-none grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {items.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isLeftCol = index % 2 === 0;

          return (
            <motion.li key={item.id} variants={itemVariants} className="relative z-10">
              <a
                href={item.href || "#"}
                onClick={(e) => handleClick(e, item)}
                onMouseEnter={() => !isTouchDevice && setHoveredItem({ item, isLeft: isLeftCol })}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "group relative flex flex-col w-full text-on-surface no-underline rounded-2xl transition-all duration-300",
                  "bg-surface-container-low border border-outline-variant hover:border-primary",
                  "active:scale-[0.98]",
                  isExpanded ? "border-primary shadow-lg shadow-primary/10" : ""
                )}
              >
                {/* Main Row */}
                <div className="flex items-center justify-between p-5 md:p-6 w-full relative z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10 hidden md:block" />

                  <div className="flex items-center gap-6">
                    <span className="text-primary/60 font-label-sm tracking-widest text-sm w-8">
                      {item.number}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg md:text-xl font-semibold font-body-lg group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className="text-on-surface-variant text-sm mt-1">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container group-hover:bg-primary/10 transition-colors duration-300 shrink-0">
                    <span
                      className={cn(
                        "material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-all duration-300",
                        isExpanded ? "rotate-90 text-primary" : "group-hover:translate-x-1"
                      )}
                    >
                      {isTouchDevice ? "chevron_right" : "arrow_forward"}
                    </span>
                  </div>
                </div>

                {/* Mobile Touch Expansion */}
                {isTouchDevice && (
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-5 pb-5"
                      >
                        <motion.img
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-xl shadow-md"
                        />
                        <div className="mt-4 text-center">
                          <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase">
                            Tap again to view details &rarr;
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default ImageRevealList;
