import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
const testimonials = [
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
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentIndex])
  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    )
  }
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
  return (
    <section className="py-24 bg-kv-charcoal border-t-2 border-kv-red relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
            Client Stories
          </motion.h2>
          <motion.p
            className="text-kv-silver text-lg"
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
            Don't just take our word for it.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
                opacity: {
                  duration: 0.2,
                },
              }}
              className="absolute w-full px-4 md:px-12"
            >
              <div className="bg-white rounded-md p-8 md:p-12 relative">
                <Quote
                  size={48}
                  className="text-[#DDDBD4] absolute top-8 left-8"
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-kv-red text-kv-red"
                        />
                      ),
                    )}
                  </div>
                  <p className="text-xl md:text-2xl text-kv-black font-medium leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-kv-black text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-kv-muted text-sm">
                      {testimonials[currentIndex].business}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-md bg-kv-charcoal border border-kv-silver flex items-center justify-center text-white hover:border-kv-red transition-colors z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-md bg-kv-charcoal border border-kv-silver flex items-center justify-center text-white hover:border-kv-red transition-colors z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2.5 h-2.5 rounded-sm transition-all ${index === currentIndex ? 'bg-kv-red w-8' : 'bg-kv-silver'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
