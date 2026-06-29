export default function ContactInfo() {
  return (
    <div className="space-y-16 fade-in-up">
      <div>
        <h3 className="font-headline-md text-headline-md mb-8">Branch Offices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* London */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary font-label-sm uppercase tracking-wider">Davangere HQ</h4>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Near JDC Circle<br />
              Davangere, Karnataka<br />
              India
            </p>
          </div>
          {/* NYC 
            <div className="space-y-4">
            <h4 className="font-bold text-primary font-label-sm uppercase tracking-wider">New York</h4>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              580 Fifth Avenue<br />
              New York, NY 10036<br />
              USA
            </p>
          </div>
          */}

        </div>
      </div>
      <div className="space-y-8">
        <h3 className="font-headline-md text-headline-md">Reach Out Directly</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-primary font-label-sm uppercase text-[10px]">Email Us</p>
              <p className="font-body-lg">hello@globalpath.consulting</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-primary font-label-sm uppercase text-[10px]">Call Us</p>
              <p className="font-body-lg">+44 (0) 20 7946 0123</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div>
              <p className="text-primary font-label-sm uppercase text-[10px]">WhatsApp</p>
              <p className="font-body-lg">Chat with a Consultant</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h3 className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-6">Social Networks</h3>
        <div className="flex gap-6">
          <a className="w-10 h-10 flex items-center justify-center border border-outline/30 rounded-full hover:border-primary hover:text-primary transition-all" href="#">LinkedIn</a>
          <a className="w-10 h-10 flex items-center justify-center border border-outline/30 rounded-full hover:border-primary hover:text-primary transition-all" href="#">Twitter</a>
          <a className="w-10 h-10 flex items-center justify-center border border-outline/30 rounded-full hover:border-primary hover:text-primary transition-all" href="#">Insta</a>
        </div>
      </div>
    </div>
  );
}
