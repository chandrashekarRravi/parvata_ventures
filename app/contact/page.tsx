import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeInUpObserver from "@/components/utils/FadeInUpObserver";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import NewsletterCTA from "@/components/contact/NewsletterCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GlobalPath Consulting",
  description: "Get in touch with GlobalPath Consulting. Elevate your career or transform your recruitment strategy.",
};

export default function ContactPage() {
  return (
    <>
      <FadeInUpObserver />
      <Navbar />
      <main>
        <ContactHero />
        <section className="px-gutter py-stack-space max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <ContactInfo />
          <ContactForm />
        </section>
        <ContactMap />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
