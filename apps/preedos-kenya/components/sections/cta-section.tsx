import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get a free consultation and custom quote for your elevator or
            escalator needs. Our experts are ready to help you find the perfect
            solution.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/estimate">
              <Button
                variant="white"
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Get Free Estimate
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
