import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { Gem, PenTool, Zap, ShieldCheck, HeartHandshake } from 'lucide-react'
const values = [
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
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}
export function WhyChooseUs() {
  return (
    <section className="py-24 bg-kv-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            transition={{
              duration: 0.6,
            }}
          >
            Why Choose Kreative Ventures
          </motion.h2>
          <div className="h-0.5 w-16 bg-kv-red mx-auto mb-6"></div>
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
              duration: 0.6,
              delay: 0.2,
            }}
          >
            We combine traditional craftsmanship with modern technology to
            deliver exceptional results.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-kv-white rounded-md p-8 border border-[#DDDBD4] hover:border-l-4 hover:border-l-kv-red hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-kv-bg flex items-center justify-center mb-6 hexagon group-hover:bg-kv-red transition-colors duration-300">
                <value.icon
                  size={28}
                  className="text-kv-red group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-medium text-kv-black mb-3">
                {value.title}
              </h3>
              <p className="text-kv-muted leading-relaxed font-normal">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
