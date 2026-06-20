"use client"
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const FLAT_FEATURES = [
  'Fixed monthly fee regardless of performance',
  'Agency incentives aligned with hours, not results',
  'Limited transparency into spend allocation',
  'Hard to reallocate budget mid-campaign',
  'Misaligned risk — client bears all downside',
]

const PERF_FEATURES = [
  '30% of gross profit to the Service Provider; 70% to the Partner',
  'Full transparency with live dashboards',
  'Budget reallocated dynamically to best channels',
  'Shared risk — provider only earns on results',
]

export default function Pipeline() {
  return (
    <>
      <motion.div className="pipeline-section" {...fadeUp}>
        <div className="card pipeline-card">
          <span className="badge badge-flat">Traditional</span>
          <h3>Flat-Rate Agency</h3>
          <p className="sub">You pay the same no matter what.</p>
          <ul>
            {FLAT_FEATURES.map((f, i) => (
              <li key={i}>
                <span className="cross">✕</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pipeline-arrow">→</div>

        <div className="card pipeline-card" style={{ borderColor: 'var(--accent-1)' }}>
          <span className="badge badge-performance">30/70 Model</span>
          <h3>Performance Partnership</h3>
          <p className="sub">We only earn from gross profit — aligned incentives.</p>
          <ul>
            {PERF_FEATURES.map((f, i) => (
              <li key={i}>
                <span className="check">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div className="steps" {...fadeUp}>
        <div className="card step-card">
          <div className="step-number" style={{ color: 'var(--accent-1)' }}>01</div>
          <h4>Pure Percentage Split</h4>
          <p>We split gross profit: 30% to the Service Provider, 70% to the Partner. No retainers, no monthly budget tiers, no target gates.</p>
        </div>
        <div className="card step-card">
          <div className="step-number" style={{ color: 'var(--accent-2)' }}>02</div>
          <h4>Aligned Incentives</h4>
          <p>We only earn when you earn — that drives decisions toward profit, not billable hours.</p>
        </div>
        <div className="card step-card">
          <div className="step-number" style={{ color: 'var(--accent-3)' }}>03</div>
          <h4>Transparent Settlement</h4>
          <p>Gross profit calculation is documented and auditable; payouts are split per the agreed percentage.</p>
        </div>
      </motion.div>
    </>
  )
}
