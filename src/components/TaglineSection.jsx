import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function TaglineSection() {
  return (
    <section
      className="py-32 px-4 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#1A0800,#0D0804)' }}
    >
      {/* Decorative ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(192,57,43,0.1) 0%, transparent 70%)' }}
      />

      <Reveal>
        <h2 className="font-display font-bold text-beige leading-none mb-4"
          style={{ fontSize: 'clamp(3rem,9vw,7rem)' }}>
          Pure<span className="text-saffron">.</span>{' '}
          Powerful<span className="text-saffron">.</span>{' '}
          Proven<span className="text-saffron">.</span>
        </h2>
        <p className="font-serif text-lg text-beige/40 tracking-[0.25em] mb-12">
          Your Bulk Partner in Natural Wellness.
        </p>
        <Link
          to="/inquiry"
          className="inline-flex items-center px-10 py-4 rounded-full text-white font-medium text-base transition-all hover:-translate-y-1 hover:shadow-spice"
          style={{ background: 'linear-gradient(135deg,#E67E22,#C0392B)' }}
        >
          Start Your Bulk Order →
        </Link>
      </Reveal>
    </section>
  )
}
