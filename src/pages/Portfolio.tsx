import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const categories = [
  'All',
  'Engraving',
  'Printing',
  'Signage',
  'Branding',
  'Apparel',
  'Gifts',
]
const portfolioItems = [
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
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop',
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
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full pt-20"
    >
      {/* Header */}
      <section className="py-24 bg-kv-bg text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-kv-black mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Our Work
          </motion.h1>
          <div className="h-1 w-24 bg-kv-red mx-auto mb-8"></div>
          <motion.p
            className="text-xl text-kv-muted"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            The craftsmanship speaks for itself. Explore our recent projects
            across various industries.
          </motion.p>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-16 bg-kv-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 border ${activeCategory === category ? 'bg-kv-red border-kv-red text-white' : 'bg-white border-[#DDDBD4] text-kv-muted hover:border-kv-red hover:text-kv-red'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative rounded-md overflow-hidden cursor-pointer h-80"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-kv-red text-xs font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.title}
                    </h3>
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
