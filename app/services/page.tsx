import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeInUpObserver from "@/components/utils/FadeInUpObserver";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSplit from "@/components/services/ServicesSplit";
import ProcessShowcase from "@/components/services/ProcessShowcase";
import FaqSection from "@/components/services/FaqSection";
import ServicesCTA from "@/components/services/ServicesCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | GlobalPath Consulting",
  description: "Tailored Pathways for Global Ambitions. Specialized consultancy in professional growth and academic excellence.",
};

export default function ServicesPage() {
  return (
    <>
      <FadeInUpObserver />
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesSplit />
        <ProcessShowcase />
        <FaqSection />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
