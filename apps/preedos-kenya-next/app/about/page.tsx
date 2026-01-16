import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AboutHero } from '@/components/sections/about/about-hero'
import { CompanyStory } from '@/components/sections/about/company-story'
import { PartnershipSection } from '@/components/sections/about/partnership-section'
import { Timeline } from '@/components/sections/about/timeline'
import { TeamSection } from '@/components/sections/about/team-section'
import { Certifications } from '@/components/sections/about/certifications'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Learn about Preedos Kenya, East Africa\'s premier provider of German-engineered elevator solutions. Official HSFTECH partner bringing world-class vertical transportation technology to Kenya.',
    openGraph: {
        title: 'About Us | Preedos Kenya',
        description:
            'Official HSFTECH partner bringing German-engineered elevator solutions to East Africa.',
    },
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <AboutHero />
                <CompanyStory />
                <PartnershipSection />
                <Timeline />
                <TeamSection />
                <Certifications />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
