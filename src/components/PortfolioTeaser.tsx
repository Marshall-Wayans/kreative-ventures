import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import apparel from '../assets/img-023.jpg'
import mugs from '../assets/cup engraving 2.jpg'
import cards from '../assets/img-021.jpg'
import banners from '../assets/img-017.jpg'
import branding from '../assets/img-024.jpg'


interface PortfolioItem {
  title: string
  category: string
  image: string
  wide?: boolean
  tall?: boolean
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Apparel Branding',
    category: 'Branding',
    image: apparel,
    wide: true,
    tall: true,
  },
  {
    title: 'Cup Engraving',
    category: 'Engraving',
    image: mugs,
  },
  {
    title: 'Bussiness Cards',
    category: 'Printing',
    image: cards,
  },
  {
    title: 'Large Format Banners',
    category: 'Printing',
    image: banners,
  },
  {
    title: 'Custom Apparel',
    category: 'Branding',
    image: branding,
  },
]

export function PortfolioTeaser() {
  return (
    <section className="portfolio-teaser">
      <div className="kv-container">

        {/* ── HEADER ── */}
        <div className="portfolio-teaser__header">
          <div>
            <motion.p
              className="portfolio-teaser__eyebrow"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Portfolio
            </motion.p>

            <motion.h2
              className="portfolio-teaser__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Recent Work
            </motion.h2>

            <motion.p
              className="portfolio-teaser__subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              A selection of our finest craftsmanship and branding projects.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/portfolio" className="portfolio-teaser__cta">
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* ── GRID ── */}
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
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              {/* Index badge */}
              <span className="portfolio-teaser__item-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <img
                src={item.image}
                alt={item.title}
                className="portfolio-teaser__item-img"
              />

              {/* Always-visible overlay */}
              <div className="portfolio-teaser__item-overlay">
                <span className="portfolio-teaser__item-category">
                  {item.category}
                </span>
                <h3 className="portfolio-teaser__item-title">{item.title}</h3>
                <div className="portfolio-teaser__item-line" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}