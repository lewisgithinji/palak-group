import Link from 'next/link'
import { solutions } from '@/data'
import { Card } from '@/components/ui/card'
import { ArrowRight, Home, Building2, HeartPulse, Luggage, Factory, Train, CheckCircle } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
    home: Home,
    building: Building2,
    'heart-pulse': HeartPulse,
    luggage: Luggage,
    factory: Factory,
    train: Train,
}

export function SolutionsGrid() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                        Solutions for Every Industry
                    </h2>
                    <p className="text-lg text-secondary-600">
                        From private residences to public infrastructure, we provide tailored
                        elevator and escalator solutions that meet the unique demands of each sector.
                    </p>
                </div>

                <div className="space-y-24">
                    {solutions.map((solution, index) => {
                        const Icon = iconMap[solution.icon] || Building2

                        return (
                            <div
                                key={solution.id}
                                id={solution.slug}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div
                                        className="aspect-video rounded-3xl bg-secondary-100 relative overflow-hidden"
                                        style={{
                                            backgroundImage: `url(${solution.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        {/* Overlay with icon */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-900/40" />
                                        <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                                            <Icon className="h-8 w-8 text-primary-600" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-4">
                                        {solution.title}
                                    </h3>
                                    <p className="text-secondary-600 mb-6 leading-relaxed">
                                        {solution.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                        {solution.features.slice(0, 6).map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-secondary-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Benefits */}
                                    <div className="bg-secondary-50 rounded-xl p-4 mb-6">
                                        <h4 className="font-semibold text-secondary-900 mb-2">Key Benefits</h4>
                                        <ul className="space-y-1">
                                            {solution.benefits.slice(0, 3).map((benefit, i) => (
                                                <li key={i} className="text-sm text-secondary-600 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href={`/contact?solution=${solution.slug}`}
                                        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group"
                                    >
                                        Discuss Your {solution.title.replace(' Solutions', '')} Project
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
