import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PRODUCTS, CATEGORIES } from '../data/products.js'
import { fetchProducts } from '../lib/supabase.js'
import ProductCard from '../components/ProductCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

export default function ProductsPage() {
  const [cat, setCat]           = useState('all')
  const [products, setProducts] = useState(PRODUCTS) // Start with local data
  const [search, setSearch]     = useState('')

  // Try to load from Supabase; fall back to local data silently
  useEffect(() => {
    fetchProducts().then(data => { if (data && data.length > 0) setProducts(data) })
  }, [])

  const filtered = products.filter(p => {
    const matchCat  = cat === 'all' || p.category === cat
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="min-h-screen pt-28 pb-20 px-4" style={{ background: '#0D0804' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          label="Our Range"
          title='Premium <em class="italic text-saffron">Products</em>'
          sub="From ancient herbal remedies to beloved masala blends — crafted for bulk buyers who demand nothing but the finest."
        />

        {/* Controls */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  cat === c.key
                    ? 'text-white border-transparent'
                    : 'glass border-white/15 text-beige/65 hover:border-saffron/30 hover:text-beige'
                }`}
                style={cat === c.key ? { background: 'linear-gradient(135deg,#E67E22,#C0392B)' } : {}}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="search"
            placeholder="Search products…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="sm:ml-auto bg-white/5 border border-white/10 focus:border-saffron rounded-full px-5 py-2 text-sm text-beige placeholder-beige/30 outline-none transition-colors w-full sm:w-64"
          />
        </div>

        {/* Count */}
        <p className="text-xs text-beige/30 mt-4 mb-8">
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-beige/35">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-serif text-lg">No products match your search.</p>
          </div>
        )}
      </div>
    </main>
  )
}
