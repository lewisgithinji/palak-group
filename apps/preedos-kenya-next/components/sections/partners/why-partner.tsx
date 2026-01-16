import { CheckCircle, Star, Truck, Headphones, Shield, Award } from 'lucide-react'

const benefits = [
    {
        icon: Star,
        title: 'Premium Quality',
        description: 'Access to world-class products meeting international standards.',
    },
    {
        icon: Truck,
        title: 'Reliable Supply Chain',
        description: 'Consistent product availability with efficient logistics.',
    },
    {
        icon: Headphones,
        title: 'Technical Support',
        description: '24/7 expert technical assistance for all installations.',
    },
    {
        icon: Shield,
        title: 'Warranty Coverage',
        description: 'Comprehensive warranty backed by manufacturer guarantee.',
    },
    {
        icon: Award,
        title: 'Training Programs',
        description: 'Regular training and certification for technical teams.',
    },
    {
        icon: CheckCircle,
        title: 'Local Expertise',
        description: 'Kenyan market knowledge combined with global technology.',
    },
]

export function WhyPartner() {
    return (
        <section className="section bg-secondary-900 text-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Benefits of Our <span className="text-primary-400">Partnership</span>
                        </h2>
                        <p className="text-secondary-300 text-lg mb-8 leading-relaxed">
                            When you work with Preedos Kenya, you gain access to a powerful network
                            of global expertise backed by local knowledge and commitment to excellence.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                                        <p className="text-secondary-400 text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <div className="text-center mb-8">
                                <div className="text-6xl font-bold text-primary-400 mb-2">15+</div>
                                <div className="text-secondary-300 text-lg">Years of Partnership Excellence</div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                                    <span className="text-secondary-300">Projects Completed</span>
                                    <span className="text-white font-bold">800+</span>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                                    <span className="text-secondary-300">Client Satisfaction</span>
                                    <span className="text-white font-bold">98%</span>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                                    <span className="text-secondary-300">Response Time</span>
                                    <span className="text-white font-bold">&lt; 4 Hours</span>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                                    <span className="text-secondary-300">Uptime Guarantee</span>
                                    <span className="text-white font-bold">99.9%</span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <div className="text-secondary-400 text-sm mb-3">Trusted By Industry Leaders</div>
                                <div className="flex justify-center gap-4">
                                    {['ISO', 'CE', 'TUV', 'KEBS'].map((badge) => (
                                        <div
                                            key={badge}
                                            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs font-medium"
                                        >
                                            {badge}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
