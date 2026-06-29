export default function ServicesCTA() {
  return (
    <section className="py-section-padding-lg px-gutter">
      <div className="max-w-container-max mx-auto bg-primary rounded-xl p-12 md:p-24 text-center text-on-primary relative overflow-hidden fade-in-up">
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-8">
            Ready to chart your global path?
          </h2>
          <p className="font-body-lg mb-12 opacity-90 max-w-xl mx-auto">
            Engage with our specialists today and discover the strategic advantage of curated career movement.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-label-sm hover:bg-surface-container transition-colors uppercase tracking-widest">
              Schedule a Call
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-full font-label-sm hover:bg-white/10 transition-colors uppercase tracking-widest">
              Our Success Stories
            </button>
          </div>
        </div>
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
    </section>
  );
}
