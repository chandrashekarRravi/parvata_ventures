import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import KeyMetrics from "@/components/home/KeyMetrics";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import Footer from "@/components/layout/Footer";
import FadeInUpObserver from "@/components/utils/FadeInUpObserver";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <FadeInUpObserver />
      <Navbar />
      <main>
        <Hero />
        <KeyMetrics />
        <Services />
        <WhyChooseUs />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}

