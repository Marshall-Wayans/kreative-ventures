import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Portfolio } from './pages/Portfolio'
import { Packages } from './pages/Packages'
import { Reviews } from './pages/Reviews'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'
import { Brand } from './pages/Brand'
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-cream font-sans text-brand-dark selection:bg-brand-secondary selection:text-white">
        <Header />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/brand" element={<Brand />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  )
}
