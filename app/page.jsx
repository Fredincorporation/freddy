"use client"
import { motion } from 'framer-motion'
import '../styles/globals.css'
import MeshBackground from '../components/MeshBackground'
import Pipeline from '../components/Pipeline'
import SocialNodes from '../components/SocialNodes'
import TerminalContract from '../components/TerminalContract'
import IntakeSections from '../components/IntakeSections'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Page() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <head>
        <meta name="google-site-verification" content="zHksZXGTpV8FwIAcR8Wdx6EN5ivhAQ_hqGmR_JeBOKo" />
      </head>
      <MeshBackground />

      <main className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* ---- Hero ---- */}
        <section className="section hero">
          <motion.div className="hero-content" {...fadeIn}>
            <span className="hero-kicker">Creative Technologist — Intake</span>
            <h1 className="hero-title">
              We build measurable growth with a{' '}
              <span className="highlight">30/70 aligned model</span>
            </h1>
            <p className="hero-desc">
              We replace brittle flat-fee relationships with a performance-first partnership
              that scales spend into results. Read the contract, explore the pipeline, or
              connect directly.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contract">
                View contract
              </a>
              <a className="btn btn-secondary" href="/comparison">
                See the math →
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

        {/* ---- Intake Sections (Requirements & Delivery) ---- */}
        <IntakeSections />

        {/* ---- Connect ---- */}
        <section className="section">
          <motion.div {...fadeIn} className="card" style={{ padding: '40px 36px' }}>
            <div className="section-label" style={{ marginBottom: 8 }}>Connect</div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Reach out</h2>
            <SocialNodes />
          </motion.div>
        </section>

        {/* ---- Footer ---- */}
        <footer className="footer">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-4 text-xs text-[var(--text-secondary)]">
            <span>&copy; {new Date().getFullYear()} Creative Technologist</span>
            <span className="hidden sm:inline w-px h-3 bg-[var(--border)]" />
            <a href="/comparison" className="hover:text-[var(--accent-2)] transition-colors">Fixed Fees Are Dead</a>
            <span className="hidden sm:inline w-px h-3 bg-[var(--border)]" />
            <a href="/niche/fashion" className="hover:text-[var(--accent-2)] transition-colors">Fashion</a>
            <a href="/niche/electronics" className="hover:text-[var(--accent-2)] transition-colors">Electronics</a>
            <a href="/niche/wholesale" className="hover:text-[var(--accent-2)] transition-colors">Wholesale</a>
            <a href="/partnership" className="hover:text-[var(--accent-2)] transition-colors">Partnerships</a>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[2px]">Built for conversion.</p>
        </footer>

      </main>
    </div>
  )
}
