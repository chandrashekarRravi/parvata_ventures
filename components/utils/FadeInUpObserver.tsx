"use client";

import { useEffect } from "react";

export default function FadeInUpObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optionally stop observing once it has faded in
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return null;
}
