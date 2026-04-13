import React from 'react'
import { motion } from 'framer-motion'
interface EngraveAnimationProps {
  className?: string
  color?: string
  width?: string | number
  height?: string | number
  delay?: number
}
export function EngraveAnimation({
  className = '',
  color = '#E8201A',
  width = '100%',
  height = '12',
  delay = 0,
}: EngraveAnimationProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M2 6L30 2L60 6L90 2L120 6L150 2L180 6L198 2"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
            delay,
          }}
        />
        <motion.path
          d="M10 6L40 10L70 6L100 10L130 6L160 10L190 6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeOpacity="0.4"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
            delay: delay + 0.15,
          }}
        />
      </svg>
    </div>
  )
}
