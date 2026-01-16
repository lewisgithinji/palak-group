import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PartnersHero } from '@/components/sections/partners/partners-hero'
import { HSFTECHShowcase } from '@/components/sections/partners/hsftech-showcase'
import { PartnerLogos } from '@/components/sections/partners/partner-logos'
import { WhyPartner } from '@/components/sections/partners/why-partner'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
    title: 'Our Partners',
    description:
        'Learn about our strategic partnership with HSFTECH, a global elevator manufacturing leader with German engineering excellence. Trusted by industry leaders worldwide.',
    openGraph: {
        title: 'Our Partners | Preedos Kenya',
        description:
            'Official HSFTECH partner bringing German-engineered elevator solutions to East Africa.',
    },
}

export default function PartnersPage() {
    return (
        <>
            <Header />
            <main>
                <PartnersHero />
                <HSFTECHShowcase />
                <PartnerLogos />
                <WhyPartner />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
