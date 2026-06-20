/**
 * Niche-specific copy for programmatic SEO landing pages.
 * Each entry maps to a slug under /niche/[slug].
 * All values are plain strings — JSX wrapping is handled in the page component.
 */

const NICHE_CONTENT = {
  fashion: {
    label: 'Fashion',
    heroKicker: 'Fashion & Apparel — 30/70 Partnership',
    heroTitlePrefix: 'Build a high-converting fashion store with',
    heroTitleHighlight: 'zero upfront cost',
    heroDesc:
      'Stop paying bloated retainers to agencies that profit whether you sell or not. Our 30/70 revenue share means we only earn when your fashion line moves inventory. Custom storefront, automated split settlements, and aggressive SEO — all aligned with your margin.',
    comparisonExamples: ['Luxury boutique', 'Apparel brand', 'Accessory line'],
    requirementsExtra: [
      'Product SKU catalog with variant dimensions (sizes, colors, materials)',
      'Brand style guide or visual direction for storefront theming',
    ],
    deliverablesExtra: [
      'Virtual try-on or size recommendation widget integration',
      'Seasonal collection rotation with automated merchandising',
    ],
    metaTitle: 'Performance-Based Fashion E-Commerce Development | 30/70 No Upfront Cost',
    metaDescription:
      'Fashion e-commerce built on a 30/70 profit share. No fixed retainer, no upfront cost. Custom storefronts for apparel brands, boutiques, and accessory lines.',
    metaKeywords:
      'fashion e-commerce development, revenue share web developer, no upfront cost online store, performance-based fashion agency, 30/70 profit split clothing brand',
  },

  electronics: {
    label: 'Electronics',
    heroKicker: 'Electronics & Gadgets — 30/70 Partnership',
    heroTitlePrefix: 'Launch your electronics store with',
    heroTitleHighlight: 'performance-aligned pricing',
    heroDesc:
      'Electronics inventory has tight margins — the last thing you need is a fixed agency fee eating into them. Our 30/70 model ties our compensation directly to your sell-through rate. Bulk catalog setup, automated split payments, and SEO that captures high-intent buyers.',
    comparisonExamples: ['Consumer electronics', 'Gadget distributor', 'Computer hardware'],
    requirementsExtra: [
      'Structured product feed (CSV/XML) with EAN/UPC identifiers',
      'Supplier drop-ship agreement or warehouse inventory confirmation',
    ],
    deliverablesExtra: [
      'Comparison engine with spec-sheet filtering and side-by-side views',
      'Real-time inventory sync with supplier API integration',
    ],
    metaTitle: 'Performance-Based Electronics E-Commerce | 30/70 Revenue Share',
    metaDescription:
      'Electronics e-commerce on a 30/70 profit share. No fixed retainer. Custom-built storefronts for consumer electronics, gadgets, and hardware distributors.',
    metaKeywords:
      'electronics e-commerce development, revenue share electronics store, performance-based agency gadgets, 30/70 profit split electronics, no upfront cost online electronics store',
  },

  wholesale: {
    label: 'Wholesale',
    heroKicker: 'Wholesale & Distribution — 30/70 Partnership',
    heroTitlePrefix: 'Digitize your wholesale operation with',
    heroTitleHighlight: 'zero fixed overhead',
    heroDesc:
      'Moving physical inventory online is expensive — unless the developer only gets paid when you sell. Our 30/70 revenue share model eliminates the risk of traditional web development. B2B portal, volume pricing tiers, automated routing, and full transparency.',
    comparisonExamples: ['Bulk distributor', 'Wholesale supplier', 'B2B manufacturer'],
    requirementsExtra: [
      'Pricing tier matrix (retail, wholesale, bulk discount)',
      'Customer group segmentation for B2B portal access control',
    ],
    deliverablesExtra: [
      'B2B customer portal with account-specific pricing and bulk ordering',
      'Automated reorder triggers based on inventory thresholds',
    ],
    metaTitle: 'Performance-Based Wholesale E-Commerce | 30/70 Revenue Share',
    metaDescription:
      'Wholesale e-commerce on a 30/70 profit share. B2B portals, volume pricing, and automated split settlements — no fixed retainer, no upfront cost.',
    metaKeywords:
      'wholesale e-commerce development, revenue share B2B platform, performance-based wholesale agency, 30/70 profit split distributor, no upfront cost wholesale store',
  },
}

export default NICHE_CONTENT

export function getAllNicheSlugs() {
  return Object.keys(NICHE_CONTENT)
}
