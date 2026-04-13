import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Layers,
  Scissors,
  Printer,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
export function Services() {
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
      {/* Intro */}
      <section className="py-24 bg-kv-bg text-center">
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
            Our Services
          </motion.h1>
          <div className="h-1 w-24 bg-kv-red mx-auto mb-8"></div>
          <motion.p
            className="text-xl text-kv-muted leading-relaxed"
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
            Comprehensive solutions for custom branding, engraving, printing,
            and cutting. We bring your ideas to life with precision and premium
            quality.
          </motion.p>
        </div>
      </section>

      {/* 1. Laser Engraving */}
      <section className="py-24 bg-white border-b border-[#DDDBD4]">
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
            >
              <div className="w-16 h-16 bg-kv-bg flex items-center justify-center hexagon mb-6">
                <Layers size={32} className="text-kv-red" />
              </div>
              <h2 className="text-4xl font-bold text-kv-black mb-4">
                Laser Engraving
              </h2>
              <div className="h-0.5 w-16 bg-kv-red mb-6"></div>
              <p className="text-kv-muted text-lg mb-8 leading-relaxed">
                Precision engraving on wood, metal, acrylic, leather, and glass.
                Our state-of-the-art lasers ensure intricate details and a
                high-end, permanent finish perfect for personalization and
                corporate branding.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-kv-black mb-4">What we make:</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    'Trophies & Awards',
                    'Custom Mugs',
                    'Premium Pens',
                    'Key Holders',
                    'Leather Diaries',
                    'Corporate Gifts',
                    'Custom Signage',
                    'Name Tags',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-kv-muted"
                    >
                      <CheckCircle2 size={16} className="text-kv-red" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-kv-red font-semibold hover:text-kv-red-hover transition-colors"
              >
                Request a Quote <ArrowRight size={20} />
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
                src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop"
                alt="Engraving"
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
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop"
                alt="Engraving Detail"
                className="rounded-md w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Plotter Cutting */}
      <section className="py-24 bg-kv-bg border-b border-[#DDDBD4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
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
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop"
                alt="Cutting"
                className="rounded-md w-full h-64 object-cover mt-8"
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
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
                alt="Cutting Detail"
                className="rounded-md w-full h-64 object-cover"
              />
            </div>

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
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center hexagon mb-6">
                <Scissors size={32} className="text-kv-red" />
              </div>
              <h2 className="text-4xl font-bold text-kv-black mb-4">
                Plotter Cutting
              </h2>
              <div className="h-0.5 w-16 bg-kv-red mb-6"></div>
              <p className="text-kv-muted text-lg mb-8 leading-relaxed">
                Clean, sharp, and highly durable vinyl cutting services. Ideal
                for strong visibility, branding, and decoration across various
                surfaces and vehicles.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-kv-black mb-4">What we make:</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    'Vinyl Stickers',
                    'Vehicle Branding',
                    'Window Decals',
                    'Wall Art',
                    'Heat Transfer',
                    'Custom Stencils',
                    'Apparel Decals',
                    'Safety Signs',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-kv-muted"
                    >
                      <CheckCircle2 size={16} className="text-kv-red" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-kv-red font-semibold hover:text-kv-red-hover transition-colors"
              >
                Request a Quote <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Design & Printing */}
      <section className="py-24 bg-white">
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
            >
              <div className="w-16 h-16 bg-kv-bg flex items-center justify-center hexagon mb-6">
                <Printer size={32} className="text-kv-red" />
              </div>
              <h2 className="text-4xl font-bold text-kv-black mb-4">
                Design & Printing
              </h2>
              <div className="h-0.5 w-16 bg-kv-red mb-6"></div>
              <p className="text-kv-muted text-lg mb-8 leading-relaxed">
                The creative and corporate side of our business. From logo
                origination to large format printing, we support businesses with
                cohesive identity and promotional materials.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-kv-black mb-4">What we make:</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    'Logo Design',
                    'Roll-up Banners',
                    'Custom Jerseys',
                    'Hoodies & T-Shirts',
                    'Flyers & Posters',
                    'Business Cards',
                    'Corporate Profiles',
                    'Packaging',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-kv-muted"
                    >
                      <CheckCircle2 size={16} className="text-kv-red" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-kv-red font-semibold hover:text-kv-red-hover transition-colors"
              >
                Request a Quote <ArrowRight size={20} />
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
                src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop"
                alt="Printing"
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
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop"
                alt="Apparel"
                className="rounded-md w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 bg-kv-black border-t-2 border-kv-red text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Need help choosing the right service?
          </h2>
          <p className="text-kv-silver mb-10 text-lg">
            Not sure which method is best for your project? Our experts are here
            to guide you through materials, processes, and pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-kv-red text-white rounded-md font-semibold hover:bg-kv-red-hover transition-all"
            >
              Book 
            </Link>
            <Link
              to="/faq"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-md font-semibold hover:border-kv-red hover:text-kv-red transition-all"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
