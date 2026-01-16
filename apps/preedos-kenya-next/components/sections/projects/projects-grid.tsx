'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { projects, getProjectTypes, getProjectCountries } from '@/data'
import { cn } from '@/lib/utils'
import { MapPin, Building2, Search } from 'lucide-react'

export function ProjectsGrid() {
    const [activeType, setActiveType] = useState('all')
    const [activeCountry, setActiveCountry] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const projectTypes = useMemo(() => getProjectTypes(), [])
    const countries = useMemo(() => getProjectCountries(), [])

    const typeLabels: Record<string, string> = {
        'public-transit': 'Public Transit',
        hotel: 'Hotels',
        residential: 'Residential',
        commercial: 'Commercial',
        industrial: 'Industrial',
        educational: 'Educational',
        'mixed-use': 'Mixed Use',
        logistics: 'Logistics',
        hospital: 'Healthcare',
    }

    const filteredProjects = useMemo(() => {
        return projects.filter((p) => {
            const matchesType = activeType === 'all' || p.type === activeType
            const matchesCountry = activeCountry === 'all' || p.country === activeCountry
            const matchesSearch =
                searchQuery === '' ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesType && matchesCountry && matchesSearch
        })
    }, [activeType, activeCountry, searchQuery])

    return (
        <section className="section bg-white">
            <div className="container-custom">
                {/* Filters */}
                <div className="mb-12">
                    {/* Search */}
                    <div className="relative max-w-md mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                        />
                    </div>

                    {/* Type Filters */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button
                            onClick={() => setActiveType('all')}
                            className={cn(
                                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                                activeType === 'all'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                            )}
                        >
                            All Types
                        </button>
                        {projectTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveType(type)}
                                className={cn(
                                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                                    activeType === type
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                                )}
                            >
                                {typeLabels[type] || type}
                            </button>
                        ))}
                    </div>

                    {/* Country Filter */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-secondary-600">Filter by country:</span>
                        <select
                            value={activeCountry}
                            onChange={(e) => setActiveCountry(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-secondary-200 text-sm focus:outline-none focus:border-primary-500"
                        >
                            <option value="all">All Countries</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                        <span className="text-sm text-secondary-500">
                            {filteredProjects.length} projects found
                        </span>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-secondary-100">
                                {/* Image */}
                                <div className="aspect-video relative overflow-hidden bg-secondary-100">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${project.images[0] || '/images/projects/placeholder.jpg'})`,
                                            backgroundColor: '#E2E8F0',
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent" />

                                    {/* Units Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                                        {project.units} Units
                                    </div>

                                    {/* Type Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-secondary-700 rounded-full text-xs font-medium">
                                        {typeLabels[project.type] || project.type}
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
                                    <div className="flex items-center gap-2 text-sm text-secondary-600 mb-2">
                                        <Building2 className="h-4 w-4" />
                                        {project.elevatorType}
                                    </div>
                                    <p className="text-sm text-secondary-500 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-secondary-500 text-lg">
                            No projects found matching your criteria.
                        </p>
                        <button
                            onClick={() => {
                                setActiveType('all')
                                setActiveCountry('all')
                                setSearchQuery('')
                            }}
                            className="mt-4 text-primary-600 font-medium hover:text-primary-700"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
