import Image from "next/image";

export default function StrategicAffiliations() {
  return (
    <section className="py-section-padding-lg bg-surface-container-high">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display-lg text-headline-md md:text-5xl text-on-surface mb-4">Strategic Affiliations</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Beyond direct clients, we collaborate with governing bodies and innovation hubs to shape the future of talent.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* HR Innovation Lab Card */}
          <div className="fade-in-up group relative overflow-hidden rounded-xl bg-background border border-outline-variant/50 p-10 flex flex-col md:flex-row gap-8 items-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-full md:w-1/3 aspect-square relative rounded-lg bg-surface-container overflow-hidden shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDih5B4ot5whY6V25kIvSUiy7Uynvzu0-mgZN72OOsooIUY9vK4jShVYgvybRy_ge7oEdB-YHXjQkO16RyYQN73btW8eUtSxelOC6aKdpQuBA59AiniQASVCVpaO4HKhbhjT_laT7Y6rr_pNJnulTUAmwm0RfsviuTV6ACAnVuehWvskgIKB3MKAsJ575asrXJ0TiN5JhcLdH_3YmERNzYCSoYm8XhcXPktgMSxYJxOv8O9iqN-VgO92c-1abBkUQiXW5MEi0w_ar94"
                alt="HR Innovation network"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">science</span>
                <span className="font-label-sm text-primary uppercase">Research Partner</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-3">HR Innovation Lab</h3>
              <p className="font-body-md text-on-surface-variant mb-6">Pioneering data-driven methodologies for human-centric recruitment. We collaborate on annual whitepapers and emerging trend analysis.</p>
              <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
                Learn more <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
          
          {/* Global Consultancy Alliance Card */}
          <div className="fade-in-up group relative overflow-hidden rounded-xl bg-background border border-outline-variant/50 p-10 flex flex-col md:flex-row gap-8 items-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-full md:w-1/3 aspect-square relative rounded-lg bg-surface-container overflow-hidden shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF6SA420wrIiD4yzDX5ZO6rbH3epPtyLKwJLEhsyYg4cuUpsmT7DhB-j02w8ndbreIc9ySboKNQ7YMXQ_PWpfnw6L9u3F8kng3lW9DsWiS-UmiCVMWWlI-0dpPzPP5GTEkbmqz_v_rIxirSOfvziJHKOEjRdATTVNWTAwzZ-kYv3sfeH-VNkxNcLT4zSa104EYzS9NESDScsi_HkZhDnB2ddhLPKxnphDBrgLkfEGfVCT5ij3g23qdee90YcquvEgO50i5XG5di3BR"
                alt="Global alliance logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">public</span>
                <span className="font-label-sm text-primary uppercase">Global Alliance</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-3">Global Consultancy Alliance</h3>
              <p className="font-body-md text-on-surface-variant mb-6">A curated network of independent firms sharing best practices and cross-border talent pipelines for seamless international operations.</p>
              <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
                View Charter <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
