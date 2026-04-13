import { motion } from 'framer-motion'

interface EngraveAnimationProps {
  className?: string
  color?: string
  /** SVG width — CSS string or number (px) */
  width?: string | number
  /** SVG height in px */
  height?: number
  /** Animation start delay in seconds */
  delay?: number
}

/**
 * Decorative animated engraving line.
 *
 * The component draws two SVG paths that animate in via Framer Motion's
 * `whileInView` — once the element enters the viewport.
 *
 * Styling lives in kreative-ventures.css under `.engrave-container`.
 */
export function EngraveAnimation({
  className = '',
  color = '#E8201A',
  width = '100%',
  height = 12,
  delay = 0,
}: EngraveAnimationProps) {
  return (
    <div className={`engrave-container${className ? ` ${className}` : ''}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Primary wave */}
        <motion.path
          d="M2 6L30 2L60 6L90 2L120 6L150 2L180 6L198 2"
          stroke={color}
          strokeWidth={2.5}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay }}
        />

        {/* Secondary shadow wave */}
        <motion.path
          d="M10 6L40 10L70 6L100 10L130 6L160 10L190 6"
          stroke={color}
          strokeWidth={1.5}
          strokeOpacity={0.4}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: delay + 0.15 }}
        />
      </svg>
    </div>
  )
}
