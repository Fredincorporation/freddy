"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BackToHome() {
  const pathname = usePathname()
  if (!pathname || pathname === '/') return null

  // On niche pages, render as the CTA-style button used elsewhere in the app.
  if (pathname.startsWith('/niche')) {
    return (
      <div className="mt-6">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    )
  }

  // Default: small fixed control in the top-left for other pages.
  return (
    <div className="fixed top-4 left-4 z-40">
      <Link href="/" className="rounded-md bg-[var(--bg-accent)] text-white px-3 py-2 text-sm shadow-sm hover:opacity-95">
        Back to home
      </Link>
    </div>
  )
}
