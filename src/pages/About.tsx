import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Palette,
  Target,
  Shield,
  HeadphonesIcon,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { EngraveAnimation } from '../components/EngraveAnimation'
const values = [
  {
    icon: Palette,
    title: 'Creativity',
    desc: 'Pushing boundaries in design and execution.',
  },
  {
    icon: Target,
    title: 'Precision',
    desc: 'Exact measurements, flawless finishes.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    desc: 'Consistent quality you can count on.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support',
    desc: 'Dedicated assistance at every step.',
  },
  {
    icon: Zap,
    title: 'Speed',
    desc: 'Fast turnaround without compromising quality.',
  },
]
export function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full pt-20"
    >
      {/* Intro Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Our Story
          </motion.h1>
          <EngraveAnimation color="#E8201A" width="200" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            className="text-2xl md:text-3xl text-kv-black font-medium leading-relaxed mb-12"
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
            "We believe that every brand deserves to be represented with{' '}
            <span className="text-kv-red">precision</span>,{' '}
            <span className="text-kv-red">creativity</span>, and uncompromising{' '}
            <span className="text-kv-red">quality</span>."
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-kv-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative rounded-md overflow-hidden h-[600px]"
            >
              <img
                src="https://images.unsplash.com/photo-1611078449933-332410e1f25b?q=80&w=2070&auto=format&fit=crop"
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="text-4xl font-bold text-kv-black mb-6">
                Crafting Excellence Since Day One
              </h2>
              <div className="space-y-6 text-kv-muted text-lg leading-relaxed">
                <p>
                  Kreative Ventures started with a simple idea: to bridge the
                  gap between creative design and high-quality manufacturing in
                  Kenya. We saw businesses struggling to find reliable partners
                  who could handle both the vision and the execution.
                </p>
                <p>
                  Today, we operate a state-of-the-art facility equipped with
                  advanced laser engravers, precision plotter cutters, and
                  high-fidelity printing technology. But our true strength lies
                  in our team of dedicated craftsmen and designers.
                </p>
                <p>
                  We don't just make products; we build brand assets that leave
                  a lasting impression. Whether it's a single custom gift or a
                  full-scale corporate branding rollout, we approach every
                  project with the same level of care and attention to detail.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kv-black mb-4">
              Our Core Values
            </h2>
            <div className="h-0.5 w-16 bg-kv-red mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                className="bg-kv-bg p-8 rounded-md text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white flex items-center justify-center hexagon mb-6">
                  <value.icon size={28} className="text-kv-red" />
                </div>
                <h3 className="text-xl font-bold text-kv-black mb-3">
                  {value.title}
                </h3>
                <p className="text-kv-muted text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop/Team */}
      <section className="py-24 bg-kv-black border-t-2 border-kv-red text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
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
            >
              <h2 className="text-4xl font-bold mb-6">Inside the Workshop</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our workspace is where magic happens. It's a blend of
                traditional craftsmanship and modern technology. We invite you
                to see the care and precision that goes into every piece we
                create.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-kv-red font-semibold hover:text-white transition-colors"
              >
                See Our Work <ArrowRight size={20} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Machine"
                className="rounded-md w-full h-64 object-cover"
              />
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop"
                alt="Detail"
                className="rounded-md w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promise CTA */}
      <section className="py-32 bg-kv-charcoal border-t-2 border-kv-red text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
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
            Our Promise to You
          </motion.h2>
          <motion.p
            className="text-xl text-kv-silver mb-12"
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
            Excellence in every detail. Consistency in every order. We are
            committed to elevating your brand.
          </motion.p>
          <motion.div
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
              delay: 0.2,
            }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-kv-red text-white rounded-md font-semibold hover:bg-kv-red-hover transition-all inline-block"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
