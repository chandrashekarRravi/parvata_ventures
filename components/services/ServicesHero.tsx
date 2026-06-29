export default function ServicesHero() {
  return (
    <section className="relative min-h-[614px] flex items-center justify-center overflow-hidden bg-surface-container-low px-gutter py-section-padding-sm">
      <div className="max-w-container-max mx-auto text-center z-10 fade-in-up">
        <span className="font-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
          Our Expertise
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 max-w-4xl mx-auto leading-tight">
          Tailored Pathways for Global Ambitions
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We bridge the gap between where you are and where you aspire to be through specialized consultancy in professional growth and academic excellence.
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </section>
  );
}
