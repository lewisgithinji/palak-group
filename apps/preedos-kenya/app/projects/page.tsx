import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProjectsHero } from '@/components/sections/projects/projects-hero'
import { ProjectsGrid } from '@/components/sections/projects/projects-grid'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
    title: 'Our Projects',
    description:
        'Explore our portfolio of successful elevator and escalator installations across the globe. From metro systems to luxury hotels, see German engineering in action.',
    openGraph: {
        title: 'Our Projects | Preedos Kenya',
        description: '800+ successful projects worldwide featuring HSFTECH technology.',
    },
}

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <main>
                <ProjectsHero />
                <ProjectsGrid />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
