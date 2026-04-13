import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react'
const packages = [
  {
    name: 'Starter Brand',
    target: 'For new businesses',
    price: 'From $499',
    features: [
      'Logo Origination',
      'Business Card Design & Print (500)',
      'Letterhead Design',
      '1x Custom Engraved Desk Sign',
    ],
    highlight: false,
  },
  {
    name: 'Professional Edge',
    target: 'For growing companies',
    price: 'From $1,299',
    features: [
      'Everything in Starter',
      '2x Roll-up Banners',
      '10x Custom Branded Mugs',
      '5x Premium Engraved Pens',
      'Basic Vehicle Decals',
    ],
    highlight: true,
  },
  {
    name: 'Corporate Premium',
    target: 'For established brands',
    price: 'Custom Quote',
    features: [
      'Full Brand Identity Overhaul',
      'Premium Office Signage',
      'Executive Gift Sets (Engraved)',
      'Full Fleet Branding',
      'Priority Production Queue',
    ],
    highlight: false,
  },
]
export function Packages() {
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
      className="w-full pt-20 bg-kv-bg"
    >
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-kv-black mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Pricing Packages
          </motion.h1>
          <div className="h-1 w-24 bg-kv-red mx-auto mb-8"></div>
          <motion.p
            className="text-xl text-kv-muted"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            Curated bundles to help you choose quickly, with the flexibility to
            customize.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                className={`relative rounded-md p-8 flex flex-col border ${pkg.highlight ? 'bg-kv-black text-white border-kv-black transform md:-translate-y-4' : 'bg-white text-kv-black border-[#DDDBD4]'}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kv-red text-white px-4 py-1 rounded-sm text-sm font-bold flex items-center gap-1">
                    <Zap size={14} /> Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-kv-black'}`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={
                      pkg.highlight ? 'text-kv-silver' : 'text-kv-muted'
                    }
                  >
                    {pkg.target}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-kv-red">
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="shrink-0 mt-0.5 text-kv-red"
                      />
                      <span
                        className={
                          pkg.highlight ? 'text-white/90' : 'text-kv-black'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-md font-semibold text-center transition-all ${pkg.highlight ? 'bg-kv-red text-white hover:bg-kv-red-hover' : 'bg-transparent text-kv-black border border-kv-black hover:border-kv-red hover:text-kv-red'}`}
                >
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-kv-charcoal border-t-2 border-kv-red text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need something unique?
          </h2>
          <p className="text-lg text-kv-silver mb-10">
            We understand that every business is different. Contact us for a
            custom quote tailored exactly to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-kv-red text-white rounded-md font-semibold hover:bg-kv-red-hover transition-all"
          >
            Request Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
