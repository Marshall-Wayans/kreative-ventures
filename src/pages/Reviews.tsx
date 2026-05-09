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
      'Kreative Ventures transformed our corporate gifting. The laser-engraved journals were flawless, and the team was incredibly helpful throughout the design process.',
    rating: 5,
  },
  {
    name: 'Michael Ochieng',
    business: 'Urban Cafe',
    initial: 'MO',
    quote:
      'We needed custom signage and branded apparel for our new location. They delivered everything on time and the quality exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Elena Gatheni',
    business: 'Event Pros',
    initial: 'EG',
    quote:
      'Their fast turnaround saved our event. The banners and promotional materials were vibrant and professional. Highly recommend their printing services.',
    rating: 5,
  },
  {
    name: 'David Muigai',
    business: 'Thompson Real Estate',
    initial: 'DM',
    quote:
      'Consistent, reliable, and premium quality. We use them for all our client closing gifts and vehicle branding. They never disappoint.',
    rating: 5,
  },
  {
    name: 'Jessica Olondu',
    business: 'Boutique Fitness',
    initial: 'JO',
    quote:
      "The custom hoodies and water bottles they produced for our members are incredible. The print hasn't faded after months of washing.",
    rating: 5,
  },
  {
    name: 'Marcus Onyango',
    business: 'Johnson Logistics',
    initial: 'MO',
    quote:
      'Our fleet branding looks incredibly sharp. The vinyl cutting is precise and has withstood harsh weather conditions perfectly.',
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