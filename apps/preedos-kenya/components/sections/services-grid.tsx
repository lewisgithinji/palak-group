import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { SERVICES } from '@/lib/constants'
import {
  ClipboardList,
  Wrench,
  Settings,
  RefreshCw,
  Package,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  'clipboard-list': <ClipboardList className="h-8 w-8" />,
  wrench: <Wrench className="h-8 w-8" />,
  settings: <Settings className="h-8 w-8" />,
  'refresh-cw': <RefreshCw className="h-8 w-8" />,
  package: <Package className="h-8 w-8" />,
  'graduation-cap': <GraduationCap className="h-8 w-8" />,
}

export function ServicesGrid() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float-delayed" />
      </div>

      {/* Animated Escalator Background - Positioned diagonally */}
      <div className="absolute left-0 top-0 bottom-0 right-0 opacity-25 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main escalator structure running diagonally */}
          <g transform="translate(100, 100)">
            {/* Escalator base/side panels */}
            <path
              d="M50 650 L800 50 L900 80 L150 680 Z"
              fill="url(#escalatorBase)"
              opacity="0.6"
            />
            <path
              d="M50 650 L150 680 L150 700 L50 670 Z"
              fill="url(#escalatorSide)"
              opacity="0.5"
            />

            {/* Top handrail */}
            <path
              d="M100 600 Q450 325 850 50"
              stroke="url(#railGradient)"
              strokeWidth="12"
              fill="none"
              opacity="0.8"
              strokeLinecap="round"
            />

            {/* Bottom handrail */}
            <path
              d="M50 650 Q400 375 800 100"
              stroke="url(#railGradient)"
              strokeWidth="12"
              fill="none"
              opacity="0.8"
              strokeLinecap="round"
            />

            {/* Animated escalator steps */}
            <g className="animate-escalator-steps">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <g key={i}>
                  <rect
                    x={80 + i * 65}
                    y={625 - i * 50}
                    width="60"
                    height="18"
                    fill="url(#stepGradient)"
                    opacity="0.9"
                    rx="3"
                  />
                  {/* Step edge highlight */}
                  <rect
                    x={80 + i * 65}
                    y={625 - i * 50}
                    width="60"
                    height="3"
                    fill="#fbbf24"
                    opacity="0.7"
                  />
                </g>
              ))}
            </g>
          </g>

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="escalatorBase" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#334155" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="escalatorSide" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="railGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="stepGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="1" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-4 border border-primary-400/30">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Comprehensive Elevator Solutions
          </h2>
          <p className="text-lg text-slate-300">
            From consultation to maintenance, we provide end-to-end vertical
            transportation services backed by German engineering excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={service.id}
              className="group hover:border-primary-200 transition-all duration-300"
              variant="bordered"
              padding="lg"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                {iconMap[service.icon]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-secondary-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all group-hover:text-primary-700"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
