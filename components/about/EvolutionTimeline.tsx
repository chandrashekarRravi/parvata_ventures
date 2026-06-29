export default function EvolutionTimeline() {
  return (
    <section className="bg-surface-container py-section-padding-lg">
      <div className="max-w-4xl mx-auto px-gutter">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="font-headline-md text-headline-md">Our Evolution</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line"></div>
          <div className="relative flex items-center justify-between mb-24 w-full fade-in-up">
            <div className="w-[45%] text-right pr-12 hidden md:block">
              <h4 className="font-headline-md text-xl text-primary">2009</h4>
              <p className="text-on-surface-variant">The Foundation</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface-container z-10"></div>
            <div className="w-full md:w-[45%] pl-12">
              <div className="md:hidden mb-2">
                <span className="text-primary font-bold">2009</span>
              </div>
              <h5 className="font-headline-md text-lg mb-2">GlobalPath Established</h5>
              <p className="text-on-surface-variant font-body-md">
                Starting as a boutique agency in London focused exclusively on executive technology roles.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-between mb-24 w-full fade-in-up">
            <div className="w-full md:w-[45%] text-right pr-12">
              <h5 className="font-headline-md text-lg mb-2">Global Expansion</h5>
              <p className="text-on-surface-variant font-body-md">
                Opening our New York and Singapore hubs to serve international client bases.
              </p>
              <div className="md:hidden mt-2">
                <span className="text-primary font-bold">2014</span>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface-container z-10"></div>
            <div className="w-[45%] pl-12 hidden md:block">
              <h4 className="font-headline-md text-xl text-primary">2014</h4>
              <p className="text-on-surface-variant">Global Hubs</p>
            </div>
          </div>
          <div className="relative flex items-center justify-between mb-24 w-full fade-in-up">
            <div className="w-[45%] text-right pr-12 hidden md:block">
              <h4 className="font-headline-md text-xl text-primary">2020</h4>
              <p className="text-on-surface-variant">Talent Innovation</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface-container z-10"></div>
            <div className="w-full md:w-[45%] pl-12">
              <div className="md:hidden mb-2">
                <span className="text-primary font-bold">2020</span>
              </div>
              <h5 className="font-headline-md text-lg mb-2">Pivoting to Digital Advisory</h5>
              <p className="text-on-surface-variant font-body-md">
                Launching our proprietary career journey methodology, blending coaching with recruitment.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-between w-full fade-in-up">
            <div className="w-full md:w-[45%] text-right pr-12">
              <h5 className="font-headline-md text-lg mb-2">B-Corp Certification</h5>
              <p className="text-on-surface-variant font-body-md">
                Official recognition for our commitment to ethical recruitment and social impact.
              </p>
              <div className="md:hidden mt-2">
                <span className="text-primary font-bold">2023</span>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface-container z-10"></div>
            <div className="w-[45%] pl-12 hidden md:block">
              <h4 className="font-headline-md text-xl text-primary">2023</h4>
              <p className="text-on-surface-variant">Ethical Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
