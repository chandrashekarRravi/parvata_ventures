import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-section-padding-lg px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 fade-in-up">
          <h2 className="font-headline-md text-headline-md text-primary">
            The Parvatha Global Ventures Story
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Founded with a vision to bridge the gap between elite talent and prestigious organizations, GlobalPath emerged from a desire to humanize the recruitment experience. We saw a world of transactional data and decided to focus on tonal depth and individual narrative.
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Our journey started in a small boutique office with a single mission: to provide intentional, high-touch consulting that treats every candidate like an esteemed partner.
          </p>
        </div>
        <div className="relative fade-in-up">
          <div className="aspect-[4/5] bg-surface-container rounded-lg overflow-hidden border border-outline-variant relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD68YCmjGbPFycRYimtWXr-dQO_yQ9Fy9yM9VNZ1zao7Ze-tfXlHPzb0Hl1cg0BqKLGWA-6GOilJoJP-3MX5ve7pY_2AyNlWGepyMFUNT2okpS02YHis8NqMGlzNOAiKP8hf08ktAQGHnsIkudfTLjdxgIVTj-5eP_XP5NAulm8x8Q9C35rSzGpLFLLIStWCaoXRiOTxcP-AKZpNn8pfDnIf0rA3c7QjXq1tGygvKA06eWGizl9kp8zQW5-wxrARvrgf3JwugdtvcV0"
              alt="Boutique office space"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-primary-fixed p-8 rounded-lg border border-primary/20 max-w-xs hidden md:block">
            <p className="font-display-lg text-headline-md text-primary mb-2">15+</p>
            <p className="font-label-sm text-on-surface-variant">
              Years of boutique consulting excellence across global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
