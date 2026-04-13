import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a comprehensive range of custom manufacturing and branding services, including laser engraving (wood, metal, acrylic, glass), plotter cutting (vinyl decals, vehicle branding), and design & printing (banners, apparel, corporate stationery).',
  },
  {
    question: 'How long does production take?',
    answer:
      'Turnaround times vary depending on the project size and complexity. Standard printing and engraving orders typically take 3–5 business days. Large-scale signage or vehicle branding may take 1–2 weeks. We also offer rush services for tight deadlines.',
  },
  {
    question: 'Can you create custom designs for me?',
    answer:
      'Absolutely! We have an in-house design team ready to bring your ideas to life. Whether you need a logo designed from scratch or artwork formatted for engraving, we provide full design support.',
  },
  {
    question: 'What file formats do you need?',
    answer:
      "For the best results, we prefer vector files (.AI, .EPS, .SVG, or vector .PDF). For standard printing, high-resolution images (.JPG, .PNG, .TIFF) at 300 dpi are acceptable. If you don't have these formats, our design team can help recreate your artwork.",
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
      className="page faq-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="faq-header">
        <div className="faq-header__inner">
          <motion.h1
            className="faq-header__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Frequently Asked Questions
          </motion.h1>

          <div className="page-hero__divider" style={{ margin: '0 auto 2rem' }} />

          <motion.p
            className="faq-header__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to know about our services, process, and
            pricing.
          </motion.p>

          {/* Accordion */}
          <dl className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <dt>
                  <button
                    className="faq-item__trigger"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    aria-expanded={openIndex === index}
                  >
                    <span className="faq-item__question">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`faq-item__icon${openIndex === index ? ' faq-item__icon--open' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden', margin: 0 }}
                    >
                      <p className="faq-item__answer">{faq.answer}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>
    </motion.div>
  )
}
