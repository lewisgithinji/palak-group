'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'

export function Hero() {
  const highlights = [
    'German Engineering Standards',
    '12,000+ Units Annually',
    '50+ Countries Worldwide',
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-elevator.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/80 to-secondary-900/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span>Official HSFTECH Partner in East Africa</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)' }}>
              German Engineering{' '}
              <span className="text-primary-400" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Excellence</span> in East Africa
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-secondary-200 mb-8 max-w-xl leading-relaxed">
              World-class elevator and escalator solutions powered by HSFTECH
              German technology. Elevating buildings and experiences across Kenya
              and beyond.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-secondary-200"
                >
                  <CheckCircle className="h-5 w-5 text-primary-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/estimate">
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Get Free Estimate
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="white" size="lg">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <StatItem value="12,000+" label="Units Capacity" sublabel="Per Year" />
                <StatItem value="50+" label="Countries" sublabel="Global Reach" />
                <StatItem value="800+" label="Projects" sublabel="Completed" />
                <StatItem value="24/7" label="Support" sublabel="Emergency Service" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function StatItem({
  value,
  label,
  sublabel,
}: {
  value: string
  label: string
  sublabel: string
}) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-primary-400 font-medium">{label}</div>
      <div className="text-secondary-300 text-sm">{sublabel}</div>
    </div>
  )
}
