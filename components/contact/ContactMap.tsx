export default function ContactMap() {
  return (
    <section className="mt-section-padding-lg w-full h-[600px] relative overflow-hidden fade-in-up">
      <div className="absolute inset-0 bg-surface-container-high z-0">
        <iframe 
          title="Parvatha Global Ventures HQ Location"
          src="https://maps.google.com/maps?q=JDC%20Circle,%20Davangere,%20Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ 
            border: 0,
            filter: "grayscale(1) contrast(0.8) sepia(0.2) brightness(1.05)"
          }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Floating Map Legend */}
      <div className="absolute bottom-12 left-12 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-xl z-10 border border-outline/20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <span className="font-label-sm font-bold uppercase tracking-wider text-primary">Parvatha Global Ventures HQ</span>
        </div>
        <p className="text-label-sm text-on-surface-variant">Near JDC Circle, Davangere, Karnataka</p>
        <a 
          className="mt-4 inline-flex items-center gap-2 text-primary font-bold text-label-sm hover:underline" 
          href="https://maps.google.com/?q=JDC+Circle,+Davangere,+Karnataka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </section>
  );
}
