import { NextResponse } from 'next/server';

import { getSupabaseAdminClient } from '@/lib/supabase/admin';

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch (error) {
    console.error('Failed to parse investor lead payload', error);
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const fullName = body.fullName;
  const email = body.email;
  const phone = body.phone;

  if (typeof fullName !== 'string' || !fullName.trim()) {
    return NextResponse.json({ error: 'Full name is required' }, { status: 400 });
  }

  if (typeof email !== 'string' || !email.trim()) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();

  const { error } = await supabase.from('investor_leads').insert({
    full_name: fullName,
    email,
    phone: typeof phone === 'string' ? phone : null,
    payload: body
  });

  if (error) {
    console.error('Failed to insert investor lead', error);
    return NextResponse.json({ error: 'Unable to save investor lead' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Investor lead submitted' }, { status: 201 });
}

