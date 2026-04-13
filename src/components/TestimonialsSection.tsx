import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  business: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    business: 'TechFlow Solutions',
    quote:
      'Kreative Ventures transformed our corporate gifting. The laser-engraved journals were flawless, and the team was incredibly helpful throughout the design process.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    business: 'Urban Cafe',
    quote:
      'We needed custom signage and branded apparel for our new location. They delivered everything on time and the quality exceeded our expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    business: 'Event Pros',
    quote:
      'Their fast turnaround saved our event. The banners and promotional materials were vibrant and professional. Highly recommend their printing services.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    business: 'Thompson Real Estate',
    quote:
      'Consistent, reliable, and premium quality. We use them for all our client closing gifts and vehicle branding. They never disappoint.',
    rating: 5,
  },
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }, [])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  const current = testimonials[currentIndex]

  return (
    <section className="testimonials">
      <div className="kv-container">
        {/* Header */}
        <div className="testimonials__header">
          <motion.h2
            className="testimonials__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Stories
          </motion.h2>
          <motion.p
            className="testimonials__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Don't just take our word for it.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="testimonials__carousel">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="testimonials__card"
            >
              <div className="testimonials__card-inner">
                <Quote
                  size={48}
                  className="testimonials__quote-icon"
                  aria-hidden="true"
                />
                <div className="testimonials__card-body">
                  {/* Stars */}
                  <div
                    className="testimonials__stars"
                    aria-label={`${current.rating} out of 5 stars`}
                  >
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="testimonials__star"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="testimonials__quote">
                    "{current.quote}"
                  </blockquote>

                  <cite style={{ fontStyle: 'normal' }}>
                    <p className="testimonials__author-name">{current.name}</p>
                    <p className="testimonials__author-biz">{current.business}</p>
                  </cite>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Previous button */}
          <button
            onClick={prevTestimonial}
            className="testimonials__btn testimonials__btn--prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={nextTestimonial}
            className="testimonials__btn testimonials__btn--next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="testimonials__dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Testimonial ${index + 1}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`testimonials__dot${index === currentIndex ? ' testimonials__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
