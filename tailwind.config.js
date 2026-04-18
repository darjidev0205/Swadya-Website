/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: '#E67E22', light: '#F39C12', dark: '#D35400' },
        spice:   { DEFAULT: '#C0392B', light: '#E74C3C', dark: '#962D22' },
        gold:    { DEFAULT: '#D4AC0D', light: '#F1C40F' },
        brown:   { DEFAULT: '#6B3A2A', light: '#8B5E3C', dark: '#4A2518' },
        beige:   { DEFAULT: '#F5E6C8', dark: '#E8D5A3' },
        cream:   { DEFAULT: '#FDF8F0' },
        dark:    { DEFAULT: '#0D0804', mid: '#110B05', card: '#1A0F08' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backdropBlur: { xs: '4px' },
      animation: {
        'float':     'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up':   'fadeUp 0.8s ease forwards',
        'shimmer':   'shimmer 2s linear infinite',
        'pulse-slow':'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '0%': { backgroundPosition: '200% center' }, '100%': { backgroundPosition: '-200% center' } },
      },
      backgroundImage: {
        'gradient-spice': 'linear-gradient(135deg, #E67E22, #C0392B)',
        'gradient-gold':  'linear-gradient(135deg, #D4AC0D, #E67E22)',
      },
      boxShadow: {
        'spice': '0 12px 32px rgba(230,126,34,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
        'card':  '0 20px 48px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
