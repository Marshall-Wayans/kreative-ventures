import { useEffect } from 'react'
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
// import { Packages } from './pages/Packages'
import { Reviews } from './pages/Reviews'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'
import { Brand } from './pages/Brand'
import './components/kreative-ventures.css'
import './pages/kreative-ventures-pages.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// ✅ FIX: Proper animation handling (no lag)
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/packages" element={<Packages />} /> */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="app-root">
        <Header />

        <main className="app-main">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  )
}