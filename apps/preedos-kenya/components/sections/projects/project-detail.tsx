'use client'

import Link from 'next/link'
import { Project } from '@/types'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    ArrowLeft,
    MapPin,
    Building2,
    Calendar,
    Ruler,
    Gauge,
    Users,
    CheckCircle,
    ExternalLink,
} from 'lucide-react'

interface ProjectDetailProps {
    project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
    const typeLabels: Record<string, string> = {
        'public-transit': 'Public Transit',
        hotel: 'Hotel',
        residential: 'Residential',
        commercial: 'Commercial',
        industrial: 'Industrial',
        educational: 'Educational',
        'mixed-use': 'Mixed Use',
        logistics: 'Logistics',
        hospital: 'Healthcare',
    }

    return (
        <section className="section bg-white pt-8">
            <div className="container-custom">
                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-secondary-600 hover:text-primary-600 mb-8 group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Hero Image */}
                        <div
                            className="aspect-video rounded-2xl bg-secondary-100 mb-8 relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${project.images[0] || '/images/projects/placeholder.jpg'})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                                    {project.units} Units
                                </span>
                                <span className="px-3 py-1 bg-white/90 text-secondary-700 rounded-full text-sm font-medium">
                                    {typeLabels[project.type] || project.type}
                                </span>
                            </div>
                        </div>

                        {/* Title & Location */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-3">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-secondary-600">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary-500" />
                                    <span>{project.location}, {project.country}</span>
                                </div>
                                {project.completionYear && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-primary-500" />
                                        <span>Completed {project.completionYear}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Building2 className="h-5 w-5 text-primary-500" />
                                    <span>{project.elevatorType}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none mb-10">
                            <p className="text-secondary-600 leading-relaxed">{project.description}</p>
                        </div>

                        {/* Challenge & Solution */}
                        {(project.challenge || project.solution) && (
                            <div className="grid md:grid-cols-2 gap-6 mb-10">
                                {project.challenge && (
                                    <Card padding="lg" className="border-l-4 border-l-amber-500">
                                        <h3 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full" />
                                            The Challenge
                                        </h3>
                                        <p className="text-secondary-600 text-sm">{project.challenge}</p>
                                    </Card>
                                )}
                                {project.solution && (
                                    <Card padding="lg" className="border-l-4 border-l-green-500">
                                        <h3 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                                            Our Solution
                                        </h3>
                                        <p className="text-secondary-600 text-sm">{project.solution}</p>
                                    </Card>
                                )}
                            </div>
                        )}

                        {/* Features */}
                        {project.specifications?.features && project.specifications.features.length > 0 && (
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Key Features</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {project.specifications.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-secondary-50 rounded-xl">
                                            <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-secondary-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Image Gallery */}
                        {project.images.length > 1 && (
                            <div>
                                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Gallery</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {project.images.slice(1).map((image, index) => (
                                        <div
                                            key={index}
                                            className="aspect-square rounded-xl bg-secondary-100"
                                            style={{
                                                backgroundImage: `url(${image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Specifications Card */}
                            <Card padding="lg">
                                <h3 className="font-semibold text-secondary-900 mb-4">Specifications</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-2 border-b border-secondary-100">
                                        <span className="text-secondary-600 flex items-center gap-2">
                                            <Building2 className="h-4 w-4" />
                                            Type
                                        </span>
                                        <span className="font-medium text-secondary-900">{project.elevatorType}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-secondary-100">
                                        <span className="text-secondary-600 flex items-center gap-2">
                                            <Users className="h-4 w-4" />
                                            Units
                                        </span>
                                        <span className="font-medium text-secondary-900">{project.units}</span>
                                    </div>
                                    {project.specifications?.capacity && (
                                        <div className="flex items-center justify-between py-2 border-b border-secondary-100">
                                            <span className="text-secondary-600 flex items-center gap-2">
                                                <Users className="h-4 w-4" />
                                                Capacity
                                            </span>
                                            <span className="font-medium text-secondary-900">
                                                {project.specifications.capacity}
                                            </span>
                                        </div>
                                    )}
                                    {project.specifications?.speed && (
                                        <div className="flex items-center justify-between py-2 border-b border-secondary-100">
                                            <span className="text-secondary-600 flex items-center gap-2">
                                                <Gauge className="h-4 w-4" />
                                                Speed
                                            </span>
                                            <span className="font-medium text-secondary-900">
                                                {project.specifications.speed}
                                            </span>
                                        </div>
                                    )}
                                    {project.specifications?.travelHeight && (
                                        <div className="flex items-center justify-between py-2 border-b border-secondary-100">
                                            <span className="text-secondary-600 flex items-center gap-2">
                                                <Ruler className="h-4 w-4" />
                                                Travel
                                            </span>
                                            <span className="font-medium text-secondary-900">
                                                {project.specifications.travelHeight}
                                            </span>
                                        </div>
                                    )}
                                    {project.developer && (
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-secondary-600">Developer</span>
                                            <span className="font-medium text-secondary-900 text-right text-sm">
                                                {project.developer}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Card>

                            {/* CTA Card */}
                            <Card padding="lg" className="bg-primary-50 border-primary-100">
                                <h3 className="font-semibold text-secondary-900 mb-2">
                                    Interested in a Similar Project?
                                </h3>
                                <p className="text-secondary-600 text-sm mb-4">
                                    Let us help you achieve the same level of excellence for your project.
                                </p>
                                <Link href="/contact">
                                    <Button className="w-full">Request Consultation</Button>
                                </Link>
                            </Card>

                            {/* Share */}
                            <Card padding="md">
                                <div className="text-center">
                                    <span className="text-secondary-500 text-sm">Share this project</span>
                                    <div className="flex justify-center gap-3 mt-2">
                                        {['LinkedIn', 'Twitter', 'Email'].map((platform) => (
                                            <button
                                                key={platform}
                                                className="px-3 py-1.5 bg-secondary-100 text-secondary-600 rounded-lg text-sm hover:bg-secondary-200 transition-colors"
                                            >
                                                {platform}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
