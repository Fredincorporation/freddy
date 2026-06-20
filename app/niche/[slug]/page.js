import { notFound } from 'next/navigation'
import NICHE_CONTENT, { getAllNicheSlugs } from '../../../lib/niche-content'
import { breadcrumbSchema } from '../../../lib/schema'
import NicheLanding from './NicheLanding'

export function generateStaticParams() {
  return getAllNicheSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const niche = NICHE_CONTENT[params.slug]
  if (!niche) return {}

  return {
    title: niche.metaTitle,
    description: niche.metaDescription,
    keywords: niche.metaKeywords,
    openGraph: {
      title: niche.metaTitle,
      description: niche.metaDescription,
    },
    alternates: {
      canonical: `https://frederly.vercel.app/niche/${params.slug}`,
    },
  }
}

export default function NichePage({ params }) {
  const niche = NICHE_CONTENT[params.slug]
  if (!niche) notFound()

  const breadcrumbSchemaJson = breadcrumbSchema([
    { name: 'Home', url: 'https://frederly.vercel.app' },
    { name: niche.label, url: `https://frederly.vercel.app/niche/${params.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaJson) }}
      />
      <NicheLanding niche={niche} slug={params.slug} />
    </>
  )
}
