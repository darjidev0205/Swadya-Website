import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
})

const FLOATING = [
  { emoji: '🌶', top: '14%', left: '8%',  delay: 0.4, size: 'text-4xl' },
  { emoji: '✨', bottom: '14%', right: '10%', delay: 0.8, size: 'text-3xl' },
  { emoji: '🍃', top: '20%', right: '14%', delay: 1.2, size: 'text-2xl' },
  { emoji: '🌾', bottom: '20%', left: '12%', delay: 0.6, size: 'text-2xl' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(192,57,43,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 20% 70%, rgba(230,126,34,0.09) 0%, transparent 50%),
            #0D0804
          `
        }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,200,100,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,200,100,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12">
        {/* Left: Text */}
        <div>
          <motion.span {...fadeUp(0.1)} className="label inline-block mb-5">
            Since Tradition · For Future
          </motion.span>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-display text-5xl md:text-7xl font-bold text-beige leading-[1.05] mb-6"
          >
            Taste of{' '}
            <em className="italic text-saffron not-italic" style={{ fontStyle: 'italic' }}>
              Tradition
            </em>
          </motion.h1>

          <motion.p {...fadeUp(0.4)} className="font-serif text-xl text-beige/65 leading-relaxed mb-8 max-w-lg">
            Premium spices & herbal products in bulk — ethically sourced, lab-tested, and delivered with the purity your customers deserve.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-full font-medium text-white text-sm tracking-wide transition-all hover:-translate-y-1 hover:shadow-spice"
              style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
            >
              Explore Products
            </Link>
            <Link
              to="/inquiry"
              className="px-7 py-3.5 rounded-full font-medium text-beige text-sm tracking-wide glass border border-white/20 hover:border-saffron/50 transition-all hover:-translate-y-1"
            >
              Order in Bulk
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div {...fadeUp(0.7)} className="flex gap-8 mt-12">
            {[['18+','Products'],['500+','Bulk Clients'],['100%','Lab Certified']].map(([n,l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-saffron">{n}</div>
                <div className="text-xs text-beige/40 mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Glass card with floating spices */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px]">
            {/* Main glass card */}
            <div className="absolute inset-0 glass rounded-3xl flex items-center justify-center overflow-hidden">
              {/* Rotating ring */}
              <div
                className="absolute inset-[-25%] rounded-full animate-spin-slow opacity-10"
                style={{ background: 'conic-gradient(from 0deg, #C0392B, #E67E22, #D4AC0D, #8B5E3C, #E67E22, #C0392B)' }}
              />
              {/* Center emoji */}
              <motion.span
                className="text-8xl relative z-10"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                🌿
              </motion.span>
            </div>

            {/* Floating spices around card */}
            {FLOATING.map((f, i) => (
              <motion.span
                key={i}
                className={`absolute ${f.size}`}
                style={{ top: f.top, bottom: f.bottom, left: f.left, right: f.right }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.5, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                {f.emoji}
              </motion.span>
            ))}

            {/* Corner tag */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl text-white text-sm font-medium leading-snug"
              style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
            >
              Est. Gujarat<br /><strong>India 🇮🇳</strong>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-beige/30 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-beige/30 to-transparent" />
      </motion.div>
    </section>
  )
}
