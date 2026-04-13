import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Gem, PenTool, Zap, ShieldCheck, HeartHandshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: Gem,
    title: 'Premium Finishing',
    description:
      'Every detail matters. We ensure a flawless, high-end finish on every product.',
  },
  {
    icon: PenTool,
    title: 'Custom Design Support',
    description:
      'Need help with artwork? Our design team is here to bring your vision to life.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'We respect your deadlines, delivering quality work with impressive speed.',
  },
  {
    icon: ShieldCheck,
    title: 'Consistent Branding',
    description:
      'Your brand identity is safe with us. We ensure color and style consistency.',
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Service',
    description:
      'A seamless, communicative, and enjoyable experience from start to finish.',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="kv-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div className="why-choose-us__header">
          <motion.h2
            className="why-choose-us__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Kreative Ventures
          </motion.h2>
          <div className="why-choose-us__divider" aria-hidden="true" />
          <motion.p
            className="why-choose-us__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We combine traditional craftsmanship with modern technology to
            deliver exceptional results.
          </motion.p>
        </div>

        {/* Values grid */}
        <motion.div
          className="why-choose-us__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="why-choose-us__card"
            >
              <div className="why-choose-us__card-icon hexagon">
                <value.icon size={28} />
              </div>
              <h3 className="why-choose-us__card-title">{value.title}</h3>
              <p className="why-choose-us__card-desc">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
