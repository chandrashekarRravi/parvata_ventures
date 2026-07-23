"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Preethy",
    role: "CEO",
    image: "/Parvatha Team/CEO(CheifExecutiveOfficer).jpeg"
  },
  {
    name: "Harsha G S",
    role: "Director",
    image: "/Parvatha Team/Director.jpeg"
  },
  {
    name: "Sanjana S Shet",
    role: "Operations Manager",
    image: "/Parvatha Team/Operation-Manager.jpeg"
  },
  {
    name: "Tejashwini H P",
    role: "International Education",
    image: "/Parvatha Team/InternationalEducationandPlacementManager.jpeg"
  },
  {
    name: "Sachin S",
    role: "IT & Technical",
    image: "/Parvatha Team/ITandTechnicalManager.jpeg"
  },
  {
    name: "Supriya S K",
    role: "Digital Marketing",
    image: "/Parvatha Team/DigitalMarketingandBrandingManager.jpeg"
  },
  {
    name: "Rekha S",
    role: "Counselor",
    image: "/Parvatha Team/Counselor.jpeg"
  },
  {
    name: "Tejas Shalom P",
    role: "Assistant Counselor",
    image: "/Parvatha Team/Assisstant-Counselor.jpeg"
  },
  {
    name: "Prajwal L",
    role: "Assistant Counselor",
    image: "/Parvatha Team/Assisstant-Counsellor1.jpeg"
  },
  {
    name: "Suhas S Shet",
    role: "Assistant Counselor",
    image: "/Parvatha Team/Assisstant-Counselor2.jpeg"
  },
  {
    name: "Preethal P R",
    role: "Assistant Counselor",
    image: "/Parvatha Team/Assisstant-Counselor3.jpeg"
  },
  {
    name: "Kiran Kumar M S",
    role: "Assistant Counselor",
    image: "/Parvatha Team/Assisstant-Counselor4.jpeg"
  },
  {
    name: "Parinith B V",
    role: "Assistant Counselor",
    image: "/Parvatha Team/Assisstant-Counselor5.jpeg"
  },
  {
    name: "Chethan A M",
    role: "Assistant Counselor",
    image: "/Parvatha Team/Assisstant-Counselor6.jpeg"
  },
];

// Duplicate for smooth infinite scrolling
const marqueeTeam = [...teamMembers, ...teamMembers, ...teamMembers];

export default function CareerSuccessTeam() {
  return (
    <section className="py-section-padding-lg overflow-hidden relative">
      <div className="px-gutter max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Career Success Team</h2>
            <p className="text-on-surface-variant font-body-lg">
              Meet the architects of your next chapter. Our consultants bring decades of industry expertise and a refined eye for potential.
            </p>
          </div>
          <a className="text-primary font-label-sm border-b border-primary pb-1 hover:opacity-70 transition-opacity whitespace-nowrap" href="#">
            View Leadership Team
          </a>
        </motion.div>
      </div>

      {/* Marquee Carousel */}
      <div className="w-full flex overflow-hidden">
        <motion.div
          className="flex gap-6 px-3 w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
          }}
        >
          {marqueeTeam.map((member, index) => (
            <div key={index} className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 group">
              <div className="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden mb-6 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h4 className="font-headline-md text-xl mb-1 text-on-surface">{member.name}</h4>
              <p className="text-primary font-label-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
