import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitInquiry } from '../lib/supabase.js'
import { PRODUCTS } from '../data/products.js'

const INPUT_CLASS =
  'w-full bg-white/5 border border-white/10 focus:border-saffron rounded-xl px-4 py-3 text-beige placeholder-beige/25 text-sm outline-none transition-colors duration-200'

export default function InquiryForm({ defaultProduct = '' }) {
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '',
    product: defaultProduct, quantity_kg: '', message: '',
  })
  const [loading, setLoading] = useState(false)
  const [done, setDone]       = useState(false)
  const [error, setError]     = useState('')

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true); setError('')
    const result = await submitInquiry({ ...form, created_at: new Date().toISOString() })
    setLoading(false)
    if (result.success) setDone(true)
    else setError('Something went wrong. Please try again or email us directly.')
  }

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass border border-saffron/30 rounded-2xl p-10 text-center"
        >
          <div className="text-5xl mb-4">✅</div>
          <h3 className="font-display text-2xl text-beige mb-2">Inquiry Sent!</h3>
          <p className="text-sm text-beige/55">Our team will contact you within 24 hours with custom pricing and sample details.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs tracking-widest uppercase text-beige/40 mb-1.5 block">Full Name *</label>
              <input className={INPUT_CLASS} placeholder="Ramesh Patel" required value={form.name} onChange={set('name')} />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-beige/40 mb-1.5 block">Business / Company</label>
              <input className={INPUT_CLASS} placeholder="Your Business Name" value={form.business} onChange={set('business')} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs tracking-widest uppercase text-beige/40 mb-1.5 block">Phone / WhatsApp *</label>
              <input className={INPUT_CLASS} placeholder="+91 98765 43210" required type="tel" value={form.phone} onChange={set('phone')} />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-beige/40 mb-1.5 block">Email</label>
              <input className={INPUT_CLASS} placeholder="email@business.com" type="email" value={form.email} onChange={set('email')} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs tracking-widest uppercase text-beige/40 mb-1.5 block">Product Interest</label>
              <select className={INPUT_CLASS} value={form.product} onChange={set('product')}
                style={{ background: '#1A0F08' }}>
                <option value="">Select a product…</option>
                {PRODUCTS.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
                <option value="Multiple Products">Multiple Products</option>
              </select>
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-beige/40 mb-1.5 block">Quantity (kg)</label>
              <input className={INPUT_CLASS} placeholder="e.g. 50" type="number" min="1" value={form.quantity_kg} onChange={set('quantity_kg')} />
            </div>
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-beige/40 mb-1.5 block">Message</label>
            <textarea
              className={INPUT_CLASS}
              rows={4}
              placeholder="Approximate quantity needed, packaging preference, delivery location, or any questions…"
              value={form.message}
              onChange={set('message')}
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full font-medium text-white text-sm tracking-wide transition-all hover:-translate-y-1 hover:shadow-spice disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
          >
            {loading ? 'Sending…' : 'Send Inquiry →'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
