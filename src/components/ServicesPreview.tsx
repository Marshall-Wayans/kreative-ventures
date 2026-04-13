import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Scissors, Printer } from 'lucide-react'
const services = [
  {
    id: 'engraving',
    title: 'Laser Engraving',
    description:
      'Precision engraving on wood, metal, acrylic, and leather for premium personalized items.',
    icon: Layers,
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
    items: ['Trophies', 'Key Holders', 'Corporate Gifts'],
  },
  {
    id: 'cutting',
    title: 'Plotter Cutting',
    description:
      'Clean, sharp vinyl cutting for vehicle branding, window decals, and custom apparel.',
    icon: Scissors,
    image:
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop',
    items: ['Vehicle Branding', 'Vinyl Stickers', 'Heat Transfer'],
  },
  {
    id: 'printing',
    title: 'Design & Printing',
    description:
      'High-quality digital and large format printing for all your marketing materials.',
    icon: Printer,
    image:
      'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop',
    items: ['Banners', 'Flyers', 'Apparel'],
  },
]
export function ServicesPreview() {
  return (
    <section className="py-24 bg-kv-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
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
              Our Expertise
            </motion.h2>
            <motion.p
              className="text-kv-muted text-lg"
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
              Comprehensive branding and manufacturing solutions under one roof.
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
              to="/services"
              className="inline-flex items-center gap-2 text-kv-red font-semibold hover:text-kv-red-hover transition-colors"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group relative rounded-md overflow-hidden h-[450px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="w-12 h-12 bg-kv-red/90 text-white flex items-center justify-center mb-6 hexagon">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {service.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-kv-charcoal text-white px-3 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-kv-red font-semibold group-hover:text-white transition-colors"
                >
                  Learn More{' '}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
