# Tajer AI — Current Status (PoC)

**Last update:** 26 July 2026

## Live URL
https://tajer-ai-ih8s-b8d83buyv-abdelhak1.vercel.app

## Repository
https://github.com/abdelhakbadda-lab/tajer-ai

## What works right now

### Frontend (all pages live)
- Homepage (bilingual EN/AR)
- Login / Register UI
- Onboarding wizard
- Dashboard with metrics
- Catalog (now loads from API)
- Conversations list + detail with AI chat mock
- Orders list
- AI Settings (automation modes + store rules)
- Team members
- Integrations overview
- Pricing (149 / 399 / 899 SAR)
- Privacy policy draft

### Backend API
- GET /api/products
- GET /api/conversations
- POST /api/ai/suggest (safe rule-based AI — only answers from catalog)

### Documentation
- PRD
- Architecture
- Commercial materials (pitch, WhatsApp script, demo script, objections)
- .env.example

## What is still mock / pending credentials
- Real authentication (Supabase Auth)
- Real database + multi-tenancy (Supabase + RLS)
- Real LLM (OpenAI / Grok) — currently rule-based safe mock
- WhatsApp Business Cloud API
- CSV import logic
- Payment & ZATCA integrations

## How to run locally
```bash
git clone https://github.com/abdelhakbadda-lab/tajer-ai.git
cd tajer-ai
npm install
npm run dev
```
Open http://localhost:3000

## Next recommended steps
1. Create free Supabase project and add keys to .env.local
2. Implement real auth + store table
3. Connect real LLM for AI replies (keeping safety rules)
4. Add CSV upload endpoint
5. Connect WhatsApp Cloud API when credentials available