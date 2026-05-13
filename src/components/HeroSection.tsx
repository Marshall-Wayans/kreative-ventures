import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  HeadphonesIcon,
  Palette,
  Sparkles,
} from 'lucide-react'

import heroImg from '../assets/eftakher-alam-i1VQZsU86ok-unsplash.jpg'

const trustPoints = [
  { icon: Clock3, text: 'Fast turnaround' },
  { icon: BadgeCheck, text: 'Premium finish' },
  { icon: Palette, text: 'Custom design' },
  { icon: HeadphonesIcon, text: 'Expert support' },
]

export function HeroSection() {
  // true once the user scrolls OR clicks anywhere
  const [revealed, setRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Once revealed we never go back — remove all listeners
    const reveal = () => {
      setRevealed(true)
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('click', reveal)
      window.removeEventListener('touchstart', reveal)
      window.removeEventListener('touchend', reveal)
    }

    window.addEventListener('scroll', reveal, { passive: true })
    window.addEventListener('click', reveal)
    window.addEventListener('touchstart', reveal, { passive: true })
    window.addEventListener('touchend', reveal, { passive: true })

    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('click', reveal)
      window.removeEventListener('touchstart', reveal)
      window.removeEventListener('touchend', reveal)
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero">

      {/* ── BACKGROUND ── */}
      <div className={`hero__bg${revealed ? ' hero__bg--color' : ''}`}>
        <img
          src={heroImg}
          className="hero__bg-img"
          alt="Kreative Ventures workspace"
        />
        <div className="hero__overlay" />
      </div>

      {/* ── CONTENT ── */}
      <div className="hero__content">
        <motion.div
          className="hero__center"
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Eyebrow pill */}
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Sparkles size={13} />
            <span>Modern branding, built to stand out</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            Turning ideas into{' '}
            <span className="hero__title-accent">bold</span>,{' '}
            premium branded experiences.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From fast-turnaround prints to polished custom branding,{' '}
            we create work that looks sharp and feels premium.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            <Link to="/contact" className="hero__btn hero__btn--primary">
              Let's Create <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio" className="hero__btn hero__btn--secondary">
              See the Results
            </Link>
          </motion.div>

          {/* Hint — fades out once revealed */}
          <motion.p
            className="hero__scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: revealed ? 0 : 0.55 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            aria-hidden="true"
          >
            Click or scroll to reveal colour
          </motion.p>
        </motion.div>

        {/* Trust pills — pinned bottom */}
        <motion.div
          className="hero__trust"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {trustPoints.map((point, i) => (
            <div key={i} className="hero__trust-item">
              <point.icon size={13} />
              <span>{point.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}