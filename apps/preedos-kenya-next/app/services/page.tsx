import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ServicesHero } from '@/components/sections/services/services-hero'
import { ServicesDetail } from '@/components/sections/services/services-detail'
import { ServiceProcess } from '@/components/sections/services/service-process'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
    title: 'Our Services',
    description:
        'Comprehensive elevator and escalator services including consultation, installation, maintenance, modernization, parts supply, and training. 24/7 support across Kenya.',
    openGraph: {
        title: 'Our Services | Preedos Kenya',
        description:
            'Complete elevator solutions from design to maintenance with German engineering standards.',
    },
}

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <ServicesHero />
                <ServicesDetail />
                <ServiceProcess />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
