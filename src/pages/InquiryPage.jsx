import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'

const CONTACT = [
  { icon: '📧', label: 'Email',    value: 'sales@svadyaspice.com' },
  { icon: '📍', label: 'Address',  value: 'Ahmedabad, Gujarat, India' },
  { icon: '⏰', label: 'Hours',    value: 'Mon–Sat, 9am–6pm IST' },
  { icon: '📦', label: 'Min Order', value: '1 kg per product' },
]

export default function InquiryPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-4" style={{ background: '#0D0804' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeader
              label="Bulk Inquiry"
              title='Get a Custom <em class="italic text-saffron">Quote</em>'
              sub="Tell us what you need. We'll respond within 24 hours with custom pricing, sample availability, and logistics details."
            />

            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {CONTACT.map(c => (
                <Reveal key={c.label}>
                  <div className="glass border border-white/10 rounded-xl p-4">
                    <span className="text-2xl block mb-2">{c.icon}</span>
                    <div className="text-xs text-beige/35 tracking-widest uppercase mb-1">{c.label}</div>
                    <div className="text-sm text-beige/70">{c.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Why bulk section */}
            <Reveal delay={100} className="mt-10">
              <div className="glass border border-white/10 rounded-2xl p-6">
                <h4 className="font-display text-lg text-beige mb-4">Why Buy Bulk?</h4>
                <ul className="space-y-3">
                  {[
                    'Significant cost savings with tiered pricing',
                    'Consistent quality with every batch',
                    'Priority dispatch and dedicated account manager',
                    'Custom packaging and white-label options available',
                    'COA and lab reports with every shipment',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-beige/60">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={80}>
            <div className="glass border border-white/10 rounded-3xl p-8">
              <h3 className="font-display text-xl text-beige mb-6">Send Your Inquiry</h3>
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}
