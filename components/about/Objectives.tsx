const objectives = [
  "To provide expert guidance and support in education and career development.",
  "To help students access quality international education opportunities, including overseas MBBS programs.",
  "To connect skilled candidates with suitable employment opportunities in India and abroad.",
  "To support schools and colleges with effective marketing and admission strategies.",
  "To deliver professional event management and tourism services.",
  "To build long-term partnerships with educational institutions, employers, and global organizations.",
  "To create sustainable opportunities for learning, employment, and growth.",
];

export default function Objectives() {
  return (
    <section className="py-section-padding-lg bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] text-xs block mb-3">Our Purpose</span>
          <h2 className="font-display-lg text-headline-md text-on-surface mb-10">Objectives</h2>
          <ul className="space-y-5">
            {objectives.map((obj, i) => (
              <li key={i} className="flex gap-4 items-start fade-in-up">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <p className="text-on-surface-variant font-body-lg leading-relaxed">{obj}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
