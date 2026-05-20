import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Palette,
  Target,
  Shield,
  HeadphonesIcon,
  Zap,
  ArrowRight,
  Fingerprint,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { EngraveAnimation } from '../components/EngraveAnimation'
import design from '../assets/img-023.jpg'
import banner from '../assets/laser.jpg'
import kreative from '../assets/kreative as charged.jpg'
import workshop from '../assets/creative room.png'
import receiption from '../assets/reception.png'


interface Value {
  icon: LucideIcon
  title: string
  desc: string
}

const values: Value[] = [
  { icon: Palette,        title: 'Creativity',  desc: 'Pushing boundaries in design and execution.' },
  { icon: Target,         title: 'Precision',   desc: 'Exact measurements, flawless finishes.' },
  { icon: Shield,         title: 'Reliability', desc: 'Consistent quality you can count on.' },
  { icon: HeadphonesIcon, title: 'Support',     desc: 'Dedicated assistance at every step.' },
  { icon: Zap,            title: 'Speed',       desc: 'Fast turnaround without compromising quality.' },
]

const charges = [
  'Making brands unforgettable',
  'Laser-precise execution',
  'Turning ideas into physical reality',
  'Refusing to settle for ordinary',
  'Elevating Kenyan craftsmanship',
]

export function About() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={banner} alt="" className="page-hero__img" />
          <div className="page-hero__overlay" style={{ backgroundColor: 'rgba(26,26,26,0.72)' }} />
          {/* Scan lines overlay for texture */}
          <div className="page-hero__scanlines" />
        </div>
        <div className="page-hero__content">
          <motion.p
            className="about-hero__eyebrow"
            initial={{ opacity: 0, letterSpacing: '0.5rem' }}
            animate={{ opacity: 1, letterSpacing: '0.3rem' }}
            transition={{ duration: 1 }}
          >
            CASE FILE — KREATIVE VENTURES
          </motion.p>
          <motion.h1
            className="page-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <EngraveAnimation color="#E8201A" width="200" />
        </div>
      </section>

      {/* ── Opening Statement ─────────────────────────────────── */}
      <section className="about-opening">
        <div className="about-opening__inner">
          <motion.div
            className="about-opening__stamp"
            initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
            whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            GUILTY
          </motion.div>
          <motion.p
            className="about-opening__quote"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            "We believe every brand deserves to be represented with{' '}
            <span className="about-opening__accent">precision</span>,{' '}
            <span className="about-opening__accent">creativity</span>, and
            uncompromising{' '}
            <span className="about-opening__accent">quality</span>."
          </motion.p>
        </div>
      </section>

      {/* ── Crime File — Founder ──────────────────────────────── */}
      <section className="about-file">
        <div className="kv-container">
          <div className="about-file__grid">

            {/* Mugshot card */}
            <motion.div
              className="about-file__mugshot-wrap"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-file__mugshot-card" onClick={() => setModalOpen(true)}>
                <div className="about-file__mugshot-img-wrap">
                  <img src={kreative} alt="Kreative as Charged — Founder" className="about-file__mugshot-img" />
                  <div className="about-file__mugshot-vignette" />
                </div>
                <div className="about-file__mugshot-footer">
                  <span className="about-file__mugshot-id">KV-001</span>
                  <span className="about-file__mugshot-label">SUSPECT: THE FOUNDER</span>
                  <span className="about-file__mugshot-expand">VIEW FULL FILE →</span>
                </div>
              </div>
            </motion.div>

            {/* Charges / story */}
            <motion.div
              className="about-file__dossier"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-file__dossier-header">
                <Fingerprint size={20} className="about-file__dossier-icon" />
                <span>CHARGES ON RECORD</span>
              </div>

              <ul className="about-file__charges">
                {charges.map((charge, i) => (
                  <motion.li
                    key={i}
                    className="about-file__charge"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="about-file__charge-num">0{i + 1}</span>
                    <span>{charge}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="about-file__verdict">
                <span className="about-file__verdict-label">VERDICT</span>
                <p className="about-file__verdict-text">
                  Kreative as Charged — and proud of it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Brand Story ──────────────────────────────────────── */}
      <section className="about-story">
        <div className="kv-container">
          <div className="about-story__grid">
            <motion.div
              className="about-story__img-wrap"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={design} alt="Inside the Kreative Ventures workshop" className="about-story__img" />
              {/* Decorative label */}
              <div className="about-story__img-label">EST. NAIROBI, KE</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="about-story__eyebrow">THE ORIGIN</p>
              <h2 className="about-story__title">Crafting Excellence Since Day One</h2>
              <div className="section-divider" style={{ marginBottom: '2rem' }} />
              <div className="about-story__body">
                <p>
                  Kreative Ventures started with a simple idea: to bridge the gap between creative design and high-quality manufacturing in Kenya. We saw businesses struggling to find reliable partners who could handle both the vision and the execution.
                </p>
                <p>
                  Today, we operate a state-of-the-art facility equipped with advanced laser engravers, precision plotter cutters, and high-fidelity printing technology. But our true strength lies in our team of dedicated craftsmen and designers.
                </p>
                <p>
                  We don't just make products; we build brand assets that leave a lasting impression — whether it's a single custom gift or a full-scale corporate branding rollout.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <div className="kv-container">
          <div className="about-values__header">
            <p className="about-values__eyebrow">WHAT DRIVES US</p>
            <h2 className="section-title">Our Core Values</h2>
            <div className="section-divider section-divider--center" />
          </div>

          <div className="about-values__grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="about-values__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="about-values__icon-wrap hexagon">
                  <value.icon size={28} aria-hidden="true" />
                </div>
                <h3 className="about-values__title">{value.title}</h3>
                <p className="about-values__desc">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workshop ── */}
      <section className="about-workshop">
        <div className="kv-container">
          <div className="about-workshop__grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="about-workshop__eyebrow">WHERE IT HAPPENS</p>
              <h2 className="about-workshop__title">WORKSHOP</h2>
              <p className="about-workshop__body">
                Our workspace is where magic happens — a blend of traditional craftsmanship and modern technology. We invite you to see the care and precision that goes into every piece we create.
              </p>
              <Link to="/portfolio" className="about-workshop__link">
                See Our Work <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>

            <div className="about-workshop__photos">
              <motion.img
                src={workshop}
                alt="Workshop machine"
                className="about-workshop__photo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={receiption}
                alt="Engraving detail"
                className="about-workshop__photo about-workshop__photo--offset"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Promise CTA ──────────────────────────────────────── */}
      <section className="about-promise">
        <div className="about-promise__inner">
          <motion.p
            className="about-promise__eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THE COMMITMENT
          </motion.p>
          <motion.h2
            className="about-promise__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Promise to You
          </motion.h2>
          <motion.p
            className="about-promise__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Excellence in every detail. Consistency in every order. We are committed to elevating your brand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="about-promise__cta">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="about-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="about-modal-card"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="about-modal-card__close"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >✕</button>

              <div className="about-modal-card__img-wrap">
                <img src={kreative} alt="Kreative as Charged — Founder" className="about-modal-card__img" />
                <div className="about-modal-card__img-badge">Kreative as Charged</div>
              </div>

              <div className="about-modal-card__body">
                <h3 className="about-modal-card__name">The Founder</h3>
                <p className="about-modal-card__role">Creative Director & Visionary</p>
                <div className="about-modal-card__divider" />
                <p className="about-modal-card__bio">
                  The creative force behind Kreative Ventures. With an eye for detail and a relentless drive for quality, they built a brand that refuses to settle for ordinary — bridging bold vision with precise execution across Kenya and beyond.
                </p>
                <p className="about-modal-card__bio" style={{ marginTop: '0.75rem' }}>
                  Guilty as charged — of making brands unforgettable.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}