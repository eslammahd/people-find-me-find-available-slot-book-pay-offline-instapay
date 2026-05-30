import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  const supabase = createServerClient();

  let body: {
    slot_id: string;
    patient_name: string;
    patient_phone: string;
    patient_email?: string;
    notes?: string;
    payment_method: 'instapay' | 'vodafone_cash';
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { slot_id, patient_name, patient_phone, patient_email, notes, payment_method } = body;

  if (!slot_id || !patient_name || !patient_phone || !payment_method) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Check slot is still available
  const { data: slot, error: slotError } = await supabase
    .from('time_slots')
    .select('*')
    .eq('id', slot_id)
    .eq('is_available', true)
    .single();

  if (slotError || !slot) {
    return NextResponse.json({ error: 'Slot is no longer available' }, { status: 409 });
  }

  // Create booking
  const { data: booking, error: bookingError } = await supabase
    .from('bookings')
    .insert({
      slot_id,
      patient_name,
      patient_phone,
      patient_email: patient_email || null,
      notes: notes || null,
      payment_method,
      status: 'pending_payment',
    })
    .select()
    .single();

  if (bookingError) {
    return NextResponse.json({ error: bookingError.message }, { status: 500 });
  }

  // Mark slot as unavailable
  await supabase.from('time_slots').update({ is_available: false }).eq('id', slot_id);

  return NextResponse.json({ booking }, { status: 201 });
}
