import React from 'react';
import { notFound } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
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

// --- Supabase Data Layer / Service Abstraction ---
// These functions query the Supabase 'niches' table.

async function getAllNiches(): Promise<string[]> {
  try {
    if (!supabase) {
      console.warn('Supabase client not configured; getAllNiches returning empty list.');
      return [];
    }

    const { data, error } = await supabase
      .from('niches')
      .select('slug')
      .eq('active', true);

    if (error) {
      console.error('Supabase error fetching niches:', error);
      return [];
    }

    return (data || []).map((row: { slug: string }) => row.slug);
  } catch (error) {
    console.error('Error fetching niches:', error);
    return [];
  }
}

async function getNicheData(slug: string): Promise<NichePayload | null> {
  try {
    if (!supabase) {
      console.warn('Supabase client not configured; getNicheData returning null for', slug);
      return null;
    }

    const { data, error } = await supabase
      .from('niches')
      .select('id, slug, title, industry, description, pain_point')
      .eq('slug', slug)
      .eq('active', true)
      .single();

    if (error) {
      console.error('Supabase error fetching niche:', error);
      return null;
    }

    return (data as NichePayload) || null;
  } catch (error) {
    console.error('Error fetching niche data:', error);
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
              <h2 className="text-2xl font-semibold text-black dark:text-emerald-200">What Is Required</h2>
              <ul className="mt-4 space-y-3 text-emerald-100">
                <li>- Clean inventory sync (CSV/API)</li>
                <li>- Purchase order & fulfillment integration</li>
                <li>- Product data & images optimized for search</li>
                <li>- Mutually agreed revenue-share terms</li>
              </ul>
            </article>

            <article className="p-8 bg-black/60 border border-emerald-800 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold text-[var(--text)]">What You Should Expect</h2>
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
