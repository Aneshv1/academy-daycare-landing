# Academy Daycare — Klaviyo Email Templates

## What's in this folder

33 ready-to-use HTML email templates for Klaviyo. Each file is a standalone HTML email that you copy and paste into Klaviyo's code editor.

### Flows (23 emails — automated, trigger-based)

| Folder | Emails | When they send |
|--------|--------|---------------|
| `flows/daycare/` | 3 emails | When someone inquires about Daycare |
| `flows/day-and-train/` | 4 emails | When someone inquires about Day & Train |
| `flows/boarding/` | 2 emails | When someone inquires about Boarding |
| `flows/behavioural-daycare/` | 3 emails | When someone inquires about Behavioural Daycare |
| `flows/general-inquiry/` | 3 emails | When someone submits a general inquiry |
| `flows/post-booking/` | 2 emails | After a dog is enrolled / first visit |
| `flows/review-request/` | 2 emails | 14 and 21 days after first visit |
| `flows/re-engagement/` | 3 emails | 30, 60, and 90 days after a lead goes cold |

### Campaigns (10 emails — manual sends)

All in `campaigns/june-2026/`. These are the June 2026 campaign calendar:

| File | Type | Subject Line |
|------|------|-------------|
| `campaign-01-summer-energy.html` | Seasonal Push | Summer is coming — and so is your dog's energy spike |
| `campaign-02-training-tip.html` | Training Tip | The one command that changes everything |
| `campaign-03-transformation.html` | Transformation Story | She was kicked out of two daycares. Now she has a pack. |
| `campaign-04-myth-buster.html` | Myth Buster | Your dog doesn't need to "play" with every dog they see |
| `campaign-05-doodle-feature.html` | Breed Feature | Why every Doodle owner needs to read this |
| `campaign-06-day-train-spotlight.html` | Program Spotlight | What actually happens during Day & Train |
| `campaign-07-separation-anxiety.html` | Pain Point | Your dog doesn't want to destroy your house |
| `campaign-08-vacation-boarding.html` | Boarding Push | Going away this summer? So is everyone else. |
| `campaign-09-puppy-window.html` | Educational | Your puppy's socialization window is closing |
| `campaign-10-july-push.html` | Full Push | July is our busiest month — here's why |

---

## How to upload a FLOW email to Klaviyo (step by step)

### Step 1: Log in to Klaviyo

1. Go to **klaviyo.com** in your browser
2. Log in with your email and password
3. You'll land on the Klaviyo dashboard

### Step 2: Create a new flow

1. In the **left sidebar**, click **Flows**
2. Click the **Create Flow** button (top right corner)
3. At the bottom, click **Build your own** (do NOT use a pre-built template)
4. Give it a name — use the names from the table above (e.g. "Daycare Inquiry Flow")
5. Click **Create Flow**

### Step 3: Set the trigger

1. On the left side of the flow builder, you'll see a **Trigger** block
2. Click on it
3. Choose the trigger type:
   - For all inquiry flows (daycare, day-and-train, boarding, behavioural-daycare, general): Choose **Metric** → select `Daycare Inquiry` (this is the event our website sends to Klaviyo when someone submits the contact form)
   - For post-booking: **Metric** → select when someone is manually tagged as `enrolled`
   - For review request: **Metric** → select when someone is tagged as `active_client` with a 14-day delay
   - For re-engagement: **List/Segment** → choose your "Cold Leads" segment (see Segments section below)

4. **If the flow needs filtering** (to separate daycare inquiries from Day & Train inquiries, etc.):
   - Click **Add Filter** (or "Add Trigger Filter")
   - Set the property: `service`
   - Set the value:
     - Daycare flow: `Daycare`
     - Day & Train flow: `Day & Train`
     - Boarding flow: `Boarding`
     - Behavioural Daycare flow: `Behavioural Daycare`
     - General inquiry: `service` is blank OR equals "Not sure yet" OR equals "General"
5. Click **Done** or **Save**

### Step 4: Add the first email

1. From the left panel, drag an **Email** block into the flow (below the trigger)
2. Click on the email block to open its settings
3. Give it a name (e.g. "Email 1 — Immediate Confirmation")
4. Set the **Subject Line** — this is the text inside the `<title>` tag at the top of each HTML file. Open the file and copy it.
5. Set the **Preview Text** — this is inside the hidden `<div>` near the top of the HTML (the line that says `display:none`). Copy this text.
6. Click **Edit Email Content** (or "Design Email")

### Step 5: Paste the HTML code

1. In the email editor, look for a **Source Code** button, **HTML** button, or a **`< >`** icon. It's usually in the top-right area of the editor. Click it.
2. You'll see a code editor. **Select all** the existing code in there and **delete it** (Cmd+A then Delete on Mac)
3. Now open the HTML file from this folder on your computer:
   - **On Mac:** Right-click the `.html` file → Open With → TextEdit
   - **On Windows:** Right-click → Open With → Notepad
   - **If you have VS Code:** Just open it in VS Code (easier to select all)
