import Image from "next/image";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: "verified_user",
      title: "Vetted Excellence",
      description: "Every candidate and role undergoes a rigorous premium selection process."
    },
    {
      icon: "language",
      title: "Global Network",
      description: "A borderless ecosystem spanning across 25+ key economic zones."
    },
    {
      icon: "auto_awesome",
      title: "Personal Concierge",
      description: "Dedicated guidance through every step of your application or hiring journey."
    }
  ];

  return (
    <section id="about" className="py-section-padding-lg bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-8 fade-in-up">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
              Redefining the <br /> Human Connection
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg">
              At GlobalPath, we believe recruitment should feel like an editorial experience—sophisticated, intentional, and personally curated.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl">{benefit.icon}</span>
                  <div>
                    <h4 className="font-bold text-on-surface">{benefit.title}</h4>
                    <p className="text-sm text-on-surface-variant">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12 fade-in-up" style={{ transitionDelay: "100ms" }}>
              <div className="rounded-lg overflow-hidden h-64 border border-outline-variant relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyB4b-5h70-TFv4mWeSaXGu-F6GRNHh_gu9sMh4D0gSqQkDD33xjdBBTw3de4vE67vznyQonqXZNdKfqu1TA0gVlw6nhM_BAiiXR9EFlzq6fPyqFZysymbTIKecWLEtI03syaLSGbYCjnZcUtAZd-LZb7whr1z6LbI0Z1LtG0dL6tqXeDVPK3CP25I-0Plns2UJeVwxofbUc3XPMNCaMHs8srAv2fHJkbUT4oYCi2G8PztwPT_ZHu8vkYL80fvKI-JaqBVmd84qyda"
                  alt="High-quality fabric swatches and architectural blueprints"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-primary rounded-lg p-8 aspect-square flex flex-col justify-end">
                <span className="text-on-primary font-display-lg text-display-lg-mobile">01+</span>
                <p className="text-on-primary/80 font-label-sm text-label-sm uppercase tracking-widest">Industry Expertise</p>
              </div>
            </div>

            <div className="space-y-4 fade-in-up" style={{ transitionDelay: "200ms" }}>
              <div className="bg-secondary rounded-lg p-8 aspect-square flex flex-col justify-end">
                <p className="text-on-primary italic font-body-lg text-body-lg">
                  &quot;The transition was seamless, professional, and truly felt like a boutique experience.&quot;
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-80 border border-outline-variant relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAObVakWL3-tqIyf-v0jyRGHgZ__8r0PauCKv8h7e5KTd73pu8UOX3tWQ2UPKUDmBbIncXvAgpLWeCIAm85HQVaUzWutovanNWxgR-5Ape3O4cCi6VETkkirgtQUL7roAQ3LHDTkWiwXAiowgsrYC1b5gTi2mktv6TR6k_eJZW0FN-CgTpwvQ8HX14-F1lrkj35QrzLUJQ4Xbw_u09PPD663yJK0zfeT9tUcUzRGBmbzF9eWCa0CUT-1t5UxHWLcf-NH7M8vh42xOxc"
                  alt="Minimalist architectural interior with a large window"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
