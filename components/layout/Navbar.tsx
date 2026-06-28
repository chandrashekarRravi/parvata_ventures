"use client";
import { LiquidButton } from "../ui/liquid-button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`docked full-width top-0 sticky z-50 bg-background/90 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? "shadow-sm" : ""
        }`}
    >
      <div className="flex justify-between items-center w-full px-gutter py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="font-display-lg text-headline-md tracking-tight text-primary">
              Parvata Ventures
            </span>
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="text-primary border-b-2 border-primary pb-1 font-bold font-label-sm text-label-sm"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#clients"
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors duration-300"
          >
            Clients
          </Link>
          <Link
            href="#contact"
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <LiquidButton variant="primary">
          Book Free Consultation
        </LiquidButton>
      </div>
    </nav>
  );
}
