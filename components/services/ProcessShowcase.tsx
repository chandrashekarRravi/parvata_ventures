import Image from "next/image";

export default function ProcessShowcase() {
  return (
    <section className="py-section-padding-lg bg-surface-container-low px-gutter overflow-hidden">
      <div className="max-w-container-max mx-auto mb-16 fade-in-up">
        <h2 className="font-display-lg text-headline-md text-center">Beyond the Application</h2>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] fade-in-up">
        <div className="md:col-span-2 md:row-span-2 bg-surface-dim rounded-lg overflow-hidden group relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSu4Q1hItx5iqy_tZdB_lZQMd_mqDb0btYwy6xP9GTYS96L_noGEgaBrUgti7iYhnqFSRV-wNQM4U_7W08gwvyVHV_UPsk5xPIsJx-Qt3cs_vrIJq6O_RQ2jDagTQJNbSAmMnHFWJ_LDCz309Kx3tqSoXxfTqPMMboPNpu96-abx-uyCX2XlHCXyOHYuQO59_cciH0mG5urBZq2cxaBsglAaVNmIbv_vk87GLu6FCKFjon1AZNEyImmhZFHLYXxsbF027Q-x6N0hPv"
            alt="A sophisticated modern office interior"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-8 left-8 z-20 text-on-surface bg-white/80 backdrop-blur-md p-6 rounded-lg max-w-[80%]">
            <p className="font-label-sm uppercase tracking-widest mb-2 text-primary">Prestige</p>
            <h4 className="font-headline-md text-xl">Executive Placement for C-Suite Success</h4>
          </div>
        </div>
        <div className="md:col-span-2 bg-white rounded-lg p-8 flex flex-col justify-center border border-outline-variant hover:border-primary transition-colors">
          <h4 className="font-headline-md text-2xl mb-4">Post-Departure Concierge</h4>
          <p className="text-on-surface-variant">
            Our service doesn&apos;t end when you get the job. We provide 90-day onboarding support to ensure you integrate flawlessly into your new global environment.
          </p>
        </div>
        <div className="bg-primary rounded-lg p-8 flex flex-col justify-end text-on-primary">
          <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified_user
          </span>
          <p className="font-headline-md text-xl">100% Visa Success Rate</p>
        </div>
        <div className="bg-secondary rounded-lg p-8 flex flex-col justify-end text-on-primary">
          <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
            globe_uk
          </span>
          <p className="font-headline-md text-xl">Presence in 42 Countries</p>
        </div>
      </div>
    </section>
  );
}
