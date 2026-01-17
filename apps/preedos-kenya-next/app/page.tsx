import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { StatsCounter } from '@/components/sections/stats-counter'
import { ServicesGrid } from '@/components/sections/services-grid'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Partnership } from '@/components/sections/partnership'
import { CTASection } from '@/components/sections/cta-section'
import {
  LocalBusinessSchema,
  OrganizationSchema,
} from '@/components/structured-data'

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <ServicesGrid />
        <FeaturedProjects />
        <Partnership />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
