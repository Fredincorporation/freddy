import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const BASE_URL = 'https://freddy-sepia.vercel.app'

function buildXml(urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }>) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  for (const u of urls) {
    xml += '  <url>\n'
    xml += `    <loc>${u.loc}</loc>\n`
    xml += `    <lastmod>${u.lastmod}</lastmod>\n`
    xml += `    <changefreq>${u.changefreq}</changefreq>\n`
    xml += `    <priority>${u.priority}</priority>\n`
    xml += '  </url>\n'
  }
  xml += '</urlset>'
  return xml
}

export async function GET() {
  const now = new Date().toISOString()
  const urls = [
    { loc: BASE_URL, lastmod: now, changefreq: 'daily', priority: '1.0' },
  ]

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { data: niches, error } = await supabase.from('niches').select('slug')
      if (!error && niches && Array.isArray(niches)) {
        for (const n of niches) {
          if (n && n.slug) {
            urls.push({ loc: `${BASE_URL}/partnership/${n.slug}`, lastmod: now, changefreq: 'weekly', priority: '0.8' })
          }
        }
      } else if (error) {
        // log error server-side so deploy logs show why we fell back
        // eslint-disable-next-line no-console
        console.error('sitemap.route: Supabase query error', error)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('sitemap.route: Supabase client error', err)
    }
  } else {
    // eslint-disable-next-line no-console
    console.warn('sitemap.route: Supabase env missing, returning static sitemap')
  }

  const xml = buildXml(urls)

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=59',
    },
  })
}
