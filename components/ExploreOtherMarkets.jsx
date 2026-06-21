"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ExploreOtherMarkets({ currentSlug }) {
  const [others, setOthers] = useState([])

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const res = await fetch('/api/niches')
        if (!res.ok) return
        const data = await res.json()
        const filtered = (data || []).filter((n) => n.slug !== currentSlug)
        // shuffle and pick 3-4
        for (let i = filtered.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[filtered[i], filtered[j]] = [filtered[j], filtered[i]]
        }
        const pick = filtered.slice(0, Math.min(4, Math.max(3, Math.floor(filtered.length * 0.25) || 3)))
        if (mounted) setOthers(pick)
      } catch (err) {
        // ignore
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [currentSlug])

  if (!others || others.length === 0) return null

  return (
    <div className="card" style={{ padding: 20, marginTop: 24 }}>
      <div className="section-label">Explore</div>
      <h3 className="section-title">Explore Other Markets</h3>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {others.map((n) => (
          <Link key={n.slug} href={`/partnership/${n.slug}`} className="text-sm hover:underline">
            {n.label || n.slug}
          </Link>
        ))}
      </div>
    </div>
  )
}
