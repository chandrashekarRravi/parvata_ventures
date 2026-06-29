import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeInUpObserver from "@/components/utils/FadeInUpObserver";
import ClientsHero from "@/components/clients/ClientsHero";
import PartnersGrid from "@/components/clients/PartnersGrid";
import ImpactStats from "@/components/clients/ImpactStats";
import StrategicAffiliations from "@/components/clients/StrategicAffiliations";
import ClientsCTA from "@/components/clients/ClientsCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | GlobalPath Consulting",
  description: "Connecting Global Talent with Prestigious Partners. We curate a prestigious ecosystem of industry leaders.",
};

export default function ClientsPage() {
  return (
    <>
      <FadeInUpObserver />
      <Navbar />
      <main>
        <ClientsHero />
        <PartnersGrid />
        <ImpactStats />
        <StrategicAffiliations />
        <ClientsCTA />
      </main>
      <Footer />
    </>
  );
}
