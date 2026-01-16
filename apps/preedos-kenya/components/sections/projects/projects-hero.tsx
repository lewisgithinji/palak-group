import { projectStats } from '@/data'

export function ProjectsHero() {
    return (
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/images/projects-hero.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-secondary-900/70" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-6 border border-white/20">
                        Our Portfolio
                    </span>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Featured <span className="text-primary-400">Projects</span>
                    </h1>

                    <p className="text-xl text-secondary-200 mb-8 leading-relaxed">
                        Discover our global portfolio of successful elevator and escalator
                        installations, showcasing German engineering excellence across diverse industries.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8">
                        <div>
                            <div className="text-3xl font-bold text-white">{projectStats.totalUnits.toLocaleString()}+</div>
                            <div className="text-secondary-300 text-sm">Units Installed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">{projectStats.countries}</div>
                            <div className="text-secondary-300 text-sm">Countries</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">{projectStats.totalInternational + projectStats.totalDomestic}</div>
                            <div className="text-secondary-300 text-sm">Projects Documented</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
