import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Award, PenTool, HeadphonesIcon } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1611078449933-332410e1f25b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop',
]

const trustPoints = [
  { icon: Clock,          text: 'Fast Turnaround' },
  { icon: Award,          text: 'Quality Finishing' },
  { icon: PenTool,        text: 'Custom Designs' },
  { icon: HeadphonesIcon, text: 'Expert Support' },
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
    <section className="hero">
      {/* Background Images */}
      <div className="hero__bg" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt=""
            className="hero__bg-img"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="hero__overlay" />
      </div>

      {/* Diagonal Red Accent */}
      <div className="hero__accent" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__inner">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Ideas Into{' '}
            <span className="hero__title-accent">Premium</span>{' '}
            Branded Products
          </motion.h1>

          <motion.div
            className="hero__divider"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bold branding. Precision craft. Kenyan-made excellence.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact" className="hero__btn-primary">
              Get a Quote
            </Link>
            <Link to="/portfolio" className="hero__btn-secondary">
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {trustPoints.map((point, index) => (
              <div key={index} className="hero__trust-item">
                <div className="hero__trust-icon hexagon">
                  <point.icon size={18} />
                </div>
                <span className="hero__trust-label">{point.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
