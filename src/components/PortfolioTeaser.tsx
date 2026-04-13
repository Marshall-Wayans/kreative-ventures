import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
const portfolioItems = [
  {
    title: 'Corporate Awards',
    category: 'Engraving',
    image:
      'https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    title: 'Fleet Branding',
    category: 'Signage',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    title: 'Custom Apparel',
    category: 'Printing',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    title: 'Leather Journals',
    category: 'Engraving',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    title: 'Event Banners',
    category: 'Printing',
    image:
      'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
]
export function PortfolioTeaser() {
  return (
    <section className="py-24 bg-kv-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2
              className="text-4xl font-bold text-kv-black mb-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              Recent Work
            </motion.h2>
            <motion.p
              className="text-kv-muted text-lg max-w-xl"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              A selection of our finest craftsmanship and branding projects.
            </motion.p>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <Link
              to="/portfolio"
              className="px-6 py-3 bg-kv-red text-white rounded-md font-semibold hover:bg-kv-red-hover transition-all flex items-center gap-2"
            >
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-md overflow-hidden group cursor-pointer ${item.colSpan} ${item.rowSpan}`}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-kv-red text-sm font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
