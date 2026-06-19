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
  '30% baseline covers operations & testing',
  '70% performance share tied to real KPIs',
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
          <p className="sub">We only win when you win.</p>
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
          <h4>Baseline: 30%</h4>
          <p>Secures operations, platform access, and baseline staffing. No frills — just the essentials to keep things running.</p>
        </div>
        <div className="card step-card">
          <div className="step-number" style={{ color: 'var(--accent-2)' }}>02</div>
          <h4>Performance: 70%</h4>
          <p>Funds high-impact experiments, ad spend, and creative testing. Allocated based on what&rsquo;s actually working.</p>
        </div>
        <div className="card step-card">
          <div className="step-number" style={{ color: 'var(--accent-3)' }}>03</div>
          <h4>Continuous Optimization</h4>
          <p>Real-time measurement drives reallocation to the highest-performing channels. Your budget adapts, not stagnates.</p>
        </div>
      </motion.div>
    </>
  )
}
