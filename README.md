# ComplyHub

Compliance monitoring for UK small businesses. ComplyHub helps sole traders, SMEs, and accountants stay on top of filing deadlines, generate compliance policies, and track a real-time compliance score.

## Features

- **Company lookup** — Search and load company data via the Companies House API
- **Deadline tracking** — Monitor filing deadlines (confirmation statements, accounts, etc.)
- **Compliance score** — Real-time score based on outstanding obligations
- **Policy generation** — Generate compliance policy documents
- **Multi-client support** — Accountant plan supports managing multiple clients

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Supabase](https://supabase.com/) — Auth and database
- [Companies House API](https://developer-specs.company-information.service.gov.uk/) — UK company data
- [Tailwind CSS](https://tailwindcss.com/) — Styling

## Project Structure

```
app/
  page.tsx                  # Landing page
  layout.tsx                # Root layout
  auth/
    login/page.tsx          # Login page
    signup/page.tsx         # Signup page
    callback/route.ts       # Supabase auth callback
  dashboard/
    page.tsx                # Dashboard
    layout.tsx              # Dashboard layout (auth-protected)
  api/
    company/route.ts        # Companies House proxy API

components/
  auth/AuthForm.tsx         # Shared login/signup form
  dashboard/
    CompanyCard.tsx         # Company compliance summary card
    CompanyLookupForm.tsx   # Search form for looking up companies
    Navbar.tsx              # Dashboard navigation
  landing/
    Hero.tsx                # Landing hero section
    Features.tsx            # Features section
  ui/
    Button.tsx              # Button primitive
    Card.tsx                # Card primitive
    Input.tsx               # Input primitive

lib/
  supabase/
    client.ts               # Supabase browser client
    server.ts               # Supabase server client (RSC / Route Handlers)
  companies-house/
    client.ts               # Companies House API client

database/
  schema.sql                # Supabase database schema
```

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com/) project
- A [Companies House API key](https://developer.company-information.service.gov.uk/)

### Installation

```bash
git clone https://github.com/FH-OLA/FH.git
cd FH
npm install
```

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `COMPANIES_HOUSE_API_KEY` | Companies House API key |

### Database Setup

Run the schema against your Supabase project:

```bash
# Via the Supabase dashboard SQL editor, or:
psql "$DATABASE_URL" < database/schema.sql
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pricing Plans

| Plan | Price | Description |
|---|---|---|
| Starter | £12/month | Sole traders and freelancers |
| Business | £29/month | Growing businesses |
| Accountant | £99/month | Multiple client management |

## Deployment

Deploy to [Vercel](https://vercel.com/) with zero configuration:

```bash
npx vercel
```

Set the environment variables in your Vercel project settings.

## License

MIT
