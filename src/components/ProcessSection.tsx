import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Lightbulb, PenTool, Settings, Truck } from 'lucide-react'
const steps = [
  {
    icon: Lightbulb,
    title: 'Share Your Idea',
    description:
      "Tell us what you need. We'll discuss your vision, materials, and timeline.",
  },
  {
    icon: PenTool,
    title: 'Design & Approve',
    description:
      "Our team creates mockups for your review. We refine until it's perfect.",
  },
  {
    icon: Settings,
    title: 'Produce with Precision',
    description:
      'Using state-of-the-art equipment, we bring your approved design to life.',
  },
  {
    icon: Truck,
    title: 'Deliver & Support',
    description:
      'Your premium products are carefully packaged and delivered on time.',
  },
]
export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <section
      ref={containerRef}
      className="py-24 bg-kv-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            className="text-4xl font-bold text-kv-black mb-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            How We Work
          </motion.h2>
          <motion.p
            className="text-kv-muted text-lg"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            A seamless, transparent process designed to deliver excellence every
            time.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1">
            <svg width="100%" height="100%" className="absolute inset-0">
              <line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="#DDDBD4"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="#E8201A"
                strokeWidth="2"
                style={{
                  pathLength,
                }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center group"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <div className="w-24 h-24 bg-white border border-[#DDDBD4] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 hexagon">
                  <step.icon size={32} className="text-kv-red" />
                  <div className="absolute top-2 right-2 w-6 h-6 bg-kv-red text-white flex items-center justify-center font-bold text-xs hexagon">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-kv-black mb-3">
                  {step.title}
                </h3>
                <p className="text-kv-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
