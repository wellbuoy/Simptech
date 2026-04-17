import { motion } from 'framer-motion'
import { scrollToSection } from '@/lib/utils'
import { Facebook, Instagram, ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'IT Support', href: 'services' },
    { label: 'Networking', href: 'services' },
    { label: 'Camera Installation', href: 'services' },
    { label: 'Hardware Repair', href: 'services' },
  ],
  company: [
    { label: 'About Us', href: 'about' },
    { label: 'Our Projects', href: 'projects' },
    { label: 'Why Choose Us', href: 'why-us' },
    { label: 'Contact', href: 'contact' },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="relative w-10 h-10">
                <img
                  src="/logo.png"
                  alt="Simplified Tech Logo"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Simplified <span className="text-cyan-400">Tech</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Professional IT solutions for businesses and individuals.
              From web development to hardware repair, we\'ve got you covered.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1Cn6jBfbkp/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/simplified_technology_?igsh=MTljNmRnam10NG42MA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Simplified Tech. All rights reserved.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
