'use client'

const milestones = [
    {
        year: '2010',
        title: 'HSFTECH Founded',
        description: 'Suzhou Hansif Industrial Technology Co., Ltd established in China with German engineering standards.',
        highlight: true,
    },
    {
        year: '2015',
        title: 'Global Expansion',
        description: 'HSFTECH expands to 30+ countries, establishing presence in Asia, Middle East, and Africa.',
    },
    {
        year: '2018',
        title: 'Preedos Kenya Established',
        description: 'Official partnership formed to bring HSFTECH technology to the East African market.',
        highlight: true,
    },
    {
        year: '2019',
        title: 'First Major Project',
        description: 'Successfully completed our first major commercial installation in Nairobi.',
    },
    {
        year: '2020',
        title: 'Service Network Expansion',
        description: 'Expanded maintenance and support services across Kenya with 24/7 emergency response.',
    },
    {
        year: '2022',
        title: '50+ Installations',
        description: 'Reached milestone of 50+ successful elevator and escalator installations in East Africa.',
        highlight: true,
    },
    {
        year: '2024',
        title: 'Market Leadership',
        description: 'Recognized as a leading elevator solutions provider in Kenya with growing regional presence.',
    },
    {
        year: '2026',
        title: 'Digital Transformation',
        description: 'Launching advanced remote monitoring and predictive maintenance services.',
        highlight: true,
    },
]

export function Timeline() {
    return (
        <section className="section bg-secondary-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        Our Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                        Milestones & Achievements
                    </h2>
                    <p className="text-lg text-secondary-600">
                        From our founding to becoming East Africa&apos;s trusted elevator partner, every
                        step has been driven by our commitment to excellence.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div
                                        className={`bg-white rounded-2xl p-6 shadow-soft border ${milestone.highlight
                                                ? 'border-primary-200 ring-2 ring-primary-50'
                                                : 'border-secondary-100'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-semibold ${milestone.highlight
                                                        ? 'bg-primary-100 text-primary-700'
                                                        : 'bg-secondary-100 text-secondary-700'
                                                    }`}
                                            >
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-secondary-600 text-sm">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div
                                    className={`absolute left-1/2 transform -translate-x-1/2 hidden md:block ${milestone.highlight ? 'w-5 h-5' : 'w-3 h-3'
                                        } rounded-full ${milestone.highlight ? 'bg-primary-500' : 'bg-secondary-300'
                                        } ring-4 ring-white`}
                                />

                                {/* Empty Space */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
