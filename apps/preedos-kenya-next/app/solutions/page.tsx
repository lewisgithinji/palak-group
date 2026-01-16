import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SolutionsHero } from '@/components/sections/solutions/solutions-hero'
import { SolutionsGrid } from '@/components/sections/solutions/solutions-grid'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
    title: 'Industry Solutions',
    description:
        'Elevator and escalator solutions tailored for residential, commercial, healthcare, hospitality, industrial, and public transit applications.',
    openGraph: {
        title: 'Industry Solutions | Preedos Kenya',
        description: 'Tailored vertical transportation solutions for every industry.',
    },
}

export default function SolutionsPage() {
    return (
        <>
            <Header />
            <main>
                <SolutionsHero />
                <SolutionsGrid />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
