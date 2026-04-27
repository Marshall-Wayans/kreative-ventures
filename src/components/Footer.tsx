import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import logo from '../assets/logo.png'


const quickLinks = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Packages',  path: '/packages' },
  { name: 'Reviews',   path: '/reviews' },
  { name: 'FAQ',       path: '/faq' },
  { name: 'Brand',     path: '/brand' },
]

const services = [
  'Laser Engraving',
  'Plotter Cutting',
  'Design & Printing',
  'Custom Signage',
  'Corporate Gifts',
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="kv-container">
        {/* Main grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div>


        <Link to="/" className="header__brand">
          <img src={logo} alt="Kreative Ventures Logo" className="header__logo" />
        </Link>


            <p className="footer__brand-tagline">
              Bold branding. Precision craft. Kenyan-made excellence.
            </p>
            <div className="footer__socials">
              {/* Instagram */}
              <a
                href="#"
                className="footer__social-btn"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="footer__social-btn"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                className="footer__social-btn"
                aria-label="X (Twitter)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4l16 16M4 20L20 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="footer__link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="footer__link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__links">
              <li>
                <address className="footer__contact-item" style={{ fontStyle: 'normal' }}>
                  <MapPin size={18} aria-hidden="true" />
                  <span>
                    Nairobi, Kenya
                    <br />
                    Creative District
                  </span>
                </address>
              </li>
              <li>
                <a
                  href="tel:+254 759 081 808"
                  className="footer__contact-item"
                >
                  <Phone size={18} aria-hidden="true" />
                  <span>+254 759 081 808</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@kreativeventures.co.ke"
                  className="footer__contact-item"
                >
                  <Mail size={18} aria-hidden="true" />
                  <span>hello@kreativeventures.co.ke</span>
                </a>
              </li>
            </ul>
            <Link to="/contact" className="footer__contact-cta">
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Kreative Ventures. All rights
            reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__bottom-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
