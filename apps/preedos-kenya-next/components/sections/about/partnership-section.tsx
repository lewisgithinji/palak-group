import { HSFTECH_INFO } from '@/lib/constants'
import { Building2, Globe2, Factory, Award } from 'lucide-react'

const stats = [
    {
        icon: Factory,
        value: HSFTECH_INFO.factorySize,
        label: 'Factory Size',
        description: 'State-of-the-art production facility',
    },
    {
        icon: Building2,
        value: `${HSFTECH_INFO.annualCapacity.toLocaleString()}+`,
        label: 'Units Annually',
        description: 'Production capacity',
    },
    {
        icon: Globe2,
        value: HSFTECH_INFO.globalPresence,
        label: 'Countries',
        description: 'Global market presence',
    },
    {
        icon: Award,
        value: HSFTECH_INFO.projectsCompleted,
        label: 'Projects',
        description: 'Successfully completed',
    },
]

export function PartnershipSection() {
    return (
        <section className="section bg-secondary-900 text-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4">
                            Our Partnership
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Powered by <span className="text-primary-400">HSFTECH</span> German Technology
                        </h2>
                        <p className="text-secondary-300 text-lg mb-8 leading-relaxed">
                            {HSFTECH_INFO.fullName}, founded in {HSFTECH_INFO.founded}, is a global leader
                            in elevator and escalator manufacturing. Their philosophy of &quot;{HSFTECH_INFO.philosophy}&quot;
                            drives innovation and quality in every product.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center flex-shrink-0">
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-primary-400 font-medium text-sm">{stat.label}</div>
                                        <div className="text-secondary-400 text-xs">{stat.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <div className="text-center mb-8">
                                <div className="text-4xl font-bold text-primary-400 mb-2">HSFTECH</div>
                                <div className="text-secondary-300">German Engineering Excellence</div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-xl p-4">
                                    <div className="text-sm text-secondary-400 mb-1">Headquarters</div>
                                    <div className="text-white">{HSFTECH_INFO.headquarters}</div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <div className="text-sm text-secondary-400 mb-1">Markets Served</div>
                                    <div className="text-white text-sm">
                                        Southeast Asia, Middle East, Africa, New Zealand, Australia, Latin America
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <div className="text-sm text-secondary-400 mb-1">Certifications</div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['ISO 9001', 'ISO 14001', 'CE', 'EN 81'].map((cert) => (
                                            <span
                                                key={cert}
                                                className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs"
                                            >
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
