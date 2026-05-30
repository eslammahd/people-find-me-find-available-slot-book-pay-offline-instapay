import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabaseServer';

export async function GET() {
  const supabase = createServerClient();

  const today = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('time_slots')
    .select('*')
    .eq('is_available', true)
    .gte('date', today)
    .order('date', { ascending: true })
    .order('start_time', { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ slots: data });
}
