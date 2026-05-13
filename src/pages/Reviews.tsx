import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Review {
  name: string
  business: string
  quote: string
  rating: number
  initial: string
}

const reviews: Review[] = [
  {
    name: 'Sarah Wangui',
    business: 'TechFlow Solutions',
    initial: 'SW',
    quote:
      'Really happy with how the journals turned out. Clean engraving and the team was easy to work with. Would definitely order again.',
    rating: 5,
  },
  {
    name: 'Michael Ochieng',
    business: 'Urban Cafe',
    initial: 'MO',
    quote:
      'Got our signage and staff apparel done here. Everything arrived on time and looked great in the space.',
    rating: 5,
  },
  {
    name: 'Elena Gatheni',
    business: 'Event Pros',
    initial: 'EG',
    quote:
      'We had a tight deadline and they delivered. The banners came out well and were exactly what we needed for the event.',
    rating: 5,
  },
  {
    name: 'David Muigai',
    business: 'Thompson Real Estate',
    initial: 'DM',
    quote:
      'We’ve used them a couple of times now for branding and gifts. Always consistent quality, which is why we keep coming back.',
    rating: 5,
  },
  {
    name: 'Jessica Olondu',
    business: 'Boutique Fitness',
    initial: 'JO',
    quote:
      'Ordered hoodies and bottles for our members. Still holding up well after months of use, which is a big plus.',
    rating: 5,
  },
  {
    name: 'Marcus Onyango',
    business: 'Johnson Logistics',
    initial: 'MO',
    quote:
      'The vehicle branding came out clean and has handled weather pretty well so far. Solid job overall.',
    rating: 5,
  },
]

export function Reviews() {
  return (
    <motion.div
      className="page reviews-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Header ── */}
      <section className="reviews-header">
        <div className="reviews-header__inner">
          <motion.div
            className="reviews-header__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ★ Trusted by businesses across Nairobi
          </motion.div>
          <motion.h1
            className="reviews-header__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Client Reviews
          </motion.h1>
          <div className="page-hero__divider" style={{ margin: '0 auto 2rem' }} />
          <motion.p
            className="reviews-header__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hear from the businesses and individuals who trust us with their brand.
          </motion.p>

          {/* Summary stats */}
          <motion.div
            className="reviews-header__stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="reviews-stat">
              <span className="reviews-stat__value">5.0</span>
              <span className="reviews-stat__label">Average rating</span>
            </div>
            <div className="reviews-stat__divider" aria-hidden="true" />
            <div className="reviews-stat">
              <span className="reviews-stat__value">100%</span>
              <span className="reviews-stat__label">5-star reviews</span>
            </div>
            <div className="reviews-stat__divider" aria-hidden="true" />
            <div className="reviews-stat">
              <span className="reviews-stat__value">200+</span>
              <span className="reviews-stat__label">Happy clients</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="reviews-grid-section">
        <div className="kv-container">
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <motion.article
                key={index}
                className="review-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
              >
                {/* Top row: stars + quote icon */}
                <div className="review-card__top">
                  <div
                    className="review-card__stars"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="review-card__star" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote size={22} className="review-card__quote-icon" aria-hidden="true" />
                </div>

                <blockquote className="review-card__quote">
                  {review.quote}
                </blockquote>

                {/* Author row */}
                <div className="review-card__author">
                  <div className="review-card__avatar" aria-hidden="true">
                    {review.initial}
                  </div>
                  <cite style={{ fontStyle: 'normal' }}>
                    <p className="review-card__author-name">{review.name}</p>
                    <p className="review-card__author-biz">{review.business}</p>
                  </cite>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}