/**
 * JSON-LD schema generators for structured SEO data.
 */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Frederly — 30/70 Performance Partnership',
    url: 'https://frederly.vercel.app',
    description:
      'Performance-based e-commerce development agency operating on a 30/70 revenue share model. No upfront costs, aligned incentives.',
    knowsAbout: [
      'E-commerce development',
      'Revenue share web development',
      'Performance-based agency',
      'Online store builder no upfront cost',
      '30/70 profit split development',
    ],
    offers: {
      '@type': 'Service',
      name: 'Performance-Based E-Commerce Development',
      description:
        'Revenue-share partnership where we build and optimize your online store for 30% of profit share. Zero upfront cost.',
      serviceType: 'E-commerce development on revenue share',
      areaServed: ['Worldwide'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '30/70 Service Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fashion e-commerce store build',
              description:
                'Full custom online store build for fashion retailers. 30/70 profit share, no fixed monthly retainer.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Electronics e-commerce development',
              description:
                'Bulk electronics storefront with inventory management, automated split settlements, and SEO optimization.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wholesale distribution storefront',
              description:
                'Wholesale e-commerce platform with volume pricing, B2B portal, and performance-aligned pricing.',
            },
          },
        ],
      },
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema({ headline, description, datePublished, image } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished: datePublished || new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Frederly',
    },
  }
}
