import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
}

const categories = [
  'All',
  'Engraving',
  'Printing',
  'Signage',
  'Branding',
  'Apparel',
  'Gifts',
]

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Corporate Awards',
    category: 'Engraving',
    image:
      'https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Fleet Branding',
    category: 'Signage',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Custom Apparel',
    category: 'Printing',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    title: 'Leather Journals',
    category: 'Engraving',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Event Banners',
    category: 'Printing',
    image:
      'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Tech Startup Identity',
    category: 'Branding',
    image:
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Premium Keychains',
    category: 'Gifts',
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Staff Uniforms',
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1927&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Office Wayfinding',
    category: 'Signage',
    image:
      'https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?q=80&w=2070&auto=format&fit=crop',
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <motion.div
      className="page portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="portfolio-header">
        <div className="portfolio-header__inner">
          <motion.h1
            className="portfolio-header__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Work
          </motion.h1>
          <div className="page-hero__divider" style={{ margin: '0 auto 2rem' }} />
          <motion.p
            className="portfolio-header__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The craftsmanship speaks for itself. Explore our recent projects
            across various industries.
          </motion.p>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <section className="portfolio-gallery">
        <div className="kv-container">
          {/* Filter tabs */}
          <div className="portfolio-filters" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`portfolio-filter-btn${activeCategory === category ? ' portfolio-filter-btn--active' : ''}`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="portfolio-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-item__img"
                  />
                  <div className="portfolio-item__overlay">
                    <span className="portfolio-item__category">
                      {item.category}
                    </span>
                    <h3 className="portfolio-item__title">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
