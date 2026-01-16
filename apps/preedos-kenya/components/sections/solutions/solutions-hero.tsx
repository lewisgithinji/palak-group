export function SolutionsHero() {
    return (
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/images/solutions-hero.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-secondary-900/70" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-6 border border-white/20">
                        Tailored Solutions
                    </span>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Industry <span className="text-primary-400">Solutions</span>
                    </h1>

                    <p className="text-xl text-secondary-200 leading-relaxed">
                        Every industry has unique vertical transportation needs. Our solutions are
                        designed to address specific challenges and requirements across residential,
                        commercial, healthcare, hospitality, industrial, and public transit sectors.
                    </p>
                </div>
            </div>
        </section>
    )
}
