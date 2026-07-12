import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeInUpObserver from "@/components/utils/FadeInUpObserver";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import Objectives from "@/components/about/Objectives";
import CareerSuccessTeam from "@/components/about/CareerSuccessTeam";
import EvolutionTimeline from "@/components/about/EvolutionTimeline";
import AccreditationBadges from "@/components/about/AccreditationBadges";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GlobalPath Consulting",
  description: "Crafting exceptional careers and professional pathways with intentional design and global reach.",
};

export default function AboutPage() {
  return (
    <>
      <FadeInUpObserver />
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <MissionVisionValues />
        <Objectives />
        <CareerSuccessTeam />
        <AccreditationBadges />
      </main>
      <Footer />
      {/* FAB for Consultation */}
      <button className="fixed bottom-8 right-8 bg-primary text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center scale-95 active:scale-90 transition-all hover:w-48 group overflow-hidden z-50">
        <span className="material-symbols-outlined">calendar_today</span>
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap ml-0 group-hover:ml-2 font-label-sm">
          Book Consultation
        </span>
      </button>
    </>
  );
}
