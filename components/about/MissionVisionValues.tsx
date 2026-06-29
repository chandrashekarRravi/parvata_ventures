export default function MissionVisionValues() {
  return (
    <section className="bg-surface-container-low py-section-padding-lg">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-headline-md text-headline-md mb-4">Our Foundations</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-10 rounded-lg border border-outline-variant hover:border-primary transition-colors duration-500 group fade-in-up">
            <span
              className="material-symbols-outlined text-primary mb-6 text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              target
            </span>
            <h3 className="font-headline-md text-2xl mb-4">Our Mission</h3>
            <p className="text-on-surface-variant">
              To curate professional journeys that align with individual purpose and organizational excellence through intentional connection.
            </p>
          </div>
          <div
            className="bg-background p-10 rounded-lg border border-outline-variant hover:border-primary transition-colors duration-500 group fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            <span
              className="material-symbols-outlined text-primary mb-6 text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              visibility
            </span>
            <h3 className="font-headline-md text-2xl mb-4">Our Vision</h3>
            <p className="text-on-surface-variant">
              To be the global benchmark for boutique recruitment, where human value and professional prestige meet in perfect harmony.
            </p>
          </div>
          <div
            className="bg-background p-10 rounded-lg border border-outline-variant hover:border-primary transition-colors duration-500 group fade-in-up"
            style={{ transitionDelay: "200ms" }}
          >
            <span
              className="material-symbols-outlined text-primary mb-6 text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              diversity_3
            </span>
            <h3 className="font-headline-md text-2xl mb-4">Our Values</h3>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Uncompromising Integrity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Intentional Sophistication
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Human-Centric Growth
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
