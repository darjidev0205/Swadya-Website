import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme.jsx'
import { Sun, Moon, Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/',          label: 'Home'     },
  { to: '/products',  label: 'Products' },
  { to: '/inquiry',   label: 'Inquiry'  },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const { pathname }     = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-glass' : 'py-4'
      }`}
      style={{
        background: scrolled
          ? dark ? 'rgba(13,8,4,0.85)' : 'rgba(253,248,240,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,200,100,0.15)' : 'none',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-display text-xl font-bold text-beige dark:text-beige">
            Svadya <span className="text-saffron">Spice</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === l.to
                    ? 'text-saffron'
                    : 'text-beige/70 hover:text-beige dark:text-beige/70 dark:hover:text-beige'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="glass rounded-full w-9 h-9 flex items-center justify-center text-beige/70 hover:text-saffron transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/inquiry"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-spice"
            style={{ background: 'linear-gradient(135deg, #E67E22, #C0392B)' }}
          >
            Bulk Order
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden glass rounded-full w-9 h-9 flex items-center justify-center text-beige"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col py-4">
              {LINKS.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block px-6 py-3 text-beige/80 hover:text-saffron hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 pt-3 pb-2">
                <Link
                  to="/inquiry"
                  className="block text-center py-2.5 rounded-full text-sm font-medium text-white"
                  style={{ background: 'linear-gradient(135deg, #E67E22, #C0392B)' }}
                >
                  Bulk Order Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
