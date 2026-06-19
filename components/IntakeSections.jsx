"use client"
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.08 },
}

const slideIn = {
  initial: { opacity: 0, x: -24, rotateY: 4 },
  whileInView: { opacity: 1, x: 0, rotateY: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const slideInRight = {
  initial: { opacity: 0, x: 24, rotateY: -4 },
  whileInView: { opacity: 1, x: 0, rotateY: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const DiamondIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 text-accent-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const REQUIREMENTS = [
  {
    title: 'Infrastructure Capital',
    desc: 'A minimum of $50 allocated to cover premium cloud hosting and a custom domain registry for your first year. You handle the purchase directly — no funds pass through us. This ensures your storefront runs on a fast, secure, branded stack from day one.',
  },
  {
    title: 'Physical Staging Hub',
    desc: 'Possession of an active physical storefront, retail brick-and-mortar location, or localized commercial warehouse to fulfill incoming purchases.',
  },
  {
    title: 'Visual Asset Library',
    desc: 'Pre-existing professional product imagery, or an explicit operational commitment to capture clean, high-resolution photography of physical stock inventory.',
  },
  {
    title: 'Deployment Window Awareness',
    desc: 'Strict acknowledgement that comprehensive architecture engineering, database tuning, and cross-platform app initialization requires an end-to-end timeline of 3 to 6 weeks to go fully live.',
  },
  {
    title: 'KYC Payment Validation',
    desc: 'Provision of valid government identity or business registration profiles, which are mandatory to natively configure and clear localized automated merchant gateways.',
  },
  {
    title: 'Wholesale Cost Transparency',
    desc: 'A completely transparent breakdown of your exact baseline Cost of Goods Sold (COGS) to programmatically calibrate the automated 30/70 transaction profit split logs.',
  },
]

const DELIVERABLES = [
  {
    title: 'Asynchronous Feedback Loops',
    desc: 'Weekly visual engineering updates. Clients receive a private staging URL to monitor development builds, interface responsiveness, and administrative control suites live.',
  },
  {
    title: 'Bespoke Checkout Velocity',
    desc: 'Zero generic, bloated off-the-shelf templates. Expect a fully tailored frontend app environment designed solely to reduce friction and accelerate conversion optimization.',
  },
  {
    title: 'Automated Revenue Dispatches',
    desc: 'Implementation of split-settlement processor APIs to instantly route performance shares straight into separate banking registers cleanly on a per-transaction scale.',
  },
  {
    title: 'Aggressive Search Engine Visibility',
    desc: 'Injected metadata schemas, crawl path optimizations, and systematic rich snippets configured to capture high-intent buyer traffic organically on search layers from day one.',
  },
  {
    title: 'Continuous Infrastructure Guard',
    desc: 'Ongoing server performance tuning, zero-downtime security patch deployments, and codebase maintenance post-launch to keep the scaling engine completely bulletproof.',
  },
]

export default function IntakeSections() {
  return (
    <>
      {/* ================================================================
          SECTION 1 — WHAT IS REQUIRED FROM YOU
          ================================================================ */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent-2 mb-3 px-4 py-1.5 border border-[rgba(125,211,252,0.3)] rounded-full">
              Onboarding Prerequisites
            </span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] text-[#f1f5f9]">
              What Is Required From You
            </h2>
            <p className="mt-3 text-[clamp(15px,1.6vw,18px)] text-[#94a3b8] max-w-xl leading-relaxed">
              The Prerequisite Blueprint — every partner must satisfy these absolute requirements before architecture engineering begins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 perspective-[1200px]">
            {REQUIREMENTS.map((item, i) => (
              <motion.div
                key={item.title}
                {...(i % 2 === 0 ? slideIn : slideInRight)}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
                className="group relative bg-[#0a0e17] border-2 border-[#1e293b] rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/60 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-emerald-500/5 hover:-translate-y-1"
              >
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/[0.03] to-transparent" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#f1f5f9] font-bold text-base mb-1.5 group-hover:text-emerald-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <CheckIcon />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — WHAT YOU SHOULD EXPECT
          ================================================================ */}
      <section className="py-24 relative border-t border-[#1e293b]/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent-2 mb-3 px-4 py-1.5 border border-[rgba(125,211,252,0.3)] rounded-full">
              Delivery Pipeline
            </span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] text-[#f1f5f9]">
              What You Should Expect
            </h2>
            <p className="mt-3 text-[clamp(15px,1.6vw,18px)] text-[#94a3b8] max-w-xl leading-relaxed">
              The Strategic Delivery Pipeline — high-value milestones and execution standards you will experience through the partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 perspective-[1200px]">
            {DELIVERABLES.map((item, i) => (
              <motion.div
                key={item.title}
                {...(i % 2 === 0 ? slideInRight : slideIn)}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
                className="group relative bg-[#0a0e17] border-2 border-[#1e293b] rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/60 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-emerald-500/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/[0.03] to-transparent" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-1/10 border border-accent-1/20 flex items-center justify-center text-accent-1 font-bold text-sm group-hover:bg-accent-1/20 group-hover:border-accent-1/40 transition-all duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#f1f5f9] font-bold text-base mb-1.5 group-hover:text-accent-1 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <DiamondIcon />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom summary bar */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="mt-14 p-6 border-2 border-[#1e293b] rounded-xl bg-[#0a0e17]/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-[#94a3b8]">
              <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold whitespace-nowrap">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                30/70 Partnership
              </span>
              <span className="hidden sm:block w-px h-5 bg-[#1e293b]" />
              <span>Engineering starts once all prerequisites are verified and your hosting & domain allocation is confirmed.</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
