'use client'

import { motion } from 'framer-motion'

// Partner categories with placeholder logos
const partnerCategories = [
    {
        title: 'Technology Partners',
        description: 'Leading technology providers enabling our advanced solutions',
        partners: [
            { name: 'HSFTECH', logo: '/images/partners/hsftech-logo.png', featured: true },
            { name: 'Siemens', logo: '/images/partners/siemens-logo.png' },
            { name: 'Schneider Electric', logo: '/images/partners/schneider-logo.png' },
        ],
    },
    {
        title: 'Industry Associations',
        description: 'Professional organizations we\'re proud members of',
        partners: [
            { name: 'Kenya Engineers Board', logo: '/images/partners/keb-logo.png' },
            { name: 'KEBS', logo: '/images/partners/kebs-logo.png' },
            { name: 'NCA Kenya', logo: '/images/partners/nca-logo.png' },
        ],
    },
    {
        title: 'Projects & Clients',
        description: 'Notable organizations that trust our solutions',
        partners: [
            { name: 'Safaricom', logo: '/images/partners/client-1.png' },
            { name: 'KCB Group', logo: '/images/partners/client-2.png' },
            { name: 'Java House', logo: '/images/partners/client-3.png' },
            { name: 'Radisson Blu', logo: '/images/partners/client-4.png' },
        ],
    },
]

export function PartnerLogos() {
    return (
        <section className="section bg-secondary-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        Our Network
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                        Partners & Associations
                    </h2>
                    <p className="text-lg text-secondary-600">
                        We collaborate with industry leaders and professional organizations to deliver
                        the best solutions for our clients.
                    </p>
                </div>

                <div className="space-y-16">
                    {partnerCategories.map((category, categoryIndex) => (
                        <div key={category.title}>
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-secondary-600 text-sm">{category.description}</p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8">
                                {category.partners.map((partner, index) => (
                                    <motion.div
                                        key={partner.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`bg-white rounded-2xl p-6 flex items-center justify-center transition-all hover:shadow-soft ${partner.featured
                                                ? 'ring-2 ring-primary-200 w-48 h-32'
                                                : 'w-40 h-28'
                                            }`}
                                    >
                                        {/* Placeholder for partner logo */}
                                        <div className="text-center">
                                            <div
                                                className={`bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2 ${partner.featured ? 'w-20 h-12' : 'w-16 h-10'
                                                    }`}
                                            >
                                                <span className="text-secondary-400 text-xs font-medium">Logo</span>
                                            </div>
                                            <span
                                                className={`text-secondary-700 font-medium ${partner.featured ? 'text-sm' : 'text-xs'
                                                    }`}
                                            >
                                                {partner.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Become a Partner CTA */}
                <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 text-center border border-secondary-100">
                    <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                        Interested in Partnering With Us?
                    </h3>
                    <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                        We&apos;re always looking to collaborate with innovative companies and
                        organizations. Let&apos;s explore how we can work together.
                    </p>
                    <a
                        href="/contact?subject=partnership"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors"
                    >
                        Discuss Partnership
                    </a>
                </div>
            </div>
        </section>
    )
}
