import React from 'react'
import { motion } from 'framer-motion'
import { EngraveAnimation } from '../components/EngraveAnimation'
export function Brand() {
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
        duration: 0.8,
      }}
      className="w-full pt-20 bg-kv-bg min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Logo Reveal */}
        <div className="text-center mb-32">
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className="mb-8 bg-kv-black p-16 rounded-md inline-block"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest">
              KREATIVE
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-kv-silver tracking-[0.3em] mt-2">
              VENTURES
            </h2>
          </motion.div>
          <div className="mt-8">
            <EngraveAnimation color="#E8201A" width="300" delay={0.5} />
          </div>
          <motion.p
            className="mt-8 text-xl text-kv-muted max-w-2xl mx-auto font-light"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
          >
            Bold branding. Precision craft. Kenyan-made excellence.
          </motion.p>
        </div>

        {/* Color Palette */}
        <motion.div
          className="mb-32"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h3 className="text-2xl font-bold text-kv-black mb-8 border-b border-[#DDDBD4] pb-4">
            Brand Colors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: 'KV Black',
                hex: '#1A1A1A',
                class: 'bg-kv-black',
                text: 'text-white',
              },
              {
                name: 'KV Charcoal',
                hex: '#2D2D2D',
                class: 'bg-kv-charcoal',
                text: 'text-white',
              },
              {
                name: 'KV Red',
                hex: '#E8201A',
                class: 'bg-kv-red',
                text: 'text-white',
              },
              {
                name: 'KV Silver',
                hex: '#C0C0C0',
                class: 'bg-kv-silver',
                text: 'text-kv-black',
              },
              {
                name: 'KV White',
                hex: '#FFFFFF',
                class: 'bg-white border border-[#DDDBD4]',
                text: 'text-kv-black',
              },
              {
                name: 'KV Background',
                hex: '#F5F5F3',
                class: 'bg-kv-bg border border-[#DDDBD4]',
                text: 'text-kv-black',
              },
              {
                name: 'KV Muted',
                hex: '#8A8A8A',
                class: 'bg-kv-muted',
                text: 'text-white',
              },
            ].map((color, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className={`h-32 rounded-md ${color.class} mb-3 flex items-end p-4`}
                >
                  <span
                    className={`font-mono text-sm font-medium ${color.text}`}
                  >
                    {color.hex}
                  </span>
                </div>
                <span className="font-bold text-kv-black">{color.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          className="mb-32"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h3 className="text-2xl font-bold text-kv-black mb-8 border-b border-[#DDDBD4] pb-4">
            Typography
          </h3>
          <div className="bg-white p-12 rounded-md border border-[#DDDBD4]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="text-8xl font-bold text-kv-black">Aa</div>
              <div>
                <h4 className="text-3xl font-bold text-kv-black mb-2">
                  Outfit
                </h4>
                <p className="text-kv-muted mb-6">
                  Primary Typeface — Bold, Geometric, Industrial
                </p>
                <div className="space-y-4 text-kv-black">
                  <p className="font-light text-2xl">
                    Light - The quick brown fox
                  </p>
                  <p className="font-normal text-2xl">
                    Regular - The quick brown fox
                  </p>
                  <p className="font-medium text-2xl">
                    Medium - The quick brown fox
                  </p>
                  <p className="font-bold text-2xl">
                    Bold - The quick brown fox
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo Usage */}
        <motion.div
          className="mb-32"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h3 className="text-2xl font-bold text-kv-black mb-8 border-b border-[#DDDBD4] pb-4">
            Logo Placements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-kv-black h-64 rounded-md flex items-center justify-center">
              <span className="font-bold text-3xl tracking-widest text-white">
                KREATIVE VENTURES
              </span>
            </div>
            <div className="bg-kv-bg h-64 rounded-md flex items-center justify-center border border-[#DDDBD4]">
              <span className="font-bold text-3xl tracking-widest text-kv-black">
                KREATIVE VENTURES
              </span>
            </div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          className="text-center py-24 bg-kv-charcoal border-t-2 border-kv-red rounded-md"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider">
            Make Your Mark.
          </h2>
        </motion.div>
      </div>
    </motion.div>
  )
}
