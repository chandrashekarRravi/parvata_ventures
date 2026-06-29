"use client";

import Image from "next/image";
import { LiquidButton } from "@/components/ui/liquid-button";
import PlugConnectedIcon from "@/components/ui/plug-connected-icon";

export default function ClientsHero() {
  return (
    <section className="relative h-[819px] flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT8ymy45nQu3SkbAMssGjAoTxP89vvPwu6JnE91H3yksnO8C8mcX1nIhgy8c4A7WRYrgZCwEwG20RW3itDrwWs44Yan0wMWwelDjd6J8CIz42cjggDUIhOAlHpYGs7eBWotINSbbdROuY9Vc0kcXlp8D0gXHIAQf_ROQpw04JwQp3Ls_5dyC3ww7-0Bc077VlNCWfeuLTmSK0yI_82vx5mEINtE5MzI8cKmo_MWaOQayDX6ppsIJSjW_5l7jh2T7oxF7k_4DhJQn8A"
          alt="A sophisticated wide shot of a modern architectural business district at dusk"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background"></div>
      </div>
      <div className="relative z-10 max-w-container-max px-gutter text-center fade-in-up">
        <span className="font-label-sm uppercase tracking-widest text-primary mb-6 block">Our Network & Impact</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 max-w-4xl mx-auto">
          Connecting Global Talent with Prestigious Partners
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          We curate a prestigious ecosystem of industry leaders, academic pioneers, and specialized alliances to foster professional excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LiquidButton 
            className="uppercase tracking-widest text-sm font-label-sm" 
            variant="primary" 
            onClick={() => window.location.hash = "#network"}
          >
            Explore Network
          </LiquidButton>
          <LiquidButton 
            className="uppercase tracking-widest text-sm font-label-sm" 
            variant="secondary"
            onClick={() => window.location.hash = "#impact"}
          >
            View Impact
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
