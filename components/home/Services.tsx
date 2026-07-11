import Link from "next/link";

const servicesData = [
  {
    id: "education-consultancy",
    icon: "school",
    title: "Education Consultancy",
    description: "Expert guidance for academic planning, admissions, and career development.",
    href: "/services#education-consultancy",
  },
  {
    id: "overseas-mbbs",
    icon: "local_hospital",
    title: "Overseas MBBS Admissions",
    description: "End-to-end assistance for securing MBBS admissions at reputed international universities.",
    href: "/services#overseas-mbbs",
  },
  {
    id: "international-jobs",
    icon: "flight_takeoff",
    title: "International Job Placement",
    description: "Career opportunities in Education, Healthcare, and Tourism sectors across the globe.",
    href: "/services#international-jobs",
  },
  {
    id: "domestic-jobs",
    icon: "location_on",
    title: "Domestic Job Placement",
    description: "Employment opportunities across all sectors throughout India.",
    href: "/services#domestic-jobs",
  },
  {
    id: "event-management",
    icon: "celebration",
    title: "Event Management",
    description: "Professional planning and execution of educational, corporate, and special events.",
    href: "/services#event-management",
  },
  {
    id: "tourism",
    icon: "travel_explore",
    title: "Tourism Services",
    description: "Customized travel solutions including tour planning and visa assistance.",
    href: "/services#tourism",
  },
  {
    id: "marketing-admissions",
    icon: "campaign",
    title: "Marketing & Admission Support",
    description: "Strategic marketing and student recruitment for schools and colleges.",
    href: "/services#marketing-admissions",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section-padding-lg bg-background">
      <div className="max-w-container-max mx-auto px-gutter">

        {/* Header */}
        <div className="text-center mb-14 space-y-3 fade-in-up">
          <span className="font-label-sm text-primary uppercase tracking-[0.2em] block text-xs">Our Services</span>
          <h2 className="font-display-lg text-headline-md text-on-surface">One Partner. Endless Opportunities.</h2>
          <p className="max-w-xl mx-auto text-on-surface-variant text-sm leading-relaxed">
            Comprehensive education, career, and business support — tailored to your goals.
          </p>
        </div>

        {/* Service grid — compact icon tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group flex flex-col gap-3 bg-surface-container-low border border-outline-variant hover:border-primary hover:bg-surface-container transition-all duration-300 rounded-xl p-5 fade-in-up"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-xl">{service.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
              <span className="text-primary text-xs font-label-sm uppercase tracking-widest mt-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA — Explore button
        
        
        
         <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-primary text-on-primary font-label-sm text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:opacity-90 transition-all duration-300 group shadow-lg shadow-primary/20"
          >
            Explore All Services
            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
        
         */}


      </div>
    </section>
  );
}
