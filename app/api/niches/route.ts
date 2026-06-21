import { NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function GET() {
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await supabase.from('niches').select('slug,label').eq('active', true)
    if (error) throw error
    return NextResponse.json(data || [])
  } catch (err) {
    console.error('api/niches GET error', err)
    return NextResponse.json({ error: 'query failed' }, { status: 500 })
  }
}
