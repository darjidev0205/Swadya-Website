import Reveal from './Reveal.jsx'

export default function SectionHeader({ label, title, sub, center = false }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {label && <span className="label block mb-3">{label}</span>}
      <h2
        className="font-display text-4xl md:text-5xl font-bold text-beige dark:text-beige leading-tight mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p className={`font-serif text-lg text-beige/60 leading-relaxed ${center ? 'mx-auto' : ''} max-w-xl`}>
          {sub}
        </p>
      )}
    </Reveal>
  )
}
