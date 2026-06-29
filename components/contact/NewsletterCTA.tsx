export default function NewsletterCTA() {
  return (
    <section className="bg-surface-container py-section-padding-sm px-gutter text-center">
      <div className="max-w-2xl mx-auto fade-in-up">
        <h2 className="font-headline-md text-headline-md mb-6">Stay informed on global talent trends.</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <input 
            className="px-8 py-4 rounded-full bg-background border border-outline/30 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-80" 
            placeholder="Enter your email" 
            type="email" 
          />
          <button className="bg-secondary text-on-primary px-10 py-4 rounded-full font-label-sm uppercase tracking-widest hover:bg-primary transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
