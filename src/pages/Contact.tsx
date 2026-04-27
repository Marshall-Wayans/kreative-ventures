import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Navigation, ExternalLink, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface InfoCard {
  icon: LucideIcon
  label: string
  value: React.ReactNode
}

const LAT = -1.2464207
const LNG = 36.6652751

const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${LAT},${LNG}`
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`

// ── Real-time business status hook (Nairobi time UTC+3) ──────────────────────
function useBusinessStatus() {
  const [status, setStatus] = React.useState<{ isOpen: boolean; label: string }>({
    isOpen: false,
    label: '',
  })

  React.useEffect(() => {
    function check() {
      const now = new Date()
      // Convert to Nairobi time (UTC+3) regardless of visitor's timezone
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const nairobi = new Date(utc + 3 * 3600000)
      const day = nairobi.getDay()                          // 0 = Sun, 6 = Sat
      const totalMins = nairobi.getHours() * 60 + nairobi.getMinutes()
      const openMins  = 8 * 60                              // 8:00 AM
      const closeMins = 19 * 60 + 30                        // 7:30 PM

      const isWeekday = day >= 1 && day <= 6                // Mon–Sat
      const isOpen = isWeekday && totalMins >= openMins && totalMins < closeMins

      let label = ''
      if (day === 0) {
        label = 'Closed today (Sunday)'
      } else if (totalMins < openMins) {
        label = 'Opens at 8:00 AM'
      } else if (totalMins >= closeMins) {
        label = 'Closed · Opens tomorrow at 8:00 AM'
      } else {
        const remainMins = closeMins - totalMins
        const rh = Math.floor(remainMins / 60)
        const rm = remainMins % 60
        label = rh > 0
          ? `Open · Closes in ${rh}h ${rm}m`
          : `Open · Closes in ${rm}m`
      }

      setStatus({ isOpen, label })
    }

    check()
    const id = setInterval(check, 30_000) // re-check every 30 s
    return () => clearInterval(id)
  }, [])

  return status
}

// ── Static data ──────────────────────────────────────────────────────────────
const infoCards: InfoCard[] = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+254 759 081 808',
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
        Kikuyu Rd, Makutano Foot Bridge
        <br />
        Rungiri, Nairobi
      </>
    ),
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: (
      <>
        Mon–Sat: 8am – 7:30pm
        <br />
        Sun: Closed
      </>
    ),
  },
]

const serviceOptions = [
  'Laser Engraving',
  'Large Format Printing',
  'Designing',
  'Full Branding Packages',
  'Website Development',
  'Other',
]

// ── Framer-motion variants ───────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// ── Component ────────────────────────────────────────────────────────────────
export function Contact() {
  const bizStatus = useBusinessStatus()

  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="https://www.lifewire.com/thmb/_7EitW2I8rkTxN5AvGelvywB8vg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/incoming-call-screen-getty-2153797184-fd1f087825524bfbaf9963d45efd9a1a.jpg"
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

      {/* ── Info Cards ── */}
      <section className="contact-body">
        <div className="kv-container">

          <motion.div
            className="contact-info-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {infoCards.map((card, index) => (
              <motion.div key={index} className="contact-info-card" variants={itemVariants}>
                <div className="contact-info-card__icon hexagon">
                  <card.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="contact-info-card__label">{card.label}</h3>
                <p className="contact-info-card__value">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Workshop + Map ── */}
          <motion.section
            className="contact-workshop"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="contact-workshop__left">
              <p className="contact-workshop__eyebrow">
                <span className="contact-workshop__dot" aria-hidden="true" />
                Find Us
              </p>
              <h2 className="contact-workshop__title">Visit Our Workshop</h2>
              <p className="contact-workshop__desc">
                Come see our machines in action and discuss your next project with our creative team.
              </p>

              {/* Business card */}
              <div className="contact-biz-card">
                <div className="contact-biz-card__logo" aria-hidden="true">KV</div>
                <div>
                  <p className="contact-biz-card__name">Kreative Studios</p>
                  <p className="contact-biz-card__category">Design &amp; Print Agency · Nairobi, KE</p>
                  <div className="contact-biz-card__stars" aria-label="5 stars, 2 reviews">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--kv-red)" color="var(--kv-red)" />
                    ))}
                    <span className="contact-biz-card__rating">5.0 (2 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Detail rows */}
              <div className="contact-detail-rows">

                {/* Address */}
                <div className="contact-detail-row">
                  <div className="contact-detail-row__icon"><MapPin size={16} /></div>
                  <div>
                    <p className="contact-detail-row__label">ADDRESS</p>
                    <p className="contact-detail-row__val">Kikuyu Road, Makutano Foot Bridge, Rungiri</p>
                    <p className="contact-detail-row__sub">QM38+C4 Rungiri, Nairobi</p>
                  </div>
                </div>

                {/* Hours — with real-time open/closed badge */}
                <div className="contact-detail-row">
                  <div className="contact-detail-row__icon"><Clock size={16} /></div>
                  <div>
                    <p className="contact-detail-row__label">HOURS</p>
                    <p className="contact-detail-row__val">Mon – Sat: 8:00 AM – 7:30 PM</p>

                    {/* Real-time status badge */}
                    {bizStatus.label ? (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          marginTop: '4px',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          letterSpacing: '0.02em',
                          backgroundColor: bizStatus.isOpen ? '#16a34a' : '#dc2626',
                          color: '#fff',
                        }}
                        aria-live="polite"
                        aria-label={bizStatus.label}
                      >
                        {/* Dot — pulses when open */}
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            display: 'inline-block',
                            flexShrink: 0,
                            animation: bizStatus.isOpen ? 'kvPulse 1.6s ease-in-out infinite' : 'none',
                          }}
                        />
                        {bizStatus.label}
                      </span>
                    ) : (
                      // Skeleton placeholder while the hook initialises (SSR-safe)
                      <span
                        style={{
                          display: 'inline-block',
                          width: 130,
                          height: 20,
                          borderRadius: 9999,
                          backgroundColor: 'rgba(0,0,0,0.08)',
                          marginTop: 4,
                        }}
                      />
                    )}

                    <p className="contact-detail-row__sub" style={{ marginTop: 2 }}>
                      Closed on Sundays
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="contact-detail-row">
                  <div className="contact-detail-row__icon"><Phone size={16} /></div>
                  <div>
                    <p className="contact-detail-row__label">CONTACT</p>
                    <p className="contact-detail-row__val">0759 081808</p>
                    <p className="contact-detail-row__sub">hello@kreativeventures.co.ke</p>
                  </div>
                </div>

              </div>

              {/* CTA buttons */}
              <div className="contact-workshop__btns">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-workshop__btn contact-workshop__btn--primary"
                >
                  <Navigation size={16} aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-workshop__btn contact-workshop__btn--outline"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="contact-workshop__map">
              <iframe
                title="Kreative Studios location"
                src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=17&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.section>

          {/* ── Contact Form ── */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="contact-form-card__header">
              <h2 className="contact-form-card__title">Send us a message</h2>
              <p className="contact-form-card__sub">
                Fill in the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="contact-form__input"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-phone">Phone Number</label>
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
                <label className="contact-form__label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact-form__input"
                  placeholder="kreative@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-service">Service Needed</label>
                <select id="contact-service" className="contact-form__select">
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="contact-form__textarea"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="contact-form__submit">
                Send Message <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

     
      <style>{`
        @keyframes kvPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.8); }
        }
      `}</style>
    </motion.div>
  )
}