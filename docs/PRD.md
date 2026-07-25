# Tajer AI — Product Requirements Document (MVP)

## Vision
Create the AI commercial employee for Saudi merchants. Transform WhatsApp conversations into sales and orders automatically, using the real store catalog.

## Target Customer
Small-medium Saudi merchants (Riyadh, Jeddah) selling perfumes, abayas, accessories, cosmetics, jewelry, gifts via WhatsApp + Salla/Zid/Shopify.

## Core Principles
- AI must never invent prices, stock, or policies.
- Human approval modes available.
- Full Arabic + English support with RTL.
- Multi-tenant architecture.

## MVP Features Status

| Feature | Status |
|---------|--------|
| Registration / Login UI | Done (UI) |
| Store creation UI | Done |
| Dashboard | Done |
| Catalog | Done |
| Conversations inbox | Done |
| Conversation detail + AI mock | Done |
| Orders list | Done |
| AI Settings | Done |
| Team / Roles | Done |
| Integrations page | Done |
| Pricing page | Done |
| Onboarding | Done |
| Privacy policy draft | Done |
| Products API | Done |
| Conversations API | Done |
| AI Suggest API (safe mock) | Done |
| Real Auth / Database | Pending (needs Supabase) |
| Real WhatsApp Cloud API | Pending (credentials) |
| Real LLM + RAG | Pending (API key) |
| CSV Import working | Pending |
| Multi-tenancy RLS | Pending |

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Vercel
- Planned: Supabase (Auth + Postgres + RLS)

## Pricing
- Starter: 149 SAR/month
- Growth: 399 SAR/month
- Pro: 899 SAR/month
- Enterprise: Custom