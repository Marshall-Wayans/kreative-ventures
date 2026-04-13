import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Product {
  name: string
  image: string
}

const products: Product[] = [
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
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60',
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

  // Parallax: row slides left as you scroll down
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section ref={containerRef} className="featured-products">
      {/* Header */}
      <div className="featured-products__header">
        <motion.h2
          className="featured-products__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What We Make
        </motion.h2>
        <motion.p
          className="featured-products__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          From intricate engravings to large-scale prints, explore our diverse
          range of custom products.
        </motion.p>
      </div>

      {/* Carousel row */}
      <motion.div style={{ x }} className="featured-products__row">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="featured-products__card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="featured-products__card-img"
            />
            <div className="featured-products__card-overlay" aria-hidden="true" />
            <div className="featured-products__card-footer">
              <h3 className="featured-products__card-name">{product.name}</h3>
              <div className="featured-products__card-line" aria-hidden="true" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
