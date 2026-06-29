import Image from "next/image";

export default function CareerSuccessTeam() {
  return (
    <section className="py-section-padding-lg px-gutter max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 fade-in-up">
        <div className="max-w-2xl">
          <h2 className="font-headline-md text-headline-md mb-4">Career Success Team</h2>
          <p className="text-on-surface-variant font-body-lg">
            Meet the architects of your next chapter. Our consultants bring decades of industry expertise and a refined eye for potential.
          </p>
        </div>
        <a className="text-primary font-label-sm border-b border-primary pb-1 hover:opacity-70 transition-opacity" href="#">
          View Leadership Team
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="group fade-in-up">
          <div className="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden mb-6 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOeaWYkJb1OUHnhr7NCfbZkDxmJH_sMmzYv0TEoqReHHCXMPQZ-jb2o2B0Sr5cbb3GLibiCzP5FFr8n2b_NFqB8Qzf9NBBANW5qmMzPQazAZ72bvsosAR2ou7VeOaDrMAmrPQErdgMQMVbPXOxJt5i_ZwD1vLbutB_NeVac687VjVtWfwXLBet10j8gFFU-U0EFudUw7cRUXder5ULikloeWlbWtINyvklQuZBT0GMGMyMGtA_agVch91JZaTJqghqRM1dymhu4Yin"
              alt="Eleanor Vance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h4 className="font-headline-md text-xl mb-1">Eleanor Vance</h4>
          <p className="text-primary font-label-sm uppercase tracking-wider">Managing Director</p>
        </div>
        <div className="group fade-in-up" style={{ transitionDelay: "100ms" }}>
          <div className="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden mb-6 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD18SXdQsMmGxfXSVjrFgXLuE1tH6Kb7x897yJUtaisVkcA4-EP1_ZIt2gIl1cX_fR7wftgkA0bm9GIAwkMiV4NFQvTNboalNIVkH4eqXq-cjgfqIkYtmuI4cufBG3Nl8N6zzeMLD_Rq8AQeYDG09R_0KTL2Qglwg7oxovkqQzxJYnIExM_G602Ob55zbs508u-bLJhQZlqefhvEvbhoT7EDFvJIntbsT31lkk5-rMnxwJSD5VRccn4YRZHRwIS7Gy6rLjYUYk1B6ni"
              alt="Julian Thorne"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h4 className="font-headline-md text-xl mb-1">Julian Thorne</h4>
          <p className="text-primary font-label-sm uppercase tracking-wider">Head of Strategy</p>
        </div>
        <div className="group fade-in-up" style={{ transitionDelay: "200ms" }}>
          <div className="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden mb-6 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmr4_ua6eTWOtZ-OAajbPI-M4G9REV2lPnUu5z67JBaAOeFBKAaBZzY47ZopcRsWO8jFzo3uaSDYObEwPvbNeBCSfC0mhH5ULhGGOtsvHNAev6OVJxKHx1CGbnquGLYkNU8qlT_lOraI6CUvJOhYOrsg4JPYwGzKPo40o1aNUrgyxJ6l9DUN-8oIMZ8dHMZNLNTHDEeDZxb11VCfob8QsZCIBpWgaw6_gfpOLWx7yGM92X8LmRlpBb7d3oTzV417wK2p_CN8C6yNC"
              alt="Sophia Chen"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h4 className="font-headline-md text-xl mb-1">Sophia Chen</h4>
          <p className="text-primary font-label-sm uppercase tracking-wider">Senior Consultant</p>
        </div>
        <div className="group fade-in-up" style={{ transitionDelay: "300ms" }}>
          <div className="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden mb-6 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEDLfoL2INxa2zA41R-T3ey_ZTGlw7c6Bq_4-0ZVzgkNZLdekILAa42-4kGdy2UkxPnfBuJc2sv-msXqacg4zEPHu14Oj8SYr7tfpU6gkX_ovrCJEKWTGoJkijDCE3cvjsADF3bmC2MZHPukRKUf8nntwCzz3lSjzgepfUyvf4jUH6tKVOUPmpziFu38gVSqNIDUFw-wpFFx5V14u2JRIZksBe-TXQ_0vF7GWkBM0suqbFpo1we7EexqHUhH5GP159Kw3GeehU_SGQ"
              alt="Marcus Reed"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h4 className="font-headline-md text-xl mb-1">Marcus Reed</h4>
          <p className="text-primary font-label-sm uppercase tracking-wider">Client Relations</p>
        </div>
      </div>
    </section>
  );
}
