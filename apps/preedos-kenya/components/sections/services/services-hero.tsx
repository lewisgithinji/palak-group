import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ServicesHero() {
    return (
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/images/services-hero.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-secondary-900/70" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-6 border border-white/20">
                        Complete Elevator Solutions
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        Our <span className="text-primary-400">Services</span>
                    </h1>

                    <p className="text-xl text-secondary-200 mb-8 leading-relaxed">
                        From initial consultation to ongoing maintenance, we provide comprehensive
                        elevator and escalator services backed by German engineering excellence.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                                Request Quote
                            </Button>
                        </Link>
                        <Link href="/estimate">
                            <Button variant="white" size="lg">
                                Get Free Estimate
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
