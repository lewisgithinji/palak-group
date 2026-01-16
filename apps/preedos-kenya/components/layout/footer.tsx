import Link from 'next/link'
import { SITE_CONFIG, NAVIGATION, HSFTECH_INFO } from '@/lib/constants'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-slate-900 to-secondary-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float-delayed" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.5) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Subtle elevator/escalator silhouette pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="elevatorPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect x="80" y="20" width="40" height="160" fill="currentColor" opacity="0.3" />
              <rect x="85" y="25" width="30" height="30" fill="currentColor" opacity="0.2" />
              <rect x="85" y="65" width="30" height="30" fill="currentColor" opacity="0.2" />
              <rect x="85" y="105" width="30" height="30" fill="currentColor" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elevatorPattern)" />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative h-14 w-14 transform group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Preedos Kenya Icon"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-2xl text-white group-hover:text-primary-400 transition-colors leading-none">
                    PREEDOS
                  </span>
                  <span className="font-heading font-semibold text-lg text-white group-hover:text-primary-400 transition-colors leading-none">
                    KENYA
                  </span>
                </div>
                <span className="text-sm text-primary-400 font-medium -mt-0.5 leading-none">
                  Industrial Solutions
                </span>
              </div>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              {SITE_CONFIG.tagline}. In partnership with HSFTECH, delivering
              world-class vertical transportation solutions across East Africa.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800/50 hover:bg-primary-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-primary-500/50"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800/50 hover:bg-primary-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-primary-500/50 animation-delay-100"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800/50 hover:bg-primary-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-primary-500/50 animation-delay-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800/50 hover:bg-primary-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-primary-500/50 animation-delay-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h4>
            <ul className="space-y-3">
              {NAVIGATION.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-all flex items-center gap-2 group hover:translate-x-2 duration-300"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white relative inline-block">
              Products
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h4>
            <ul className="space-y-3">
              {NAVIGATION.products.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-all flex items-center gap-2 group hover:translate-x-2 duration-300"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-secondary-300 hover:text-primary-400 transition-all duration-300 group"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span>{SITE_CONFIG.phone}</span>
                    <br />
                    <span>{SITE_CONFIG.phoneSecondary}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-secondary-300 hover:text-primary-400 transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-300">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-500" />
                <span>
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
                </span>
              </li>
              <li className="flex items-start gap-3 text-secondary-300">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-500" />
                <div>
                  <p>Mon - Fri: {SITE_CONFIG.hours.weekdays}</p>
                  <p>Sat: {SITE_CONFIG.hours.saturday}</p>
                  <p className="text-primary-400 font-medium mt-1">
                    {SITE_CONFIG.hours.emergency}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HSFTECH Partnership Banner */}
      <div className="border-t border-white/10 backdrop-blur-sm bg-white/5 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-secondary-100 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-bold text-secondary-900 text-sm">HSF</span>
              </div>
              <div>
                <p className="text-secondary-300 text-sm">
                  Official Partner of
                </p>
                <p className="font-semibold text-white">{HSFTECH_INFO.name}</p>
              </div>
            </div>
            <p className="text-secondary-400 text-sm">
              German Technology • {HSFTECH_INFO.annualCapacity.toLocaleString()}{' '}
              Units/Year • {HSFTECH_INFO.globalPresence}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-secondary-400 text-sm">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {NAVIGATION.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
