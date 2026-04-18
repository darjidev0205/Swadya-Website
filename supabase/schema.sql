-- ════════════════════════════════════════════════
--  Svadya Spice Masala – Supabase Schema
--  Run this in: Supabase Dashboard → SQL Editor
-- ════════════════════════════════════════════════

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── Products table ──────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name         TEXT NOT NULL,
  category     TEXT NOT NULL CHECK (category IN ('herbal', 'masala')),
  emoji        TEXT,
  description  TEXT,
  base_price   NUMERIC(10,2) NOT NULL,
  unit         TEXT DEFAULT 'kg',
  in_stock     BOOLEAN DEFAULT true,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ── Inquiries table ─────────────────────────────
CREATE TABLE IF NOT EXISTS inquiries (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name         TEXT NOT NULL,
  business     TEXT,
  phone        TEXT NOT NULL,
  email        TEXT,
  product      TEXT,
  quantity_kg  INTEGER,
  message      TEXT,
  status       TEXT DEFAULT 'new' CHECK (status IN ('new','contacted','closed')),
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ── Page views ───────────────────────────────────
CREATE TABLE IF NOT EXISTS page_views (
  id          BIGSERIAL PRIMARY KEY,
  page        TEXT,
  viewed_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ── RLS Policies ─────────────────────────────────
ALTER TABLE products   ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries  ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Public can read products
CREATE POLICY "Public read products"
  ON products FOR SELECT USING (true);

-- Public can insert inquiries
CREATE POLICY "Public insert inquiries"
  ON inquiries FOR INSERT WITH CHECK (true);

-- Public can insert page views
CREATE POLICY "Public insert page_views"
  ON page_views FOR INSERT WITH CHECK (true);

-- ── Seed Products ────────────────────────────────
INSERT INTO products (name, category, emoji, description, base_price) VALUES
  ('Neem Powder',            'herbal', '🌿', 'Made from shade-dried neem leaves. Perfect for skincare formulations, organic farming, and herbal supplements. Cold-processed to retain maximum azadirachtin.', 120),
  ('Amla Powder',            'herbal', '🟢', 'Sun-dried Indian gooseberry ground to a fine powder. Rich in natural Vitamin C, ideal for hair care, immunity boosters, and Ayurvedic formulations.', 180),
  ('Moringa Powder',         'herbal', '🌱', 'Premium drumstick leaf powder packed with 92+ nutrients. Sourced from organic farms. Ideal for nutraceutical brands and health food companies.', 250),
  ('Turmeric (Curcumin)',    'herbal', '🟡', 'High-curcumin Lakadong variety. 3–5% curcumin content. Ideal for premium supplement and food brands.', 200),
  ('Ashwagandha Powder',     'herbal', '🌾', 'Root extract from Madhya Pradesh. Standardized to 5% withanolides. Preferred by supplement manufacturers and Ayurvedic compounders.', 350),
  ('Herbal Tea Premix',      'herbal', '🍵', 'Wellness herbal tea blend with tulsi, ginger, and adaptogens. White-label ready for wellness brands and hotels.', 280),
  ('Chai Rajwadi Masala',    'masala', '☕', 'A regal blend of 11 spices — cardamom, ginger, black pepper, clove. Designed for tea shops, café chains, and packaged chai brands.', 160),
  ('Gujarati Dal Masala',    'masala', '🍲', 'Authentic Gujarat kitchen blend — perfectly balanced for everyday dal. Favourite among food processors and cloud kitchens.', 140),
  ('Masala Chai Premix',     'masala', '🫖', 'Ready-to-brew chai premix — just add hot water or milk. Ideal for vending machines, hospitality, and corporate cafeterias.', 220),
  ('Chaat Masala',           'masala', '🌶', 'Tangy, punchy chaat masala with the perfect balance of amchur, black salt, and spices. Loved by snack brands and street food chains.', 130),
  ('Chass Masala (Green)',   'masala', '🥤', 'Special green buttermilk masala with fresh herb notes. Used by dairy brands and restaurant chains for authentic Gujarati chaas.', 150),
  ('Sambhar Masala',         'masala', '🍛', 'South Indian-style sambhar spice blend — deep, complex, and aromatic. Preferred by QSR chains and hotels.', 145),
  ('Garam Masala',           'masala', '🌿', 'Classic North Indian whole-spice blend, freshly ground and packed for maximum aroma. Essential for food processors.', 200),
  ('Authentic Hing',         'masala', '✨', 'Pure Afghani asafoetida — no starch fillers. Essential for Jain kitchens, premium masala manufacturers, and health brands.', 800),
  ('Moong Dal Halwa Premix', 'masala', '🟠', 'Ready premix for Rajasthani moong dal halwa — just add ghee and milk. Perfect for mithai shops and catering companies.', 190),
  ('Thepla Premix',          'masala', '🫓', 'Beloved Gujarati flatbread premix — ready to roll. Ideal for cloud kitchens, travel food brands, and packaged snack manufacturers.', 170),
  ('Khichdi Kadhi Premix',   'masala', '🍚', 'Ultimate comfort food premix — Gujarati kadhi and khichdi blend. Ideal for hospital food services and ready-meal companies.', 160);
