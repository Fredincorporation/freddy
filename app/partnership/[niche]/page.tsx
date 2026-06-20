import React from 'react';
import { notFound } from 'next/navigation';
import MeshBackground from '../../../components/MeshBackground';

export const revalidate = 3600; // 1 hour
export const dynamicParams = true;

// Strongly-typed payload returned from the data layer
interface NichePayload {
  id: string;
  slug: string;
  title: string;
  industry: string;
  description?: string;
  pain_point: string;
}

// --- Mock Data Layer / Service Abstraction ---
// These functions simulate an async external data source or database client.
const MOCK_NICHES: NichePayload[] = [
  {
    id: 'b3b8f1f1-1d1a-4f6f-9a80-1a2b3c4d5e01',
    slug: 'luxury-cosmetics',
    title: 'Luxury Cosmetics Revenue Share',
    industry: 'Beauty & Cosmetics',
    description: 'Performance-first growth for prestige skincare and makeup brands.',
    pain_point:
      'Stop bleeding cash on agency retainers and manual fulfillment mistakes — we automate search, listings, and fulfillment so you capture luxury buyers without overpriced monthly fees.',
  },
  {
    id: 'c4c9e2e2-2e2b-5g7g-0b91-2b3c4d5e6f02',
    slug: 'boutique-fashion',
    title: 'Boutique Fashion Partnerships',
    industry: 'Fashion & Apparel',
    description: 'Drive full-funnel demand for boutique designers and curated labels.',
    pain_point:
      'Eliminate dead-stock and broken visibility — we scale search traffic and operations so you never pay for guesswork or lose sales to poor SEO again.',
  },
  {
    id: 'd5d0f3f3-3f3c-6h8h-1c02-3c4d5e6f7g03',
    slug: 'sneaker-resellers',
    title: 'Sneaker Resellers Growth',
    industry: 'Footwear & Resale',
    description: 'Turn limited-run inventory into predictable revenue streams.',
    pain_point:
      'Stop wasting time reconciling orders and overpriced marketing fees — we automate listings, inventory sync and paid search so every drop converts into profits.',
  },
  {
    id: 'e6e1g4g4-4g4d-7i9i-2d13-4d5e6f7g8h04',
    slug: 'electronics-wholesale',
    title: 'Electronics Wholesale Distribution',
    industry: 'Electronics & Wholesale',
    description: 'High-volume channel optimization for wholesale electronics suppliers.',
    pain_point:
      'Cut the chaos of manual PO handling and slow listings — we remove operational bottlenecks and drive high-intent traffic without agency markups.',
  },
  {
    id: 'f7f2h5h5-5h5e-8j0j-3e24-5e6f7g8h9i05',
    slug: 'fitness-equipment',
    title: 'Fitness Equipment Partnerships',
    industry: 'Fitness & Health',
    description: 'Increase distribution and recurring revenue for gym and home fitness brands.',
    pain_point:
      'Stop losing sales to slow shipping and fragmented channels — we centralize operations and SEO so customers find you first and convert more often.',
  },
  {
    id: 'a1a3i6i6-6i6f-9k1k-4f35-6f7g8h9i0j06',
    slug: 'home-decor-suppliers',
    title: 'Home Decor Suppliers',
    industry: 'Home & Living',
    description: 'Scale discovery and fulfillment for boutique home-goods suppliers.',
    pain_point:
      'Don\'t let expensive consultants and messy order flows kill margins — we optimize SEO and fulfillment so your catalogue sells without hand-holding.',
  },
  {
    id: 'b2b4j7j7-7j7g-0l2l-5g46-7g8h9i0j1k07',
    slug: 'auto-spare-parts',
    title: 'Auto Spare Parts Distribution',
    industry: 'Automotive',
    description: 'Reliable channel expansion for parts suppliers and remanufacturers.',
    pain_point:
      'Stop losing repeat business to poor cataloging and manual fulfillment — we fix search, parts matching, and logistics so you win back lost orders.',
  },
  {
    id: 'c3c5k8k8-8k8h-1m3m-6h57-8h9i0j1k2l08',
    slug: 'premium-baby-gear',
    title: 'Premium Baby Gear Partnerships',
    industry: 'Baby & Kids',
    description: 'Drive premium conversions for high-trust baby product brands.',
    pain_point:
      'Quit gambling on paid ads and manual order tracking — we deliver predictable organic growth and operational automation so you focus on product safety and scale.',
  },
  {
    id: 'd4d6l9l9-9l9i-2n4n-7i68-9i0j1k2l3m09',
    slug: 'gourmet-food-distributors',
    title: 'Gourmet Food Distribution',
    industry: 'Food & Beverage',
    description: 'Channel optimization for specialty and gourmet food suppliers.',
    pain_point:
      'Stop losing margin to poor channels and order errors — we automate listings and logistics, so perishables move fast and margins improve immediately.',
  },
  {
    id: 'e5e7m0m0-0m0j-3o5o-8j79-0j1k2l3m4n10',
    slug: 'outdoor-gear-retailers',
    title: 'Outdoor Gear Retail Partnerships',
    industry: 'Outdoor & Recreation',
    description: 'Scale seasonal inventory and durable goods distribution.',
    pain_point:
      'Stop letting seasonal peaks crush your operations — we automate inventory, listings, and paid/organic demand to keep sales consistent year-round.',
  },
];

