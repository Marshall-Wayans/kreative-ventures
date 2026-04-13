import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface PortfolioItem {
  title: string
  category: string
  image: string
  /** Whether the item spans 2 columns on desktop */
  wide?: boolean
  /** Whether the item spans 2 rows on desktop */
  tall?: boolean
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Corporate Awards',
    category: 'Engraving',
    image:
      'https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop',
    wide: true,
    tall: true,
  },
  {
    title: 'Fleet Branding',
    category: 'Signage',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Custom Apparel',
    category: 'Printing',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60',
  },
  {
    title: 'Leather Journals',
    category: 'Engraving',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Event Banners',
    category: 'Printing',
    image:
      'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop',
  },
]

export function PortfolioTeaser() {
  return (
    <section className="portfolio-teaser">
      <div className="kv-container">
        {/* Header */}
        <div className="portfolio-teaser__header">
          <div>
            <motion.h2
              className="portfolio-teaser__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Recent Work
            </motion.h2>
            <motion.p
              className="portfolio-teaser__subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A selection of our finest craftsmanship and branding projects.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio" className="portfolio-teaser__cta">
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Masonry grid */}
        <div className="portfolio-teaser__grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className={[
                'portfolio-teaser__item',
                item.wide ? 'portfolio-teaser__item--wide' : '',
                item.tall ? 'portfolio-teaser__item--tall' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-teaser__item-img"
              />
              <div className="portfolio-teaser__item-overlay">
                <span className="portfolio-teaser__item-category">
                  {item.category}
                </span>
                <h3 className="portfolio-teaser__item-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
