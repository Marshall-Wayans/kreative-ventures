import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
export function Contact() {
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
      className="w-full pt-20 bg-kv-bg min-h-screen"
    >
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/80"></div>
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
            Let's Talk
          </motion.h1>
          <div className="h-1 w-24 bg-kv-red mx-auto mb-6"></div>
          <motion.p
            className="text-xl text-kv-silver mt-6"
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
            Ready to start your project? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info & Map */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-md border border-[#DDDBD4]">
                  <div className="w-12 h-12 bg-kv-bg flex items-center justify-center hexagon mb-4">
                    <Phone size={24} className="text-kv-red" />
                  </div>
                  <h3 className="font-bold text-kv-black mb-2">Call Us</h3>
                  <p className="text-kv-muted">+254 700 000 000</p>
                </div>

                <div className="bg-white p-6 rounded-md border border-[#DDDBD4]">
                  <div className="w-12 h-12 bg-kv-bg flex items-center justify-center hexagon mb-4">
                    <Mail size={24} className="text-kv-red" />
                  </div>
                  <h3 className="font-bold text-kv-black mb-2">Email Us</h3>
                  <p className="text-kv-muted">hello@kreativeventures.co.ke</p>
                </div>

                <div className="bg-white p-6 rounded-md border border-[#DDDBD4]">
                  <div className="w-12 h-12 bg-kv-bg flex items-center justify-center hexagon mb-4">
                    <MapPin size={24} className="text-kv-red" />
                  </div>
                  <h3 className="font-bold text-kv-black mb-2">Visit Us</h3>
                  <p className="text-kv-muted">
                    Nairobi, Kenya
                    <br />
                    Creative District
                  </p>
                </div>

                <div className="bg-white p-6 rounded-md border border-[#DDDBD4]">
                  <div className="w-12 h-12 bg-kv-bg flex items-center justify-center hexagon mb-4">
                    <Clock size={24} className="text-kv-red" />
                  </div>
                  <h3 className="font-bold text-kv-black mb-2">
                    Working Hours
                  </h3>
                  <p className="text-kv-muted">
                    Mon-Fri: 8am - 6pm
                    <br />
                    Sat: 9am - 2pm
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-[300px] rounded-md overflow-hidden border border-[#DDDBD4]">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                  alt="Map Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center hexagon mb-2">
                    <MapPin size={24} className="text-kv-red" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-md border border-[#DDDBD4]">
              <h2 className="text-3xl font-bold text-kv-black mb-8">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-kv-black mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-kv-bg border border-[#DDDBD4] focus:outline-none focus:ring-2 focus:ring-kv-red transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-kv-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-md bg-kv-bg border border-[#DDDBD4] focus:outline-none focus:ring-2 focus:ring-kv-red transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-kv-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-md bg-kv-bg border border-[#DDDBD4] focus:outline-none focus:ring-2 focus:ring-kv-red transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-kv-black mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 rounded-md bg-kv-bg border border-[#DDDBD4] focus:outline-none focus:ring-2 focus:ring-kv-red transition-all text-kv-black">
                    <option>Laser Engraving</option>
                    <option>Plotter Cutting</option>
                    <option>Design & Printing</option>
                    <option>Full Branding Package</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-kv-black mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-kv-bg border border-[#DDDBD4] focus:outline-none focus:ring-2 focus:ring-kv-red transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full py-4 bg-kv-red text-white rounded-md font-semibold hover:bg-kv-red-hover transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
