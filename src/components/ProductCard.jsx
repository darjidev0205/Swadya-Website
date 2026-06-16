import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProductCard({ product, index = 0 }) {
  const { id, name, image, category, description, base_price } = product

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
          className="h-44 w-full relative overflow-hidden bg-[#1A0F08] flex items-center justify-center shadow-inner"
        >
          {/* Category badge */}
          <span className="absolute top-3 left-3 z-10 text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
            style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}>
            {category === 'herbal' ? 'Herbal' : 'Masala'}
          </span>

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(135deg,rgba(230,126,34,0.3),transparent)' }} />

          {/* Product Image with dynamic object-fit based on type */}
          <img
            src={image ? `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}` : `${import.meta.env.BASE_URL}images/fallback-product.jpg`}
            alt={name}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = `${import.meta.env.BASE_URL}images/fallback-product.jpg`
            }}
            className={`w-full h-full ${
              category === 'herbal' ? 'object-cover' : 'object-cover'
            } transform group-hover:scale-105 transition-transform duration-500 ease-out`}
            loading="lazy"
          />
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

