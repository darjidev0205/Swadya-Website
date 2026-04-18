import { useState, useEffect } from 'react'
import Loader          from '../components/Loader.jsx'
import HeroSection     from '../components/HeroSection.jsx'
import WhySection      from '../components/WhySection.jsx'
import StorySection    from '../components/StorySection.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import TaglineSection  from '../components/TaglineSection.jsx'
import InquiryForm     from '../components/InquiryForm.jsx'
import SectionHeader   from '../components/SectionHeader.jsx'
import Reveal          from '../components/Reveal.jsx'

export default function HomePage() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('loaded'))

  function onLoaderDone() {
    sessionStorage.setItem('loaded', '1')
    setLoading(false)
  }

  if (loading) return <Loader onDone={onLoaderDone} />

  return (
    <main>
      <HeroSection />
      <WhySection />
      <StorySection />
      <FeaturedProducts />
      <TaglineSection />

      {/* Inline inquiry on homepage */}
      <section className="py-24 px-4" style={{ background: '#110B05' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeader
              label="Get In Touch"
              title='Request a <em class="italic text-saffron">Bulk Quote</em>'
              sub="Tell us what you need. Our team responds within 24 hours with custom pricing and sample availability."
            />
            <Reveal delay={100} className="mt-8 space-y-3 text-sm text-beige/50">
              <div className="flex items-center gap-3"><span className="text-lg">📧</span> sales@svadyaspice.com</div>
              <div className="flex items-center gap-3"><span className="text-lg">📍</span> Ahmedabad, Gujarat, India</div>
              <div className="flex items-center gap-3"><span className="text-lg">⏰</span> Mon–Sat, 9am–6pm IST</div>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
