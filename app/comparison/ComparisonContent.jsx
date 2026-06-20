"use client"
import { motion } from 'framer-motion'
import MeshBackground from '../../components/MeshBackground'
import Pipeline from '../../components/Pipeline'
import TerminalContract from '../../components/TerminalContract'
import SocialNodes from '../../components/SocialNodes'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

/**
 * The 30/70 model: of the client's total monthly budget,
 * 30% is the guaranteed baseline (ops, staffing, platform),
 * 70% is performance-contingent (only paid if KPIs are met).
 *
 * Under a flat $5k retainer, 100% is paid regardless of outcomes.
 * Under 30/70, if performance targets are missed, the client
 * only pays the 30% baseline — significantly less risk.
 */
const SCENARIOS = [
  {
    monthlyBudget: 10000,
    flatRetainer: 5000,
    baseline30: 3000,
    performance70: 7000,
    paidIfKpisMissed: 3000,
    savedVsFlat: '$2,000 saved when KPIs are not met',
  },
  {
    monthlyBudget: 15000,
    flatRetainer: 5000,
    baseline30: 4500,
    performance70: 10500,
    paidIfKpisMissed: 4500,
    savedVsFlat: '$500 saved when KPIs are not met',
  },
  {
    monthlyBudget: 20000,
    flatRetainer: 5000,
    baseline30: 6000,
    performance70: 14000,
    paidIfKpisMissed: 6000,
    savedVsFlat: 'Comparable — but 70% is results-driven',
  },
  {
    monthlyBudget: 30000,
    flatRetainer: 5000,
    baseline30: 9000,
    performance70: 21000,
    paidIfKpisMissed: 9000,
    savedVsFlat: 'Higher ceiling — you only pay for performance',
  },
]

export default function ComparisonContent() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <MeshBackground />
      <main className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* ---- Breadcrumb ---- */}
        <nav className="text-[0.75rem] text-[#64748b] mt-6 mb-0 font-mono tracking-wide">
          <a href="/" className="hover:text-[var(--accent-2)] transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-[var(--accent-2)]">Fixed Fees Are Dead</span>
        </nav>

        {/* ---- Article Header ---- */}
        <section className="section" style={{ paddingTop: 80, paddingBottom: 40 }}>
          <motion.div {...fadeIn}>
            <span className="hero-kicker">Comparison Analysis</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>
              Fixed Agency Fees Are Dead: Why a{' '}
              <span className="highlight">30/70 Profit Split</span> Outperforms a $5,000 Retainer
            </h1>
            <p className="hero-desc" style={{ maxWidth: 700 }}>
              Almost every e-commerce agency charges a flat monthly retainer — $3k, $5k, even $10k — 
              whether your store makes $1,000 or $100,000 that month. That model is broken. 
              Here is exactly why a performance-aligned 30/70 partnership destroys the old agency model 
              for serious inventory owners.
            </p>
          </motion.div>
        </section>

        {/* ---- The Math Table ---- */}
        <section className="section" style={{ paddingTop: 20, paddingBottom: 60 }}>
          <motion.div {...fadeIn}>
            <div className="section-label">The Numbers</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(24px,3.5vw,36px)' }}>
              Flat-Rate vs 30/70 at Different Budget Levels
            </h2>
          </motion.div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--border-bold)]">
                  <th className="text-left py-3 px-4 font-bold text-[var(--text)]">Monthly Budget</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text)]">Flat Retainer (100% due)</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text)]">30/70 Baseline (30%)</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text)]">30/70 Performance (70%)</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--accent-4)]">If KPIs Missed</th>
                </tr>
              </thead>
              <tbody>
                {SCENARIOS.map((s, i) => (
                  <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors">
                    <td className="py-3 px-4 font-bold">${s.monthlyBudget.toLocaleString()}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">
                      ${s.flatRetainer.toLocaleString()}
                      <span className="block text-[0.6rem] text-[#ef4444] opacity-70">100% paid regardless</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--accent-4)] font-bold">
                      ${s.baseline30.toLocaleString()}
                      <span className="block text-[0.6rem] text-[var(--text-secondary)] font-normal">Guaranteed</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--accent-1)]">
                      ${s.performance70.toLocaleString()}
                      <span className="block text-[0.6rem] text-[var(--text-secondary)] font-normal">Only if KPIs met</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--accent-4)] text-xs font-semibold">
                      Pay ${s.paidIfKpisMissed.toLocaleString()}
                      <span className="block text-[0.55rem] text-[var(--text-secondary)] font-normal">{s.savedVsFlat}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            <strong className="text-[var(--text)]">The key insight:</strong> With a flat $5k retainer, 
            you pay $5k every month no matter what. With the 30/70 model, if performance targets aren't 
            met, you only pay the 30% baseline. At a $10k/mo budget that means you save $2,000 in months 
            where results aren't delivered. And when KPIs <em>are</em> exceeded, both parties share in the 
            upside — because the 70% allocation funds the growth engine that made it happen.
          </p>
        </section>

        {/* ---- Why Retainers Fail ---- */}
        <section className="section" style={{ paddingTop: 20, paddingBottom: 60 }}>
          <motion.div {...fadeIn} className="card" style={{ padding: '36px' }}>
            <div className="section-label">Why Retainers Are Toxic</div>
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold mb-4">
              The fatal flaw in fixed-fee agencies
            </h2>
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                <strong className="text-[var(--text)]">The Incentive Problem:</strong> A flat-rate agency 
                gets paid the same whether your conversion rate is 2% or 5%. Their revenue is decoupled 
                from your success. That means they have zero financial urgency to optimize aggressively. 
                They can coast on the same retainer for months without delivering measurable improvement.
              </p>
              <p>
                <strong className="text-[var(--text)]">The Scope Creep Trap:</strong> When something breaks, 
                needs a redesign, or requires a new feature, the agency treats it as "out of scope" and 
                bills extra. Your retainer only covers the bare minimum. Meanwhile, our 30/70 model includes 
                continuous optimization as part of the performance allocation — because improving your store 
                directly increases our revenue.
              </p>
              <p>
                <strong className="text-[var(--text)]">The Risk Asymmetry:</strong> With flat fees, you bear 
                100% of the downside. If the store flops, the agency still collected every month. Under 30/70, 
                we share the risk. If the store doesn't generate profit, we don't get paid. That changes 
                every decision we make.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ---- Pipeline ---- */}
        <section id="pipeline" className="section">
          <motion.div {...fadeIn}>
            <div className="section-label">How It Works</div>
            <h2 className="section-title">30/70 vs Flat-Rate</h2>
          </motion.div>
          <Pipeline />
        </section>

        {/* ---- Contract ---- */}
        <section id="contract" className="section">
          <motion.div {...fadeIn}>
            <div className="section-label">Legal</div>
            <h2 className="section-title">Full 30/70 Contract</h2>
          </motion.div>
          <TerminalContract />
        </section>

        {/* ---- CTA ---- */}
        <section className="section">
          <motion.div {...fadeIn} className="card" style={{ padding: '40px 36px', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              Ready to align incentives?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto mb-6 leading-relaxed">
              Stop paying for agency overhead. Start a partnership where your success is our success.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a className="btn btn-primary" href="/">Back to home</a>
              <SocialNodes />
            </div>
          </motion.div>
        </section>

        <footer className="footer">
          &copy; {new Date().getFullYear()} Creative Technologist — Built for conversion.
        </footer>
      </main>
    </div>
  )
}
