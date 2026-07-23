"use client";

import React from "react";
import { cn } from "@/lib/utils";

const leaders = [
  {
    id: "preethy",
    name: "Dr. Preethy",
    role: "Managing Director",
    image: "/Parvatha Team/CEO(CheifExecutiveOfficer).jpeg", // Placeholder image
    greeting: "Dear Students, Parents, Job Seekers, Partners, and Well-Wishers,",
    paragraphs: [
      "It is my pleasure to welcome you to Parvata Global Ventures LLP.",
      "Our vision is to create opportunities that empower individuals and institutions to achieve their goals. We are committed to providing trusted, transparent, and quality services in education consultancy, overseas MBBS admissions, international and domestic job placements, tourism, event management, and marketing and admission support for schools and colleges.",
      "At Parvata Global Ventures LLP, we believe that every student deserves the right guidance, every job seeker deserves the right opportunity, and every institution deserves a reliable growth partner. Our experienced team works with dedication, integrity, and professionalism to deliver personalized solutions that meet the unique needs of each client.",
      "We strive to build long-term relationships based on trust, excellence, and customer satisfaction. As we continue to expand our network across India and internationally, our commitment remains unchanged—to help people build brighter futures through quality education, rewarding careers, and meaningful partnerships.",
      "Thank you for placing your trust in Parvata Global Ventures LLP. We look forward to being a part of your journey towards success."
    ],
    signoff: "With warm regards,"
  },
  {
    id: "harsha",
    name: "Mr. G. S. Harsha",
    role: "Director",
    image: "/Parvatha Team/Director.jpeg",
    greeting: "Welcome to Parvata Global Ventures LLP.",
    paragraphs: [
      "At Parvata Global Ventures LLP, we are driven by a simple yet powerful vision—to create opportunities that transform lives and contribute to the growth of individuals, institutions, and communities.",
      "Our mission is to provide reliable and professional services in education consultancy, overseas MBBS admissions, international and domestic job placements, tourism, event management, and marketing and admission support for schools and colleges. We understand that every student, job seeker, and institution has unique aspirations, and we are committed to delivering personalized solutions with honesty, transparency, and excellence.",
      "We believe that quality guidance and the right opportunities can shape successful futures. Our dedicated team works tirelessly to connect people with world-class educational institutions, rewarding career opportunities, and dependable business services both in India and abroad.",
      "As we continue to grow, our focus remains on building lasting relationships based on trust, integrity, innovation, and customer satisfaction. Every success story of our clients inspires us to raise our standards and serve with greater commitment.",
      "I sincerely thank all our students, parents, job seekers, institutional partners, and well-wishers for their continued trust and support. We look forward to walking with you on your journey toward success and creating a brighter future together."
    ],
    signoff: "With best wishes,"
  },
  {
    id: "roshan",
    name: "Mr. Roshan B. P.",
    role: "General Manager",
    image: "#",
    greeting: "Dear Students, Parents, Job Seekers, Institutional Partners, and Valued Clients,",
    paragraphs: [
      "Greetings from Parvata Global Ventures LLP.",
      "At Parvata Global Ventures LLP, we believe that every individual deserves the right guidance and the right opportunity to achieve their dreams. Our commitment is to provide professional, dependable, and result-oriented services that empower students, job seekers, educational institutions, and business partners.",
      "As General Manager, I take immense pride in leading a dedicated team that works with passion, responsibility, and integrity. Whether it is helping students pursue higher education and overseas MBBS programs, connecting talented professionals with employment opportunities in India and abroad, supporting educational institutions with admissions and marketing, or delivering quality tourism and event management services, our focus is always on excellence and customer satisfaction.",
      "We understand that every client's journey is unique. Therefore, we emphasize personalized guidance, transparent communication, timely support, and ethical practices in everything we do. Our goal is not only to meet expectations but to exceed them by delivering meaningful and lasting value.",
      "The trust placed in us by our students, clients, partners, and well-wishers is our greatest strength. We remain committed to continuously improving our services, embracing innovation, and building long-term relationships based on mutual respect and confidence.",
      "On behalf of our entire team, I sincerely thank you for choosing Parvata Global Ventures LLP. We look forward to supporting your aspirations and being a trusted partner in your journey toward education, career growth, and success."
    ],
    signoff: "With best regards,"
  },
  {
    id: "sanjana",
    name: "Ms. Sanjana S. Shet",
    role: "Operations Manager",
    image: "/Parvatha Team/Operation-Manager.jpeg",
    greeting: "Dear Students, Parents, Job Seekers, Institutional Partners, and Esteemed Clients,",
    paragraphs: [
      "Warm greetings from Parvata Global Ventures LLP.",
      "At Parvata Global Ventures LLP, we believe that excellent service begins with efficient operations, dedicated teamwork, and a genuine commitment to our clients' success. As the Operations Manager, I am proud to work alongside a passionate team that strives to ensure every service we provide is delivered with professionalism, accuracy, and care.",
      "Whether assisting students with educational opportunities and overseas MBBS admissions, supporting job seekers in securing rewarding careers in India and abroad, coordinating tourism and event management services, or providing marketing and admission support to schools and colleges, our focus is on delivering a smooth, transparent, and satisfying experience from start to finish.",
      "We understand that every client has unique goals and expectations. That is why we prioritize timely communication, meticulous planning, efficient execution, and continuous support throughout every stage of the journey. Our commitment is to maintain the highest standards of quality while building lasting relationships founded on trust, reliability, and mutual respect.",
      "I sincerely thank our students, parents, clients, institutional partners, and well-wishers for the confidence you have placed in us. Your trust inspires us to improve continuously and serve with greater dedication every day.",
      "We look forward to supporting your aspirations and making your journey with Parvata Global Ventures LLP a rewarding and successful experience."
    ],
    signoff: "With warm regards,"
  }
];

export default function LeadershipMessages() {
  return (
    <section className="bg-background py-section-padding-lg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-20">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] text-xs block mb-3">
            Our Leadership
          </span>
          <h2 className="font-display-lg text-headline-md text-on-surface">
            Messages from the Management
          </h2>
        </div>

        <div className="space-y-32">
          {leaders.map((leader, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={leader.id}
                className={cn(
                  "flex flex-col lg:flex-row gap-12 lg:gap-24 items-center",
                  !isEven && "lg:flex-row-reverse"
                )}
              >
                {/* Image Section */}
                <div className="w-full lg:w-5/12 shrink-0">
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-outline-variant/50 group">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="font-display-lg text-3xl text-white mb-2">
                        {leader.name}
                      </h3>
                      <p className="font-label-sm text-primary tracking-widest uppercase text-[12px] font-bold">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-7/12 pt-4">
                  <span className="text-8xl text-primary/10 leading-none block -mb-4 font-serif relative -left-4">"</span>

                  <div className="prose prose-lg max-w-none text-on-surface-variant font-body-lg">
                    <p className="font-semibold text-on-surface mb-8 text-lg">
                      {leader.greeting}
                    </p>

                    <div className="space-y-6 text-base leading-relaxed text-on-surface-variant/90">
                      {leader.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-outline-variant flex flex-col gap-1">
                      <p className="mb-3 italic text-on-surface-variant">{leader.signoff}</p>
                      <p className="font-bold text-on-surface text-lg">{leader.name}</p>
                      <p className="text-sm font-medium text-primary uppercase tracking-wider">{leader.role}</p>
                      <p className="text-sm text-on-surface-variant/80">Parvata Global Ventures LLP</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
