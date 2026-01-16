'use client'

import { useEffect, useState, useRef } from 'react'
import { STATS } from '@/lib/constants'

export function StatsCounter() {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <CounterItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterItem({
  value,
  suffix,
  label,
  description,
  delay,
}: {
  value: number
  suffix: string
  label: string
  description: string
  delay: number
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      const stepDuration = duration / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        if (currentStep >= steps) {
          setCount(value)
          clearInterval(timer)
        } else {
          // Easing function for smooth animation
          const progress = currentStep / steps
          const easeOut = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(value * easeOut))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, value, delay])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-secondary-900 mb-2">
        {count.toLocaleString()}
        <span className="text-primary-600">{suffix}</span>
      </div>
      <div className="text-lg font-semibold text-secondary-800 mb-1">{label}</div>
      <div className="text-sm text-secondary-500">{description}</div>
    </div>
  )
}
