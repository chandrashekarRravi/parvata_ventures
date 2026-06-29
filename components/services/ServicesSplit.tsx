export default function ServicesSplit() {
  return (
    <section className="py-section-padding-lg px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        {/* Vertical Divider (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-outline to-transparent -translate-x-1/2"></div>
        
        {/* Job Consultancy Column */}
        <div className="fade-in-up space-y-12 pr-0 lg:pr-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <h2 className="font-headline-md text-headline-md">Job Consultancy</h2>
          </div>
          <div className="space-y-8">
            {/* Service Item 1 */}
            <div className="group border-b border-outline-variant pb-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-medium">Strategic Resume Building</h3>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">edit_document</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-6">Crafting high-impact narratives that pass ATS filters and capture recruiter attention through data-driven storytelling.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-wider text-secondary">ATS Optimization</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-wider text-secondary">Brand Voice</span>
              </div>
            </div>
            {/* Service Item 2 */}
            <div className="group border-b border-outline-variant pb-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-medium">Global Network Placement</h3>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">hub</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-6">Direct access to our exclusive network of Fortune 500 partners and boutique firms worldwide.</p>
            </div>
            {/* Service Item 3 */}
            <div className="group border-b border-outline-variant pb-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-medium">Interview Performance Coaching</h3>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">record_voice_over</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-6">Master the art of psychological persuasion and behavioral interviews with seasoned HR leads.</p>
            </div>
          </div>
          
          {/* Roadmap Job */}
          <div className="bg-surface-container rounded-lg p-8">
            <h4 className="font-label-sm text-primary uppercase tracking-widest mb-6">The Job Pathway</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="font-display-lg text-2xl text-outline opacity-30">01</span>
                <div>
                  <p className="font-bold">Discovery Audit</p>
                  <p className="text-sm text-on-surface-variant">Defining your unique value proposition.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-display-lg text-2xl text-outline opacity-30">02</span>
                <div>
                  <p className="font-bold">Portfolio Forge</p>
                  <p className="text-sm text-on-surface-variant">Reconstructing your professional assets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-display-lg text-2xl text-outline opacity-30">03</span>
                <div>
                  <p className="font-bold">Direct Entry</p>
                  <p className="text-sm text-on-surface-variant">Targeted introductions to key decision makers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Consultancy Column */}
        <div className="fade-in-up space-y-12 pl-0 lg:pl-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2 className="font-headline-md text-headline-md">Education Consultancy</h2>
          </div>
          <div className="space-y-8">
            {/* Service Item 1 */}
            <div className="group border-b border-outline-variant pb-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-medium">International Visa Guidance</h3>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">password</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-6">End-to-end management of complex visa protocols and documentation for premium global institutions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-wider text-secondary">Compliance</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-wider text-secondary">Fast-track</span>
              </div>
            </div>
            {/* Service Item 2 */}
            <div className="group border-b border-outline-variant pb-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-medium">Elite University Placement</h3>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">account_balance</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-6">Strategic application mentorship for Ivy League, Oxbridge, and premier global universities.</p>
            </div>
            {/* Service Item 3 */}
            <div className="group border-b border-outline-variant pb-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl font-medium">Scholarship Acquisition</h3>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">payments</span>
              </div>
              <p className="text-on-surface-variant font-body-md mb-6">Identifying and securing merit-based funding and grants to fuel your academic journey.</p>
            </div>
          </div>
          
          {/* Roadmap Education */}
          <div className="bg-surface-container-high rounded-lg p-8">
            <h4 className="font-label-sm text-primary uppercase tracking-widest mb-6">The Academic Pathway</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="font-display-lg text-2xl text-outline opacity-30">01</span>
                <div>
                  <p className="font-bold">Institution Matching</p>
                  <p className="text-sm text-on-surface-variant">Selecting schools that align with career ROI.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-display-lg text-2xl text-outline opacity-30">02</span>
                <div>
                  <p className="font-bold">Narrative Design</p>
                  <p className="text-sm text-on-surface-variant">Crafting powerful statements of purpose.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-display-lg text-2xl text-outline opacity-30">03</span>
                <div>
                  <p className="font-bold">Legal Onboarding</p>
                  <p className="text-sm text-on-surface-variant">Full logistical and immigration support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
