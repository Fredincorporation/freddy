import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://freddy-sepia.vercel.app'

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  // If Supabase env isn't set (e.g. during some prerender/build environments),
  // return a minimal static sitemap so prerendering doesn't fail.
  if (!supabaseUrl || !supabaseKey) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ]
  }

  let supabase
  try {
    supabase = createClient(supabaseUrl, supabaseKey)
  } catch (err) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ]
  }

  try {
    const { data: niches, error } = await supabase.from('niches').select('slug')
    if (error || !niches) {
      return [
        {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 1.0,
        },
      ]
    }

    const dynamicPages = (niches || []).map((niche: any) => ({
      url: `${baseUrl}/partnership/${niche.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      ...dynamicPages,
    ]
  } catch (err) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ]
  }
}
