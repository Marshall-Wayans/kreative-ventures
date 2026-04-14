import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import logo from '../assets/logo.png'

const navLinks = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Services',  path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Packages',  path: '/packages' },
  { name: 'Reviews',   path: '/reviews' },
  { name: 'FAQ',       path: '/faq' },
  { name: 'Brand',     path: '/brand' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const location = useLocation()

  /* ================= CLOSE MOBILE MENU ON ROUTE CHANGE ================= */
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  /* ================= PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN ================= */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  /* ================= SCROLL HIDE / SHOW NAVBAR ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setIsHidden(true)
      } else {
        // scrolling up
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
      <div className="header__inner">
        
        {/* Brand */}
        <Link to="/" className="header__brand">
          <img src={logo} alt="Kreative Ventures Logo" className="header__logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`header__nav-link${
                location.pathname === link.path ? ' header__nav-link--active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="header__cta">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="header__mobile-nav"
            aria-label="Mobile navigation"
          >
            <nav className="header__mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="header__mobile-link"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="header__mobile-cta">
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}