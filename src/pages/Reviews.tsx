import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
const reviews = [
  {
    name: 'Sarah Jenkins',
    business: 'TechFlow Solutions',
    quote:
      'Kreative Ventures transformed our corporate gifting. The laser-engraved journals were flawless, and the team was incredibly helpful throughout the design process.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    business: 'Urban Cafe',
    quote:
      'We needed custom signage and branded apparel for our new location. They delivered everything on time and the quality exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    business: 'Event Pros',
    quote:
      'Their fast turnaround saved our event. The banners and promotional materials were vibrant and professional. Highly recommend their printing services.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    business: 'Thompson Real Estate',
    quote:
      'Consistent, reliable, and premium quality. We use them for all our client closing gifts and vehicle branding. They never disappoint.',
    rating: 5,
  },
  {
    name: 'Jessica Wong',
    business: 'Boutique Fitness',
    quote:
      "The custom hoodies and water bottles they produced for our members are incredible. The print hasn't faded after months of washing.",
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    business: 'Johnson Logistics',
    quote:
      'Our fleet branding looks incredibly sharp. The vinyl cutting is precise and has withstood harsh weather conditions perfectly.',
    rating: 5,
  },
]
export function Reviews() {
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
      className="w-full pt-20 bg-kv-bg min-h-screen"
    >
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            Client Reviews
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
            Hear from the businesses and individuals who trust us with their
            brand.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                className="bg-white p-8 rounded-md border border-[#DDDBD4] relative group hover:border-l-4 hover:border-l-kv-red hover:-translate-y-1 transition-all duration-300"
              >
                <Quote
                  size={40}
                  className="text-[#DDDBD4] absolute top-6 right-6 group-hover:text-kv-red transition-colors"
                />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-kv-red text-kv-red"
                    />
                  ))}
                </div>
                <p className="text-kv-black font-medium leading-relaxed mb-8 relative z-10">
                  "{review.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-kv-black">{review.name}</h4>
                  <p className="text-kv-muted text-sm">{review.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
