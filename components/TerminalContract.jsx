"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

const CLAUSES = [
  {
    title: '1. Parties',
    body: '1.1 "Client" refers to the individual or entity receiving services under this Agreement.\n1.2 "Service Provider" refers to the agency, firm, or individual delivering the services described herein.',
  },
  {
    title: '2. Purpose',
    body: 'The Parties agree to engage in a performance-aligned services relationship in which compensation is split between a baseline allocation (30%) and a performance allocation (70%). The objective is to align incentives, accelerate growth, and optimize return on investment (ROI).',
  },
  {
    title: '3. Scope of Services',
    body: 'The Service Provider will deliver strategic planning, execution, measurement, and optimization services related to marketing, product, and growth initiatives. Deliverables include campaign design, creative assets, analytics instrumentation, A/B testing frameworks, media buys (if applicable), and reporting dashboards.',
  },
  {
    title: '4. Term',
    body: 'This Agreement commences on the Effective Date and continues for the Initial Term stated in the SOW. Thereafter, the Agreement will automatically renew for successive renewal terms unless either Party provides written notice of non-renewal at least 30 days prior to the end of the then-current term.',
  },
  {
    title: '5. Compensation & Payment Structure',
    body: '5.1 Baseline Allocation (30%): The Client pays a baseline monthly retainer equal to 30% of the agreed total monthly budget. This covers core operations, minimum resource allocation, platform access, and guaranteed baseline staffing.\n\n5.2 Performance Allocation (70%): 70% of the monthly budget is designated as the performance allocation. Payment is contingent upon agreed-upon performance metrics.\n\n5.3 Invoices: Baseline invoices at the start of each period. Performance invoices monthly in arrears with calculation details.\n\n5.4 Payment Terms: All invoices due within 30 days of receipt. Late payments accrue interest at the lesser of 1.5% per month or the maximum permitted by law.',
  },
  {
    title: '6. Performance Metrics & Calculation',
    body: '6.1 KPIs: Mutually agreed KPIs included in the SOW — qualified leads, conversion rate improvements, revenue uplift, ROAS, CAC improvements, or other objective outcomes.\n\n6.2 Measurement: Transparent dashboards and documented instrumentation. Parties agree on data sources and attribution windows.\n\n6.3 Performance Fee Calculation: The performance allocation is applied to channels and experiments. The fee is calculated based on observed KPI deltas relative to baseline forecasts. If targets are exceeded, the fee is the agreed share of surplus value. If not met, the remediation process in Section 7 applies.',
  },
  {
    title: '7. Remediation & Adjustments',
    body: 'If performance falls materially below thresholds, the Service Provider proposes corrective actions at no additional baseline cost. Either Party may trigger a review and renegotiation of KPIs. Performance calculations are subject to audit with reasonable notice.',
  },
  {
    title: '8. Intellectual Property',
    body: 'The Service Provider retains ownership of pre-existing IP and templates. The Client owns final deliverables created specifically for them upon full payment, subject to third-party license terms. The Service Provider grants a perpetual, non-exclusive, worldwide license to use deliverables.',
  },
  {
    title: '9. Confidentiality',
    body: 'Each Party agrees to maintain the confidentiality of non-public information exchanged during the Term. Confidential information will not be disclosed except as required by law or with prior written consent.',
  },
  {
    title: '10. Limitations & Termination',
    body: 'Neither Party will be liable for consequential, incidental, special, or punitive damages. Aggregate liability is limited to total fees paid in the six months preceding the claim.\n\nEither Party may terminate for convenience upon 60 days written notice, or for material breach if not cured within 30 days. Upon termination, the Service Provider delivers work-in-progress materials; the Client pays for services performed up to termination.',
  },
]

export default function TerminalContract() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="contract-section">
      <div className="contract-preamble">
        30/70 SERVICE AGREEMENT — Last updated {new Date().getFullYear()}
      </div>
      {CLAUSES.map((clause, i) => {
        const isOpen = openIndex === i
        return (
          <motion.div
            key={i}
            className={`contract-clause ${isOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
          >
            <div
              className="contract-clause-header"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenIndex(isOpen ? -1 : i) }}
              aria-expanded={isOpen}
            >
              <span>{clause.title}</span>
              <span className="toggle">▼</span>
            </div>
            <div className="contract-clause-body">
              {clause.body.split('\n').map((line, j) => (
                <p key={j} style={{ marginBottom: line.trim() ? '6px' : '0' }}>{line || '\u00A0'}</p>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
