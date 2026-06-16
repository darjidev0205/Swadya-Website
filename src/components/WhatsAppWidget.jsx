import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare, Send } from 'lucide-react'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = '919265956761'

  const options = [
    {
      label: 'Book Order 📦',
      message: 'Hello Svadya Spice, I would like to book an order for your premium spices.'
    },
    {
      label: 'Product Inquiry 🌿',
      message: 'Hello Svadya Spice, I have an inquiry about your organic herbal products and spices.'
    },
    {
      label: 'Bulk Order 💼',
      message: 'Hello Svadya Spice, I am interested in placing a bulk wholesale order.'
    },
    {
      label: 'Talk to Support 💬',
      message: 'Hello Svadya Spice, I would like to speak with a customer support representative.'
    }
  ]

  const handleOptionClick = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-4 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-card border border-saffron/20 glass"
          >
            {/* Header */}
            <div className="relative p-5 bg-gradient-to-r from-dark-card to-dark-mid border-b border-saffron/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/30 flex items-center justify-center text-xl">
                    🌿
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-dark rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-beige">Svadya Spice</h3>
                  <p className="text-xs text-beige/50">Typically replies in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 text-beige/70 hover:text-saffron hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 space-y-4 max-h-[350px] overflow-y-auto bg-dark/60 backdrop-blur-md">
              {/* Agent Message */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-saffron/10 border border-saffron/30 flex items-center justify-center text-sm shrink-0">
                  🍃
                </div>
                <div className="space-y-2 max-w-[80%]">
                  <div className="bg-dark-card border border-white/5 rounded-2xl rounded-tl-none p-3 shadow-sm">
                    <p className="text-sm text-beige/90">Hi 👋 Welcome to Svadya Spice</p>
                  </div>
                  <div className="bg-dark-card border border-white/5 rounded-2xl rounded-tl-none p-3 shadow-sm">
                    <p className="text-sm text-beige/90">How can we help you today?</p>
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="pt-2 text-center">
                <span className="text-[10px] text-saffron/40 uppercase tracking-[0.2em] font-medium">Select an Option</span>
              </div>

              {/* Quick Options */}
              <div className="space-y-2 pt-1">
                {options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOptionClick(opt.message)}
                    className="w-full text-left p-3.5 rounded-xl border border-saffron/20 hover:border-saffron/60 bg-dark-card/50 hover:bg-gradient-spice text-sm text-beige hover:text-white font-medium shadow-sm transition-colors duration-200 group flex justify-between items-center"
                  >
                    <span>{opt.label}</span>
                    <Send size={14} className="text-saffron group-hover:text-white transition-colors opacity-60 group-hover:opacity-100" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Chat Footer */}
            <div className="p-3 bg-dark-mid/40 border-t border-saffron/10 text-center">
              <span className="text-[10px] text-beige/30 flex items-center justify-center gap-1">
                Powered by WhatsApp <MessageSquare size={10} />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-shadow cursor-pointer select-none bg-[#25D366] text-white hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
        aria-label="Contact Support on WhatsApp"
      >
        {/* Subtle Ping/Pulse Animation when chat is closed */}
        {!isOpen && (
          <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-40 animate-pulse-slow"></span>
        )}

        {/* Dynamic icon depending on state */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {/* Premium WhatsApp SVG Icon */}
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.945 9.945 0 0 0 4.88 1.277h.005c5.505 0 9.989-4.478 9.99-9.985A9.97 9.97 0 0 0 12.012 2zm5.782 14.156c-.248.697-1.448 1.355-1.994 1.409-.49.049-1.129.068-1.802-.147a13.313 13.313 0 0 1-5.1-3.21 12.186 12.186 0 0 1-3.009-4.704c-.347-.923-.05-1.428.243-1.745.242-.26.545-.615.818-.923.25-.289.337-.482.495-.812.16-.33.083-.618-.041-.866-.124-.248-1.117-2.695-1.533-3.693-.404-.972-.813-.84-.117-.84h-.355c-.248 0-.643.093-.98.463-.336.371-1.286 1.258-1.286 3.064 0 1.806 1.316 3.55 1.5 3.8.181.248 2.59 3.955 6.275 5.54.876.377 1.56.602 2.093.771.88.278 1.681.238 2.314.144.707-.104 2.174-.888 2.479-1.742.304-.855.304-1.586.213-1.74-.092-.156-.338-.248-.736-.446z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
