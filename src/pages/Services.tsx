import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Layers, Scissors, Printer, CheckCircle2, ArrowRight } from 'lucide-react'

interface ServiceItem {
  label: string
}

const engravingItems: ServiceItem[] = [
  { label: 'Trophies & Awards' },
  { label: 'Custom Mugs' },
  { label: 'Premium Pens' },
  { label: 'Key Holders' },
  { label: 'Leather Diaries' },
  { label: 'Corporate Gifts' },
  { label: 'Custom Signage' },
  { label: 'Name Tags' },
]

const cuttingItems: ServiceItem[] = [
  { label: 'Vinyl Stickers' },
  { label: 'Vehicle Branding' },
  { label: 'Window Decals' },
  { label: 'Wall Art' },
  { label: 'Heat Transfer' },
  { label: 'Custom Stencils' },
  { label: 'Apparel Decals' },
  { label: 'Safety Signs' },
]

const printingItems: ServiceItem[] = [
  { label: 'Logo Design' },
  { label: 'Roll-up Banners' },
  { label: 'Custom Jerseys' },
  { label: 'Hoodies & T-Shirts' },
  { label: 'Flyers & Posters' },
  { label: 'Business Cards' },
  { label: 'Corporate Profiles' },
  { label: 'Packaging' },
]

function ItemList({ items }: { items: ServiceItem[] }) {
  return (
    <ul className="service-section__items-grid">
      {items.map((item, i) => (
        <li key={i} className="service-section__item">
          <CheckCircle2 size={16} aria-hidden="true" />
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <motion.div
      className="page services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="services-intro">
        <div className="services-intro__inner">
          <motion.h1
            className="services-intro__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h1>
          <div className="page-hero__divider" style={{ margin: '0 auto 2rem' }} />
          <motion.p
            className="services-intro__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive solutions for custom branding, engraving, printing,
            and cutting. We bring your ideas to life with precision and premium
            quality.
          </motion.p>
        </div>
      </section>

      {/* ── 1. Laser Engraving ───────────────────────────────── */}
      <section className="service-section service-section--white">
        <div className="kv-container">
          <div className="service-section__grid">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__icon service-section__icon--bg-light hexagon">
                <Layers size={32} aria-hidden="true" />
              </div>
              <h2 className="service-section__title">Laser Engraving</h2>
              <div className="section-divider" />
              <p className="service-section__body">
                Precision engraving on wood, metal, acrylic, leather, and glass.
                Our state-of-the-art lasers ensure intricate details and a
                high-end, permanent finish perfect for personalization and
                corporate branding.
              </p>
              <h4 className="service-section__items-title">What we make:</h4>
              <ItemList items={engravingItems} />
              <Link to="/contact" className="service-section__link">
                Request a Quote <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Photos */}
            <div className="service-section__photos">
              <motion.img
                src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop"
                alt="Laser engraved trophy"
                className="service-section__photo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop"
                alt="Engraved leather journal"
                className="service-section__photo service-section__photo--offset"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Plotter Cutting ───────────────────────────────── */}
      <section className="service-section service-section--alt">
        <div className="kv-container">
          <div className="service-section__grid">
            {/* Photos — left on desktop, top on mobile */}
            <div className="service-section__photos service-section__photos--order-first">
              <motion.img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop"
                alt="Plotter cutting vinyl"
                className="service-section__photo service-section__photo--offset"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
                alt="Vehicle branding result"
                className="service-section__photo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__icon service-section__icon--bg-white hexagon">
                <Scissors size={32} aria-hidden="true" />
              </div>
              <h2 className="service-section__title">Plotter Cutting</h2>
              <div className="section-divider" />
              <p className="service-section__body">
                Clean, sharp, and highly durable vinyl cutting services. Ideal
                for strong visibility, branding, and decoration across various
                surfaces and vehicles.
              </p>
              <h4 className="service-section__items-title">What we make:</h4>
              <ItemList items={cuttingItems} />
              <Link to="/contact" className="service-section__link">
                Request a Quote <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Design & Printing ─────────────────────────────── */}
      <section className="service-section service-section--white">
        <div className="kv-container">
          <div className="service-section__grid">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__icon service-section__icon--bg-light hexagon">
                <Printer size={32} aria-hidden="true" />
              </div>
              <h2 className="service-section__title">Design & Printing</h2>
              <div className="section-divider" />
              <p className="service-section__body">
                The creative and corporate side of our business. From logo
                origination to large format printing, we support businesses with
                cohesive identity and promotional materials.
              </p>
              <h4 className="service-section__items-title">What we make:</h4>
              <ItemList items={printingItems} />
              <Link to="/contact" className="service-section__link">
                Request a Quote <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Photos */}
            <div className="service-section__photos">
              <motion.img
                src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop"
                alt="Large format banner printing"
                className="service-section__photo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop"
                alt="Custom printed apparel"
                className="service-section__photo service-section__photo--offset"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Help CTA ─────────────────────────────────────────── */}
      <section className="services-help">
        <div className="services-help__inner">
          <h2 className="services-help__title">
            Need help choosing the right service?
          </h2>
          <p className="services-help__subtitle">
            Not sure which method is best for your project? Our experts are here
            to guide you through materials, processes, and pricing.
          </p>
          <div className="services-help__ctas">
            <Link to="/contact" className="services-help__btn-primary">
              Book a Consultation
            </Link>
            <Link to="/faq" className="services-help__btn-secondary">
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
