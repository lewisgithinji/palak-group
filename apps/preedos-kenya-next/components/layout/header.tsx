'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants'
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Clock,
  MessageCircle,
} from 'lucide-react'

// Product and Solution submenus
const SUB_MENUS = {
  Products: [
    { label: 'Passenger Elevators', href: '/products#passenger' },
    { label: 'Freight Elevators', href: '/products#freight' },
    { label: 'Hospital Elevators', href: '/products#hospital' },
    { label: 'Panoramic Elevators', href: '/products#panoramic' },
    { label: 'Home Elevators', href: '/products#home' },
    { label: 'Escalators', href: '/products#escalators' },
    { label: 'Moving Walks', href: '/products#moving-walks' },
  ],
  Solutions: [
    { label: 'Residential', href: '/solutions#residential' },
    { label: 'Commercial', href: '/solutions#commercial' },
    { label: 'Healthcare', href: '/solutions#healthcare' },
    { label: 'Hospitality', href: '/solutions#hospitality' },
    { label: 'Industrial', href: '/solutions#industrial' },
    { label: 'Public Transit', href: '/solutions#public-transit' },
  ],
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
  }

  const hasSubmenu = (label: string) => label in SUB_MENUS

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary-900 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-secondary-300">
              <Clock className="h-4 w-4" />
              <span>24/7 Emergency Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : 'bg-white'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative h-12 w-12 transition-transform group-hover:scale-105 duration-300 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Preedos Kenya Icon"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-xl text-secondary-900 group-hover:text-primary-600 transition-colors leading-none">
                    PREEDOS
                  </span>
                  <span className="font-heading font-semibold text-base text-secondary-900 group-hover:text-primary-600 transition-colors leading-none">
                    KENYA
                  </span>
                </div>
                <span className="text-xs text-primary-600 font-medium -mt-0.5 leading-none">
                  Industrial Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAVIGATION.main.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasSubmenu(item.label) && setOpenDesktopSubmenu(item.label)}
                  onMouseLeave={() => setOpenDesktopSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors relative group flex items-center gap-1"
                  >
                    {item.label}
                    {hasSubmenu(item.label) && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {hasSubmenu(item.label) && openDesktopSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-secondary-100 overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {SUB_MENUS[item.label as keyof typeof SUB_MENUS]?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/estimate">
                <Button variant="outline" size="sm">
                  Get Estimate
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm">Contact Us</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 lg:hidden bg-secondary-900/60 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-secondary-100">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 flex-shrink-0">
                      <img
                        src="/images/logo.png"
                        alt="Preedos Kenya Icon"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-heading font-bold text-base text-secondary-900 leading-none">PREEDOS</span>
                        <span className="font-heading font-semibold text-sm text-secondary-900 leading-none">KENYA</span>
                      </div>
                      <span className="text-xs text-primary-600 font-medium -mt-0.5 leading-none">Industrial Solutions</span>
                    </div>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-secondary-500 hover:text-secondary-700 rounded-lg hover:bg-secondary-100"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-1">
                    {NAVIGATION.main.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {hasSubmenu(item.label) ? (
                          <div>
                            <button
                              onClick={() =>
                                setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                              }
                              className="w-full flex items-center justify-between px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={cn(
                                  'h-5 w-5 transition-transform duration-200',
                                  openSubmenu === item.label && 'rotate-180'
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {openSubmenu === item.label && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  {SUB_MENUS[item.label as keyof typeof SUB_MENUS]?.map(
                                    (subItem) => (
                                      <li key={subItem.href}>
                                        <Link
                                          href={subItem.href}
                                          className="flex items-center gap-2 px-8 py-2.5 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                          onClick={closeMobileMenu}
                                        >
                                          <ChevronRight className="h-4 w-4" />
                                          {subItem.label}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Contact Info */}
                <div className="p-4 border-t border-secondary-100 bg-secondary-50">
                  <div className="space-y-3 mb-4">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center gap-3 text-secondary-600 hover:text-primary-600"
                    >
                      <Phone className="h-5 w-5" />
                      <span>{SITE_CONFIG.phone}</span>
                    </a>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-secondary-600 hover:text-primary-600"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-3 text-secondary-600 hover:text-primary-600"
                    >
                      <Mail className="h-5 w-5" />
                      <span>{SITE_CONFIG.email}</span>
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/estimate" onClick={closeMobileMenu}>
                      <Button variant="outline" size="sm" className="w-full">
                        Get Estimate
                      </Button>
                    </Link>
                    <Link href="/contact" onClick={closeMobileMenu}>
                      <Button size="sm" className="w-full">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
