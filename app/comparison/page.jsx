import { articleSchema } from '../../lib/schema'
import ComparisonContent from './ComparisonContent'

export const metadata = {
  title: '30/70 Profit Share — Simple Gross-Profit Split (30% / 70%)',
  description:
    'A straight 30/70 split of gross profit: 30% to the Service Provider, 70% to the Partner. No retainers, no monthly budget tiers, no target gates.',
  openGraph: {
    title: '30/70 Profit Share — Straight Gross-Profit Split',
    description:
      'We split gross profit 30% / 70% — clear, auditable, and aligned incentives for e-commerce partners.',
  },
  alternates: {
    canonical: 'https://frederly.vercel.app/comparison',
  },
}

export default function ComparisonPage() {
  const schema = articleSchema({
    headline: '30/70 Profit Share — Simple Gross-Profit Split',
    description:
      'A clear explanation of a 30% / 70% gross-profit split: how it works, settlement, and auditability.',
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
