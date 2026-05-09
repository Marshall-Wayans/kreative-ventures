import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Palette,
  Target,
  Shield,
  HeadphonesIcon,
  Zap,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { EngraveAnimation } from '../components/EngraveAnimation'
import design from '../assets/img-023.jpg'
import printing from '../assets/img-024.jpg'
import machine from '../assets/img-029.jpg'
import banner from '../assets/laser.jpg'

interface Value {
  icon: LucideIcon
  title: string
  desc: string
}
 
const values: Value[] = [
  { icon: Palette,        title: 'Creativity',   desc: 'Pushing boundaries in design and execution.' },
  { icon: Target,         title: 'Precision',    desc: 'Exact measurements, flawless finishes.' },
  { icon: Shield,         title: 'Reliability',  desc: 'Consistent quality you can count on.' },
  { icon: HeadphonesIcon, title: 'Support',      desc: 'Dedicated assistance at every step.' },
  { icon: Zap,            title: 'Speed',        desc: 'Fast turnaround without compromising quality.' },
]

export function About() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src= {banner}
            alt=""
            className="page-hero__img"
          />
          <div
            className="page-hero__overlay"
            style={{ backgroundColor: 'rgba(26,26,26,0.70)' }}
          />
        </div>
        <div className="page-hero__content">
          <motion.h1
            className="page-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Story
          </motion.h1>
          <EngraveAnimation color="#E8201A" width="200" />
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="about-mission">
        <div className="about-mission__inner">
          <motion.p
            className="about-mission__quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            "We believe that every brand deserves to be represented with{' '}
            <span className="about-mission__accent">precision</span>,{' '}
            <span className="about-mission__accent">creativity</span>, and
            uncompromising{' '}
            <span className="about-mission__accent">quality</span>."
          </motion.p>
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
              <img
                src = {design}
                alt="Inside the Kreative Ventures workshop"
                className="about-story__img"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="about-story__title">
                Crafting Excellence Since Day One
              </h2>
              <div className="about-story__body">
                <p>
                  Kreative Ventures started with a simple idea: to bridge the
                  gap between creative design and high-quality manufacturing in
                  Kenya. We saw businesses struggling to find reliable partners
                  who could handle both the vision and the execution.
                </p>
                <p>
                  Today, we operate a state-of-the-art facility equipped with
                  advanced laser engravers, precision plotter cutters, and
                  high-fidelity printing technology. But our true strength lies
                  in our team of dedicated craftsmen and designers.
                </p>
                <p>
                  We don't just make products; we build brand assets that leave
                  a lasting impression. Whether it's a single custom gift or a
                  full-scale corporate branding rollout, we approach every
                  project with the same level of care and attention to detail.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="about-values">
        <div className="kv-container">
          <div className="about-values__header">
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

      {/* ── Workshop ─────────────────────────────────────────── */}
      <section className="about-workshop">
        <div className="kv-container">
          <div className="about-workshop__grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="about-workshop__title">WORKSHOP</h2>
              <p className="about-workshop__body">
                Our workspace is where magic happens. It's a blend of
                traditional craftsmanship and modern technology. We invite you
                to see the care and precision that goes into every piece we
                create.
              </p>
              <Link to="/portfolio" className="about-workshop__link">
                See Our Work <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>

            <div className="about-workshop__photos">
              <motion.img
                src= {machine}
                alt="Workshop machine"
                className="about-workshop__photo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src= {printing}
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
            Excellence in every detail. Consistency in every order. We are
            committed to elevating your brand.
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
    </motion.div>
  )
}
