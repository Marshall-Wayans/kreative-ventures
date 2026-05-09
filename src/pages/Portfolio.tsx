import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react'

import img003 from '../assets/img-003.jpg'
import img004 from '../assets/img-004.jpg'
import img005 from '../assets/img-005.jpg'
import img006 from '../assets/img-006.jpg'
import img007 from '../assets/img-007.jpg'
import img008 from '../assets/img-008.jpg'
import img009 from '../assets/img-009.jpg'
import img010 from '../assets/img-010.jpg'
import img011 from '../assets/img-011.jpg'
import img012 from '../assets/img-012.jpg'
import img013 from '../assets/img-013.jpg'
import img014 from '../assets/img-014.jpg'
import img015 from '../assets/img-015.jpg'
import img016 from '../assets/img-016.jpg'
import img017 from '../assets/img-017.jpg'
import img018 from '../assets/img-018.jpg'
import img019 from '../assets/img-019.jpg'
import img020 from '../assets/img-020.jpg'
import img021 from '../assets/img-021.jpg'
import img022 from '../assets/img-022.jpg'
import img023 from '../assets/img-023.jpg'
import img024 from '../assets/img-024.jpg'
import img025 from '../assets/img-025.jpg'
import img026 from '../assets/img-026.jpg'
import img027 from '../assets/img-027.jpg'
import img028 from '../assets/img-028.jpg'
import img029 from '../assets/img-029.jpg'
import img030 from '../assets/img-030.jpg'
import banner from '../assets/banner.jpg'
import cupEngraving from '../assets/cup engraving.jpg'
import cupEngraving2 from '../assets/cup engraving 2.jpg'
import cupEngraving3 from '../assets/cup engraving 3.jpg'
import website from '../assets/website.png'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  tagline: string
  highlights: string[]
}

interface ProcessStep {
  title: string
  desc: string
}

