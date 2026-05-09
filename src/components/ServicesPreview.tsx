import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Scissors, Printer } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import engrave from '../assets/img-020.jpg'
import design from '../assets/img-023.jpg'
import plotter from '../assets/img-005.jpg'


interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
  items: string[]
}


const services: Service[] = [
  {
    id: 'engraving',
    title: 'Laser Engraving',
    description:
      'Precision engraving on wood, metal, acrylic, and leather for premium personalized items.',
    icon: Layers,
    image: engrave,
    items: ['Trophies', 'Key Holders', 'Corporate Gifts'],
  },
  {
    id: 'cutting',
    title: 'Plotter Cutting',
    description:
      'Clean, sharp vinyl cutting for vehicle branding, window decals, and custom apparel.',
    icon: Scissors,
    image: plotter,
    items: ['Vehicle Branding', 'Vinyl Stickers', 'Heat Transfer'],
  },
  {
    id: 'printing',
    title: 'Design & Printing',
    description:
      'High-quality digital and large format printing for all your marketing materials.',
    icon: Printer,
    image: design,
    items: ['Banners', 'Flyers', 'Apparel'],
  },
]

export function ServicesPreview() {
  return (
    <section className="services">
      <div className="kv-container">
        {/* Header */}
        <div className="services__header">
          <div className="max-w-2xl">
            <motion.h2
              className="services__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.h2>
            <motion.p
              className="services__subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive branding and manufacturing solutions under one roof.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="services__view-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Background image */}
              <div className="services__card-bg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="services__card-img"
                />
                <div className="services__card-overlay" />
              </div>

              {/* Content */}
              <div className="services__card-content">
                <div className="services__card-icon hexagon">
                  <service.icon size={24} />
                </div>

                <h3 className="services__card-title">{service.title}</h3>

                <p className="services__card-desc">{service.description}</p>

                <div className="services__card-tags">
                  {service.items.map((item) => (
                    <span key={item} className="services__card-tag">
                      {item}
                    </span>
                  ))}
                </div>

                <Link to="/services" className="services__card-link">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
