# Tajer AI — Architecture

## Overview
Next.js 14 App Router application deployed on Vercel.
Multi-tenant SaaS for Saudi merchants.

## Current Stack
- Frontend: Next.js 14, TypeScript, inline styles (no Tailwind dependency issues)
- Backend: Next.js API Routes
- Deploy: Vercel
- Data: In-memory / mock (demo)
- AI: Rule-based safe mock (catalog-only answers)

## Planned Stack
- Database: Supabase (PostgreSQL + Auth + RLS)
- AI: OpenAI / Grok with RAG over store products
- Messaging: WhatsApp Business Cloud API
- Integrations: Salla, Zid, Shopify (webhooks + API)

## Multi-tenancy Model
- Each Store belongs to an Owner
- Products, Conversations, Orders scoped by store_id
- Row Level Security (RLS) in Supabase

## AI Safety Rules
1. Only answer from real catalog data
2. If confidence low → ask clarification or transfer to human
3. Order creation requires approval depending on automation mode
4. Full audit log of AI actions (planned)

## API Endpoints (current)
- GET /api/products
- GET /api/conversations
- POST /api/ai/suggest

## Folder Structure
```
app/
  page.tsx              # Landing
  login/ register/      # Auth UI
  dashboard/            # Metrics
  catalog/              # Products
  conversations/        # Inbox + detail
  orders/               # Orders list
  settings/             # AI rules
  team/                 # Members
  integrations/         # Connections
  pricing/              # Plans
  onboarding/           # Setup wizard
  api/
    products/
    conversations/
    ai/suggest/
docs/
  PRD.md
  COMMERCIAL.md
  ARCHITECTURE.md
```