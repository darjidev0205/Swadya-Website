import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme.jsx'
import Navbar    from './components/Navbar.jsx'
import Footer    from './components/Footer.jsx'
import HomePage  from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import InquiryPage from './pages/InquiryPage.jsx'

export default function App() {
  // Set dark class on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved !== 'light') document.documentElement.classList.add('dark')
  }, [])

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />}          />
        <Route path="/products"  element={<ProductsPage />}      />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/inquiry"   element={<InquiryPage />}       />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}
