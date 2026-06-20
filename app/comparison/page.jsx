import { articleSchema } from '../../lib/schema'
import ComparisonContent from './ComparisonContent'

export const metadata = {
  title: 'Fixed Agency Fees Are Dead — Why 30/70 Profit Share Outperforms Retainers',
  description:
    'Compare flat-rate agency pricing ($5k+/mo retainer) vs a 30/70 revenue share model. See the math on why performance-aligned partnerships deliver better ROI for e-commerce brands.',
  openGraph: {
    title: 'Fixed Agency Fees Are Dead — 30/70 vs Retainer Comparison',
    description:
      'See the math. A $5,000/month retainer vs 30/70 profit share: which model actually grows your business?',
  },
  alternates: {
    canonical: 'https://frederly.vercel.app/comparison',
  },
}

export default function ComparisonPage() {
  const schema = articleSchema({
    headline: 'Fixed Agency Fees Are Dead: Why a 30/70 Profit Split Outperforms a $5,000 Web Design Retainer',
    description:
      'An honest mathematical comparison of flat-fee agency pricing vs performance-based 30/70 revenue share for e-commerce development.',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ComparisonContent />
    </>
  )
}
