export default function KeyMetrics() {
  const metrics = [
    { label: "Global Clients", value: "500+" },
    { label: "Placements", value: "12K" },
    { label: "Countries", value: "25+" },
    { label: "Success Rate", value: "98%" }
  ];

  return (
    <section className="py-section-padding-sm bg-surface-container">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-outline-variant">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`text-center md:px-4 ${index === metrics.length - 1 ? "border-none" : ""}`}
            >
              <p className="font-display-lg text-headline-md text-primary mb-1">{metric.value}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
