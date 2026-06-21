#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// This script generates a static sitemap into `public/generated/sitemap.xml`.
// It will use Supabase if `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
// are set; otherwise it falls back to the static list below.

async function main(){
  const outDir = path.join(__dirname, '..', 'public', 'generated')
  const outFile = path.join(outDir, 'sitemap.xml')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const now = new Date().toISOString()
  const base = 'https://freddy-sepia.vercel.app'

  let urls = [ { loc: base, lastmod: now, changefreq: 'daily', priority: '1.0' } ]

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseKey) {
    try {
      const { createClient } = require('@supabase/supabase-js')
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { data, error } = await supabase.from('niches').select('slug,label').eq('active', true)
      if (!error && Array.isArray(data)){
        data.forEach(n => {
          if (n && n.slug) urls.push({ loc: `${base}/partnership/${n.slug}`, lastmod: now, changefreq: 'weekly', priority: '0.8' })
        })
      } else if (error) {
        console.warn('generate-sitemap: supabase query error', error.message || error)
      }
    } catch (err) {
      console.warn('generate-sitemap: supabase client not available or failed', err.message || err)
    }
  }

  // Fallback entries if only base exists
  if (urls.length === 1) {
    const fallback = [
      'partnership/luxury-cosmetics',
      'partnership/boutique-fashion',
      'partnership/sneaker-resellers',
      'partnership/electronics-wholesale',
      'partnership/fitness-equipment',
      'partnership/home-decor-suppliers',
      'partnership/auto-spare-parts',
      'partnership/premium-baby-gear',
      'partnership/gourmet-food-distributors',
      'partnership/outdoor-gear-retailers'
    ]
    fallback.forEach(s => urls.push({ loc: `${base}/${s}`, lastmod: now, changefreq: 'weekly', priority: '0.8' }))
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  for (const u of urls){
    xml += '  <url>\n'
    xml += `    <loc>${u.loc}</loc>\n`
    xml += `    <lastmod>${u.lastmod}</lastmod>\n`
    xml += `    <changefreq>${u.changefreq}</changefreq>\n`
    xml += `    <priority>${u.priority}</priority>\n`
    xml += '  </url>\n'
  }
  xml += '</urlset>\n'

  fs.writeFileSync(outFile, xml, 'utf8')
  console.log('Wrote', outFile)
}

main().catch(err => { console.error(err); process.exit(1) })
