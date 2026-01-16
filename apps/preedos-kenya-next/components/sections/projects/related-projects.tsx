import Link from 'next/link'
import { projects } from '@/data'
import { MapPin, Building2 } from 'lucide-react'

interface RelatedProjectsProps {
    currentProjectId: string
    projectType: string
}

export function RelatedProjects({ currentProjectId, projectType }: RelatedProjectsProps) {
    // Get related projects (same type, excluding current)
    const relatedProjects = projects
        .filter((p) => p.type === projectType && p.id !== currentProjectId)
        .slice(0, 3)

    // If not enough related projects of same type, add featured ones
    if (relatedProjects.length < 3) {
        const additionalProjects = projects
            .filter((p) => p.id !== currentProjectId && !relatedProjects.find((r) => r.id === p.id))
            .filter((p) => p.featured)
            .slice(0, 3 - relatedProjects.length)
        relatedProjects.push(...additionalProjects)
    }

    if (relatedProjects.length === 0) return null

    const typeLabels: Record<string, string> = {
        'public-transit': 'Public Transit',
        hotel: 'Hotel',
        residential: 'Residential',
        commercial: 'Commercial',
        industrial: 'Industrial',
        educational: 'Educational',
        'mixed-use': 'Mixed Use',
    }

    return (
        <section className="section bg-secondary-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-2">
                        Related Projects
                    </h2>
                    <p className="text-secondary-600">
                        Explore more of our work in {typeLabels[projectType] || projectType}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {relatedProjects.map((project) => (
                        <Link key={project.id} href={`/projects/${project.slug}`} className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all">
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
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-primary-600 text-white rounded-full text-xs font-medium">
                                        {project.units} Units
                                    </div>
                                    <div className="absolute bottom-3 left-3 right-3 text-white">
                                        <h3 className="font-semibold mb-1">{project.title}</h3>
                                        <div className="flex items-center gap-1 text-xs text-secondary-200">
                                            <MapPin className="h-3 w-3" />
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

                <div className="text-center mt-10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                    >
                        View All Projects →
                    </Link>
                </div>
            </div>
        </section>
    )
}
