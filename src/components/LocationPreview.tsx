import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation, Star, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

const LAT = -1.2464207
const LNG = 36.6652751

export function LocationPreview() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Kreative+Studios+Rungiri+Kikuyu+Road+Nairobi`
  const embedUrl = `https://maps.google.com/maps?q=-1.2464207,36.6652751&z=17&output=embed`

  // ✅ NEW: realtime Kenyan time logic
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const kenyaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }))

      const day = kenyaTime.getDay() // 0 = Sunday, 6 = Saturday
      const hours = kenyaTime.getHours()
      const minutes = kenyaTime.getMinutes()
      const currentTime = hours * 60 + minutes

      const openWeekday = 8 * 60
      const closeWeekday = 19 * 60 + 30

      const openSat = 9 * 60
      const closeSat = 14 * 60

      let open = false

      if (day >= 1 && day <= 5) {
        open = currentTime >= openWeekday && currentTime <= closeWeekday
      } else if (day === 6) {
        open = currentTime >= openSat && currentTime <= closeSat
      }

      setIsOpen(open)
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000) // update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="location-preview">
      <div className="location-preview__grid-bg" aria-hidden="true" />

      <div className="kv-container">
        <motion.div
          className="location-preview__eyebrow-wrap"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="location-preview__eyebrow-dot" aria-hidden="true" />
          <p className="location-preview__eyebrow">Find Us</p>
        </motion.div>

        <div className="location-preview__grid">
          <div className="location-preview__info">
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
              Come see our machines in action and discuss your next project with our creative team.
            </motion.p>

            <motion.div
              className="location-preview__biz-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="location-preview__biz-header">
                <div className="location-preview__biz-logo" aria-hidden="true">KV</div>
                <div>
                  <p className="location-preview__biz-name">Kreative Studios</p>
                  <p className="location-preview__biz-category">Design &amp; Print Agency · Nairobi, KE</p>
                </div>
              </div>
              <div className="location-preview__biz-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="location-preview__star" />
                ))}
                <span className="location-preview__rating-score">5.0</span>
                <span className="location-preview__rating-count">(2 reviews)</span>
              </div>
            </motion.div>

            <div className="location-preview__details">
              {[
                {
                  icon: MapPin,
                  label: 'Address',
                  value: 'Kikuyu Road, Makutano Foot Bridge, Rungiri',
                  sub: 'QM38+C4 Rungiri, Nairobi',
                  delay: 0.2,
                },
                {
                  icon: Clock,
                  label: 'Hours',
                  value: 'Mon – Sat: 8:00 AM – 7:30 PM', 
                  sub: 'Sun: Closed',
                  delay: 0.3,
                  badge: true,
                },
                {
                  icon: Phone,
                  label: 'Contact',
                  value: '0759 081808',
                  sub: 'hello@kreativeventures.co.ke',
                  delay: 0.4,
                },
              ].map(({ icon: Icon, label, value, sub, delay, badge }) => (
                <motion.div
                  key={label}
                  className="location-preview__detail"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay }}
                >
                  <div className="location-preview__detail-icon">
                    <Icon size={18} />
                  </div>
                  <div className="location-preview__detail-text">
                    <p className="location-preview__detail-label">{label}</p>
                    <p className="location-preview__detail-value">{value}</p>
                    <p className="location-preview__detail-sub">
                      {badge && (
                        <span
                          className="location-preview__open-badge"
                          style={
                            isOpen
                              ? {}
                              : {
                                  background: 'rgba(220,38,38,0.1)',
                                  color: '#dc2626',
                                  border: '1px solid rgba(220,38,38,0.3)',
                                }
                          }
                        >
                          {isOpen ? 'Open Now' : 'Closed'}
                        </span>
                      )}
                      {sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="location-preview__actions"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-preview__cta location-preview__cta--primary"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-preview__cta location-preview__cta--ghost"
              >
                <ExternalLink size={16} />
                Open in Maps
              </a>
            </motion.div>
          </div>

          <motion.div
            className="location-preview__map"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="location-preview__map-corner" />

            <iframe
              className="location-preview__map-iframe"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kreative Studios location on Google Maps"
            />

            <div className="location-preview__map-label">
              <MapPin size={14} />
              Kreative Studios · Rungiri
            </div>

            <div className="location-preview__map-frame" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}