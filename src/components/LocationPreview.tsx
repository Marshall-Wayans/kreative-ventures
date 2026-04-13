import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export function LocationPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <div>
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
              Visit Our Workshop
            </motion.h2>
            <motion.p
              className="text-kv-muted text-lg mb-10"
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
              Come see our machines in action and discuss your next project with
              our creative team.
            </motion.p>

            <div className="space-y-6 mb-10">
              <motion.div
                className="flex items-start gap-4 p-4 rounded-md hover:bg-kv-bg transition-colors"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
              >
                <div className="w-12 h-12 bg-kv-bg flex items-center justify-center hexagon shrink-0">
                  <MapPin size={24} className="text-kv-red" />
                </div>
                <div>
                  <h4 className="font-bold text-kv-black">Location</h4>
                  <p className="text-kv-muted">
                    Nairobi, Kenya
                    <br />
                    Creative District
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-md hover:bg-kv-bg transition-colors"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                }}
              >
                <div className="w-12 h-12 bg-kv-bg flex items-center justify-center hexagon shrink-0">
                  <Clock size={24} className="text-kv-red" />
                </div>
                <div>
                  <h4 className="font-bold text-kv-black">Working Hours</h4>
                  <p className="text-kv-muted">
                    Mon - Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-md hover:bg-kv-bg transition-colors"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.4,
                }}
              >
                <div className="w-12 h-12 bg-kv-bg flex items-center justify-center hexagon shrink-0">
                  <Phone size={24} className="text-kv-red" />
                </div>
                <div>
                  <h4 className="font-bold text-kv-black">Contact</h4>
                  <p className="text-kv-muted">
                    +254 700 000 000
                    <br />
                    hello@kreativeventures.co.ke
                  </p>
                </div>
              </motion.div>
            </div>

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
                delay: 0.5,
              }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-kv-black text-white rounded-md font-semibold hover:bg-kv-red transition-colors"
              >
                Get Directions <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Map Placeholder Side */}
          <motion.div
            className="relative h-[500px] rounded-md overflow-hidden group"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
              alt="Map Location"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

            {/* Map Pin Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-white flex items-center justify-center hexagon mb-2 animate-bounce">
                <MapPin size={32} className="text-kv-red" />
              </div>
              <div className="bg-white px-4 py-2 rounded-md font-bold text-kv-black text-sm">
                Kreative Ventures
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
