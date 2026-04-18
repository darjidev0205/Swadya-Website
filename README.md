# 🌿 Svadya Spice Masala — Website

> **Pure. Powerful. Proven.**  
> A premium full-stack React website for bulk spice & herbal product sales.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env and add your Supabase credentials (optional — app works without it)

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📁 Project Structure

```
svadya-spice/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Loader.jsx       # Animated loading screen
│   │   ├── Navbar.jsx       # Sticky nav with theme toggle
│   │   ├── Footer.jsx       # Footer with links & contact
│   │   ├── HeroSection.jsx  # Full-screen hero
│   │   ├── WhySection.jsx   # 4 feature cards
│   │   ├── StorySection.jsx # Brand story & stats
│   │   ├── FeaturedProducts.jsx  # Interactive product carousel
│   │   ├── TaglineSection.jsx    # "Pure. Powerful. Proven."
│   │   ├── ProductCard.jsx  # Product grid card
│   │   ├── InquiryForm.jsx  # Bulk inquiry form (Supabase)
│   │   ├── SectionHeader.jsx    # Reusable section headers
│   │   └── Reveal.jsx       # Scroll-reveal wrapper
│   │
│   ├── pages/
│   │   ├── HomePage.jsx         # Full homepage with all sections
│   │   ├── ProductsPage.jsx     # All products with filter & search
│   │   ├── ProductDetailPage.jsx # Single product with qty/pricing
│   │   └── InquiryPage.jsx      # Standalone inquiry page
│   │
│   ├── data/
│   │   └── products.js      # 17 products + pricing logic
│   │
│   ├── lib/
│   │   └── supabase.js      # Supabase client + API helpers
│   │
│   ├── hooks/
│   │   ├── useTheme.jsx     # Dark/light theme context
│   │   └── useScrollReveal.js  # Intersection observer hook
│   │
│   ├── App.jsx              # Root with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + Tailwind
│
├── supabase/
│   └── schema.sql           # DB schema + seed data
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🗄️ Supabase Setup (Optional)

The app works fully with local data out of the box. To enable Supabase:

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase/schema.sql`
3. Copy your project URL and anon key from **Settings → API**
4. Add to `.env`:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

### Database Tables

| Table        | Purpose                                  |
|--------------|------------------------------------------|
| `products`   | Product catalog (read by frontend)       |
| `inquiries`  | Bulk inquiry form submissions            |
| `page_views` | Basic analytics                          |

---

## 🎨 Design System

| Property   | Value                                      |
|------------|--------------------------------------------|
| Font (display) | Playfair Display                       |
| Font (serif)   | Cormorant Garamond                     |
| Font (body)    | DM Sans                                |
| Primary    | Saffron `#E67E22`                          |
| Accent     | Spice Red `#C0392B`                        |
| Gold       | `#D4AC0D`                                  |
| Background | Dark `#0D0804`                             |
| Text       | Beige `#F5E6C8`                            |
| Glass      | `rgba(255,245,230,0.07)` + blur(20px)      |

---

## 🛒 Product Pricing Logic

Bulk discounts are applied automatically:

| Quantity   | Discount |
|------------|----------|
| 1–4 kg     | Base price |
| 5–9 kg     | 8% off   |
| 10–19 kg   | 15% off  |
| 20–25 kg   | 25% off  |

---

## ✨ Features

- **Loading screen** — animated particles + progress bar
- **Glassmorphism UI** — blur + transparency throughout
- **Framer Motion animations** — scroll reveal, hover, page transitions
- **Dark / Light theme** — persisted via localStorage
- **17 products** — with category filter + live search
- **Dynamic pricing** — qty slider with real-time price calculation
- **Supabase integration** — inquiry form saves to DB
- **Mobile-first responsive** — works on all screen sizes
- **SEO optimized** — meta tags in `index.html`

---

## 📦 Build for Production

```bash
npm run build
# Output goes to dist/
# Deploy to Vercel, Netlify, or any static host
```

---

## 🌐 Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Set environment variables in Vercel dashboard → Project → Settings → Environment Variables.

---

## 📩 Contact

**Email:** sales@svadyaspice.com  
**Location:** Ahmedabad, Gujarat, India
