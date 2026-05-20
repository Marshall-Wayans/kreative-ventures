import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Layers, Printer, CheckCircle2, ArrowRight, Palette, Globe } from 'lucide-react'
import engrave from '../assets/img-012.jpg'
import mug from '../assets/cup engraving.jpg'
import design from '../assets/img-023.jpg'
import design2 from '../assets/img-024.jpg'
import banners from '../assets/img-017.jpg'
import website from '../assets/website.png'
import service from '../assets/services.jpg'




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

const designItems: ServiceItem[] = [
  { label: 'Logo Design' },
  { label: 'Brand Identity' },
  { label: 'Brand Guidelines' },
  { label: 'Typography Systems' },
  { label: 'Social Media Assets' },
  { label: 'Packaging Design' },
  { label: 'Corporate Profiles' },
  { label: 'Pitch Deck Design' },
]

const webDevItems: ServiceItem[] = [
  { label: 'Business Websites' },
  { label: 'E-commerce Stores' },
  { label: 'Landing Pages' },
  { label: 'Portfolio Sites' },
  { label: 'Web Applications' },
  { label: 'CMS Integration' },
  { label: 'SEO Optimisation' },
  { label: 'Website Redesigns' },
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
      {/* ── Intro ── */}
<section
  className="services-intro"
  style={{
    backgroundImage: `url(${service})`,
  }}
>
  <div className="services-intro__overlay" />

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
                Start a Project <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Photos */}
            <div className="service-section__photos">
              <motion.img
                src= {engrave}
                alt="Close-up of CNC laser engraving machine on wood"
                className="service-section__photo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={mug}
                alt="Laser engraving precision metal work close-up"
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

      {/* ── 2. Large Format Printing ── */}
      <section className="service-section service-section--alt">
        <div className="kv-container">
          <div className="service-section__grid">
            {/* Photos — left on desktop, top on mobile */}
            <div className="service-section__photos service-section__photos--order-first">
              <motion.img
                src="https://www.gflesch.com/hubfs/2020_website/images/large_format_printer.jpg"
                className="service-section__photo service-section__photo--offset"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src= {banners}
                alt="Finished large format printed banners on display"
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
                <Printer size={32} aria-hidden="true" />
              </div>
              <h2 className="service-section__title">Large Format Printing</h2>
              <div className="section-divider" />
              <p className="service-section__body">
                Bold, vibrant, and high-resolution printing at scale. Perfect
                for businesses that need maximum visual impact — from outdoor
                banners and signage to exhibition displays and vehicle wraps.
              </p>
              <h4 className="service-section__items-title">What we make:</h4>
              <ItemList items={cuttingItems} />
              <Link to="/contact" className="service-section__link">
                Start a Project <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Design ── */}
      <section className="service-section service-section--white">
        <div className="kv-container">
          <div className="service-section__grid">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="service-section__icon service-section__icon--bg-light hexagon">
                <Palette size={32} aria-hidden="true" />
              </div>
              <h2 className="service-section__title">Design and Printing</h2>
              <div className="section-divider" />
              <p className="service-section__body">
                Great brands start with great design. We craft cohesive visual
                identities from the first sketch to the final pixel that make
                businesses recognisable, trustworthy, and impossible to ignore.
              </p>
              <h4 className="service-section__items-title">What we create:</h4>
              <ItemList items={designItems} />
              <Link to="/contact" className="service-section__link">
                Start a Project <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Photos */}
            <div className="service-section__photos">
              <motion.img
                src={design}
                alt="Design process — logo being sketched on paper with a pen"
                className="service-section__photo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={design2}
                alt="Creative Power House brand identity showcase"
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

      {/* ── 4. Web Development ───────────────────────────────── */}
      <section className="service-section service-section--alt">
        <div className="kv-container">
          <div className="service-section__grid">
            {/* Photos — left on desktop */}
            <div className="service-section__photos service-section__photos--order-first">
              <motion.img
                src="https://images.squarespace-cdn.com/content/v1/5d72bfd58cd4bf332c64cacd/1613411995205-QG05WDGB1NF2AT3OCGTH/image-asset.jpeg?format=1500w"
                alt="Web developer working on a modern website UI"
                className="service-section__photo service-section__photo--offset"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src= {website}
                alt="Clean website analytics dashboard on a laptop screen"
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
                <Globe size={32} aria-hidden="true" />
              </div>
              <h2 className="service-section__title">Web Development</h2>
              <div className="section-divider" />
              <p className="service-section__body">
                Your website is your most powerful brand asset. We design and
                build fast, responsive, and visually compelling websites that
                turn visitors into customers — crafted with the same precision
                we bring to every physical product we make.
              </p>
              <h4 className="service-section__items-title">What we build:</h4>
              <ItemList items={webDevItems} />
              <Link to="/contact" className="service-section__link">
                Start a Project <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </motion.div>
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