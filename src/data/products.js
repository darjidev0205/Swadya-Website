// Local product data – used as fallback when Supabase is not configured
// These exact records mirror the Supabase seed in supabase/schema.sql

export const PRODUCTS = [
  {
    id: 1, name: 'Neem Powder', emoji: '🌿', category: 'herbal',
    description: 'Made from shade-dried neem leaves, this fine powder is perfect for skincare formulations, organic farming inputs, and herbal supplement manufacturing. Our neem is cold-processed to retain maximum azadirachtin content.',
    base_price: 120,
    benefits: ['No fillers or additives', 'Mesh size: 60–80', 'Available in food & cosmetic grade', 'Bulk discount from 5kg onwards'],
    tags: ['Skincare', 'Farming', 'Organic'],
  },
  {
    id: 2, name: 'Amla Powder', emoji: '🟢', category: 'herbal',
    description: 'Sun-dried Indian gooseberry ground to a fine powder. Rich in natural Vitamin C, ideal for hair care, immunity boosters, and Ayurvedic formulations.',
    base_price: 180,
    benefits: ['High Vitamin C retention', 'No artificial preservatives', 'Cold-milled for potency', 'FSSAI compliant packaging'],
    tags: ['Hair Care', 'Immunity', 'Ayurvedic'],
  },
  {
    id: 3, name: 'Moringa Powder', emoji: '🌱', category: 'herbal',
    description: 'Premium drumstick leaf powder, packed with 92+ nutrients. Sourced from organic farms in Tamil Nadu. Ideal for nutraceutical brands and health food companies.',
    base_price: 250,
    benefits: ['Organic certified', '92+ nutrients per serving', 'Shelf life 18 months', 'Available spray-dried too'],
    tags: ['Superfood', 'Organic', 'Nutraceutical'],
  },
  {
    id: 4, name: 'Turmeric (Curcumin)', emoji: '🟡', category: 'herbal',
    description: 'High-curcumin Lakadong variety turmeric powder. 3–5% curcumin content — far above commercial average. Ideal for premium supplement and food brands.',
    base_price: 200,
    benefits: ['Lakadong variety', '3–5% curcumin', 'Lab tested each batch', 'Custom grind size available'],
    tags: ['Anti-inflammatory', 'Premium', 'Supplement'],
  },
  {
    id: 5, name: 'Ashwagandha Powder', emoji: '🌾', category: 'herbal',
    description: 'Root extract powder from Madhya Pradesh. Standardized to 5% withanolides. Preferred by supplement manufacturers, fitness brands, and Ayurvedic compounders.',
    base_price: 350,
    benefits: ['5% withanolides standardized', 'Root-only (no leaf/stem filler)', 'Heavy metal tested', 'Export quality available'],
    tags: ['Adaptogen', 'Fitness', 'Stress Relief'],
  },
  {
    id: 6, name: 'Herbal Tea Premix', emoji: '🍵', category: 'herbal',
    description: 'A wellness-forward herbal tea blend with tulsi, ginger, and adaptogens. White-label ready for wellness brands, hotels, and subscription box businesses.',
    base_price: 280,
    benefits: ['Tulsi + Ginger + Adaptogens', 'White-label ready', 'Custom flavour profiles', 'Organic option available'],
    tags: ['Wellness', 'Tea', 'White Label'],
  },
  {
    id: 7, name: 'Chai Rajwadi Masala', emoji: '☕', category: 'masala',
    description: 'A regal blend of 11 spices — cardamom, ginger, black pepper, clove and more. Designed for tea shops, café chains, and packaged chai brands.',
    base_price: 160,
    benefits: ['11-spice proprietary blend', 'Consistent flavour per batch', 'No artificial flavours', 'Custom blend ratios possible'],
    tags: ['Chai', 'Café', 'Premium'],
  },
  {
    id: 8, name: 'Gujarati Dal Masala', emoji: '🍲', category: 'masala',
    description: 'The authentic Gujarat kitchen blend — perfectly balanced for everyday dal. A favourite among food processors, cloud kitchens, and packaged food companies.',
    base_price: 140,
    benefits: ['Authentic family recipe', 'Consistent batch quality', 'Hygienically processed', 'Custom salt levels available'],
    tags: ['Gujarat', 'Dal', 'Traditional'],
  },
  {
    id: 9, name: 'Masala Chai Premix', emoji: '🫖', category: 'masala',
    description: 'Ready-to-brew masala chai premix — just add hot water or milk. Ideal for vending machines, hospitality, corporate cafeterias, and branded packaging.',
    base_price: 220,
    benefits: ['Vending machine compatible', '6-month shelf life', 'Custom sweetness levels', 'White-label packaging available'],
    tags: ['Premix', 'Vending', 'Hospitality'],
  },
  {
    id: 10, name: 'Chaat Masala', emoji: '🌶', category: 'masala',
    description: 'Tangy, punchy chaat masala with the perfect balance of amchur, black salt, and spices. Loved by snack brands, street food chains, and packagers.',
    base_price: 130,
    benefits: ['No artificial flavours', 'Consistent tartness', 'Custom fine/coarse grind', 'Ideal for snack coating'],
    tags: ['Chaat', 'Snack', 'Street Food'],
  },
  {
    id: 11, name: 'Chass Masala (Green)', emoji: '🥤', category: 'masala',
    description: 'Special green buttermilk masala with fresh herb notes. Used extensively by dairy brands and restaurant chains for authentic Gujarati chaas flavouring.',
    base_price: 150,
    benefits: ['Fresh herb forward profile', 'Natural green colour (no dye)', 'Ideal for dairy applications', 'Bulk sizes: 5kg, 10kg, 25kg'],
    tags: ['Dairy', 'Buttermilk', 'Gujarat'],
  },
  {
    id: 12, name: 'Sambhar Masala', emoji: '🍛', category: 'masala',
    description: 'South Indian-style sambhar spice blend — deep, complex, and aromatic. Preferred by QSR chains, hotels, and ready-to-cook brands.',
    base_price: 145,
    benefits: ['Authentic South Indian profile', 'Stone-ground ingredients', 'No MSG or artificial flavours', 'COA provided with every batch'],
    tags: ['South Indian', 'QSR', 'Restaurant'],
  },
  {
    id: 13, name: 'Garam Masala', emoji: '🌿', category: 'masala',
    description: 'Classic North Indian whole-spice blend, freshly ground and packed for maximum aroma. A must-have for food processors and packaged meal brands.',
    base_price: 200,
    benefits: ['Whole spice to powder process', 'High aroma retention', 'Custom blend strength', 'Available in foodservice packs'],
    tags: ['North Indian', 'Classic', 'Aroma'],
  },
  {
    id: 14, name: 'Authentic Hing', emoji: '✨', category: 'masala',
    description: 'Pure Afghani asafoetida — the real deal with no starch fillers. An essential ingredient for Jain kitchens, premium masala manufacturers, and health brands.',
    base_price: 800,
    benefits: ['Afghani origin', 'No starch filler', 'Intensely aromatic', 'Small batch, high purity'],
    tags: ['Jain', 'Premium', 'Pure'],
  },
  {
    id: 15, name: 'Moong Dal Halwa Premix', emoji: '🟠', category: 'masala',
    description: 'Ready premix for the beloved Rajasthani moong dal halwa — just add ghee, milk, and water. Perfect for mithai shops, catering companies, and festive packaging.',
    base_price: 190,
    benefits: ['Authentic flavour profile', 'Consistent texture results', 'Shelf life 9 months', 'Festive seasonal demand'],
    tags: ['Dessert', 'Festive', 'Rajasthani'],
  },
  {
    id: 16, name: 'Thepla Premix', emoji: '🫓', category: 'masala',
    description: 'The beloved Gujarati flatbread premix — ready to roll. Ideal for cloud kitchens, travel food brands, and packaged snack manufacturers.',
    base_price: 170,
    benefits: ['Fenugreek-forward authentic blend', 'Easy to scale production', 'Extended shelf life', 'Export-ready packaging'],
    tags: ['Gujarat', 'Flatbread', 'Export'],
  },
  {
    id: 17, name: 'Khichdi Kadhi Premix', emoji: '🍚', category: 'masala',
    description: 'The ultimate comfort food premix — Gujarati kadhi and khichdi blend in one. Ideal for hospital food services, senior care, and ready-meal companies.',
    base_price: 160,
    benefits: ['Comfort food positioning', 'Low-spice digestive profile', 'Suitable for all ages', 'Bulk institutional supply'],
    tags: ['Comfort Food', 'Institutional', 'Health'],
  },
]

// Bulk pricing tiers
export function calcPrice(basePrice, qty) {
  let discount = 1
  if      (qty >= 20) discount = 0.75
  else if (qty >= 10) discount = 0.85
  else if (qty >= 5)  discount = 0.92
  return Math.round(basePrice * qty * discount)
}

export const CATEGORIES = [
  { key: 'all',    label: 'All Products' },
  { key: 'herbal', label: 'Herbal'       },
  { key: 'masala', label: 'Masala & Food'},
]
