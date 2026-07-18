"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ImageRevealList } from "@/components/ui/image-reveal-list";

const servicesData = [
  {
    id: "education-consultancy",
    number: "01",
    title: "Education Consultancy",
    subtitle: "Expert academic planning",
    image: "/servies/EC.png",
    href: "/services#education-consultancy",
  },
  {
    id: "overseas-mbbs",
    number: "02",
    title: "Overseas MBBS Admissions",
    subtitle: "International medical programs",
    image: "/hero-bg.png",
    href: "/services#overseas-mbbs",
  },
  {
    id: "international-jobs",
    number: "03",
    title: "International Job Placement",
    subtitle: "Global career opportunities",
    image: "/hero-bg.png",
    href: "/services#international-jobs",
  },
  {
    id: "domestic-jobs",
    number: "04",
    title: "Domestic Job Placement",
    subtitle: "Jobs across India",
    image: "/hero-bg.png",
    href: "/services#domestic-jobs",
  },
  {
    id: "event-management",
    number: "05",
    title: "Event Management",
    subtitle: "Professional event planning",
    image: "/hero-bg.png",
    href: "/services#event-management",
  },
  {
    id: "tourism",
    number: "06",
    title: "Tourism Services",
    subtitle: "Customized travel solutions",
    image: "/hero-bg.png",
    href: "/services#tourism",
  },
  {
    id: "marketing-admissions",
    number: "07",
    title: "Marketing & Admission",
    subtitle: "Recruitment for institutions",
    image: "/hero-bg.png",
    href: "/services#marketing-admissions",
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? servicesData : servicesData.slice(0, 4);

  return (
    <section id="services" className="py-section-padding-lg bg-background relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-3 fade-in-up">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] block text-xs">
            Our Services
          </span>
          <h2 className="font-display-lg text-headline-md" style={{ color: "var(--color-secondary)" }}>
            One Partner. Endless Opportunities.
          </h2>
          <p className="max-w-xl mx-auto text-on-surface-variant text-sm leading-relaxed">
            Comprehensive education, career, and business support tailored to your goals.
          </p>
        </div>

        {/* Image Reveal List */}
        <div className="fade-in-up max-w-2xl mx-auto mb-10 px-4 md:px-0">
          <ImageRevealList items={displayedServices} className="w-full max-w-full" />
        </div>

        {/* View More Button */}
        <div className="flex justify-center flex-col items-center gap-6 fade-in-up">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-primary font-label-sm text-sm uppercase tracking-widest hover:text-primary/80 transition-colors"
            >
              View More Services
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          )}

          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-primary text-on-primary font-label-sm text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 group shadow-lg shadow-primary/20"
          >
            Explore All Services
            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
