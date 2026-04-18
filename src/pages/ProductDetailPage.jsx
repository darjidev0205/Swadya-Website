import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PRODUCTS, calcPrice } from '../data/products.js'
import InquiryForm from '../components/InquiryForm.jsx'
import Reveal from '../components/Reveal.jsx'

const TIERS = [
  { min: 1,  max: 4,  label: '1–4 kg',   disc: 0   },
  { min: 5,  max: 9,  label: '5–9 kg',   disc: 8   },
  { min: 10, max: 19, label: '10–19 kg', disc: 15  },
  { min: 20, max: 25, label: '20–25 kg', disc: 25  },
]

export default function ProductDetailPage() {
  const { id }       = useParams()
  const navigate     = useNavigate()
  const product      = PRODUCTS.find(p => String(p.id) === String(id))
  const [qty, setQty]           = useState(5)
  const [showInquiry, setShowInquiry] = useState(false)

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-beige/50 pt-24">
      <div className="text-6xl">😕</div>
      <p className="font-serif text-xl">Product not found.</p>
      <Link to="/products" className="text-saffron hover:underline text-sm">← Back to Products</Link>
    </div>
  )

  const totalPrice = calcPrice(product.base_price, qty)

  // Current discount tier
  const tier = TIERS.findLast(t => qty >= t.min) || TIERS[0]

  return (
    <main className="min-h-screen pt-28 pb-20 px-4" style={{ background: '#0D0804' }}>
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-beige/35 mb-10">
          <Link to="/" className="hover:text-saffron transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-saffron transition-colors">Products</Link>
          <span>/</span>
          <span className="text-beige/60">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Visual + info */}
          <div>
            <motion.div
              className="glass rounded-3xl aspect-square flex items-center justify-center border border-white/10 mb-6 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg,rgba(230,126,34,0.08),rgba(192,57,43,0.05))' }} />
              <motion.span
                className="text-[8rem] relative z-10"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {product.emoji}
              </motion.span>

              {/* Category badge */}
              <span
                className="absolute top-4 left-4 text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full text-white"
                style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
              >
                {product.category === 'herbal' ? 'Herbal' : 'Masala & Food'}
              </span>
            </motion.div>

            {/* Tags */}
            {product.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-beige/50">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Benefits */}
            <Reveal>
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h4 className="text-xs tracking-[0.2em] uppercase text-beige/35 mb-4">Wholesale Benefits</h4>
                <ul className="space-y-3">
                  {(product.benefits || []).map(b => (
                    <li key={b} className="flex items-start gap-3 text-sm text-beige/65">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: Pricing + CTA */}
          <div>
            <Reveal>
              <span className="label block mb-3">{product.category === 'herbal' ? 'Herbal Product' : 'Masala & Food'}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-beige leading-tight mb-4">
                {product.name}
              </h1>
              <p className="font-serif text-base text-beige/60 leading-relaxed mb-8">
                {product.description}
              </p>
            </Reveal>

            {/* Pricing tiers */}
            <Reveal delay={80}>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {TIERS.map(t => (
                  <div
                    key={t.label}
                    className={`rounded-xl px-4 py-3 border text-center text-sm transition-all ${
                      qty >= t.min && qty <= t.max
                        ? 'border-saffron/50 bg-saffron/10'
                        : 'glass border-white/10'
                    }`}
                  >
                    <div className="font-medium text-beige">{t.label}</div>
                    <div className="text-saffron text-xs mt-0.5">
                      {t.disc === 0 ? 'Base price' : `${t.disc}% off`}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Qty slider */}
            <Reveal delay={120}>
              <div className="glass rounded-2xl p-6 border border-white/10 mb-5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-beige/50">Select Quantity</span>
                  <span className="font-display text-lg text-beige">{qty} kg</span>
                </div>
                <input
                  type="range" min="1" max="25" step="1"
                  value={qty}
                  onChange={e => setQty(Number(e.target.value))}
                  className="w-full accent-saffron cursor-pointer"
                  style={{ accentColor: '#E67E22' }}
                />
                <div className="flex justify-between text-xs text-beige/30 mt-1.5">
                  <span>1 kg</span><span>25 kg</span>
                </div>

                <div className="border-t border-white/10 mt-5 pt-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-beige/40">Total estimate</div>
                    {tier.disc > 0 && (
                      <div className="text-xs text-green-400 mt-0.5">{tier.disc}% bulk discount applied</div>
                    )}
                  </div>
                  <div className="font-display text-3xl text-saffron">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={160}>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowInquiry(s => !s)}
                  className="flex-1 py-3.5 rounded-full text-sm font-medium text-white transition-all hover:-translate-y-1 hover:shadow-spice"
                  style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
                >
                  {showInquiry ? 'Hide Form' : 'Inquire Now'}
                </button>
                <Link
                  to="/products"
                  className="flex-1 text-center py-3.5 rounded-full text-sm font-medium text-beige glass border border-white/20 hover:border-saffron/40 transition-all hover:-translate-y-1"
                >
                  ← All Products
                </Link>
              </div>
            </Reveal>

            {/* Inline inquiry form */}
            {showInquiry && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <InquiryForm defaultProduct={product.name} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
