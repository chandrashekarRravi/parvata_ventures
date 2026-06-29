import Image from "next/image";

export default function AccreditationBadges() {
  return (
    <section className="py-16 bg-background border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <p className="text-center font-label-sm text-secondary mb-10 tracking-widest uppercase fade-in-up">
          Trusted & Accredited By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 fade-in-up">
          <div className="h-10 flex items-center relative w-24">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCj-ntfNr2kz1K2BW8eIs5bhJqsuw2kbRAHPCUg-p3UjtvzsTdeR4nUJHevJGB47drKVkPF5w_2AN3sWsOhoHvSaVK_RIn0E8UESXLs1cCByU3qnZNmbNC0ZBibbCJeLgjnBFAAko4Im1a6Fub2cbpTkZHcm3bKRfaTFTiQDGaGOET83MvUZaK1WxbzE9o3Nn55MEQ6y1tarGocMzFXb0DHCVmE031bhhGwEmG-NQiWK22l8YMlLkqjNR_rBaXmRxVSGXDenaG1Bd_"
              alt="Accreditation 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-10 flex items-center relative w-24">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNsN1zhTlX0_vFPc6UYSXYCgKcIHpw0B1cTQUBXemLN9r9OCYffvUguRHyLO0CSPONT66ej-5_NTT3yIn99N282DRhOJpYkxLR3lhcGq-OD23PD3eKVaDL7BLbVyZmqdFV8C_0BXTtyCW2cJDB2opypvfH9QN712XsQtejlqxxBdG_jOj8zwTmmmzRFuLhNoAyWtbReVFvb_RhlZCFXDLW-ogaUl8_EMS6rPNoE--Sq_J51X5L0LFfJQa56DXWy8zxYpMgRNc7nHey"
              alt="Accreditation 2"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-10 flex items-center relative w-24">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI1TFLTY8llK8Xo8N6P1qa6_SDk-czlY2aabjAhLxIRsczfTpfUEvZdbKNt1qjyrCbqOlRyBcQcLA4P3xZsXo3rSZmNyBR8lsenho0gcU0fz_0D7LAC2wtQ01t1cG5O0Av5r4LZ5esf58fL9psokovwVJdi3c3Tg_A55zT9E3Omu-ELXmGJWoJHgjGgVk3ll3NaO59sZKxNgef-11MIeNDFBqyHH8V-FIXQ8NhdKO6MiA20XhsjUHIX3WKJ9Ntr_3J6rY6PSQ9WYaa"
              alt="Accreditation 3"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-10 flex items-center relative w-24">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArPj1kYmqeq_nYNtMmI3oYWk7GBV2FihopIx5T1gOfMVZkT8bZLXax4Ruar7T44Vfg8x6Al05lEoAlSz4QPHlTDwDV9tcrM0rhXYbcajKLnkuzniyRHoxVqUVdUrhdDTqA6ZcYTeWcos3g7NCtMCO9HzIBJKBzgW4Gmj4k9K1S2mkXR7SMUIRdWJNPESlIXxERkn5chuj7wXd8L6pmEgWWV54-SbohaqmeAOAeb_zd6FtixyfpK-Pyl2kKoEwWCGXse7uIjlmleEth"
              alt="Accreditation 4"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
