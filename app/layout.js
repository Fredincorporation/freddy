import '../styles/globals.css'
import ThemeProvider from '../lib/ThemeProvider'
import ThemeToggle from '../components/ThemeToggle'
import { organizationSchema } from '../lib/schema'

export const metadata = {
  title: {
    default: 'Performance-Based E-Commerce Development | 30/70 Revenue Share — No Upfront Cost',
    template: '%s | Frederly — 30/70 Performance Partnership',
  },
  description:
    'Revenue-share e-commerce development: we build and optimize your online store for 30% of profit. Zero upfront cost, no fixed retainer, fully aligned incentives.',
  keywords: [
    'performance-based web development',
    'revenue share e-commerce agency',
    'no upfront cost online store builder',
    '30/70 profit split developer',
    'alternative to fixed-fee web agencies',
    'performance marketing partnership',
  ],
  openGraph: {
    title: 'Performance-Based E-Commerce Development | 30/70 Revenue Share',
    description:
      'We build your online store for 30% of profit — no upfront cost, no fixed retainer. Only earn when you earn.',
    url: 'https://frederly.vercel.app',
    siteName: 'Frederly — 30/70 Performance Partnership',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30/70 Performance Partnership — No Upfront Cost',
    description:
      'Revenue-share e-commerce development. We only win when you win.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://frederly.vercel.app',
  },
  verification: {
    google: 'zHksZXGTpV8FwIAcR8Wdx6EN5ivhAQ_hqGmR_JeBOKo',
  },
}

export default function RootLayout({ children }) {
  const schema = organizationSchema()

  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