async function getAllNiches(): Promise<string[]> {
  // In a production implementation this would query a DB or external API.
  try {
    // Simulate async latency
    await Promise.resolve();
    return MOCK_NICHES.map((n) => n.slug);
  } catch (error) {
    // Graceful fallback: return empty list so build can continue
    return [];
  }
}

async function getNicheData(slug: string): Promise<NichePayload | null> {
  try {
    await Promise.resolve();
    const found = MOCK_NICHES.find((n) => n.slug === slug);
    return found ?? null;
  } catch (error) {
    return null;
  }
}

// --- Next.js Async Route Helpers ---
export async function generateStaticParams() {
  try {
    const slugs = await getAllNiches();
    return slugs.map((slug) => ({ niche: slug }));
  } catch (error) {
    return [];
  }
}

type Params = { niche: string };

export async function generateMetadata({ params }: { params: Params }) {
  try {
    const payload = await getNicheData(params.niche);
    if (!payload) {
      notFound();
    }

    return {
      title: payload.title,
      description: payload.description ?? payload.pain_point,
      openGraph: {
        title: payload.title,
        description: payload.description ?? payload.pain_point,
      },
    };
  } catch (error) {
    // On metadata fetch errors, allow Next to render a fallback page.
    return {};
  }
}

// --- Page Component (Server) ---
export default async function PartnershipNichePage({ params }: { params: Params }) {
  try {
    const payload = await getNicheData(params.niche);
    if (!payload) {
      notFound();
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: payload.title,
      description: payload.description ?? payload.pain_point,
      serviceType: 'Ecommerce Revenue Share Partnership',
      areaServed: 'Worldwide',
      provider: {
        '@type': 'Organization',
        name: 'Your Company',
      },
    };

    return (
      <main className="min-h-screen bg-black text-emerald-200">
        <MeshBackground />

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <header className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-300 drop-shadow-[0_10px_30px_rgba(4,120,87,0.6)]">
              {payload.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-200 max-w-3xl mx-auto">
              {payload.description}
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="p-8 bg-black/60 border border-emerald-800 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold text-emerald-200">What Is Required</h2>
              <ul className="mt-4 space-y-3 text-emerald-100">
                <li>- Clean inventory sync (CSV/API)</li>
                <li>- Purchase order & fulfillment integration</li>
                <li>- Product data & images optimized for search</li>
                <li>- Mutually agreed revenue-share terms</li>
              </ul>
            </article>

            <article className="p-8 bg-black/60 border border-emerald-800 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold text-emerald-200">What You Should Expect</h2>
              <div className="mt-4 text-emerald-100 space-y-3">
                <p>
                  We eliminate costly agency retainers, manual order tracking, and poor search visibility.
                  Expect measurable lifts in organic traffic, streamlined operations, and improved
                  margin capture under a performance-first partnership.
                </p>
                <p className="italic text-emerald-300">Pain Point Summary: {payload.pain_point}</p>
              </div>
            </article>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}
