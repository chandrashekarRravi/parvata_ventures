import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkText: string;
  hoverText: string;
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "jobs",
    title: "Jobs",
    description: "Curated career opportunities in emerging tech and finance hubs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzyQtdhKPDpeiQERjRPoynOHs3sq-zsxUrCw0pJQVRArL9O6ZVuep-JM9_k6IVJQNPMw_IoZV0vYFxgre8guKdH58QbyCi3it0wF8lryUKwg-hpKUIn00O6Y9vXF45gRM93Brqloxj3-VR3wzY836RjKS3AbAPutB8yVl-Sd4omwV-oDlXqlEjoGj3JhvGR6JmBsBjp3JqomQcQfL2KQNOZmT4TlGUusOnIeEY5Z_MMM6nSSm2OKMWzolb_bFchRMTKjhHnKvYQA0V",
    imageAlt: "Professional man in tailored charcoal suit",
    linkText: "View Openings",
    hoverText: "Get Your Profession",
    href: "#",
  },
  {
    id: "study-india",
    title: "Study India",
    description: "Access top-tier educational institutions within the Indian subcontinent.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH_xbSAtpc1UB3dg2smyTNDphQ5kJLjKIlcPRA3hL8zMxTyXPIbKdOWuXpre9wPNW8JXnXRIIU1doqgZLxgzKU3vkOKo9XYNU5ysFeo3YGLqEdo8BZEcv58FiUiENZLzBEEwsTgzO737jeWSUP3_9P8bI47qWd1MtgQewwnVIuX5rLy0T6GaFo4s_lwqj2bAywybfsbcXlqlfZW4Y5U74A_zvxD9bee_e7mv723VAnBHjru00QgmxCrUZSiMZENvBguOp8PoqPTWdT",
    imageAlt: "Modern Indian university campus",
    linkText: "Explore Programs",
    hoverText: "Find Your Path",
    href: "#",
  },
  {
    id: "study-abroad",
    title: "Study Abroad",
    description: "Global educational partnerships across Europe, UK, and North America.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5_24GLUUC5MtTQJUqRJ8D37Ti5jm2Zto-eJENIWeGqgI0MRcU0jndwp9l24r0OBnKRjBgp5UxD0NmmXSMVZAX8dY_wAs4DnL-Ec1QIUr5_vDaQH4jD_xD7cpPdB_w28r9u3OqnDrVUwW-FbnycsdonInbWp-Sh66IyVJ6ro7CZYA0Yhhz3x7CYFH4ovdPU2SkpDSBryffxvfQakJE-aqueQPBQsYNV1ovJ9oGAiCUsPmGMryUMKI4YEchktE7sUzT5Qa5oz7-UyP",
    imageAlt: "Person holding leather passport holder at airport",
    linkText: "Learn More",
    hoverText: "Broaden Horizons",
    href: "#",
  },
  {
    id: "employers",
    title: "Employers",
    description: "Strategic talent acquisition and executive search for industry leaders.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtRNuEiwW1TouxeWj0qZH_BlPHEYSYo76geQ74UTZ8YrcLdUoUhMZMkpkjSnIG2CJoGj5UZ7-H1LYlmAd60ArDh5ZMxqvaygQZ_QU-nWcffked_aqK2FUkcwnh13oT8Mi0TUd57hU7_bw1DVeC_oWLYHZww38i3pluuu7fHAeQW-MAReFGuZXcHBhbgaa8QTUQGBbK-L5TVuZfZowOkLiuQPP1yQHF0CGvXMdOXt0HapA6UF2Vz030kfiDrsEYfRsCy5WOh8lpurQ9",
    imageAlt: "Two executives having a thoughtful discussion",
    linkText: "Partner with Us",
    hoverText: "Build Your Team",
    href: "#",
  }
];

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="group bg-surface-container-low p-2 rounded-lg border border-outline-variant hover:border-primary transition-colors duration-500 fade-in-up">
      <div className="aspect-[4/5] rounded-DEFAULT overflow-hidden mb-6 relative">
        <Image 
          src={service.image} 
          alt={service.imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="px-4 pb-4">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{service.title}</h3>
        <p className="text-on-surface-variant mb-6 text-sm">{service.description}</p>
        <Link href={service.href} className="group/link flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest mt-1">
          <div className="grid overflow-hidden">
            <span className="col-start-1 row-start-1 transition-transform duration-300 group-hover/link:-translate-y-[150%] whitespace-nowrap">
              {service.linkText}
            </span>
            <span className="col-start-1 row-start-1 translate-y-[150%] transition-transform duration-300 group-hover/link:translate-y-0 text-primary whitespace-nowrap">
              {service.hoverText}
            </span>
          </div>
          <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-x-150 origin-left">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-section-padding-lg bg-background">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16 space-y-4 fade-in-up">
          <h2 className="font-display-lg text-headline-md text-on-surface">Boutique Recruitment Solutions</h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-body-lg text-body-lg">
            Specialized pathways designed for ambitious professionals and forward-thinking organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
