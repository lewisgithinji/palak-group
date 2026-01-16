import { Package } from 'lucide-react'
import { products } from '@/data'

export function ProductsHero() {
    const totalProducts = products.length
    const categories = new Set(products.map((p) => p.category)).size

    return (
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/images/products-hero.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/85 to-secondary-900/70" />
            </div>

            {/* Decorative */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20 text-white">
                        <Package className="h-5 w-5 text-primary-400" />
                        <span>HSFTECH Product Range</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Our <span className="text-primary-400">Products</span>
                    </h1>

                    <p className="text-xl text-secondary-200 leading-relaxed mb-8">
                        Explore our comprehensive range of German-engineered elevators,
                        escalators, and moving walks. Every product combines cutting-edge
                        technology with unmatched reliability.
                    </p>

                    <div className="flex gap-8">
                        <div>
                            <div className="text-3xl font-bold text-white">{totalProducts}+</div>
                            <div className="text-secondary-300 text-sm">Products</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">{categories}</div>
                            <div className="text-secondary-300 text-sm">Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">ISO</div>
                            <div className="text-secondary-300 text-sm">Certified</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
