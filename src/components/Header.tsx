import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
    },
    {
      name: 'Packages',
      path: '/packages',
    },
    {
      name: 'Reviews',
      path: '/reviews',
    },
    {
      name: 'FAQ',
      path: '/faq',
    },
    {
      name: 'Brand',
      path: '/brand',
    },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kv-black">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="font-bold text-xl tracking-widest text-white">
            KREATIVE VENTURES
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-white' : 'text-kv-silver hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-md text-sm font-semibold bg-kv-red text-white hover:bg-kv-red-hover transition-all"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed inset-0 bg-kv-black z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-medium text-kv-silver hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 px-8 py-4 rounded-md bg-kv-red text-white text-lg font-semibold mx-auto w-full max-w-xs hover:bg-kv-red-hover"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
