import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x:  Math.random() * 100,
  dur: 3 + Math.random() * 4,
  delay: Math.random() * 2,
  size: 2 + Math.random() * 4,
  color: ['#E67E22','#C0392B','#D4AC0D','#8B5E3C','#F39C12'][i % 5],
}))

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [show, setShow]         = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(timer); return 100 }
        return p + 2
      })
    }, 40)
    const done = setTimeout(() => {
      setShow(false)
      setTimeout(onDone, 800)
    }, 2400)
    return () => { clearInterval(timer); clearTimeout(done) }
  }, [onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at center, #1A0A00 0%, #0D0804 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {PARTICLES.map(p => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{ left: `${p.x}%`, width: p.size, height: p.size, background: p.color, opacity: 0.6 }}
                animate={{ y: [window.innerHeight + 20, -20], opacity: [0, 0.7, 0.7, 0] }}
                transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="text-6xl mb-4">🌿</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-beige tracking-wide">
              Svadya <span className="text-saffron">Spice</span>
            </h1>
            <p className="font-serif text-saffron tracking-[0.4em] text-sm mt-2 uppercase">
              Preparing Fresh Taste
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full mt-10 overflow-hidden z-10">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #E67E22, #D4AC0D)' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
          <p className="text-white/30 text-xs mt-3 z-10 tracking-widest">Loading…</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
