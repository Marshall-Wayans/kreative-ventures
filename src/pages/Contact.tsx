import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface InfoCard {
  icon: LucideIcon
  label: string
  value: React.ReactNode
}

const infoCards: InfoCard[] = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+254 700 000 000',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@kreativeventures.co.ke',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
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
        Mon–Fri: 8am – 6pm
        <br />
        Sat: 9am – 2pm
      </>
    ),
  },
]

const serviceOptions = [
  'Laser Engraving',
  'Plotter Cutting',
  'Design & Printing',
  'Full Branding Package',
  'Other',
]

export function Contact() {
  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="page-hero__img"
          />
          <div
            className="page-hero__overlay"
            style={{ backgroundColor: 'rgba(26,26,26,0.80)' }}
          />
        </div>
        <div className="page-hero__content">
          <motion.h1
            className="page-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Talk
          </motion.h1>
          <div className="page-hero__divider" />
          <motion.p
            className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready to start your project? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className="contact-body">
        <div className="kv-container">
          <div className="contact-body__grid">

            {/* Info + Map */}
            <div>
              <div className="contact-info-cards">
                {infoCards.map((card, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="contact-info-card__icon hexagon">
                      <card.icon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="contact-info-card__label">{card.label}</h3>
                    <p className="contact-info-card__value">{card.value}</p>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="contact-map">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                  alt="Nairobi map view"
                  className="contact-map__img"
                />
                <div className="contact-map__overlay" aria-hidden="true" />
                <div className="contact-map__pin" aria-hidden="true">
                  <div className="contact-map__pin-icon hexagon">
                    <MapPin size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card">
              <h2 className="contact-form-card__title">Send us a message</h2>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="contact-form__input"
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="contact-form__input"
                      placeholder="+254 700 000 000"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="contact-form__input"
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-service">
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    className="contact-form__select"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="contact-form__textarea"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="contact-form__submit">
                  Send Message <Send size={18} aria-hidden="true" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  )
}
