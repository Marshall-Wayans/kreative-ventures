import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

// ── Engraving char-by-char component ──────────────────────────────────────────
function EngravedText({
  text,
  className,
  baseDelay = 0,
  charDelay = 0.035,
  tag: Tag = 'span',
}: {
  text: string
  className?: string
  baseDelay?: number
  charDelay?: number
  tag?: keyof JSX.IntrinsicElements
}) {
  return (
    <Tag className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="engraved-char"
          aria-hidden="true"
          initial={{ opacity: 0, textShadow: '0 0 8px rgba(220,38,38,0.9)', color: 'var(--kv-red)' }}
          whileInView={{
            opacity: 1,
            textShadow: '1px 1px 0px rgba(0,0,0,0.25), -0.5px -0.5px 0px rgba(255,255,255,0.4)',
            color: 'var(--kv-black)',
          }}
          viewport={{ once: true }}
          transition={{
            delay: baseDelay + i * charDelay,
            duration: 0.18,
            ease: 'easeOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Tag>
  )
}

// ── Card variants ──────────────────────────────────────────────────────────────
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
    boxShadow: 'none',
    filter: 'brightness(1.15)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    boxShadow:
      'inset 0 2px 4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.08)',
    filter: 'brightness(1)',
    transition: {
      delay: i * 0.13,
      duration: 0.55,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
}

// ── Icon press-in variants ─────────────────────────────────────────────────────
const iconVariants: Variants = {
  hidden: { scale: 1.2, opacity: 0, rotate: -8 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: i * 0.13 + 0.3,
      duration: 0.4,
      type: 'spring',
      stiffness: 260,
      damping: 18,
    },
  }),
}

// ── Engraving chisel line that sweeps across ───────────────────────────────────
function ChiselSweep({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      className="chisel-sweep"
      initial={{ scaleX: 0, opacity: 1 }}
      whileInView={{ scaleX: 1, opacity: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55, ease: [0.4, 0, 1, 1] }}
      aria-hidden="true"
    />
  )
}

// ── Main component ─────────────────────────────────────────────────────────────
export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section className="why-choose-us" ref={sectionRef}>
      {/* Decorative background texture */}
      <div className="why-choose-us__texture" aria-hidden="true" />

      <div className="kv-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* ── Header ── */}
        <div className="why-choose-us__header">
          {/* Divider before */}
          <motion.div
            className="why-choose-us__divider why-choose-us__divider--top"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          />

          <EngravedText
            text="Why Choose Kreative Ventures"
            className="why-choose-us__title"
            tag="h2"
            baseDelay={0.1}
            charDelay={0.032}
          />

          <motion.div
            className="why-choose-us__divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />

          <motion.p
            className="why-choose-us__subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            We combine traditional craftsmanship with modern technology to
            deliver exceptional results.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="why-choose-us__grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="why-choose-us__card"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{
                y: -5,
                boxShadow:
                  'inset 0 3px 6px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.7), 0 8px 24px rgba(220,38,38,0.12)',
                transition: { duration: 0.22 },
              }}
            >
              {/* Chisel sweep overlay */}
              <ChiselSweep delay={index * 0.13 + 0.05} />

              {/* Corner mark — craft detail */}
              <span className="why-choose-us__card-corner" aria-hidden="true" />

              {/* Icon */}
              <motion.div
                className="why-choose-us__card-icon hexagon"
                variants={iconVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <value.icon size={26} strokeWidth={1.75} />
              </motion.div>

              {/* Title — engraved */}
              <EngravedText
                text={value.title}
                className="why-choose-us__card-title"
                tag="h3"
                baseDelay={index * 0.13 + 0.35}
                charDelay={0.028}
              />

              {/* Description fades in after title finishes */}
              <motion.p
                className="why-choose-us__card-desc"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.13 + 0.35 + value.title.length * 0.028 + 0.1,
                  duration: 0.45,
                }}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}