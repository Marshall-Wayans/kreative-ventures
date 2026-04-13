import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Lightbulb, PenTool, Settings, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
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

  // Drive the red line from 0 → 1 as the section scrolls into view
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="process">
      <div className="kv-container">
        {/* Header */}
        <div className="process__header">
          <motion.h2
            className="process__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>
          <motion.p
            className="process__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A seamless, transparent process designed to deliver excellence every
            time.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="process__steps">
          {/* Animated connecting line — desktop only */}
          <div className="process__line" aria-hidden="true">
            <svg
              width="100%"
              height="4"
              className="process__line-track"
              preserveAspectRatio="none"
            >
              {/* Dashed grey track */}
              <line
                x1="10%"
                y1="2"
                x2="90%"
                y2="2"
                stroke="#DDDBD4"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              {/* Animated red fill */}
              <motion.line
                x1="10%"
                y1="2"
                x2="90%"
                y2="2"
                stroke="#E8201A"
                strokeWidth="2"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="process__grid">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="process__step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="process__step-icon-wrap hexagon">
                  <step.icon size={32} />
                  <span className="process__step-num hexagon">
                    {index + 1}
                  </span>
                </div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
