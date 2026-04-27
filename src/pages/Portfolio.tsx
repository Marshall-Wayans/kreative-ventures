import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
}

interface ProcessStep {
  title: string
  desc: string
}

const categories = [
  'All',
  'Engraving',
  'Printing',
  'Signage',
  'Branding',
  'Apparel',
  'Gifts',
]

const processes: Record<string, ProcessStep[]> = {
  Engraving: [
    { title: 'Design upload', desc: 'You share your artwork, logo, or text. We optimise the vector file for engraving.' },
    { title: 'Material selection', desc: 'We choose the right substrate — wood, metal, acrylic, leather, or glass.' },
    { title: 'Laser calibration', desc: 'Our machine is set to the exact power and speed for clean, deep marks.' },
    { title: 'Precision engraving', desc: 'The laser traces every detail at up to 0.1 mm accuracy.' },
    { title: 'Quality check & delivery', desc: 'Each piece is inspected, cleaned, and packaged for you.' },
  ],
  Printing: [
    { title: 'Brief & artwork prep', desc: 'You share your brief; we prep or create print-ready artwork at the correct resolution.' },
    { title: 'Media & ink selection', desc: 'We pick the right substrate (vinyl, canvas, fabric, paper) and ink set.' },
    { title: 'Colour proofing', desc: 'A test print is run to verify colours match your brand palette before full production.' },
    { title: 'Large format print run', desc: 'High-resolution printers lay down vibrant, UV-stable inks at scale.' },
    { title: 'Finishing & dispatch', desc: 'Items are laminated, trimmed, rolled or mounted, then delivered.' },
  ],
  Signage: [
    { title: 'Site survey / brief', desc: 'We assess dimensions, lighting, and mounting requirements for your space.' },
    { title: 'Design & layout', desc: 'Signs are designed to be legible and on-brand at the intended viewing distance.' },
    { title: 'Material & production', desc: 'Cut, printed, or fabricated from aluminium, acrylic, PVC, or vinyl.' },
    { title: 'Installation', desc: 'Our team installs and aligns every sign on-site to specification.' },
    { title: 'Sign-off', desc: 'You inspect the install and we make any final adjustments on the spot.' },
  ],
  Branding: [
    { title: 'Discovery call', desc: 'We learn about your brand values, audience, and competitors.' },
    { title: 'Mood board & concepts', desc: 'Three distinct creative directions are presented for your feedback.' },
    { title: 'Design refinement', desc: 'Your chosen concept is developed — logos, colour, type, and layout.' },
    { title: 'Brand guidelines', desc: 'A full style guide is produced so your brand stays consistent across all channels.' },
    { title: 'Asset handover', desc: 'Files are supplied in all formats (AI, SVG, PNG, PDF) ready to use.' },
  ],
  Apparel: [
    { title: 'Garment & method selection', desc: 'We advise on fabric type and decoration method — print, embroidery, or heat transfer.' },
    { title: 'Artwork preparation', desc: 'Designs are separated, sized, and colour-matched to the garment.' },
    { title: 'Sample approval', desc: 'A single sample is produced for your sign-off before bulk printing.' },
    { title: 'Production run', desc: 'Garments are decorated in batch with consistent quality and placement.' },
    { title: 'QC & packaging', desc: 'Every piece is checked, folded, and packed for delivery or collection.' },
  ],
  Gifts: [
    { title: 'Consultation', desc: 'We discuss the recipient, occasion, and budget to find the right item.' },
    { title: 'Product & material choice', desc: 'Select from pens, mugs, keyrings, diaries, and more.' },
    { title: 'Personalisation artwork', desc: 'Names, logos, or messages are prepped for engraving or printing.' },
    { title: 'Engraving or printing', desc: 'Each gift is individually personalised with precision.' },
    { title: 'Gift packaging & delivery', desc: 'Items are beautifully boxed and delivered on schedule.' },
  ],
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Corporate Awards',
    category: 'Engraving',
    image: 'https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Fleet Branding',
    category: 'Signage',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Custom Apparel',
    category: 'Printing',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Leather Journals',
    category: 'Engraving',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Event Banners',
    category: 'Printing',
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Tech Startup Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Premium Keychains',
    category: 'Gifts',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Staff Uniforms',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Office Wayfinding',
    category: 'Signage',
    image: 'https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?q=80&w=800&auto=format&fit=crop',
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const steps = selectedItem ? (processes[selectedItem.category] ?? []) : []

  return (
    <motion.div
      className="page portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Header ── */}
      <section className="portfolio-header">
        <div className="portfolio-header__inner">
          <motion.h1
            className="portfolio-header__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Work
          </motion.h1>
          <div className="page-hero__divider" style={{ margin: '0 auto 2rem' }} />
          <motion.p
            className="portfolio-header__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The craftsmanship speaks for itself. Explore our recent projects
            across various industries.
          </motion.p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="portfolio-gallery">
        <div className="kv-container">
          {/* Filter tabs */}
          <div className="portfolio-filters" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`portfolio-filter-btn${activeCategory === category ? ' portfolio-filter-btn--active' : ''}`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="portfolio-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  aria-label={`View ${item.title} process`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-item__img"
                  />
                  {/* Always-visible label — replaces hover-only overlay */}
                  <div className="portfolio-item__label">
                    <span className="portfolio-item__category">
                      {item.category}
                    </span>
                    <h3 className="portfolio-item__title">{item.title}</h3>
                    <span className="portfolio-item__cta">View process →</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Process Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            aria-modal="true"
            role="dialog"
            aria-label={`${selectedItem.title} process`}
          >
            <motion.div
              className="portfolio-modal"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="portfolio-modal__close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="portfolio-modal__img"
              />

              <div className="portfolio-modal__body">
                <span className="portfolio-modal__cat">{selectedItem.category}</span>
                <h2 className="portfolio-modal__title">{selectedItem.title}</h2>

                <p className="portfolio-modal__steps-label">How we do it</p>

                <ol className="portfolio-modal__steps">
                  {steps.map((step, i) => (
                    <li key={i} className="portfolio-modal__step">
                      <div className="portfolio-modal__step-num">{i + 1}</div>
                      <div className="portfolio-modal__step-content">
                        <strong className="portfolio-modal__step-title">{step.title}</strong>
                        <span className="portfolio-modal__step-desc">{step.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}