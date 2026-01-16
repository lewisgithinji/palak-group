import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProductsHero } from '@/components/sections/products/products-hero'
import { ProductsCatalog } from '@/components/sections/products/products-catalog'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
    title: 'Products',
    description:
        'Browse our complete range of HSFTECH elevators, escalators, and moving walks. Premium German-engineered vertical transportation solutions for every application.',
    openGraph: {
        title: 'Products | Preedos Kenya',
        description:
            'German-engineered elevators, escalators, and moving walks from HSFTECH.',
    },
}

export default function ProductsPage() {
    return (
        <>
            <Header />
            <main>
                <ProductsHero />
                <ProductsCatalog />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
