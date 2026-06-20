"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

const CLAUSES = [
  {
    title: '1. Parties',
    body: 'Client: the individual or entity receiving services under this Agreement.\n\nService Provider: the company or contractor providing performance-aligned services under this Agreement.\n\nEach Party may be referred to individually as a "Party" and collectively as the "Parties."',
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
    body: '5.1 Gross-Profit Split: Compensation is calculated as a percentage split of gross profit for the agreed settlement period. The Parties agree to a 30% share to the Service Provider and a 70% share to the Client (the Partner).\n\n5.2 Settlement: Gross profit is calculated per the agreed accounting and attribution methodology (see Section 6). Payouts are settled monthly (or per the agreed payment cadence) with line-item calculation details provided.\n\n5.3 Invoices: The Service Provider issues settlement statements and invoices reflecting the Service Provider share. Invoices are due within 30 days of issuance. Late payments accrue interest at the lesser of 1.5% per month or the maximum permitted by law.',
  },
    {
    title: '6. Gross-Profit Calculation & Measurement',
    body: '6.1 Gross-Profit Definition: Gross profit for settlement purposes is defined in the SOW and includes revenue less agreed direct costs (e.g., refunds, transaction fees, agreed COGS). Parties must agree any adjustments in writing.\n\n6.2 Measurement & Attribution: Measurement data sources, attribution windows, and reporting dashboards will be documented and mutually agreed. Parties will use transparent instrumentation to calculate gross profit.\n\n6.3 Calculation Methodology: The Service Provider will provide line-item calculations supporting the gross-profit figure used for settlement. Disputes follow the audit procedure in Section 7.\n\n6.4 Allocation: Following calculation, the gross-profit split is applied: 30% to the Service Provider, 70% to the Client.',
  },
  {
    title: '7. Disputes, Audit & Adjustments',
    body: 'If either Party disputes the gross-profit calculation, the raising Party must provide written notice with supporting evidence within 14 days of settlement. Parties agree to a good-faith audit process with reasonable notice and access to documentation. Adjustments from an audit, if any, will be reflected in the next settlement cycle or as otherwise agreed.',
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
