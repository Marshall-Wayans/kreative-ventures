import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Navigation, ExternalLink, Star, CheckCircle, Copy, X } from 'lucide-react'
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
const WORK_EMAIL = 'wayansmarshalls18@gmail.com'

// ── Real-time business status hook (Nairobi time UTC+3) ──────────────────────
function useBusinessStatus() {
  const [status, setStatus] = React.useState<{ isOpen: boolean; label: string }>({
    isOpen: false,
    label: '',
  })

  React.useEffect(() => {
    function check() {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const nairobi = new Date(utc + 3 * 3600000)
      const day = nairobi.getDay()
      const totalMins = nairobi.getHours() * 60 + nairobi.getMinutes()
      const openMins  = 8 * 60
      const closeMins = 19 * 60 + 30

      const isWeekday = day >= 1 && day <= 6
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
    const id = setInterval(check, 30_000)
    return () => clearInterval(id)
  }, [])

  return status
}

// ── mailto: modal ─────────────────────────────────────────────────────────────
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  summary: string
}

function MailtoModal({ isOpen, onClose, summary }: ModalProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(WORK_EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // Close on Escape key
  React.useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="mailto-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            className="mailto-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Email client opening"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            {/* Close button */}
            <button
              className="mailto-modal__close"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <motion.div
              className="mailto-modal__icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
            >
              <CheckCircle size={38} strokeWidth={1.8} />
            </motion.div>

            <motion.h2
              className="mailto-modal__title"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Opening your email client…
            </motion.h2>

            <motion.p
              className="mailto-modal__body"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your message has been prepared and your email client should open any moment. 
              Just hit <strong>Send</strong> — we'll get back to you within 24 hours.
            </motion.p>

            {/* Summary pill */}
            <motion.div
              className="mailto-modal__summary"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <span className="mailto-modal__summary-label">Sending to</span>
              <span className="mailto-modal__summary-email">{WORK_EMAIL}</span>
            </motion.div>

            {/* Message preview snippet */}
            {summary && (
              <motion.div
                className="mailto-modal__preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="mailto-modal__preview-label">Your message preview</p>
                <p className="mailto-modal__preview-text">{summary}</p>
              </motion.div>
            )}

            {/* Actions */}
            <motion.div
              className="mailto-modal__actions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
            >
              <button className="mailto-modal__copy" onClick={handleCopy}>
                <Copy size={15} aria-hidden="true" />
                {copied ? 'Copied!' : 'Copy email address'}
              </button>
              <button className="mailto-modal__done" onClick={onClose}>
                Done
              </button>
            </motion.div>

            {/* Fallback note */}
            <motion.p
              className="mailto-modal__fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
            >
              Email client didn't open?{' '}
              <a href={`mailto:${WORK_EMAIL}`} className="mailto-modal__fallback-link">
                Click here to try again
              </a>
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
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

// ── Framer-motion variants ───
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

// ── Component ────────────────────────────────────────────────────────────────
export function Contact() {
  const bizStatus = useBusinessStatus()

  // ── Form state ──
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: serviceOptions[0],
    message: '',
  })
  const [modalOpen, setModalOpen] = React.useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build mailto: URL
    const subject = encodeURIComponent(
      `[Website Enquiry] ${form.service} – ${form.name}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n\n` +
      `Message:\n${form.message}`
    )

    // Fire the mailto link in a hidden anchor
    const link = document.createElement('a')
    link.href = `mailto:${WORK_EMAIL}?subject=${subject}&body=${body}`
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show smooth modal
    setModalOpen(true)
  }

  // Short preview for the modal (first 100 chars of message)
  const messageSummary = form.message.length > 100
    ? form.message.slice(0, 100) + '…'
    : form.message

  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── mailto: Modal ── */}
      <MailtoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        summary={messageSummary}
      />

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

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="contact-form__input"
                    placeholder="Your full name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="contact-form__input"
                    placeholder="+254 700 000 000"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact-form__input"
                  placeholder="kreative@example.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-service">Service Needed</label>
                <select
                  id="contact-service"
                  name="service"
                  className="contact-form__select"
                  value={form.service}
                  onChange={handleChange}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="contact-form__textarea"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-form__submit">
                Send Message <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ── Modal + animation styles ── */}
      <style>{`
        @keyframes kvPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.8); }
        }

        /* ── Backdrop ── */
        .mailto-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 999;
        }

        /* ── Modal panel ── */
        .mailto-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
          width: min(480px, 92vw);
          background: #fff;
          border-radius: 20px;
          padding: 2.4rem 2rem 2rem;
          box-shadow: 0 24px 60px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.10);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* ── Close btn ── */
        .mailto-modal__close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 8px;
          transition: color 0.18s, background 0.18s;
        }
        .mailto-modal__close:hover {
          color: #374151;
          background: #f3f4f6;
        }

        /* ── Icon ── */
        .mailto-modal__icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #f0fdf4;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
        }

        /* ── Title ── */
        .mailto-modal__title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.55rem;
          line-height: 1.3;
        }

        /* ── Body ── */
        .mailto-modal__body {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 1.1rem;
          max-width: 360px;
        }

        /* ── Summary pill ── */
        .mailto-modal__summary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 9999px;
          padding: 6px 14px;
          margin-bottom: 1rem;
          font-size: 0.8rem;
        }
        .mailto-modal__summary-label {
          color: #9ca3af;
          font-weight: 500;
        }
        .mailto-modal__summary-email {
          color: #111827;
          font-weight: 600;
        }

        /* ── Message preview ── */
        .mailto-modal__preview {
          width: 100%;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 10px 14px;
          text-align: left;
          margin-bottom: 1.2rem;
        }
        .mailto-modal__preview-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #9ca3af;
          margin-bottom: 4px;
        }
        .mailto-modal__preview-text {
          font-size: 0.82rem;
          color: #374151;
          line-height: 1.5;
          word-break: break-word;
        }

        /* ── Actions ── */
        .mailto-modal__actions {
          display: flex;
          gap: 10px;
          width: 100%;
          margin-bottom: 0.85rem;
        }
        .mailto-modal__copy {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          border-radius: 10px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          color: #374151;
          font-size: 0.83rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s;
        }
        .mailto-modal__copy:hover {
          background: #f9fafb;
          border-color: #d1d5db;
        }
        .mailto-modal__done {
          flex: 1;
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          background: var(--kv-red, #e63329);
          color: #fff;
          font-size: 0.83rem;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.18s;
        }
        .mailto-modal__done:hover {
          opacity: 0.88;
        }

        /* ── Fallback ── */
        .mailto-modal__fallback {
          font-size: 0.75rem;
          color: #9ca3af;
          margin: 0;
        }
        .mailto-modal__fallback-link {
          color: var(--kv-red, #e63329);
          text-decoration: underline;
          font-weight: 600;
        }
      `}</style>
    </motion.div>
  )
}