export default function ImpactStats() {
  return (
    <section className="py-section-padding-lg bg-background" id="impact">
      <div className="max-w-container-max mx-auto px-gutter fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="p-8 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col justify-center">
            <span className="font-display-lg text-primary text-6xl mb-2">94%</span>
            <h4 className="font-label-sm text-on-surface uppercase tracking-widest mb-4">Retention Rate</h4>
            <p className="font-body-md text-on-surface-variant">Our candidates don&apos;t just find jobs; they build enduring careers within our elite partner ecosystem.</p>
          </div>
          <div className="p-8 rounded-lg bg-primary text-on-primary flex flex-col justify-center shadow-lg transform hover:scale-[1.02] transition-transform">
            <span className="font-display-lg text-6xl mb-2">500+</span>
            <h4 className="font-label-sm uppercase tracking-widest mb-4 opacity-80">Global Placements</h4>
            <p className="font-body-md opacity-95">Facilitating senior-level transitions across five continents with a focus on strategic organizational fit.</p>
          </div>
          <div className="p-8 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col justify-center">
            <span className="font-display-lg text-primary text-6xl mb-2">12</span>
            <h4 className="font-label-sm text-on-surface uppercase tracking-widest mb-4">Industry Awards</h4>
            <p className="font-body-md text-on-surface-variant">Recognized consistently for excellence in boutique recruitment and human capital consulting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
