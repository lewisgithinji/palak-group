'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, MapPin, Building2 } from 'lucide-react'
import { featuredProjects } from '@/data'

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Projects' },
  { value: 'public-transit', label: 'Public Transit' },
  { value: 'hotel', label: 'Hotels' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
]

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? featuredProjects.slice(0, 4)
      : featuredProjects.filter((p) => p.type === activeFilter).slice(0, 4)

  return (
    <section className="section bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-2">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary-600 max-w-xl">
              Discover our global portfolio of successful elevator and escalator
              installations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeFilter === option.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-600 hover:bg-secondary-100'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300">
                {/* Image */}
                <div className="aspect-project relative overflow-hidden bg-secondary-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${project.images[0] || '/images/projects/placeholder.jpg'})`,
                      backgroundColor: '#E2E8F0',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Units Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                    {project.units} Units
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)' }}>
                    <h3 className="font-bold text-lg mb-1 text-white">{project.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-white/90">
                      <MapPin className="h-4 w-4" />
                      {project.location}, {project.country}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-secondary-600">
                    <Building2 className="h-4 w-4" />
                    {project.elevatorType}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline" rightIcon={<ArrowRight className="h-5 w-5" />}>
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
