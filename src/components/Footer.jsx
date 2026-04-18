import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PRODUCTS_LINKS = ['Herbal Powders','Masala Blends','Premix Range','Authentic Hing','Herbal Teas']
const COMPANY_LINKS  = [
  { to: '/',         label: 'Home'              },
  { to: '/products', label: 'Products'          },
  { to: '/inquiry',  label: 'Bulk Inquiry'      },
]

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/5 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-display text-xl font-bold text-beige">
                Svadya <span className="text-saffron">Spice</span> Masala
              </span>
            </div>
            <p className="font-serif italic text-saffron text-base mb-3">Pure. Powerful. Proven.</p>
            <p className="text-beige/40 text-sm leading-7 max-w-xs">
              Your trusted bulk partner in natural wellness. Delivering purity from the heart of Gujarat to tables across India.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-beige/35 mb-5">Products</h4>
            <ul className="space-y-2">
              {PRODUCTS_LINKS.map(p => (
                <li key={p}>
                  <Link to="/products" className="text-sm text-beige/55 hover:text-saffron transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-beige/35 mb-5">Company</h4>
            <ul className="space-y-2 mb-6">
              {COMPANY_LINKS.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-beige/55 hover:text-saffron transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs tracking-[0.2em] uppercase text-beige/35 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-beige/50">
              <div className="flex items-center gap-2"><span>📧</span> sales@svadyaspice.com</div>
              <div className="flex items-center gap-2"><span>📍</span> Ahmedabad, Gujarat, India</div>
              <div className="flex items-center gap-2"><span>⏰</span> Mon–Sat, 9am–6pm IST</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-beige/25">
          <span>© {new Date().getFullYear()} Svadya Spice Masala. All rights reserved.</span>
          <span>Made with 🌿 in Ahmedabad, India</span>
        </div>
      </div>
    </footer>
  )
}
