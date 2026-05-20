import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { EngraveAnimation } from '../components/EngraveAnimation'
import logo from '../assets/logo.png'
import design from '../assets/concept.png'


interface ColorSwatch {
  name: string
  hex: string
  swatchClass: string
  textClass: string
}

const colorSwatches: ColorSwatch[] = [
  { name: 'KV Black',      hex: '#1A1A1A', swatchClass: 'swatch-black',    textClass: 'white' },
  { name: 'KV Charcoal',   hex: '#2D2D2D', swatchClass: 'swatch-charcoal', textClass: 'white' },
  { name: 'KV Red',        hex: '#E8201A', swatchClass: 'swatch-red',      textClass: 'white' },
  { name: 'KV Silver',     hex: '#C0C0C0', swatchClass: 'swatch-silver',   textClass: 'dark' },
  { name: 'KV White',      hex: '#FFFFFF', swatchClass: 'swatch-white',    textClass: 'dark' },
  { name: 'KV Background', hex: '#F5F5F3', swatchClass: 'swatch-bg',       textClass: 'dark' },
  { name: 'KV Muted',      hex: '#8A8A8A', swatchClass: 'swatch-muted',    textClass: 'white' },
]

// const typeWeights = [
//   { label: 'Light',   weight: 300 },
//   { label: 'Regular', weight: 400 },
//   { label: 'Medium',  weight: 500 },
//   { label: 'Bold',    weight: 700 },
// ]

export function Brand() {
  return (
    <motion.div
      className="page brand-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="brand-page__inner">

        {/* ── Logo Reveal ─- */}
        <div className="brand-logo-reveal">
          <motion.div
            className="brand-logo-box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Link to="/" className="header__brand">
              <img
                src={logo}
                alt="Kreative Ventures Logo"
                className="header__logo"
                style={{
                  height: '120px',
                  width: 'auto',
                  objectFit: 'contain',
                  padding: '12px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                  display: 'block',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                }}
              />
            </Link>
          </motion.div>

          {/* EngraveAnimation underline — untouched */}
          <div style={{ marginTop: '2rem' }}>
            <EngraveAnimation color="#E8201A" width="300" delay={0.5} />
          </div>

          <motion.p
            className="brand-logo-reveal__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Bold branding. Precision craft. Kenyan-made excellence.
          </motion.p>
        </div>

        {/* ── Color Palette ─────────────────────────────────── */}
        <motion.div
          className="brand-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="brand-section__title">Brand Colors</h3>
          <div className="brand-colors__grid">
            {colorSwatches.map((swatch, i) => (
              <div key={i} className="brand-color-swatch">
                <div className={`brand-color-swatch__block ${swatch.swatchClass}`}>
                  <span
                    className="brand-color-swatch__hex"
                    style={{ color: swatch.textClass === 'white' ? '#fff' : '#1A1A1A' }}
                  >
                    {swatch.hex}
                  </span>
                </div>
                <span className="brand-color-swatch__name">{swatch.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Typography ──────────────────────────────────────
        <motion.div
          className="brand-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="brand-section__title">Typography</h3>
          <div className="brand-type__card">
            <div className="brand-type__big-a" aria-hidden="true">Aa</div>
            <div>
              <h4 className="brand-type__name">DM Sans</h4>
              <p className="brand-type__meta">
                Primary Typeface — Clean, Geometric, Modern
              </p>
              <div className="brand-type__samples">
                {typeWeights.map(({ label, weight }) => (
                  <p key={label} className="brand-type__sample" style={{ fontWeight: weight }}>
                    {label} — The quick brown fox
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* ── Logo Placements ── */}
<motion.div 
  className="brand-section"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h3 className="brand-section__title">Our Logo</h3>
  <div className="brand-placements__grid">
    <div className="brand-placement brand-placement--dark">
      <img 
        src={design} 
        alt="Logo on dark background" 
        className="brand-placement__logo brand-placement__logo--white"
      />
    </div>
    <div className="brand-placement brand-placement--light">
      <img 
        src={logo} 
        alt="Logo on light background" 
        className="brand-placement__logo brand-placement__logo--dark"
      />
    </div>
  </div>
</motion.div>

        {/* ── Closing ─ */}
        <motion.div
          className="brand-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="brand-closing__title">Make Your Mark.</h2>
        </motion.div>

      </div>
    </motion.div>
  )
}