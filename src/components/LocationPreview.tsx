import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation, Star, ExternalLink } from 'lucide-react'

const LAT = -1.2464207
const LNG = 36.6652751

export function LocationPreview() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Kreative+Studios+Rungiri+Kikuyu+Road+Nairobi`
  const embedUrl = `https://maps.google.com/maps?q=-1.2464207,36.6652751&z=17&output=embed`

  return (
    <section className="location-preview">
      {/* Subtle grid background */}
      <div className="location-preview__grid-bg" aria-hidden="true" />

      <div className="kv-container">
        {/* Section label */}
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
          {/* ── Info column ── */}
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

            {/* Business card strip */}
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
              <div className="location-preview__biz-rating" aria-label="5 out of 5 stars, 2 reviews">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="location-preview__star" aria-hidden="true" />
                ))}
                <span className="location-preview__rating-score">5.0</span>
                <span className="location-preview__rating-count">(2 reviews)</span>
              </div>
            </motion.div>

            {/* Details */}
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
                  value: 'Mon – Fri: 8:00 AM – 7:30 PM',
                  sub: 'Sat: 9:00 AM – 2:00 PM',
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
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="location-preview__detail-text">
                    <p className="location-preview__detail-label">{label}</p>
                    <p className="location-preview__detail-value">{value}</p>
                    <p className="location-preview__detail-sub">
                      {badge && <span className="location-preview__open-badge">Open Now</span>}
                      {sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
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
                <Navigation size={16} aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-preview__cta location-preview__cta--ghost"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Open in Maps
              </a>
            </motion.div>
          </div>

          {/* ── Map column ── */}
          <motion.div
            className="location-preview__map"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Top accent bar */}
            <div className="location-preview__map-corner" aria-hidden="true" />

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

            {/* Map overlay pin label */}
            <div className="location-preview__map-label" aria-hidden="true">
              <MapPin size={14} />
              Kreative Studios · Rungiri
            </div>

            {/* Decorative frame */}
            <div className="location-preview__map-frame" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}