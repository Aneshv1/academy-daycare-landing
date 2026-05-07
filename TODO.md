# Academy Daycare — TODO

## Leah (Marketing / Klaviyo)

### Klaviyo Flows to Build
All email flows need to be created in Klaviyo from scratch for Academy Daycare. Use the K9 Academy flows as reference (see `/Users/anesh/k9-academy-landing/email-templates/README.md` for step-by-step Klaviyo upload instructions).

- [ ] **Daycare Inquiry Flow** — triggered when someone submits the contact form with "Daycare" selected
  - Email 1: Immediate confirmation + what to expect
  - Email 2: Day 2 — benefits of structured daycare, pricing breakdown
  - Email 3: Day 5 — social proof, safety record, CTA to call

- [ ] **Day & Train Inquiry Flow** — triggered when someone selects "Day & Train"
  - Email 1: Immediate — what Day & Train includes, pricing
  - Email 2: Day 2 — board and train vs day train comparison, why Day & Train is better
  - Email 3: Day 4 — transformation story / results
  - Email 4: Day 7 — urgency, limited spots, CTA to call

- [ ] **Boarding Inquiry Flow** — triggered when someone selects "Boarding"
  - Email 1: Immediate — boarding details, pricing, what's included
  - Email 2: Day 3 — why boarding at a facility your dog already knows matters

- [ ] **Behavioural Daycare Inquiry Flow** — triggered when someone selects "Behavioural Daycare"
  - Email 1: Immediate — what behavioural daycare is, who it's for
  - Email 2: Day 2 — reactive dog success angle, safety emphasis
  - Email 3: Day 5 — Day & Train upsell for dogs that need more

- [ ] **General Inquiry Flow** — triggered when no specific service is selected
  - Email 1: Immediate — thanks for reaching out, overview of all programs
  - Email 2: Day 2 — "not sure which program?" breakdown with pricing
  - Email 3: Day 4 — social proof + CTA to call

- [ ] **Post-Booking / Welcome Flow** — triggered manually when a dog is enrolled
  - Email 1: Welcome — what to bring, vaccination requirements, drop-off/pickup times
  - Email 2: Day 3 — what to expect in the first week, how to read report cards

- [ ] **Review Request Flow** — triggered 14 days after a dog starts attending
  - Email 1: Day 14 — "How's it going?" + Google review link
  - Email 2: Day 21 — second ask if no review yet

- [ ] **Re-engagement Flow** — triggered when a lead goes cold (no activity 30+ days)
  - Email 1: 30 days — "Still looking for daycare?"
  - Email 2: 60 days — seasonal angle or new content
  - Email 3: 90 days — final offer / last chance

### Klaviyo Campaigns (Monthly)
- [ ] Build a **June 2026 campaign calendar** (similar to K9 Academy's May calendar)
  - Mix of: transformation stories, training tips, seasonal content, social proof
  - 2-3 sends per week to engaged subscribers
  - Use blog posts as content source (46 posts available on the site)

### Klaviyo Setup Tasks
- [ ] **Create segments** in Klaviyo:
  - "Engaged Subscribers" — opened email in last 90 days
  - "Cold Leads" — no activity in 30+ days
  - "Daycare Clients" — tagged as active daycare
  - "Day & Train Clients" — tagged as active Day & Train
- [ ] **Verify Klaviyo private API key** is added to Vercel env vars (`KLAVIYO_PRIVATE_API_KEY`)
- [ ] **Verify Klaviyo list ID** is added to Vercel env vars (`KLAVIYO_LIST_ID`)
- [ ] **Set up Google review link** — get the actual URL and use it in the review request flow

---

## Anesh (Technical / Site)

### Critical — Do First
- [ ] **Favicon** — create `/public/logo-icon.png` (the file is referenced in Layout.astro but doesn't exist). Use the Academy Daycare logo cropped to a square icon, 128x128px minimum
- [ ] **OG Image** — create `/public/og-image.jpg` (referenced but doesn't exist). This is what shows when the site is shared on social media, Google, iMessage, etc. Should be 1200x630px with the Academy Daycare branding
- [ ] **Resend domain verification** — verify `academydaycare.ca` in Resend dashboard so lead notification emails actually send from your domain instead of getting flagged as spam
  - Log in to resend.com > Domains > Add domain > Follow DNS verification steps
- [ ] **Klaviyo env vars on Vercel** — add `KLAVIYO_PRIVATE_API_KEY` and `KLAVIYO_LIST_ID` to Vercel environment variables so the server-side Klaviyo integration works
  - Vercel dashboard > Project > Settings > Environment Variables

### Analytics — Set Up Tracking
- [ ] **Google Analytics** — create a GA4 property, get the measurement ID (starts with `G-`), and replace `G-XXXXXXXXXX` in Layout.astro (line ~144)
- [ ] **Microsoft Clarity** — create a project at clarity.microsoft.com, get the project ID, replace `YOUR_CLARITY_ID` in Layout.astro (line ~152)
- [ ] **Meta Pixel** — create a pixel in Meta Business Suite, get the pixel ID, replace `YOUR_PIXEL_ID` in Layout.astro (line ~162)
- [ ] Uncomment all three tracking scripts in Layout.astro after adding real IDs

### Google Business Profile
- [ ] **Claim/verify Google Business Profile** for Academy Daycare at 22 Cardico Dr, Gormley
- [ ] Add all services (Daycare, Day & Train, Boarding, Behavioural Daycare)
- [ ] Add photos of the facility
- [ ] Link to academydaycare.ca
- [ ] Get the Google review link for Leah's review request flow

### Nice to Have
- [ ] Submit sitemap to Google Search Console (academydaycare.ca/sitemap-index.xml)
- [ ] Set up Google Search Console and verify ownership
- [ ] Remove placeholder tracking scripts from Layout.astro (they're commented out but loading broken IDs can still cause console errors)

---

## K9 Academy Training Site — Outstanding Items

### Anesh
- [ ] **OG Image** — `/public/og-image.jpg` is referenced but file doesn't exist. Create 1200x630px branded image
- [ ] **Analytics placeholders** — replace in Layout.astro:
  - Microsoft Clarity: `YOUR_CLARITY_PROJECT_ID`
  - Google Analytics: `GA_MEASUREMENT_ID`
  - Meta Pixel: `YOUR_PIXEL_ID`
- [ ] **Google review link** — get actual URL and share with Leah for the review request email flow

### Leah
- [ ] **Upload all 38 email templates to Klaviyo** (see `/Users/anesh/k9-academy-landing/email-templates/README.md` for exact step-by-step instructions)
  - [ ] Board & Train flow (4 emails)
  - [ ] Private Training flow (3 emails)
  - [ ] Group Classes flow (3 emails)
  - [ ] Daycare flow (2 emails)
  - [ ] General Inquiry flow (3 emails)
  - [ ] Quiz Nurture flow (4 emails)
  - [ ] Puppy Start Right flow (3 emails)
  - [ ] Post-Booking flow (1 email)
  - [ ] Review Request flow (2 emails) — **needs Google review link from Anesh first**
  - [ ] Re-engagement flow (3 emails)
  - [ ] All 10 May 2026 campaigns (check schedule in README — some dates may have passed)

---

*Last updated: May 7, 2026*
