"use client"
import { motion } from 'framer-motion'
import MeshBackground from '../../../components/MeshBackground'
import Pipeline from '../../../components/Pipeline'
import TerminalContract from '../../../components/TerminalContract'
import SocialNodes from '../../../components/SocialNodes'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function NicheLanding({ niche, slug }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <MeshBackground />

      <main className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* ---- Breadcrumb hint ---- */}
        <nav className="text-[0.75rem] text-[#64748b] mt-6 mb-0 font-mono tracking-wide">
          <a href="/" className="hover:text-[var(--accent-2)] transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-[var(--accent-2)]">{niche.label}</span>
        </nav>

        {/* ---- Hero ---- */}
        <section className="section hero">
          <motion.div className="hero-content" {...fadeIn}>
            <span className="hero-kicker">{niche.heroKicker}</span>
            <h1 className="hero-title">
              {niche.heroTitlePrefix}{' '}
              <span className="highlight">{niche.heroTitleHighlight}</span>
            </h1>
            <p className="hero-desc">{niche.heroDesc}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contract">
                View contract
              </a>
              <a className="btn btn-secondary" href="#pipeline">
                See data flow
              </a>
            </div>
          </motion.div>
        </section>

        {/* ---- Pipeline Comparison ---- */}
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

        {/* ---- Niche-specific summary card ---- */}
        <section className="section">
          <motion.div {...fadeIn} className="card" style={{ padding: '36px' }}>
            <span className="inline-block text-[0.65rem] font-bold tracking-[2px] uppercase text-[var(--accent-1)] mb-2">
              {niche.label} Partnership
            </span>
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold mb-4">
              What you get with {niche.label.toLowerCase()}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-sm mb-2 text-[var(--accent-4)]">Requirements</h3>
                <ul className="text-sm text-[var(--text-secondary)] space-y-1.5">
                  {niche.requirementsExtra.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--accent-4)] mt-0.5">▸</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-2 text-[var(--accent-2)]">Deliverables</h3>
                <ul className="text-sm text-[var(--text-secondary)] space-y-1.5">
                  {niche.deliverablesExtra.map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--accent-2)] mt-0.5">▸</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---- Connect ---- */}
        <section className="section">
          <motion.div {...fadeIn} className="card" style={{ padding: '40px 36px' }}>
            <div className="section-label" style={{ marginBottom: 8 }}>Connect</div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Reach out</h2>
            <SocialNodes />
          </motion.div>
        </section>

        <footer className="footer">
          &copy; {new Date().getFullYear()} Creative Technologist — Built for conversion.
        </footer>
      </main>
    </div>
  )
}
