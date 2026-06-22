# Academy Daycare — TODO

*Last updated: May 22, 2026*

---

## DONE

- [x] Landing page improvements (Guarantee, FAQ, How It Works, curriculum preview with fade)
- [x] PainSection copy tightened (removed wall of text)
- [x] Boarding photo added (local image, EXIF fixed)
- [x] Color scheme changed from teal to orange (#e8782a)
- [x] Removed teal-to-emerald gradients across all pages
- [x] Review count corrected to 100+ (was 250+)
- [x] All CTAs updated to "Schedule Assessment"
- [x] All "in-person assessment" references → "phone assessment"
- [x] How It Works updated: form → phone assessment → register & start
- [x] FAQ expanded from 8 to 14 questions
- [x] Client Login added to navbar (ProPetware portal)
- [x] Phone number removed from desktop navbar
- [x] Lead notification email updated to hello@academydaycare.ca
- [x] Resend error checking added to form API
- [x] academydaycare.ca domain pointed to Vercel (A record + SSL)
- [x] www.academydaycare.ca added to Vercel (SSL fixed)
- [x] MX records restored for Google Workspace email
- [x] DMARC record added
- [x] Duplicate DMARC record (GoDaddy default) removed
- [x] 25 GBP posts written (gbp-posts.md)
- [x] 22 Klaviyo email flow templates built (email-templates/flows/)
- [x] Resend domain academydaycare.ca verified

---

## Anesh — Technical

### Critical
- [ ] **Klaviyo env vars on Vercel** — forms return `klaviyo:false` because these are missing
  - Go to Klaviyo → Settings → API Keys → copy private key
  - Create a list in Klaviyo (e.g., "Academy Daycare Leads") → copy list ID
  - Add to Vercel: `KLAVIYO_PRIVATE_API_KEY` and `KLAVIYO_LIST_ID`
- [ ] **Favicon** — `/public/logo-icon.png` is referenced in Layout.astro but doesn't exist. Needs a square icon, 128x128px minimum
- [ ] **OG Image** — `/public/og-image.jpg` doesn't exist. This is what shows when shared on social/iMessage/Google. 1200x630px with branding
- [ ] **Google Business Profile** — update website URL to academydaycare.ca

### Analytics — Not Yet Set Up
- [ ] **Google Analytics** — replace `G-XXXXXXXXXX` in Layout.astro with real GA4 measurement ID
- [ ] **Microsoft Clarity** — replace `YOUR_CLARITY_ID` in Layout.astro
- [ ] **Meta Pixel** — replace `YOUR_PIXEL_ID` in Layout.astro
- [ ] Uncomment tracking scripts in Layout.astro after adding real IDs

### SEO
- [ ] Submit sitemap to Google Search Console (academydaycare.ca/sitemap-index.xml)
- [ ] Set up Google Search Console and verify ownership
- [ ] Post GBP posts (25 ready in gbp-posts.md) — 2-3x per week

---

## Leah — Marketing / Klaviyo

### Klaviyo Flows to Set Up
All 22 email templates are built in `email-templates/flows/`. Each needs to be created as a flow in Klaviyo.

- [ ] **Daycare Inquiry Flow** (3 emails) — trigger: "Daycare Inquiry" event where Service = "daycare"
- [ ] **Day & Train Inquiry Flow** (4 emails) — trigger: "Daycare Inquiry" event where Service = "day-and-train"
- [ ] **Boarding Inquiry Flow** (2 emails) — trigger: "Daycare Inquiry" event where Service = "boarding"
- [ ] **Behavioural Daycare Inquiry Flow** (3 emails) — trigger: "Daycare Inquiry" event where Service = "behavioural"
- [ ] **General Inquiry Flow** (3 emails) — trigger: "Daycare Inquiry" event where Service = "not-sure"
- [ ] **Post-Booking / Welcome Flow** (2 emails) — trigger manually when dog is enrolled
- [ ] **Review Request Flow** (2 emails) — trigger 14 days after start (needs Google review link)
- [ ] **Re-Engagement Flow** (3 emails) — trigger when no activity 30+ days

### Klaviyo Segments to Create
- [ ] "Engaged Subscribers" — opened email in last 90 days
- [ ] "Cold Leads" — no activity in 30+ days
- [ ] "Daycare Clients" — tagged as active daycare
- [ ] "Day & Train Clients" — tagged as active Day & Train

### Klaviyo Campaigns
- [ ] Build monthly campaign calendar (2-3 sends/week)
- [ ] Use blog posts + GBP posts as content source

### Google Review Link
- [ ] Get the actual Google review link for the review request flow emails

---

## K9 Academy Site — Outstanding

### Anesh
- [ ] OG Image — `/public/og-image.jpg` missing. 1200x630px branded image
- [ ] Analytics placeholders — replace Clarity, GA, Meta Pixel IDs in Layout.astro
- [ ] Get Google review link for review request flow
- [ ] Verify k9academy.ca root domain in Resend (currently only updates.k9academy.ca)

### Leah
- [ ] Upload all 38 K9 Academy email templates to Klaviyo
- [ ] Build campaign calendar
