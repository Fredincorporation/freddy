# Supabase Setup Guide

## 1. Create the Niches Table in Supabase

In your Supabase project, navigate to **SQL Editor** and run this query to create the table.

Note: the DDL below uses `gen_random_uuid()` which requires the `pgcrypto` extension. If your database does not have it enabled, run the `CREATE EXTENSION` statement first.

```sql
-- Enable pgcrypto for `gen_random_uuid()` (run once per database)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE niches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  industry TEXT NOT NULL,
  description TEXT,
  pain_point TEXT NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX idx_niches_slug ON niches(slug);
CREATE INDEX idx_niches_active ON niches(active);
```

## 2. Insert the Sample Data

Run this SQL INSERT statement in your Supabase SQL Editor. NOTE: omit the `id` column so the database will generate valid UUIDs automatically using the `gen_random_uuid()` default.

```sql
INSERT INTO niches (slug, title, industry, description, pain_point) VALUES
('luxury-cosmetics','Luxury Cosmetics Revenue Share','Beauty & Cosmetics','Performance-first growth for prestige skincare and makeup brands.','Stop bleeding cash on agency retainers and manual fulfillment mistakes — we automate search, listings, and fulfillment so you capture luxury buyers without overpriced monthly fees.'),
('boutique-fashion','Boutique Fashion Partnerships','Fashion & Apparel','Drive full-funnel demand for boutique designers and curated labels.','Eliminate dead-stock and broken visibility — we scale search traffic and operations so you never pay for guesswork or lose sales to poor SEO again.'),
('sneaker-resellers','Sneaker Resellers Growth','Footwear & Resale','Turn limited-run inventory into predictable revenue streams.','Stop wasting time reconciling orders and overpriced marketing fees — we automate listings, inventory sync and paid search so every drop converts into profits.'),
('electronics-wholesale','Electronics Wholesale Distribution','Electronics & Wholesale','High-volume channel optimization for wholesale electronics suppliers.','Cut the chaos of manual PO handling and slow listings — we remove operational bottlenecks and drive high-intent traffic without agency markups.'),
('fitness-equipment','Fitness Equipment Partnerships','Fitness & Health','Increase distribution and recurring revenue for gym and home fitness brands.','Stop losing sales to slow shipping and fragmented channels — we centralize operations and SEO so customers find you first and convert more often.'),
('home-decor-suppliers','Home Decor Suppliers','Home & Living','Scale discovery and fulfillment for boutique home-goods suppliers.','Don''t let expensive consultants and messy order flows kill margins — we optimize SEO and fulfillment so your catalogue sells without hand-holding.'),
('auto-spare-parts','Auto Spare Parts Distribution','Automotive','Reliable channel expansion for parts suppliers and remanufacturers.','Stop losing repeat business to poor cataloging and manual fulfillment — we fix search, parts matching, and logistics so you win back lost orders.'),
('premium-baby-gear','Premium Baby Gear Partnerships','Baby & Kids','Drive premium conversions for high-trust baby product brands.','Quit gambling on paid ads and manual order tracking — we deliver predictable organic growth and operational automation so you focus on product safety and scale.'),
('gourmet-food-distributors','Gourmet Food Distribution','Food & Beverage','Channel optimization for specialty and gourmet food suppliers.','Stop losing margin to poor channels and order errors — we automate listings and logistics, so perishables move fast and margins improve immediately.'),
('outdoor-gear-retailers','Outdoor Gear Retail Partnerships','Outdoor & Recreation','Scale seasonal inventory and durable goods distribution.','Stop letting seasonal peaks crush your operations — we automate inventory, listings, and paid/organic demand to keep sales consistent year-round.');
```

## 3. Configure Environment Variables

1. Go to your Supabase project dashboard
2. Click **Settings** > **API**
3. Copy your **Project URL** and paste it into `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   ```

4. Under **Project API keys**, copy the **Service Role** secret key and paste it:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

⚠️ **Never commit `.env.local` to git** — add it to `.gitignore` if not already there.

## 4. Install Dependencies

Run this in your project root:

```bash
npm install @supabase/supabase-js
```

## 5. Test the Route Locally

```bash
npm run build
npm run dev
```

Visit: `http://localhost:3000/partnership/luxury-cosmetics`

You should see the niche data dynamically fetched from Supabase.

## 6. Deploy to Vercel

1. Add the same environment variables in Vercel project settings
2. Deploy normally — ISR will handle database changes without rebuilds
3. New niches added to Supabase will be accessible at `/partnership/[new-slug]` within 1 hour

## Adding New Niches

To add a new niche, simply insert a row into the `niches` table:

```sql
INSERT INTO niches (slug, title, industry, description, pain_point)
VALUES (
  'your-niche-slug',
  'Your Niche Title',
  'Industry Category',
  'Brief description',
  'Compelling pain point text'
);
```

The Next.js route will automatically pick it up on the next ISR revalidation cycle (1 hour by default).
