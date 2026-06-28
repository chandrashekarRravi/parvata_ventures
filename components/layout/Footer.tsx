import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-high border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-space px-gutter py-section-padding-sm max-w-container-max mx-auto">
        <div className="space-y-4">
          <span className="font-display-lg text-headline-md text-primary">Parvata Ventures</span>
          <p className="text-on-surface-variant max-w-xs font-body-md text-body-md">
            Redefining professional pathways with intentional design and global reach.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="#" className="text-primary hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined">face_nod</span>
            </Link>
            <Link href="#" className="text-primary hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined">share</span>
            </Link>
            <Link href="#" className="text-primary hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined">alternate_email</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">Home</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">About</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">Services</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">Contact</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">Privacy Policy</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">Terms of Service</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">Careers</Link>
            </nav>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Subscribe</h4>
          <p className="text-sm text-on-surface-variant">Stay updated with our boutique career insights.</p>
          <form className="flex gap-2">
            <input
              className="bg-background border-outline-variant rounded-full px-6 py-2 w-full focus:ring-primary focus:border-primary"
              placeholder="Email Address"
              type="email"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary p-2 rounded-full aspect-square flex items-center justify-center hover:opacity-90"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-outline-variant/30 py-8 px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-label-sm font-label-sm">
          <span>© {new Date().getFullYear()} Parvata Ventures. All rights reserved.</span>
          <div className="flex gap-8">
            <span>Dubai</span>
            <span>New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
