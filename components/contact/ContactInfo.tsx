import SocialRow from "@/components/ui/SocialIcons";

export default function ContactInfo() {
  return (
    <div className="space-y-16 fade-in-up">
      <div>
        <h3 className="font-headline-md text-headline-md mb-8">Our Office</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Davangere HQ */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary font-label-sm uppercase tracking-wider">Davangere HQ</h4>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              #1430/3, Vajra Complex<br />
              Near Nuthan College, LIC Colony<br />
              Vidyanagar, Davangere<br />
              Karnataka, India
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="font-headline-md text-headline-md">Reach Out Directly</h3>
        <div className="space-y-6">
          {/* Email */}
          <a href="mailto:info@parvathaglobalventures.com" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-primary font-label-sm uppercase text-[10px]">Email Us</p>
              <p className="font-body-lg">info@parvathaglobalventures.com</p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+917353565161" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-primary font-label-sm uppercase text-[10px]">Call Us</p>
              <p className="font-body-lg">+91 73535 65161</p>
              <p className="font-body-lg">+91 73539 69755</p>
            </div>
          </a>

          {/* WhatsApp */}
          {/* <a
            href="https://wa.me/917353565161"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div>
              <p className="text-primary font-label-sm uppercase text-[10px]">WhatsApp</p>
              <p className="font-body-lg">+91 73535 65161</p>
            </div>
          </a> */}
        </div>
      </div>

      {/* Social Networks */}
      <div className="pt-2">
        <h3 className="font-label-sm uppercase tracking-widest text-on-surface-variant mb-6">Follow Us</h3>
        <SocialRow size="md" />
      </div>
    </div>
  );
}
