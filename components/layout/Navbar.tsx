"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsPastThreshold(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll);
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
      {/* ── Fixed transparent nav — floats over all page content ── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between w-[calc(100%-1.5rem)] md:w-full px-3 py-1 md:px-6 md:py-3 max-w-[1440px] mx-auto mt-1 md:mt-0 bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-outline-variant/30 md:border-none rounded-[1.5rem] md:rounded-none shadow-sm md:shadow-none">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0">

            {/* Desktop Logo (with scroll blur bg) */}
            <div className="hidden md:inline-flex items-center gap-3 border border-outline-variant/70 rounded-full bg-background/90 backdrop-blur-md px-3 py-1">
              <Image
                src="/PGV-LOGO-OP-4.png"
                alt="Parvata Global Ventures Logo"
                width={100}
                height={100}
                className="h-16 w-auto object-contain"
                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7)) drop-shadow(0 0 16px rgba(0,0,0,0.5))" }}
                priority
              />
              <Image
                src="/PGV-WORDLOGO-OP-3.png"
                alt="Parvata Global Ventures Text"
                width={240}
                height={80}
                className="h-10 w-auto object-contain"
                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7)) drop-shadow(0 0 16px rgba(0,0,0,0.5))" }}
                priority
              />
            </div>

            {/* Mobile Logo (no background, no padding) */}
            <div className="flex md:hidden items-center gap-2">
              <Image
                src="/PGV-LOGO-OP-4.png"
                alt="Parvata Global Ventures Logo"
                width={100}
                height={100}
                className="h-8 w-auto object-contain"
                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.8))" }}
                priority
              />
              <Image
                src="/PGV-WORDLOGO-OP-3.png"
                alt="Parvata Global Ventures Text"
                width={240}
                height={80}
                className="h-5 w-auto object-contain"
                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.8))" }}
                priority
              />
            </div>

          </Link>

          {/* ── Desktop: full pill ↔ MENU toggle ── */}
          <div className="hidden md:flex items-center">
            <AnimatePresence mode="wait">

              {/* Full pill before 40% scroll */}
              {!isPastThreshold && (
                <motion.div
                  key="full-pill"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center border border-outline-variant/70 rounded-full overflow-hidden bg-background/90 backdrop-blur-md"
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`relative px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 whitespace-nowrap ${isActive
                          ? "text-on-surface bg-surface-container/60"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/40"
                          }`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary"
                          />
                        )}
                      </Link>
                    );
                  })}

                  {/* CTA — primary fill, flush inside pill */}
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 bg-primary text-on-primary font-label-sm text-[12px] uppercase tracking-widest px-8 py-3.5 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}
                    >
                      calendar_month
                    </span>

                  </Link>
                </motion.div>
              )}

              {/* MENU button after 40% scroll */}
              {isPastThreshold && (
                <motion.button
                  key="menu-toggle"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsDrawerOpen(true)}
                  className="flex items-center gap-2 border border-outline-variant/70 rounded-full px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-on-surface bg-background/90 backdrop-blur-md hover:bg-background transition-colors duration-200"
                  aria-label="Open menu"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>menu</span>
                  Menu
                </motion.button>
              )}

            </AnimatePresence>
          </div>

          {/* ── Mobile MENU button ── */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-[10px] bg-secondary text-on-secondary hover:bg-primary hover:text-on-primary transition-colors shrink-0"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>menu</span>
          </button>
        </div>
      </nav>

      {/* ── Mobile / Scroll Drawer ── */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-surface-container z-[70] shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <Image
                    src="/PGV-LOGO-OP-4.png"
                    alt="Parvata Global Ventures Logo"
                    width={80}
                    height={80}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/PGV-WORDLOGO-OP-3.png"
                    alt="Parvata Global Ventures Text"
                    width={160}
                    height={50}
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-9 h-9 rounded-full bg-surface hover:bg-surface-variant flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex flex-col px-6 py-8">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className={`block py-4 text-2xl font-semibold uppercase tracking-[0.08em] border-b border-outline-variant/20 transition-colors ${isActive ? "text-primary" : "text-on-surface hover:text-primary"
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer CTA */}
              <div className="mt-auto px-6 py-8 border-t border-outline-variant/30">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                  Get in touch
                </p>
                <Link
                  href="/contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary font-label-sm text-[12px] uppercase tracking-widest px-6 py-4 rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}
                  >
                    calendar_month
                  </span>
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
