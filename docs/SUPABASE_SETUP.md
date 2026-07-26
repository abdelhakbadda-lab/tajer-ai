# Supabase Setup Guide — Tajer AI

## 1. Create a free Supabase project
1. Go to https://supabase.com and sign up / log in
2. Click **New Project**
3. Choose a name (e.g. `tajer-ai`)
4. Set a strong database password (save it)
5. Choose a region close to Saudi Arabia if available (or Europe)
6. Wait for the project to be ready

## 2. Get API keys
1. In the project dashboard go to **Settings → API**
2. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (keep secret)

## 3. Create the tables
1. Go to **SQL Editor** in Supabase
2. Open the file `supabase/schema.sql` from this repository
3. Paste the entire content and click **Run**

## 4. Configure the app
1. In the project root create a file `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

2. Install the package (if not already):
```bash
npm install @supabase/supabase-js
```

3. Restart the dev server:
```bash
npm run dev
```

## 5. Enable Email Auth
In Supabase go to **Authentication → Providers** and make sure **Email** is enabled.

## 6. (Optional) Deploy env vars on Vercel
1. Go to your Vercel project → Settings → Environment Variables
2. Add the same three variables
3. Redeploy

## Notes
- Until the keys are set, the app continues to work in demo/mock mode.
- The schema includes Row Level Security (RLS) so each store owner only sees their own data.
- After setup you can replace the mock login/register with real Supabase Auth calls.