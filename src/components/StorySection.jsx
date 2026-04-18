import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const STATS = [['18+','Products'],['500+','Bulk Clients'],['100%','Lab Certified'],['12+','Years']]

export default function StorySection() {
  return (
    <section id="story" className="py-24 px-4 relative overflow-hidden" style={{ background: '#110B05' }}>
      {/* Ambient glow */}
      <div className="absolute left-[-10%] top-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, rgba(192,57,43,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Visual column */}
        <Reveal className="hidden md:block">
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg,rgba(192,57,43,0.18),rgba(107,58,42,0.28))', border: '1px solid rgba(255,200,100,0.18)' }}
            >
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg,rgba(230,126,34,0.08),transparent)' }} />
              <motion.span
                className="text-9xl relative z-10"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >🏺</motion.span>

              {/* Decorative ring */}
              <div className="absolute inset-8 rounded-full border border-saffron/10" />
              <div className="absolute inset-16 rounded-full border border-saffron/5" />
            </div>

            {/* Badge */}
            <div
              className="absolute -bottom-5 -right-5 px-5 py-4 rounded-xl text-white text-sm leading-snug shadow-card"
              style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
            >
              Est. in the<br /><strong className="font-display text-base">Heart of Gujarat</strong>
            </div>
          </div>
        </Reveal>

        {/* Text column */}
        <div>
          <Reveal>
            <span className="label block mb-4">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-beige leading-tight mb-6">
              Rooted in <em className="italic text-saffron">Heritage.</em>
            </h2>
            <blockquote className="font-serif text-xl md:text-2xl italic text-beige/75 leading-relaxed border-l-2 border-saffron pl-5 mb-6">
              "Every spice carries a memory — of sun-dried mornings, grandmother's hands, and meals that held families together."
            </blockquote>
            <p className="text-sm text-beige/55 leading-8 mb-10">
              Svadya Spice Masala was born from a simple belief: that purity should never be compromised. Starting from a small processing unit in Ahmedabad, we've grown to serve hundreds of retailers, restaurants, and herbal brands across India — all while holding true to traditional methods and modern quality standards.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={120}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map(([n, l]) => (
                <div key={l} className="glass rounded-xl px-4 py-4 text-center border border-white/10">
                  <div className="font-display text-2xl font-bold text-saffron">{n}</div>
                  <div className="text-xs text-beige/40 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
