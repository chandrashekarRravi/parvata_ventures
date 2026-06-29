export default function ContactMap() {
  return (
    <section className="mt-section-padding-lg w-full h-[600px] relative overflow-hidden fade-in-up">
      <div className="absolute inset-0 bg-surface-container-high z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDa85n85EJNelq0zfev94y4iLNAHLdI1F2dhLzxfqJaTx0skdXEastCiwRa4tcZADyjt-4MvFKEfXPr2XMHCmV5NOODSpfhxfMV7hl5ZKAa7HBDq8EJss-ZeXDf523STLQD1vpbsSwJPifzR0ZOnIIurX2FM0fZ-QxrO48DKDY_TQ6PR35Xt57BtL_yQVd3qWaCtyrM8eZEofe6qGkzGtVoQEklbgOJQ147Nef4fIQm4XpmS3UnXuPNAppEfZSiv6MQ_gFVubpRAaD')",
            filter: "grayscale(1) contrast(0.8) sepia(0.2) brightness(1.05)"
          }}
        ></div>
      </div>
      {/* Floating Map Legend */}
      <div className="absolute bottom-12 left-12 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-xl z-10 border border-outline/20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <span className="font-label-sm font-bold uppercase tracking-wider text-primary">GlobalPath Headquarters</span>
        </div>
        <p className="text-label-sm text-on-surface-variant">42 Mayfair Square, London</p>
        <a className="mt-4 inline-flex items-center gap-2 text-primary font-bold text-label-sm hover:underline" href="#">
          Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </section>
  );
}
