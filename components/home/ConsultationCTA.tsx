import { LiquidButton } from "@/components/ui/liquid-button";

export default function ConsultationCTA() {
  return (
    <section id="contact" className="py-section-padding-lg bg-surface text-secondary overflow-hidden relative">
      <div className="max-w-3xl mx-auto px-gutter text-center relative z-10 fade-in-up">
        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-6 text-primary">
          Ready to Define Your Path?
        </h2>
        <p className="font-body-lg text-body-lg mb-12 text-secondary">
          Our advisors are ready to help you navigate the complexities of global careers and education. Let&apos;s start the conversation.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <LiquidButton variant="primary">
            Book Free Consultation
          </LiquidButton>
          <LiquidButton variant="secondary">
            View Success Stories
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
