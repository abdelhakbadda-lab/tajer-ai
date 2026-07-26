-- Tajer AI Database Schema (Supabase / PostgreSQL)
-- Run this in the Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Stores (multi-tenant)
CREATE TABLE IF NOT EXISTS stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  language TEXT DEFAULT 'ar',
  rules JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_ar TEXT,
  sku TEXT,
  price NUMERIC(12,2) NOT NULL DEFAULT 0,
  stock INTEGER DEFAULT 0,
  variants JSONB DEFAULT '[]',
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Conversations
CREATE TABLE IF NOT EXISTS conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  customer_phone TEXT,
  customer_name TEXT,
  status TEXT DEFAULT 'open', -- open, ai_handling, waiting_approval, transferred, closed
  last_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender TEXT NOT NULL, -- customer, ai, agent
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  conversation_id UUID REFERENCES conversations(id),
  customer_name TEXT,
  customer_phone TEXT,
  customer_city TEXT,
  customer_address TEXT,
  total NUMERIC(12,2) DEFAULT 0,
  status TEXT DEFAULT 'pending', -- pending, confirmed, shipped, delivered, cancelled
  items JSONB DEFAULT '[]',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team members
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  role TEXT DEFAULT 'operator', -- owner, admin, operator
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Basic RLS (enable after creating tables)
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Simple policies (owner can do everything on their store)
CREATE POLICY "Users can manage own stores" ON stores
  FOR ALL USING (auth.uid() = owner_id);

CREATE POLICY "Users can manage products of own stores" ON products
  FOR ALL USING (
    store_id IN (SELECT id FROM stores WHERE owner_id = auth.uid())
  );

CREATE POLICY "Users can manage conversations of own stores" ON conversations
  FOR ALL USING (
    store_id IN (SELECT id FROM stores WHERE owner_id = auth.uid())
  );

CREATE POLICY "Users can manage orders of own stores" ON orders
  FOR ALL USING (
    store_id IN (SELECT id FROM stores WHERE owner_id = auth.uid())
  );