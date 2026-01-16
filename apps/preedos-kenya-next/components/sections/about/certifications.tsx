import { Shield, Award, FileCheck, BadgeCheck } from 'lucide-react'

const certifications = [
    {
        icon: Shield,
        title: 'ISO 9001:2015',
        description: 'Quality Management System',
        details: 'Certified quality processes ensuring consistent product excellence.',
    },
    {
        icon: FileCheck,
        title: 'ISO 14001',
        description: 'Environmental Management',
        details: 'Commitment to sustainable manufacturing practices.',
    },
    {
        icon: Award,
        title: 'CE Marking',
        description: 'European Conformity',
        details: 'Compliance with EU safety, health, and environmental standards.',
    },
    {
        icon: BadgeCheck,
        title: 'EN 81',
        description: 'European Elevator Standard',
        details: 'Full compliance with European elevator safety requirements.',
    },
]

export function Certifications() {
    return (
        <section className="section bg-secondary-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        Quality Assurance
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                        Certifications & Standards
                    </h2>
                    <p className="text-lg text-secondary-600">
                        Our products and processes meet the highest international standards for
                        quality, safety, and environmental responsibility.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center border border-secondary-100 hover:border-primary-200 hover:shadow-soft transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                                <cert.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-secondary-900 mb-1">{cert.title}</h3>
                            <p className="text-primary-600 text-sm font-medium mb-2">{cert.description}</p>
                            <p className="text-secondary-500 text-sm">{cert.details}</p>
                        </div>
                    ))}
                </div>

                {/* Trust Bar */}
                <div className="mt-16 bg-white rounded-2xl p-8 border border-secondary-100">
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-semibold text-secondary-900">
                            Trusted by Leading Organizations
                        </h3>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
                        {/* Placeholder for partner logos */}
                        {['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'].map((client, i) => (
                            <div
                                key={i}
                                className="w-32 h-12 bg-secondary-100 rounded flex items-center justify-center text-secondary-400 text-sm"
                            >
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
