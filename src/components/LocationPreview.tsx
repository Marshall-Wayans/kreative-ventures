import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

interface ContactDetail {
  icon: LucideIcon
  label: string
  value: React.ReactNode
}

const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    label: 'Location',
    value: (
      <>
        Nairobi, Kenya
        <br />
        Creative District
      </>
    ),
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: (
      <>
        Mon – Fri: 8:00 AM – 6:00 PM
        <br />
        Sat: 9:00 AM – 2:00 PM
      </>
    ),
  },
  {
    icon: Phone,
    label: 'Contact',
    value: (
      <>
        +254 700 000 000
        <br />
        hello@kreativeventures.co.ke
      </>
    ),
  },
]

export function LocationPreview() {
  return (
    <section className="location-preview">
      <div className="kv-container">
        <div className="location-preview__grid">
          {/* Info column */}
          <div>
            <motion.h2
              className="location-preview__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Visit Our Workshop
            </motion.h2>
            <motion.p
              className="location-preview__intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Come see our machines in action and discuss your next project with
              our creative team.
            </motion.p>

            <div className="location-preview__details">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="location-preview__detail"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="location-preview__detail-icon hexagon">
                    <detail.icon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="location-preview__detail-label">
                      {detail.label}
                    </h4>
                    <p className="location-preview__detail-value">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" className="location-preview__cta">
                Get Directions <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Map column */}
          <motion.div
            className="location-preview__map"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
              alt="Aerial map view of Nairobi"
              className="location-preview__map-img"
            />
            <div className="location-preview__map-overlay" aria-hidden="true" />

            {/* Pin */}
            <div className="location-preview__pin" aria-hidden="true">
              <div className="location-preview__pin-icon hexagon">
                <MapPin size={32} />
              </div>
              <div className="location-preview__pin-label">
                Kreative Ventures
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
