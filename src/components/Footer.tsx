import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-kv-black pt-20 pb-10 border-t-2 border-kv-red">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <span className="font-bold text-2xl tracking-widest text-white">
                KREATIVE VENTURES
              </span>
            </Link>
            <p className="text-kv-muted text-sm leading-relaxed">
              Bold branding. Precision craft. Kenyan-made excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-kv-silver flex items-center justify-center text-kv-silver hover:bg-kv-red hover:border-kv-red hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-kv-silver flex items-center justify-center text-kv-silver hover:bg-kv-red hover:border-kv-red hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-kv-silver flex items-center justify-center text-kv-silver hover:bg-kv-red hover:border-kv-red hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                'Home',
                'About',
                'Portfolio',
                'Packages',
                'Reviews',
                'FAQ',
                'Brand',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-kv-muted hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">
              Our Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-kv-muted hover:text-white transition-colors text-sm"
                >
                  Laser Engraving
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-kv-muted hover:text-white transition-colors text-sm"
                >
                  Plotter Cutting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-kv-muted hover:text-white transition-colors text-sm"
                >
                  Design & Printing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-kv-muted hover:text-white transition-colors text-sm"
                >
                  Custom Signage
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-kv-muted hover:text-white transition-colors text-sm"
                >
                  Corporate Gifts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-kv-silver">
                <MapPin size={18} className="text-kv-silver shrink-0 mt-0.5" />
                <span>
                  Nairobi, Kenya
                  <br />
                  Creative District
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-kv-silver">
                <Phone size={18} className="text-kv-silver shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-kv-silver">
                <Mail size={18} className="text-kv-silver shrink-0" />
                <span>hello@kreativeventures.co.ke</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-kv-red text-white rounded-md text-sm font-semibold hover:bg-kv-red-hover transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-kv-charcoal mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-kv-muted">
          <p>
            &copy; {new Date().getFullYear()} Kreative Ventures. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
