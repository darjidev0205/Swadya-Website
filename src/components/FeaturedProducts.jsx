import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const FEATURED = PRODUCTS.slice(0, 6)

export default function FeaturedProducts() {
  const [active, setActive] = useState(0)
  const product = FEATURED[active]

  return (
    <section className="py-24 px-4" style={{ background: '#0D0804' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Featured Range"
          title='Our <em class="italic text-saffron">Bestsellers</em>'
          sub="A curated selection from our most sought-after bulk products."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          {/* Selector tabs */}
          <div className="flex flex-col gap-3">
            {FEATURED.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                    active === i
                      ? 'border-saffron/50 shadow-spice'
                      : 'glass border-white/10 hover:border-saffron/25'
                  }`}
                  style={active === i ? { background: 'linear-gradient(135deg,rgba(230,126,34,0.12),rgba(192,57,43,0.08))' } : {}}
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <div className="font-display text-sm text-beige font-semibold">{p.name}</div>
                    <div className="text-xs text-beige/40 mt-0.5">₹{p.base_price}/kg · {p.category}</div>
                  </div>
                  {active === i && (
                    <span className="ml-auto text-saffron text-lg">→</span>
                  )}
                </button>
              </Reveal>
            ))}
          </div>

          {/* Detail card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <motion.span
                className="text-7xl block mb-5"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {product.emoji}
              </motion.span>
              <span className="text-xs tracking-widest uppercase text-saffron font-medium">
                {product.category === 'herbal' ? 'Herbal Product' : 'Masala & Food'}
              </span>
              <h3 className="font-display text-2xl text-beige mt-2 mb-3">{product.name}</h3>
              <p className="text-sm text-beige/55 leading-relaxed mb-6 line-clamp-3">{product.description}</p>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-serif text-saffron text-2xl">₹{product.base_price.toLocaleString('en-IN')}/kg</div>
                  <div className="text-xs text-beige/35 mt-0.5">Tiered bulk pricing available</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/products/${product.id}`}
                  className="flex-1 text-center py-2.5 rounded-full text-sm font-medium text-white transition-all hover:shadow-spice"
                  style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
                >
                  View Details
                </Link>
                <Link
                  to="/inquiry"
                  className="flex-1 text-center py-2.5 rounded-full text-sm font-medium text-beige glass border border-white/20 hover:border-saffron/40 transition-all"
                >
                  Inquire
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-beige glass border border-white/20 hover:border-saffron/40 text-sm tracking-wide transition-all hover:-translate-y-1"
          >
            View All {PRODUCTS.length} Products →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
