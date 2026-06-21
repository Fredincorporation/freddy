import Link from 'next/link'
import '../../styles/globals.css'
import { supabase } from '../../lib/supabase'

export const revalidate = 3600

export default async function PartnershipDirectory() {
  const now = new Date().toISOString()

  let niches: Array<{ slug: string; label?: string }> = []

  try {
    if (supabase) {
      const { data, error } = await supabase.from('niches').select('slug,label').eq('active', true)
      if (!error && data) niches = data as any
    }
  } catch (err) {
    // swallow - we'll render a helpful fallback
    console.warn('partnership directory: failed to query niches', err)
  }

  return (
    <main className="container" style={{ paddingTop: 40 }}>
      <header className="mb-8 text-center">
        <h1 className="section-title">Partner Directory</h1>
        <p className="text-[var(--text-secondary)] mt-2">Explore market-specific partnership pages we support.</p>
      </header>

      <section>
        {niches.length === 0 ? (
          <div className="card">
            <p className="text-[var(--text-secondary)]">No niches available right now. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {niches.map((n) => (
              <Link
                key={n.slug}
                href={`/partnership/${n.slug}`}
                className="card p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold">{n.label || n.slug.replace('-', ' ')}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">Visit the partnership page for {n.label || n.slug}.</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <footer className="footer" style={{ marginTop: 48 }}>
        <p className="text-[0.8rem] text-[var(--text-secondary)]">Sitemap updated: {now}</p>
      </footer>
    </main>
  )
}
