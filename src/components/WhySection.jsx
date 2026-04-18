import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const CARDS = [
  {
    icon: '📦',
    title: 'Bulk Advantage',
    desc: 'Starting from 1kg to 25kg+ — tiered pricing rewards larger orders with competitive wholesale rates tailored for retailers and processors.',
  },
  {
    icon: '🌱',
    title: 'Ethically Sourced',
    desc: 'Direct relationships with farmers across Gujarat, Rajasthan, and Kerala. No middlemen. Full traceability from field to pack.',
  },
  {
    icon: '🔬',
    title: 'Lab Tested',
    desc: 'Every batch undergoes rigorous quality testing for purity, moisture levels, and zero adulteration. Certificates available on request.',
  },
  {
    icon: '🚛',
    title: 'Fast Logistics',
    desc: 'Pan-India delivery within 3–5 business days. Vacuum-sealed packaging preserves freshness for up to 18 months.',
  },
]

export default function WhySection() {
  return (
    <section id="why" className="py-24 px-4" style={{ background: 'linear-gradient(180deg,#0D0804 0%,#110B05 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Why Partner With Us"
          title='Built for <em class="italic text-saffron">Bulk.</em><br/>Trusted by Thousands.'
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="glass rounded-2xl p-6 group hover:-translate-y-2 hover:border-saffron/40 hover:shadow-card transition-all duration-400 border border-white/10 h-full relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg,rgba(230,126,34,0.08),transparent)' }} />
                <span className="text-4xl mb-5 block">{c.icon}</span>
                <h3 className="font-display text-lg text-beige mb-2.5 relative z-10">{c.title}</h3>
                <p className="text-sm text-beige/55 leading-relaxed relative z-10">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
