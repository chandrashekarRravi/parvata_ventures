"use client";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does the typical consultancy process take?",
      answer: "Our standard engagement periods range from 4 to 12 weeks, depending on the complexity of the visa or recruitment target. We prioritize precision over speed to ensure high-end results.",
    },
    {
      question: "Do you assist with relocation logistics beyond visa services?",
      answer: "Yes, our Executive and Scholar packages include cultural integration briefings, local accommodation assistance, and banking setup guidance for primary destinations.",
    },
    {
      question: "What are the criteria for the Free Consultation?",
      answer: "We offer initial audits to candidates with at least 3 years of professional experience or students targeting Tier 1 global universities.",
    },
  ];

  return (
    <section className="py-section-padding-lg px-gutter max-w-4xl mx-auto fade-in-up">
      <h2 className="font-display-lg text-headline-md text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="faq-item border border-outline-variant rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center bg-white hover:bg-surface-container transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-left">{faq.question}</span>
                <span
                  className="material-symbols-outlined transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  expand_more
                </span>
              </button>
              <div
                className="faq-content overflow-hidden transition-all duration-300 ease-in-out bg-white"
                style={{ maxHeight: isOpen ? "1000px" : "0px", opacity: isOpen ? 1 : 0 }}
              >
                <div className="px-8 py-6 text-on-surface-variant border-t border-outline-variant">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
