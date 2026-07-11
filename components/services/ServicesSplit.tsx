import Link from "next/link";

const allServices = [
  {
    id: "education-consultancy",
    icon: "school",
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Education Consultancy",
    description: "Expert guidance for academic planning, admissions, and career development tailored to each student's unique goals and aspirations.",
    tags: ["Academic Planning", "Career Development", "Admissions"],
    roadmap: [
      { step: "01", title: "Profile Assessment", detail: "Understanding your academic background and goals." },
      { step: "02", title: "Institution Matching", detail: "Identifying the best-fit programs and universities." },
      { step: "03", title: "Application Support", detail: "End-to-end guidance through the application process." },
    ],
  },
  {
    id: "overseas-mbbs",
    icon: "local_hospital",
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Overseas MBBS Admissions",
    description: "End-to-end assistance for securing MBBS admissions at reputed international universities across Russia, Kazakhstan, Philippines, Georgia, and more.",
    tags: ["MBBS Abroad", "University Selection", "Visa Support"],
    roadmap: [
      { step: "01", title: "Eligibility Check", detail: "Verifying NEET scores and academic requirements." },
      { step: "02", title: "University Selection", detail: "Choosing MCI/NMC recognised universities." },
      { step: "03", title: "Documentation & Visa", detail: "Complete paperwork and visa processing support." },
    ],
  },
  {
    id: "international-jobs",
    icon: "flight_takeoff",
    color: "text-primary",
    bg: "bg-primary/10",
    title: "International Job Placement",
    description: "Career opportunities in the Education, Healthcare, and Tourism sectors across various countries, with full pre-departure and post-arrival support.",
    tags: ["Healthcare", "Education", "Tourism", "Global"],
    roadmap: [
      { step: "01", title: "Career Mapping", detail: "Aligning your profile with global market demands." },
      { step: "02", title: "Job Matching", detail: "Connecting you with verified international employers." },
      { step: "03", title: "Visa & Onboarding", detail: "Work visa assistance and pre-departure guidance." },
    ],
  },
  {
    id: "domestic-jobs",
    icon: "location_on",
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Domestic Job Placement",
    description: "Employment opportunities across all sectors throughout India, connecting candidates with leading employers for roles at all levels.",
    tags: ["All Sectors", "Pan-India", "All Levels"],
    roadmap: [
      { step: "01", title: "Skills Audit", detail: "Defining your strengths and marketable skills." },
      { step: "02", title: "Employer Connect", detail: "Direct introductions to leading Indian companies." },
      { step: "03", title: "Interview Prep", detail: "Coaching to maximize your interview performance." },
    ],
  },
  {
    id: "event-management",
    icon: "celebration",
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Event Management",
    description: "Professional planning and execution of educational, corporate, and special events — from concept to completion with seamless delivery.",
    tags: ["Corporate Events", "Educational", "Special Occasions"],
    roadmap: [
      { step: "01", title: "Concept Design", detail: "Crafting a unique vision and event blueprint." },
      { step: "02", title: "Logistics & Vendor", detail: "Managing all logistics, vendors, and timelines." },
      { step: "03", title: "Execution & Debrief", detail: "Flawless delivery and post-event reporting." },
    ],
  },
  {
    id: "tourism",
    icon: "travel_explore",
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Tourism Services",
    description: "Customized travel solutions including tour planning, visa assistance, accommodation, and comprehensive travel support for individuals and groups.",
    tags: ["Visa Assistance", "Tour Planning", "Group Travel"],
    roadmap: [
      { step: "01", title: "Itinerary Design", detail: "Personalized travel plans matching your preferences." },
      { step: "02", title: "Visa Processing", detail: "Hassle-free visa documentation and submission." },
      { step: "03", title: "Travel Support", detail: "On-ground assistance throughout your journey." },
    ],
  },
  {
    id: "marketing-admissions",
    icon: "campaign",
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Marketing & Admission Support",
    description: "Strategic marketing, student recruitment, branding, and admission assistance to help schools and colleges grow their enrolment and reputation.",
    tags: ["Branding", "Student Recruitment", "Digital Marketing"],
    roadmap: [
      { step: "01", title: "Brand Audit", detail: "Assessing current visibility and market positioning." },
      { step: "02", title: "Campaigns & Outreach", detail: "Targeted campaigns to attract prospective students." },
      { step: "03", title: "Enrolment Drive", detail: "End-to-end admission funnel management." },
    ],
  },
];

export default function ServicesSplit() {
  return (
    <section className="py-section-padding-lg px-gutter max-w-container-max mx-auto">
      <div className="space-y-24">
        {allServices.map((service, index) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
          >
            {/* Content Side */}
            <div className={`fade-in-up space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${service.bg} flex items-center justify-center ${service.color}`}>
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div>
                  <span className="font-label-sm text-primary uppercase tracking-[0.15em] text-xs block mb-1">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-headline-md text-headline-md">{service.title}</h2>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-wider text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest group/link mt-2"
              >
                <span className="border-b border-primary/0 group-hover/link:border-primary transition-colors duration-300">Get Started</span>
                <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>

            {/* Roadmap Side */}
            <div className={`bg-surface-container-low rounded-xl p-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <h4 className="font-label-sm text-primary uppercase tracking-widest mb-6 text-xs">How It Works</h4>
              <div className="space-y-6">
                {service.roadmap.map(step => (
                  <div key={step.step} className="flex gap-5 group">
                    <span className="font-display-lg text-3xl text-outline opacity-20 group-hover:opacity-60 transition-opacity duration-300 leading-none mt-0.5">
                      {step.step}
                    </span>
                    <div className="border-b border-outline-variant pb-5 flex-1">
                      <p className="font-bold text-on-surface mb-1">{step.title}</p>
                      <p className="text-sm text-on-surface-variant">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