const categories = [
  'All', 'Engraving', 'Printing', 'Signage', 'Branding', 'Apparel', 'Gifts', 'Web Development',
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
  'Web Development': [
    { title: 'Discovery & scoping', desc: 'We map out your goals, target audience, and technical requirements.' },
    { title: 'UI/UX design', desc: 'Wireframes and visual designs are crafted and approved before any code is written.' },
    { title: 'Development', desc: 'Your site is built with modern, fast, and accessible code.' },
    { title: 'Testing & QA', desc: 'Cross-browser and cross-device testing ensures a flawless experience.' },
    { title: 'Launch & support', desc: 'We deploy your site and provide ongoing maintenance and updates.' },
  ],
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1, category: 'Printing', image: img003,
    title: 'Printed Mugs & Heat Press',
    tagline: 'Full-colour custom mug printing',
    highlights: ['Sublimation & heat-press printing', 'Minimum order: 1 piece', 'Dishwasher-safe finish'],
  },
  {
    id: 2, category: 'Printing', image: img005,
    title: 'Large-Format Banner Printing',
    tagline: 'High-impact banners for any event',
    highlights: ['UV-stable, vibrant inks', 'Indoor & outdoor media', 'Same-day turnaround available'],
  },
  {
    id: 3, category: 'Printing', image: img006,
    title: 'Corporate Flyers — Blue Series',
    tagline: 'Professional promotional print',
    highlights: ['300gsm gloss or matte stock', 'CMYK colour-matched', 'Single & double-sided'],
  },
  {
    id: 4, category: 'Printing', image: img007,
    title: 'Digital Flyers — Red Series',
    tagline: 'Bold, eye-catching marketing collateral',
    highlights: ['Full-bleed digital print', 'Brand-accurate colour proofing', 'Bulk pricing available'],
  },
  {
    id: 5, category: 'Printing', image: img023,
    title: 'Custom T-Shirt & Mug Press',
    tagline: 'Matching branded merchandise sets',
    highlights: ['Heat-transfer & sublimation', 'Multi-item bundles', 'Corporate gifting packages'],
  },
  {
    id: 6, category: 'Printing', image: img028,
    title: 'Vinyl Cutting & Decals',
    tagline: 'Precision-cut vinyl for any surface',
    highlights: ['Contour-cut to shape', 'Vehicles, walls & windows', 'Weather-resistant vinyl'],
  },
  {
    id: 7, category: 'Printing', image: img029,
    title: 'Heat Press Production',
    tagline: 'Industrial-grade heat application',
    highlights: ['Consistent placement every run', 'Fabric & hard-surface compatible', 'Fast bulk turnaround'],
  },
  {
    id: 8, category: 'Printing', image: img030,
    title: 'Roland Large-Format Printer',
    tagline: 'Wide-format print up to 1.6 m',
    highlights: ['1440 dpi photographic quality', 'Eco-solvent inks', 'Canvas, vinyl & fabric'],
  },
  {
    id: 9, category: 'Apparel', image: img004,
    title: 'Hi-Vis Safety Vests',
    tagline: 'Branded PPE for your workforce',
    highlights: ['ANSI-compliant reflective strips', 'Embroidery or print branding', 'Bulk corporate orders'],
  },
  {
    id: 10, category: 'Apparel', image: img018,
    title: 'Gold Glitter HTV T-Shirt',
    tagline: 'Premium glitter heat-transfer apparel',
    highlights: ['Stretch-compatible HTV film', 'Gold, silver & holographic options', 'Wash-tested durability'],
  },
  {
    id: 11, category: 'Apparel', image: img022,
    title: 'Glitter Heat-Transfer Roll',
    tagline: 'Specialty film for standout designs',
    highlights: ['Custom width cutting', 'Multi-layer application', 'Available by the metre'],
  },
  {
    id: 12, category: 'Apparel', image: img024,
    title: 'Custom Brand T-Shirt Printing',
    tagline: 'Your logo, any colour, any fabric',
    highlights: ['DTG & screen-print options', 'Colour-matched to brand palette', 'From 1 to 500+ pieces'],
  },
  {
    id: 13, category: 'Apparel', image: img026,
    title: 'Corporate Polo Uniforms',
    tagline: 'Smart workwear your team will wear',
    highlights: ['Embroidered or printed logo', 'Moisture-wicking fabrics', 'Size-inclusive ordering'],
  },
  {
    id: 14, category: 'Signage', image: img009,
    title: 'Acrylic Phone Display Stands',
    tagline: 'Elegant point-of-sale display',
    highlights: ['Crystal-clear 3 mm acrylic', 'Custom logo engraving', 'Retail & hospitality ready'],
  },
  {
    id: 15, category: 'Signage', image: img010,
    title: 'Social Media QR Stand',
    tagline: 'Black & gold table-top signage',
    highlights: ['Dynamic QR-code ready', 'Acrylic + metal base', 'Restaurant & hotel use'],
  },
  {
    id: 16, category: 'Signage', image: img015,
    title: 'Roll-Up Food Menu Banners',
    tagline: 'Portable, retractable menu displays',
    highlights: ['850 × 2000 mm standard size', 'Full-colour dye-sub print', 'Aluminium cassette base'],
  },
  {
    id: 17, category: 'Signage', image: img021,
    title: 'Acrylic Display Stand',
    tagline: 'Versatile branded display solution',
    highlights: ['Floor-standing & counter options', 'Interchangeable panels', 'Brand-colour infill'],
  },
  {
    id: 18, category: 'Signage', image: img027,
    title: 'Feather & Teardrop Banners',
    tagline: 'Outdoor flags that demand attention',
    highlights: ['Fibreglass pole + ground stake', 'Double-sided print available', 'Wind-rated fabric'],
  },
  {
    id: 19, category: 'Signage', image: banner,
    title: 'Promotional Event Banner',
    tagline: 'Large-scale event branding',
    highlights: ['PVC mesh or solid options', 'Eyelets & rope-ready', 'Fade-resistant outdoor inks'],
  },
  {
    id: 20, category: 'Branding', image: img008,
    title: 'Graphic Design Portfolio',
    tagline: 'End-to-end visual identity design',
    highlights: ['Logo, colour & typography systems', 'Print & digital deliverables', 'Unlimited revisions on retainer'],
  },
  {
    id: 21, category: 'Branding', image: img016,
    title: 'Flyer Design — CorelDraw Studio',
    tagline: 'Print-ready marketing artwork',
    highlights: ['Bleed & crop marks included', 'Custom illustration available', 'Fast 24 hr turnaround'],
  },
  {
    id: 22, category: 'Branding', image: img017,
    title: 'Banner Design — CorelDraw Studio',
    tagline: 'Scalable vector banner artwork',
    highlights: ['High-res vector output', 'Ready for any print size', 'Consistent brand application'],
  },
  {
    id: 23, category: 'Branding', image: img025,
    title: 'Pen & Stationery Branding Set',
    tagline: 'Cohesive branded stationery suites',
    highlights: ['Pens, notebooks & folders', 'Logo pad-print or engraving', 'Minimum 25-piece sets'],
  },
  {
    id: 24, category: 'Engraving', image: img012,
    title: 'Laser-Engraved Wooden Plaque',
    tagline: 'Timeless gifts & awards in wood',
    highlights: ['0.1 mm laser precision', 'Natural bamboo or MDF', 'Custom sizing available'],
  },
  {
    id: 25, category: 'Engraving', image: img019,
    title: 'Laser Engraving Process',
    tagline: 'Precision marking on any substrate',
    highlights: ['Wood, metal, acrylic & leather', 'Deep or surface-level marks', 'Batch production ready'],
  },
  {
    id: 26, category: 'Engraving', image: img020,
    title: 'Laser Engraver Close-Up',
    tagline: 'Micro-detail engraving capability',
    highlights: ['Sub-millimetre accuracy', 'No ink or consumables needed', 'Permanent, fade-proof result'],
  },
  {
    id: 27, category: 'Engraving', image: cupEngraving,
    title: 'Engraved Mug — Hero Shot',
    tagline: 'Personalised ceramic & steel mugs',
    highlights: ['Name, logo or full artwork', 'Stainless & ceramic options', 'Perfect corporate gift'],
  },
  {
    id: 28, category: 'Engraving', image: cupEngraving2,
    title: 'Engraved Mug — Second Angle',
    tagline: 'All-around wrap-engraving option',
    highlights: ['360° engraving available', 'Dishwasher-safe result', 'Gift-boxed on request'],
  },
  {
    id: 29, category: 'Engraving', image: cupEngraving3,
    title: 'Engraved Mug — Detail View',
    tagline: 'Fine text & logo reproduction',
    highlights: ['Crisp text at 6 pt and above', 'Consistent depth per run', 'Single or bulk orders'],
  },
  {
    id: 30, category: 'Gifts', image: img011,
    title: 'Custom Branded Mugs',
    tagline: 'Memorable corporate gift mugs',
    highlights: ['Full-colour wraparound print', 'Boxed & ribbon options', 'Company logo or message'],
  },
  {
    id: 31, category: 'Gifts', image: img013,
    title: 'Wooden Letter Keychains',
    tagline: 'Personalised wood keychains',
    highlights: ['Laser-cut natural wood', 'Name or initials engraved', 'Bulk wedding/event favours'],
  },
  {
    id: 32, category: 'Gifts', image: img014,
    title: '"You Stole My Heart" Keychain',
    tagline: 'Romantic couple gift sets',
    highlights: ['Laser-engraved detail', 'Paired set packaging', 'Valentines & anniversary ready'],
  },
  {
    id: 33, category: 'Web Development', image: website,
    title: 'Website Design & Development',
    tagline: 'Fast, modern sites that convert',
    highlights: ['Mobile-first responsive design', 'SEO & performance optimised', 'Ongoing support & hosting'],
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
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`portfolio-filter-btn${activeCategory === cat ? ' portfolio-filter-btn--active' : ''}`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  layout
                  className="pf-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.28, delay: Math.min(index * 0.035, 0.35) }}
                  onClick={() => setSelectedItem(item)}
                  aria-label={`View ${item.title} process`}
                >
                  {/* Full-bleed image */}
                  <img src={item.image} alt={item.title} className="pf-card__img" />

                  {/* Dark gradient at bottom */}
                  <div className="pf-card__gradient" aria-hidden="true" />

                  {/* Category badge — top left */}
                  <span className="pf-card__badge">{item.category}</span>

                  {/* Arrow icon — top right */}
                  <span className="pf-card__arrow" aria-hidden="true">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </span>

                  {/* Static bottom info: always visible */}
                  <div className="pf-card__bottom">
                    <p className="pf-card__tagline">{item.tagline}</p>
                    <h3 className="pf-card__title">{item.title}</h3>
                  </div>

                  {/* Hover reveal panel */}
                  <div className="pf-card__reveal">
                    <p className="pf-card__reveal-title">{item.title}</p>
                    <ul className="pf-card__highlights">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="pf-card__highlight">
                          <CheckCircle2
                            size={12}
                            strokeWidth={2.5}
                            className="pf-card__highlight-icon"
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="pf-card__cta">
                      View full process
                      <ArrowUpRight size={12} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                  </div>
                </motion.article>
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
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="portfolio-modal__close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
              >
                <X size={15} strokeWidth={2.5} />
              </button>

              {/* Hero */}
              <div className="portfolio-modal__img-wrap">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="portfolio-modal__img"
                />
                <div className="portfolio-modal__img-gradient" aria-hidden="true" />
                <div className="portfolio-modal__img-bottom">
                  <span className="portfolio-modal__img-badge">{selectedItem.category}</span>
                  <h2 className="portfolio-modal__img-title">{selectedItem.title}</h2>
                  <p className="portfolio-modal__img-tagline">{selectedItem.tagline}</p>
                </div>
              </div>

              {/* Highlight chips */}
              <div className="portfolio-modal__highlights">
                {selectedItem.highlights.map((h, i) => (
                  <div key={i} className="portfolio-modal__highlight-chip">
                    <CheckCircle2 size={12} strokeWidth={2.5} aria-hidden="true" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="portfolio-modal__body">
                <div className="portfolio-modal__steps-header">
                  <span className="portfolio-modal__steps-label">How we do it</span>
                  <span className="portfolio-modal__steps-count">{steps.length} steps</span>
                </div>

                <ol className="portfolio-modal__steps">
                  {steps.map((step, i) => (
                    <li key={i} className="portfolio-modal__step">
                      <div className="portfolio-modal__step-track">
                        <div className="portfolio-modal__step-num">{i + 1}</div>
                        {i < steps.length - 1 && (
                          <div className="portfolio-modal__step-line" aria-hidden="true" />
                        )}
                      </div>
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