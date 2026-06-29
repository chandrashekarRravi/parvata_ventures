import { LiquidButton } from "@/components/ui/liquid-button";
import PlugConnectedIcon from "@/components/ui/plug-connected-icon";

export default function ClientsCTA() {
  return (
    <section className="py-section-padding-lg bg-background overflow-hidden relative flex items-center justify-center">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="relative z-10 text-center max-w-3xl px-gutter fade-in-up">
        <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-8">Ready to expand your path?</h2>
        <LiquidButton className="uppercase tracking-widest text-lg font-label-sm px-12 py-5" variant="primary">
          <div className="flex items-center justify-center gap-2">
            <PlugConnectedIcon size={24} />
            Join Our Partner Network
          </div>
        </LiquidButton>
      </div>
    </section>
  );
}
