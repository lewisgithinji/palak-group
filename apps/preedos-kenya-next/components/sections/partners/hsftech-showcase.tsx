'use client'

import { HSFTECH_INFO } from '@/lib/constants'
import { Card } from '@/components/ui/card'
import {
    Factory,
    Globe2,
    Building2,
    Award,
    Users,
    Zap,
    Shield,
    Cpu,
    CheckCircle,
    ExternalLink,
} from 'lucide-react'
import Link from 'next/link'

const stats = [
    { icon: Factory, value: HSFTECH_INFO.factorySize, label: 'Factory Size' },
    { icon: Building2, value: `${HSFTECH_INFO.annualCapacity.toLocaleString()}+`, label: 'Annual Capacity' },
    { icon: Globe2, value: HSFTECH_INFO.globalPresence, label: 'Countries' },
    { icon: Award, value: HSFTECH_INFO.projectsCompleted, label: 'Projects' },
]

const capabilities = [
    {
        icon: Cpu,
        title: 'German Engineering',
        description: 'Advanced technology partnerships ensuring precision manufacturing and innovative solutions.',
    },
    {
        icon: Shield,
        title: 'Quality Assurance',
        description: 'ISO 9001 certified processes with rigorous quality control at every production stage.',
    },
    {
        icon: Zap,
        title: 'Energy Efficiency',
        description: 'Regenerative drives and energy-saving technologies reducing operational costs.',
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: 'Over 500 engineers and technicians dedicated to R&D and production excellence.',
    },
]

const certifications = ['ISO 9001:2015', 'ISO 14001', 'CE Marking', 'EN 81', 'OHSAS 18001', 'TUV']

export function HSFTECHShowcase() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Info */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            Primary Technology Partner
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                            <span className="text-primary-600">HSFTECH</span> - German Engineering Excellence
                        </h2>
                        <p className="text-secondary-600 mb-6 leading-relaxed">
                            {HSFTECH_INFO.fullName}, founded in {HSFTECH_INFO.founded}, is our exclusive
                            technology partner for East Africa. With headquarters in {HSFTECH_INFO.headquarters},
                            HSFTECH combines German engineering precision with innovative manufacturing.
                        </p>
                        <p className="text-secondary-600 mb-6 leading-relaxed">
                            Their philosophy of &quot;{HSFTECH_INFO.philosophy}&quot; drives every aspect of
                            their operation, from design to delivery, ensuring products that meet the
                            highest global standards.
                        </p>

                        {/* Key Markets */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-secondary-900 mb-3">Global Markets Served</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Southeast Asia', 'Middle East', 'Africa', 'Latin America', 'Oceania', 'Europe'].map(
                                    (market) => (
                                        <span
                                            key={market}
                                            className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                                        >
                                            {market}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        <Link
                            href="https://www.hsf-tech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                        >
                            Visit HSFTECH Website
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Stats Card */}
                    <div className="bg-secondary-900 rounded-3xl p-8 text-white relative overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <div className="text-5xl font-bold text-primary-400 mb-2">HSFTECH</div>
                                <div className="text-secondary-300">By The Numbers</div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center mx-auto mb-3">
                                            <stat.icon className="h-6 w-6" />
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-secondary-400 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="text-center text-secondary-400 text-sm mb-3">Certifications</div>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {certifications.map((cert) => (
                                        <span
                                            key={cert}
                                            className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs"
                                        >
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Capabilities */}
                <div>
                    <h3 className="text-2xl font-heading font-bold text-secondary-900 text-center mb-10">
                        Partnership Capabilities
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((cap, index) => (
                            <Card key={index} padding="lg" className="text-center hover:shadow-soft-lg transition-shadow">
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4">
                                    <cap.icon className="h-7 w-7" />
                                </div>
                                <h4 className="font-semibold text-secondary-900 mb-2">{cap.title}</h4>
                                <p className="text-secondary-600 text-sm">{cap.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
