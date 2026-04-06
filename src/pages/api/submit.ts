export const prerender = false;

import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { owner_name, email, phone, dog_info, service, message } = data;

    // Validate required fields
    if (!owner_name || !email || !phone || !dog_info || !service) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert into Supabase
    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey && supabaseKey !== 'your_service_role_key_here') {
      const supabase = createClient(supabaseUrl, supabaseKey);
      await supabase.from('leads').insert({
        owner_name,
        email,
        phone,
        dog_name: dog_info,
        service,
        challenge: message || '',
        stage: 'new',
        priority: 'normal',
        source: 'academy_daycare_landing',
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
