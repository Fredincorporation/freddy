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
 * The 30/70 model: a straight split of gross profit.
 * - 30% of gross profit to the Service Provider (us)
 * - 70% of gross profit to the Client / Partner (you)
 *
 * No monthly budgets, no retainer math, no performance target jargon —
 * just a clean percentage share of gross profit.
 */

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

          <div className="mt-8">
            <div className="card" style={{ padding: 24 }}>
              <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: 8 }}>Simple split — no budgets, no targets</h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                This is a straight split of gross profit: <strong>30% to us</strong>, <strong>70% to you</strong>.
                There are no monthly-budget scenarios, no hidden retainers, and no confusing "targets" to qualify payment.
              </p>
              <p className="mt-4 text-sm text-[var(--text-secondary)]">
                Example: if gross profit for a period is $10,000, the split is $3,000 to the Service Provider and $7,000 to the Partner.
              </p>
            </div>
          </div>
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
