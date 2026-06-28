import { FlipButton, FlipButtonFront, FlipButtonBack } from "@/components/ui/flip-button";
import TextReveal from "@/components/forgeui/text-reveal";

export default function Hero() {
  return (
    <section className="relative h-[921px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          aria-label="A sophisticated high-resolution wide shot of a diverse group of modern professionals in a sun-drenched, architectural office space. The scene is filtered with a moody, dark cinematic overlay that emphasizes warmth and professional prestige. A young woman with glasses smiles thoughtfully in the foreground, illuminated by soft golden hour lighting. The overall aesthetic is editorial and premium, using a palette of deep browns, creams, and terracotta accents."
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5bio16dYWzq1jgQDHu-2qEreKsxkVGM5A4Ig4TiXrgg6TvpyPNyxr0jpu0e9pvpJEGMkrBjPUTS49HRSFtaTIBL0AngXXb8XVSPspozfSIKjR0TSDKLpXmo43cGIG8gOVhBHSpDUmk5TgfeDx1wZB5WpoQXYLj1rX1W5OrdZw6J3mpEBMa8jdHfee9idUtmlGK6Ow3Qo7uu0W70K8wsnIxcs0P-0t-jw_R9pmEvmw2It7paR3EFNAyQMFGilQVsaKV43wKS1huRTj')" }}
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-gutter max-w-5xl mx-auto space-y-8 fade-in-up">
        <span className="text-on-primary/80 font-label-sm text-label-sm tracking-[0.2em] uppercase">Join Our Talent Network Today</span>
        <TextReveal
          staggerDelay={0.1}
          text={"Empowering Your \n Career Journey"}
          className="text-on-primary font-display-lg text-display-lg-mobile md:text-display-lg leading-tight uppercase tracking-tight"
        />
        <div className="pt-8 flex justify-center">
          <FlipButton>
            <FlipButtonFront>explore</FlipButtonFront>
            <FlipButtonBack>Get you job</FlipButtonBack>
          </FlipButton>
        </div>
      </div>
    </section>
  );
}
