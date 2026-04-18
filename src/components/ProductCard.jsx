import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProductCard({ product, index = 0 }) {
  const { id, name, emoji, category, description, base_price } = product

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        to={`/products/${id}`}
        className="group block glass rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-card transition-all duration-400 border border-white/10 hover:border-saffron/40"
      >
        {/* Image area */}
        <div
          className="h-40 flex items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(192,57,43,0.15), rgba(107,58,42,0.2))' }}
        >
          {/* Category badge */}
          <span className="absolute top-3 left-3 z-10 text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
            style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}>
            {category === 'herbal' ? 'Herbal' : 'Masala'}
          </span>

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: 'linear-gradient(135deg,rgba(230,126,34,0.12),transparent)' }} />

          <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-400">
            {emoji}
          </span>
        </div>

        {/* Body */}
        <div className="p-5">
          <h3 className="font-display text-base font-semibold text-beige mb-1.5 group-hover:text-saffron transition-colors">
            {name}
          </h3>
          <p className="text-xs text-beige/50 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-serif text-saffron text-lg">
                ₹{base_price.toLocaleString('en-IN')}
              </span>
              <span className="text-beige/35 text-xs">/kg</span>
            </div>
            <span className="text-xs text-saffron/70 group-hover:text-saffron transition-colors font-medium">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
