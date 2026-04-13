import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Award, PenTool, HeadphonesIcon } from 'lucide-react'
const images = [
  'https://images.unsplash.com/photo-1611078449933-332410e1f25b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop',
]
export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  const trustPoints = [
    {
      icon: Clock,
      text: 'Fast Turnaround',
    },
    {
      icon: Award,
      text: 'Quality Finishing',
    },
    {
      icon: PenTool,
      text: 'Custom Designs',
    },
    {
      icon: HeadphonesIcon,
      text: 'Expert Support',
    },
  ]
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-kv-black">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Diagonal Red Accent */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-kv-red z-10"
        style={{
          clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            Transforming Ideas Into <span className="text-kv-red">Premium</span>{' '}
            Branded Products
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              width: 0,
            }}
            animate={{
              opacity: 1,
              width: 80,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mb-8 h-1 bg-kv-red"
          />

          <motion.p
            className="text-xl text-kv-silver mb-10 max-w-2xl font-light leading-relaxed"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            Bold branding. Precision craft. Kenyan-made excellence.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-kv-red text-white rounded-md font-semibold hover:bg-kv-red-hover transition-all"
            >
              Get a Quote
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-md font-semibold hover:border-kv-red hover:text-kv-red transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center hexagon">
                  <point.icon size={18} className="text-kv-red" />
                </div>
                <span className="text-sm font-medium text-kv-silver">
                  {point.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
