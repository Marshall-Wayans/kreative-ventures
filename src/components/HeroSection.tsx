import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  HeadphonesIcon,
  Layers3,
  Palette,
  Sparkles,
} from 'lucide-react'

import laser from '../assets/laser.jpg'

const images = [
  laser,
  'https://www.gflesch.com/hubfs/2020_website/images/large_format_printer.jpg',
  'https://images.pexels.com/photos/7254413/pexels-photo-7254413.jpeg',
]

const trustPoints = [
  { icon: Clock3, text: 'Fast turnaround' },
  { icon: BadgeCheck, text: 'Premium finish' },
  { icon: Palette, text: 'Custom design' },
  { icon: HeadphonesIcon, text: 'Expert support' },
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero hero--modern">
      <div className="hero__bg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            className="hero__bg-img"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__grid">
          
          {/* LEFT */}
          <div className="hero__copy">
            <div className="hero__eyebrow">
              <Sparkles size={16} />
              <span>Modern branding, built to stand out</span>
            </div>

            <h1 className="hero__title">
              Turning ideas into{' '}
              <span className="hero__title-accent">bold</span>, premium branded experiences.
            </h1>

            <p className="hero__subtitle">
              From fast-turnaround prints to polished custom branding, we create
              work that looks sharp and feels premium.
            </p>

            <div className="hero__ctas">
              <Link to="/contact" className="hero__btn hero__btn--primary">
                Get a Quote <ArrowRight size={18} />
              </Link>

              <Link to="/portfolio" className="hero__btn hero__btn--secondary">
                View Our Work
              </Link>
            </div>

            <div className="hero__trust">
              {trustPoints.map((point, i) => (
                <div key={i} className="hero__trust-item">
                  <point.icon size={16} />
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero__showcase">
            <div className="hero__card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  className="hero__featured-img"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}