export const prerender = false;

import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { owner_name, email, phone, dog_info, service, message, source } = data;

    // Only name + email required (schedule/curriculum downloads don't have phone/dog_info)
    if (!owner_name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let supabaseOk = false;
    let emailOk = false;
    let klaviyoOk = false;

    // 1. Insert into Supabase
    const supabaseUrl = import.meta.env.SUPABASE_URL;
    const supabaseKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from('leads').insert({
          owner_name,
          email,
          phone: phone || '',
          dog_name: dog_info || '',
          service: service || '',
          challenge: message || '',
          stage: 'new',
          priority: 'normal',
          source: source || 'academy_daycare_landing',
        });
        supabaseOk = true;
      } catch (e) {
        console.error('Supabase error:', e);
      }
    }

    // 2. Resend — notify team
    const resendKey = import.meta.env.RESEND_API_KEY;
    const notifyFrom = import.meta.env.NOTIFY_FROM || 'Leads <leads@academydaycare.ca>';
    const notifyTo = import.meta.env.NOTIFY_TO || 'contact@academydaycare.ca';

    if (resendKey) {
      try {
        const subject = source === 'schedule-gate'
          ? `Schedule download: ${owner_name}`
          : source === 'curriculum-gate'
          ? `Curriculum download: ${owner_name}`
          : `New lead: ${owner_name} — ${service}`;

        const htmlBody = `
          <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:500px">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${owner_name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
            ${dog_info ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Dog Info</td><td style="padding:8px;border-bottom:1px solid #eee">${dog_info}</td></tr>` : ''}
            ${service ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Service</td><td style="padding:8px;border-bottom:1px solid #eee">${service}</td></tr>` : ''}
            ${message ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Message</td><td style="padding:8px;border-bottom:1px solid #eee">${message}</td></tr>` : ''}
            ${source ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Source</td><td style="padding:8px;border-bottom:1px solid #eee">${source}</td></tr>` : ''}
          </table>
          <p style="font-family:sans-serif;font-size:12px;color:#999;margin-top:16px">Reply to this email to respond directly to the lead.</p>
        `;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: notifyFrom,
            to: notifyTo,
            reply_to: email,
            subject,
            html: htmlBody,
          }),
        });
        emailOk = true;
      } catch (e) {
        console.error('Resend error:', e);
      }
    }

    // 3. Klaviyo — server-side subscribe + event
    const klaviyoKey = import.meta.env.KLAVIYO_PRIVATE_API_KEY;
    const klaviyoListId = import.meta.env.KLAVIYO_LIST_ID;

    if (klaviyoKey) {
      try {
        // Create/update profile
        const profileRes = await fetch('https://a.klaviyo.com/api/profiles/', {
          method: 'POST',
          headers: {
            'Authorization': `Klaviyo-API-Key ${klaviyoKey}`,
            'Content-Type': 'application/json',
            'revision': '2024-10-15',
          },
          body: JSON.stringify({
            data: {
              type: 'profile',
              attributes: {
                email,
                first_name: owner_name.split(' ')[0],
                last_name: owner_name.split(' ').slice(1).join(' ') || undefined,
                phone_number: phone || undefined,
                properties: {
                  'Source': source || 'academy_daycare_landing',
                  'Service Interest': service || '',
                  'Dog Info': dog_info || '',
                },
              },
            },
          }),
        });

        // Subscribe to list if list ID is set
        if (klaviyoListId) {
          await fetch(`https://a.klaviyo.com/api/lists/${klaviyoListId}/relationships/profiles/`, {
            method: 'POST',
            headers: {
              'Authorization': `Klaviyo-API-Key ${klaviyoKey}`,
              'Content-Type': 'application/json',
              'revision': '2024-10-15',
            },
            body: JSON.stringify({
              data: [{ type: 'profile', id: email }],
            }),
          });
        }

        // Fire event
        const eventName = source === 'schedule-gate'
          ? 'Schedule Downloaded'
          : source === 'curriculum-gate'
          ? 'Curriculum Download'
          : 'Daycare Inquiry';

        await fetch('https://a.klaviyo.com/api/events/', {
          method: 'POST',
          headers: {
            'Authorization': `Klaviyo-API-Key ${klaviyoKey}`,
            'Content-Type': 'application/json',
            'revision': '2024-10-15',
          },
          body: JSON.stringify({
            data: {
              type: 'event',
              attributes: {
                metric: { data: { type: 'metric', attributes: { name: eventName } } },
                profile: { data: { type: 'profile', attributes: { email } } },
                properties: {
                  Service: service || '',
                  'Dog Info': dog_info || '',
                  Message: message || '',
                  Source: source || 'academy_daycare_landing',
                },
              },
            },
          }),
        });

        klaviyoOk = true;
      } catch (e) {
        console.error('Klaviyo error:', e);
      }
    }

    return new Response(JSON.stringify({ success: true, supabase: supabaseOk, email: emailOk, klaviyo: klaviyoOk }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Submit error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
