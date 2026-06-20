import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialize Supabase client for server-side queries if environment variables exist.
// Do NOT throw during module import — throwing prevents Next.js from building when env
// variables are not yet set (for example, in preview builds). Instead export `null`
// and let callers handle the missing client gracefully.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseServiceRoleKey) {
  supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
} else {
  // Log a helpful message for server logs; do not throw here.
  // Callers should check `supabase` and either return a fallback or fail gracefully.
  // Example: console.warn('Supabase env missing - install NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  supabase = null;
}

export function requireSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error(
      'Supabase client not configured. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.'
    );
  }
  return supabase;
}
