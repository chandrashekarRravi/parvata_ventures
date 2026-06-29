import Image from "next/image";

export default function PartnersGrid() {
  const mncLogos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1D7ic_pVoUoiclW1ks0PPkFihtdYeupHox3NrqcnjCmJ173HAgcjSAXJR13VYW4H5ZsIwB_fmOmxOrgedcnIfJ7Bo9Q5M26NuaT44SHi83qes7LGvllwp-QPSDS8OPaF2glxEdfw1TZ7KoXlo_whILIs8FBJ2zh_daEYK86FxShYZRETJd0MYR8XwtZI9qHao9nFWIghlJf6bu7vKvkTx_pvXvLCstl3_xcEnRdlUgcn6akTBBFDoLrnrRCoV5IvSk9p-V-XQnoOB",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtWfHVpYpM68x_zE__v3JaPtwLPhWwPyaDFHZZhFn7OHxm1RCMeM698bfNtsaasWukHjOZ-FV4C32PCagwZ7RUHCBan9FH5yWqH0JvpQy7Lz56FSIgzcQhefCan_mJVZXjpEuZMqcOm1_-6CmuvuR9pDQE5vfvuNPUf4kBBef19CCiNrFez070fMw2arNouqi8JoNfvl1EQl02ySSZVDiHrczgE5lOhXBAXxr9lt9cKxMgCz9aqt_f50OYN6ClDowu8pkN2Vj9BRFX",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDeQq_dQFwz1clFwZcIOJEIVC8_YsfxncYOZKedAUo7qDsfVBNqPXa6czfcUxUc14YPy9q5hUhEI5uY_OTuNg2FCui0QPV98aIku-WhkDB3BId1RsfWtvpnzSB1SV_-wzaFCvd94RJLzopGPitJO8KsW37815w95rf45rSOCYaoSxo_OkbuPj83TvN07FaG6QikyuB3eb86K7a8mNa23gEi5tkBNkq0MlUbmtnEcq2bAtCgw6b95Q7vphukLyN--VX5jFIEyU7AGxdb",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCvkaCOi21xKBE6yJs0dmToFvLGpPY7dYzXmnsZu_LcpiJ4GjokIFKrRVIwz51UtMGoR0QoVQLBoaWxfi2hxNJu6X0YLVRmhBBBFIYGY9NpzKwlpzcmzBZyxwvRnhGmEfahk4C_L0_PvCJS3JtopnwNQeecbLDhJfjZQmvC-P4YcPHf1nQ-c_Uv7P7abj-FIqx78BviPdZN0RCopG43woJMyjS2_Fs5lxTJDDpMKPoud0eR1I1wvm4gEcd-nuX6y57y1LxjjCTU5ktg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALUdZYb3Ooel_iqsltjJcGrH7IRatfstn7a5PTtSPtlmuXrdI_a14WC27VBwMJQqnB0-BwuPbaFNY0KMB2xRiWxiZ5QJOljN2PCfpkXWMcLYKoa145ApYvUNDVwhHf_OzplbQGXzhwxTPx4kuVcxeiKGH-G7yJ3eZfe_LSZZtnCKOCuSSpGwBs1IV2UX5j5pdvfWNr7NWDgKI06fzKxMMy_ffYHKXNvPCcqTBqOfmmK4_ATOx9ZJwDxQowqmVsQ2aLKfQ1d8I0D28g",

  ];

  const uniLogos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBB4gExV7EhKYNPCWtx2ySUE4gZWCOrwo47Hko291pH6jxrK5RGOcs3WwItyVMZ_CO1J-Ld25jeWq6Qd9EoxVv7OcRfV2ymA1sX31jmBg26slmQ5P5AGl8rwKktWn_jfqtUnw5kBPqg_OK0LZTHGoaYysfkk9UpJid4EyrMxMd3E420rv2dyksQZK8R0r8uI35nxzJj6Hh9pQ9VbHpyaQs4L9k2bVc6480zyex3HRWEfqwB7xess0wzUDT1axUWAYGJO2eimD0Xhczh",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDetACmFxPVpu8751WVfMmiMI2Cwenr2NkKLA6SXgg5BlqQzi_isakjZSmx6qcxpTDM_fKwdSw58BaQJ0O2lwwRsWelX54xz0F2aWRqQNlifl0byYXAG_GEw2xwnvRHf-TzW9biqliYB3DvpxtwJlwtcZFzY9afiAaF4A3Vx-Qz5rvCQIU8beZJQ7W1NrS7E10ZqxiGL4oqhBrfGwmNLrapwVPXsriSTs2nVypCcjEZyrQfhVjZOCz6cICRnWW7cysGPHFneaOOKnNI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDTrY8IJINJQ6arHub4SbYDvfNo9lF6HtxR1hCbvmMYtDq3YGNCYaZ3a_4_r1V-Hg7VAferufa4o1-_m5oGz3wb452Yz8Z-3_qR9pAjey3w_CWdYoW2dZuI2H0uzIUyUuOJzOHAfEEBSdsCA2_JrdCAAY_nqi-Qf3fKRAiFnJEadkoEab6rOR36wBj-QCvEg1xbtAnZ3-0_e7jU10og5VDIevcfaFYQcKo0jodzc_Leh4LbzvI2nXd3W1PDeIh1VhAR0-_-j_BPHacH"
  ];

  return (
    <section className="py-section-padding-lg bg-surface-container-low" id="network">
      <div className="max-w-container-max mx-auto px-gutter fade-in-up">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-on-surface mb-4">Elite Global Partnerships</h2>
            <p className="font-body-md text-on-surface-variant">Our network spans across multi-national corporations and world-class educational institutions, ensuring a diverse range of opportunities for our talent pool.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Partner Categories */}
        <div className="space-y-24">
          {/* MNCs */}
          <div className="fade-in-up">
            <h3 className="font-label-sm text-primary uppercase tracking-widest mb-10 border-l-4 border-primary pl-4">Multi-National Corporations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {mncLogos.map((src, i) => (
                <div key={i} className="h-32 relative bg-background border border-outline-variant rounded-lg flex items-center justify-center group hover:border-primary transition-all p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Corporate logo ${i + 1}`}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Universities */}
          <div className="fade-in-up">
            <h3 className="font-label-sm text-primary uppercase tracking-widest mb-10 border-l-4 border-primary pl-4">Academic & Research Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {uniLogos.map((src, i) => (
                <div key={i} className="h-32 relative bg-background border border-outline-variant rounded-lg flex items-center justify-center group hover:border-primary transition-all p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`University logo ${i + 1}`}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
