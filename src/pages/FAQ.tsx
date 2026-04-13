import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a comprehensive range of custom manufacturing and branding services, including laser engraving (wood, metal, acrylic, glass), plotter cutting (vinyl decals, vehicle branding), and design & printing (banners, apparel, corporate stationery).',
  },
  {
    question: 'How long does production take?',
    answer:
      'Turnaround times vary depending on the project size and complexity. Standard printing and engraving orders typically take 3-5 business days. Large scale signage or vehicle branding may take 1-2 weeks. We also offer rush services for tight deadlines.',
  },
  {
    question: 'Can you create custom designs for me?',
    answer:
      'Absolutely! We have an in-house design team ready to bring your ideas to life. Whether you need a logo designed from scratch or artwork formatted for engraving, we provide full design support.',
  },
  {
    question: 'What file formats do you need?',
    answer:
      "For the best results, we prefer vector files (.AI, .EPS, .SVG, or vector .PDF). For standard printing, high-resolution images (.JPG, .PNG, .TIFF) at 300dpi are acceptable. If you don't have these formats, our design team can help recreate your artwork.",
  },
  {
    question: 'Do you offer bulk order discounts?',
    answer:
      'Yes, we offer tiered pricing for bulk orders. The more you order, the lower the unit cost. Please contact us for a custom quote on large volume orders.',
  },
  {
    question: 'Can you help with rebranding my business?',
    answer:
      'Yes, we offer complete rebranding packages. This includes logo redesign, updating all corporate stationery, producing new signage, and rolling out the new brand across uniforms and vehicles.',
  },
]
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold text-kv-black mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Frequently Asked Questions
          </motion.h1>
          <div className="h-1 w-24 bg-kv-red mx-auto mb-8"></div>
          <motion.p
            className="text-xl text-kv-muted mb-16"
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
            Everything you need to know about our services, process, and
            pricing.
          </motion.p>

          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-white rounded-md overflow-hidden border border-[#DDDBD4]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-kv-black text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-kv-red transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-8 pb-6 text-kv-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
