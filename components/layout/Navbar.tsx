"use client";
import { LiquidButton } from "../ui/liquid-button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsPastThreshold(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`docked full-width top-0 sticky z-50 bg-background/90 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? "shadow-sm" : ""
          }`}
      >
        <div className="flex justify-between items-center w-full px-gutter py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="font-display-lg text-headline-md tracking-tight text-primary">
                Parvatha Global Ventures
              </span>
            </Link>
          </div>

          <motion.div layout className="flex items-center gap-4">
            {/* Desktop inline links */}
            <AnimatePresence mode="popLayout">
              {!isPastThreshold && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex gap-8 items-center mr-4"
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`font-label-sm text-label-sm transition-colors duration-300 whitespace-nowrap ${
                          isActive 
                            ? "text-primary border-b-2 border-primary pb-1 font-bold" 
                            : "text-on-surface-variant hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div layout>
              <LiquidButton variant="primary">Book Free Consultation</LiquidButton>
            </motion.div>

            {/* Desktop Animated Toggle */}
            <motion.button
              layout
              initial={false}
              animate={{
                width: isPastThreshold ? 48 : 0,
                opacity: isPastThreshold ? 1 : 0,
                marginLeft: isPastThreshold ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="items-center justify-center h-12 rounded-full border border-outline hover:bg-surface-container transition-colors hidden md:flex overflow-hidden whitespace-nowrap"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </motion.button>

            {/* Mobile-only toggle */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex md:hidden items-center justify-center w-12 h-12 rounded-full border border-outline hover:bg-surface-container transition-colors shrink-0 ml-2"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Drawer Menu */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] md:w-[70vw] max-w-sm bg-surface-container z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex justify-end p-6 border-b border-outline-variant/30">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-12 h-12 rounded-full bg-surface hover:bg-surface-variant flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex flex-col gap-6 p-8">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className={`font-headline-md text-3xl md:text-4xl transition-colors block ${
                          isActive ? "text-primary font-bold" : "text-on-surface hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-auto p-8 border-t border-outline-variant/30 bg-background/50">
                <p className="font-label-sm uppercase tracking-widest text-primary mb-4">
                  Get in touch
                </p>
                <div className="flex justify-center w-full">
                  <LiquidButton variant="primary" className="w-full justify-center text-center flex items-center">
                    Book Free Consultation
                  </LiquidButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
