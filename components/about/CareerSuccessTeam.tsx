"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Eleanor Vance",
    role: "Managing Director",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOeaWYkJb1OUHnhr7NCfbZkDxmJH_sMmzYv0TEoqReHHCXMPQZ-jb2o2B0Sr5cbb3GLibiCzP5FFr8n2b_NFqB8Qzf9NBBANW5qmMzPQazAZ72bvsosAR2ou7VeOaDrMAmrPQErdgMQMVbPXOxJt5i_ZwD1vLbutB_NeVac687VjVtWfwXLBet10j8gFFU-U0EFudUw7cRUXder5ULikloeWlbWtINyvklQuZBT0GMGMyMGtA_agVch91JZaTJqghqRM1dymhu4Yin"
  },
  {
    name: "Julian Thorne",
    role: "Head of Strategy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD18SXdQsMmGxfXSVjrFgXLuE1tH6Kb7x897yJUtaisVkcA4-EP1_ZIt2gIl1cX_fR7wftgkA0bm9GIAwkMiV4NFQvTNboalNIVkH4eqXq-cjgfqIkYtmuI4cufBG3Nl8N6zzeMLD_Rq8AQeYDG09R_0KTL2Qglwg7oxovkqQzxJYnIExM_G602Ob55zbs508u-bLJhQZlqefhvEvbhoT7EDFvJIntbsT31lkk5-rMnxwJSD5VRccn4YRZHRwIS7Gy6rLjYUYk1B6ni"
  },
  {
    name: "Sophia Chen",
    role: "Senior Consultant",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADmr4_ua6eTWOtZ-OAajbPI-M4G9REV2lPnUu5z67JBaAOeFBKAaBZzY47ZopcRsWO8jFzo3uaSDYObEwPvbNeBCSfC0mhH5ULhGGOtsvHNAev6OVJxKHx1CGbnquGLYkNU8qlT_lOraI6CUvJOhYOrsg4JPYwGzKPo40o1aNUrgyxJ6l9DUN-8oIMZ8dHMZNLNTHDEeDZxb11VCfob8QsZCIBpWgaw6_gfpOLWx7yGM92X8LmRlpBb7d3oTzV417wK2p_CN8C6yNC"
  },
  {
    name: "Marcus Reed",
    role: "Client Relations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEDLfoL2INxa2zA41R-T3ey_ZTGlw7c6Bq_4-0ZVzgkNZLdekILAa42-4kGdy2UkxPnfBuJc2sv-msXqacg4zEPHu14Oj8SYr7tfpU6gkX_ovrCJEKWTGoJkijDCE3cvjsADF3bmC2MZHPukRKUf8nntwCzz3lSjzgepfUyvf4jUH6tKVOUPmpziFu38gVSqNIDUFw-wpFFx5V14u2JRIZksBe-TXQ_0vF7GWkBM0suqbFpo1we7EexqHUhH5GP159Kw3GeehU_SGQ"
  }
];

// Duplicate for smooth infinite scrolling
const marqueeTeam = [...teamMembers, ...teamMembers, ...teamMembers];

export default function CareerSuccessTeam() {
  return (
    <section className="py-section-padding-lg overflow-hidden relative">
      <div className="px-gutter max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Career Success Team</h2>
            <p className="text-on-surface-variant font-body-lg">
              Meet the architects of your next chapter. Our consultants bring decades of industry expertise and a refined eye for potential.
            </p>
          </div>
          <a className="text-primary font-label-sm border-b border-primary pb-1 hover:opacity-70 transition-opacity whitespace-nowrap" href="#">
            View Leadership Team
          </a>
        </motion.div>
      </div>

      {/* Marquee Carousel */}
      <div className="w-full flex overflow-hidden">
        <motion.div
          className="flex gap-6 px-3 w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeTeam.map((member, index) => (
            <div key={index} className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 group">
              <div className="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden mb-6 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h4 className="font-headline-md text-xl mb-1 text-on-surface">{member.name}</h4>
              <p className="text-primary font-label-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
