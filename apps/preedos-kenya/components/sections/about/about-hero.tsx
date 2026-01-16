import { CheckCircle } from 'lucide-react'

export function AboutHero() {
    return (
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/images/about-hero.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-secondary-900/70" />
            </div>

            {/* Decorative */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20 text-white">
                        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                        <span>Official HSFTECH Partner</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        About <span className="text-primary-400">Preedos Kenya</span>
                    </h1>

                    <p className="text-xl text-secondary-200 mb-8 leading-relaxed">
                        East Africa&apos;s premier provider of German-engineered elevator and escalator
                        solutions. We bring world-class vertical transportation technology to Kenya
                        through our exclusive partnership with HSFTECH.
                    </p>

                    {/* Key Points */}
                    <div className="flex flex-wrap gap-6">
                        {['German Engineering Standards', 'Local Expertise', '24/7 Support'].map(
                            (item, index) => (
                                <div key={index} className="flex items-center gap-2 text-secondary-200">
                                    <CheckCircle className="h-5 w-5 text-primary-400" />
                                    <span>{item}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
