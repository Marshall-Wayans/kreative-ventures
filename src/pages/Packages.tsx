import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react'

interface Package {
  name: string
  target: string
  price: string
  features: string[]
  highlight: boolean
}

const packages: Package[] = [
  {
    name: 'Starter Brand',
    target: 'For new businesses',
    price: 'From $499',
    features: [
      'Logo Origination',
      'Business Card Design & Print (500)',
      'Letterhead Design',
      '1x Custom Engraved Desk Sign',
    ],
    highlight: false,
  },
  {
    name: 'Professional Edge',
    target: 'For growing companies',
    price: 'From $1,299',
    features: [
      'Everything in Starter',
      '2x Roll-up Banners',
      '10x Custom Branded Mugs',
      '5x Premium Engraved Pens',
      'Basic Vehicle Decals',
    ],
    highlight: true,
  },
  {
    name: 'Corporate Premium',
    target: 'For established brands',
    price: 'Custom Quote',
    features: [
      'Full Brand Identity Overhaul',
      'Premium Office Signage',
      'Executive Gift Sets (Engraved)',
      'Full Fleet Branding',
      'Priority Production Queue',
    ],
    highlight: false,
  },
]

export function Packages() {
  return (
    <motion.div
      className="page packages-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="packages-header">
        <div className="packages-header__inner">
          <motion.h1
            className="packages-header__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Pricing Packages
          </motion.h1>
          <div className="page-hero__divider" style={{ margin: '0 auto 2rem' }} />
          <motion.p
            className="packages-header__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Curated bundles to help you choose quickly, with the flexibility to
            customize.
          </motion.p>
        </div>
      </section>

      {/* ── Packages Grid ────────────────────────────────────── */}
      <section className="packages-grid-section">
        <div className="kv-container">
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`package-card${pkg.highlight ? ' package-card--highlight' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {pkg.highlight && (
                  <div className="package-card__badge" aria-label="Most Popular">
                    <Zap size={14} aria-hidden="true" /> Most Popular
                  </div>
                )}

                <div className="package-card__header">
                  <h3 className="package-card__name">{pkg.name}</h3>
                  <p className="package-card__target">{pkg.target}</p>
                </div>

                <p className="package-card__price">{pkg.price}</p>

                <ul className="package-card__features">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="package-card__feature">
                      <CheckCircle2 size={20} aria-hidden="true" />
                      <span className="package-card__feature-text">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`package-card__cta${pkg.highlight ? ' package-card__cta--highlight' : ' package-card__cta--default'}`}
                >
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Quote CTA ─────────────────────────────────── */}
      <section className="packages-custom">
        <div className="packages-custom__inner">
          <h2 className="packages-custom__title">Need something unique?</h2>
          <p className="packages-custom__subtitle">
            We understand that every business is different. Contact us for a
            custom quote tailored exactly to your specific requirements.
          </p>
          <Link to="/contact" className="packages-custom__cta">
            Request Custom Quote <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
