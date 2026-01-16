'use client'

import { SERVICES } from '@/lib/constants'
import { Card } from '@/components/ui/card'
import {
    ClipboardList,
    Wrench,
    Settings,
    RefreshCw,
    Package,
    GraduationCap,
    CheckCircle,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
    'clipboard-list': <ClipboardList className="h-8 w-8" />,
    wrench: <Wrench className="h-8 w-8" />,
    settings: <Settings className="h-8 w-8" />,
    'refresh-cw': <RefreshCw className="h-8 w-8" />,
    package: <Package className="h-8 w-8" />,
    'graduation-cap': <GraduationCap className="h-8 w-8" />,
}

const detailedServices = [
    {
        ...SERVICES[0],
        longDescription:
            'Our expert engineers work with you from the initial concept through to detailed design. We conduct thorough site assessments, traffic analysis, and provide custom engineering solutions that meet both your functional needs and regulatory requirements.',
        benefits: [
            'Free initial site assessment',
            'Traffic flow analysis and optimization',
            'Custom engineering solutions',
            'Regulatory compliance assurance',
            'Detailed project planning',
            'Budget estimation and options',
        ],
    },
    {
        ...SERVICES[1],
        longDescription:
            'Our certified installation teams follow German engineering standards to ensure every elevator and escalator is installed to perfection. We manage the entire process, from civil works coordination to final commissioning.',
        benefits: [
            'Certified installation technicians',
            'Full project management',
            'Safety protocol adherence',
            'Quality assurance at every step',
            'Coordination with contractors',
            'Comprehensive handover and training',
        ],
    },
    {
        ...SERVICES[2],
        longDescription:
            'Keep your vertical transportation systems running at peak performance with our comprehensive maintenance programs. Our 24/7 emergency response ensures minimal downtime when you need it most.',
        benefits: [
            'Preventive maintenance programs',
            '24/7 emergency response',
            'Remote monitoring capabilities',
            'Genuine spare parts',
            'Certified service technicians',
            'Performance optimization',
        ],
    },
    {
        ...SERVICES[3],
        longDescription:
            'Breathe new life into aging elevator systems with our modernization services. We upgrade everything from control systems to cabin aesthetics, improving safety, efficiency, and user experience.',
        benefits: [
            'Complete system assessment',
            'Control system upgrades',
            'Door operator replacement',
            'Cabin interior renovation',
            'Energy efficiency improvements',
            'Safety enhancement packages',
        ],
    },
    {
        ...SERVICES[4],
        longDescription:
            'Access genuine HSFTECH parts and components for all your elevator and escalator systems. Our extensive inventory and fast delivery ensure your equipment stays operational.',
        benefits: [
            'Genuine HSFTECH parts',
            'Fast delivery across Kenya',
            'Technical support included',
            'Warranty coverage',
            'Inventory management',
            'Emergency parts availability',
        ],
    },
    {
        ...SERVICES[5],
        longDescription:
            'Empower your team with comprehensive training programs. From basic operation to advanced maintenance, we provide the knowledge needed to safely operate and maintain elevator systems.',
        benefits: [
            'Operator training programs',
            'Maintenance certification',
            'Safety procedure training',
            'Building manager education',
            'Emergency response training',
            'Ongoing skill development',
        ],
    },
]

export function ServicesDetail() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                        Comprehensive Elevator Solutions
                    </h2>
                    <p className="text-lg text-secondary-600">
                        From consultation to ongoing support, we provide end-to-end services for all
                        your vertical transportation needs.
                    </p>
                </div>

                <div className="space-y-16">
                    {detailedServices.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                                        {iconMap[service.icon]}
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-secondary-900">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-secondary-600 mb-6 leading-relaxed">
                                    {service.longDescription}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-secondary-700 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div
                                    className="aspect-video rounded-2xl bg-secondary-100"
                                    style={{
                                        backgroundImage: `url(/images/services/${service.id}.jpg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