4. **Select all** the code in the file (Cmd+A on Mac, Ctrl+A on Windows)
5. **Copy** it (Cmd+C on Mac, Ctrl+C on Windows)
6. Go back to Klaviyo's code editor and **paste** (Cmd+V on Mac, Ctrl+V on Windows)
7. Click **Save** or **Done**
8. Click **Preview** to check how it looks — toggle between **Desktop** and **Mobile** views to make sure both look good

### Step 6: Add time delays between emails

1. Go back to the flow view (you should see your flow with the trigger and your first email)
2. Between emails, drag a **Time Delay** block from the left panel
3. Set the delay based on the file name:
   - `email-1-immediate` → No delay (sends right away)
   - `email-2-day2` → **2 days** after Email 1
   - `email-2-day3` → **3 days** after Email 1
   - `email-3-day4` → Set to **2 days** after Email 2 (so it's 4 days total from the trigger)
   - `email-3-day5` → Set to **3 days** after Email 2 (so it's 5 days total)
   - `email-4-day7` → Set to **3 days** after Email 3 (so it's 7 days total)

**How to read the file names:** The number after "day" tells you how many days after the FIRST email it should send. So to figure out the delay between each email, subtract the previous email's day number.

### Step 7: Repeat for each email in the flow

Repeat Steps 4-6 for every email file in the folder. Add them in order:
1. Email 1 (no delay)
2. Time Delay
3. Email 2
4. Time Delay
5. Email 3
6. (etc.)

### Step 8: Set the flow to LIVE

1. Once ALL emails are added and you've **previewed every single one** on desktop and mobile
2. Click the **Status** dropdown in the top-right corner (it will say "Draft" or "Manual")
3. Change it to **Live**
4. The flow is now active — it will automatically send emails when the trigger fires

---

## How to upload a CAMPAIGN email to Klaviyo (step by step)

### Step 1: Create the campaign

1. In the left sidebar, click **Campaigns**
2. Click **Create Campaign** (top right)
3. Choose **Email**
4. Give it a name (e.g. "June 1 — Summer Energy Push")
5. Click **Continue**

### Step 2: Choose your audience

1. Under **Recipients**, click to select a segment or list
2. Choose your **"Engaged Subscribers"** segment
3. If you don't have this segment yet, create one first (see Segments section below)
4. Click **Continue**

### Step 3: Set subject line and preview text

1. **Subject Line:** Copy from the `<title>` tag in the HTML file
2. **Preview Text:** Copy from the hidden `<div>` near the top of the HTML body (the line with `display:none`)
3. **Sender Name:** Academy Daycare
4. **Sender Email:** contact@academydaycare.ca (or whatever your verified sending address is)
5. Click **Continue**

### Step 4: Paste the HTML

1. In the email editor, click **Source Code** / **HTML** / **`< >`**
2. Delete all existing code
3. Open the campaign HTML file on your computer (TextEdit, Notepad, or VS Code)
4. Select all → Copy → Paste into Klaviyo
5. Save and preview (check both desktop and mobile)
6. Click **Continue**

### Step 5: Schedule the campaign

1. Choose **Schedule for later**
2. Pick the date and time from the campaign schedule below
3. **Best send times:** Tuesday through Thursday, 9-10 AM or 7-8 PM local time
4. Click **Schedule Campaign**

Or if it's ready to go right now, choose **Send Now**

---

## Campaign schedule — June 2026

| Date | File | Type |
|------|------|------|
| June 1 (Mon) | campaign-01-summer-energy.html | Seasonal Push |
| June 4 (Wed) | campaign-02-training-tip.html | Training Tip |
| June 9 (Mon) | campaign-03-transformation.html | Transformation Story |
| June 11 (Wed) | campaign-04-myth-buster.html | Myth Buster |
| June 13 (Fri) | campaign-05-doodle-feature.html | Breed Feature |
| June 16 (Mon) | campaign-06-day-train-spotlight.html | Program Spotlight |
| June 18 (Wed) | campaign-07-separation-anxiety.html | Pain Point |
| June 20 (Fri) | campaign-08-vacation-boarding.html | Boarding Push |
| June 25 (Wed) | campaign-09-puppy-window.html | Educational |
| June 30 (Mon) | campaign-10-july-push.html | Full Push |

---

## Segments you need to create in Klaviyo

Go to **Audience** → **Lists & Segments** → **Create Segment**

### 1. Engaged Subscribers
- **Condition:** "Has opened email at least once in the last 90 days"
- **Use for:** All campaign sends

### 2. Cold Leads
- **Condition:** "Has NOT opened email in the last 30 days" AND "Has received at least 1 email"
- **Use for:** Re-engagement flow trigger

### 3. Active Daycare Clients
- **Condition:** "Properties → client_status equals active_daycare"
- **Use for:** Targeting or excluding active clients

### 4. Active Day & Train Clients
- **Condition:** "Properties → client_status equals active_daytrain"
- **Use for:** Targeting or excluding active clients

---

## Flow triggers reference

| Flow | Trigger Event | Filter |
|------|--------------|--------|
| Daycare | `Daycare Inquiry` | service = `Daycare` |
| Day & Train | `Daycare Inquiry` | service = `Day & Train` |
| Boarding | `Daycare Inquiry` | service = `Boarding` |
| Behavioural Daycare | `Daycare Inquiry` | service = `Behavioural Daycare` |
| General Inquiry | `Daycare Inquiry` | service is blank or "Not sure yet" |
| Post-Booking | Manual tag: `enrolled` | — |
| Review Request | Manual tag: `active_client` | 14 day delay before first email |
| Re-engagement | Segment: Cold Leads (no activity 30 days) | Emails at 30/60/90 days |

---

## Flow email sequence reference

### Daycare Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-immediate.html | Immediate | We got your daycare inquiry |
| 2 | email-2-day2.html | 2 days | What a day at Academy actually looks like |
| 3 | email-3-day5.html | 3 days | Still thinking about daycare? |

### Day & Train Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-immediate.html | Immediate | Your Day & Train inquiry — here's how it works |
| 2 | email-2-day2.html | 2 days | Why Day & Train works better than group classes |
| 3 | email-3-day4.html | 2 days | What changes in the first two weeks |
| 4 | email-4-day7.html | 3 days | Ready to get started? |

### Boarding Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-immediate.html | Immediate | Your boarding inquiry — here's what we offer |
| 2 | email-2-day3.html | 3 days | Why boarding at Academy is different |

### Behavioural Daycare Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-immediate.html | Immediate | We got your behavioural daycare inquiry |
| 2 | email-2-day2.html | 2 days | Your dog isn't broken — they just need the right environment |
| 3 | email-3-day5.html | 3 days | What happens if we don't start? |

### General Inquiry Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-immediate.html | Immediate | Thanks for reaching out to Academy Daycare |
| 2 | email-2-day2.html | 2 days | Not sure which program fits your dog? |
| 3 | email-3-day5.html | 3 days | Still looking for the right daycare? |

### Post-Booking / Welcome Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-welcome.html | Immediate | Welcome to Academy Daycare! |
| 2 | email-2-day3.html | 3 days | How was your dog's first week? |

### Review Request Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-14days.html | 14 days after enrollment | How's your dog doing at Academy? |
| 2 | email-2-21days.html | 7 days after Email 1 | One quick favour? |

### Re-engagement Flow
| Email | File | Delay | Subject |
|-------|------|-------|---------|
| 1 | email-1-30days.html | 30 days cold | We haven't heard from you in a while |
| 2 | email-2-60days.html | 30 days after Email 1 | Your dog might be missing out |
| 3 | email-3-90days.html | 30 days after Email 2 | Last check-in from Academy Daycare |

---

## Important notes

- **Preview every email** on both desktop AND mobile before going live
- **Send a test email to yourself first** — in the email editor, look for "Send Test Email" and enter your own email address. Check that it looks right in your inbox.
- **The review request flow** has a placeholder link `#google-review-link` — replace this with the actual Google review link before going live. Ask Anesh for this.
- **Personalization:** The emails use `{{ person.first_name|default:"there" }}` — this automatically fills in the person's first name. If Klaviyo doesn't have their name, it shows "there" instead. Don't change these tags.
- **Unsubscribe links:** Every email has `{% unsubscribe %}` and `{% manage_preferences %}` tags. These are **required by law** — never remove them.
- **Logo:** The emails use the Academy Daycare logo from Squarespace CDN. If this URL ever changes, you'll need to update it in every template.
- **Start with one flow:** Don't try to upload all 8 flows at once. Start with the **Daycare Inquiry Flow** (3 emails, simplest), get comfortable with the process, then do the rest.

---

## Recommended order to set up flows

1. **Daycare Inquiry** — most common inquiry, start here
2. **General Inquiry** — catches everything else
3. **Day & Train Inquiry** — highest-value program
4. **Behavioural Daycare Inquiry** — specialized
5. **Boarding Inquiry** — seasonal but important
6. **Post-Booking / Welcome** — for new clients
7. **Review Request** — needs Google review link first
8. **Re-engagement** — needs the Cold Leads segment first

---

## Questions?

Contact Anesh or message the team. The full TODO list is in `TODO.md` in the project root.
