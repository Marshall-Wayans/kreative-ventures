import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
const products = [
  {
    name: 'Custom Gifts',
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop',
  },
  {
    name: 'Signage',
    image:
      'https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Trophies',
    image:
      'https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Vehicle Branding',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Stationery',
    image:
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop',
  },
]
export function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  return (
    <section
      ref={containerRef}
      className="py-24 bg-kv-charcoal border-t-2 border-kv-red overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
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
          What We Make
        </motion.h2>
        <motion.p
          className="text-kv-silver text-lg max-w-2xl"
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
          From intricate engravings to large-scale prints, explore our diverse
          range of custom products.
        </motion.p>
      </div>

      <motion.div
        style={{
          x,
        }}
        className="flex gap-6 px-6 w-max"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative w-72 md:w-96 h-96 rounded-md overflow-hidden group cursor-pointer shrink-0"
            initial={{
              opacity: 0,
              scale: 0.9,
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
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                {product.name}
              </h3>
              <div className="h-1 w-12 bg-kv-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
