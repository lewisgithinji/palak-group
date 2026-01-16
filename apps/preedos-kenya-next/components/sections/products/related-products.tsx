import Link from 'next/link'
import { products, categoryDisplayNames } from '@/data'
import { ProductCategory } from '@/types'
import { ArrowRight } from 'lucide-react'

interface RelatedProductsProps {
    currentProductId: string
    category: ProductCategory
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
    // Get related products (same category, excluding current)
    const relatedProducts = products
        .filter((p) => p.category === category && p.id !== currentProductId)
        .slice(0, 3)

    // If not enough related products, add from other categories
    if (relatedProducts.length < 3) {
        const additionalProducts = products
            .filter((p) => p.id !== currentProductId && !relatedProducts.find((r) => r.id === p.id))
            .slice(0, 3 - relatedProducts.length)
        relatedProducts.push(...additionalProducts)
    }

    if (relatedProducts.length === 0) return null

    return (
        <section className="section bg-secondary-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-2">
                        Related Products
                    </h2>
                    <p className="text-secondary-600">
                        Explore more from {categoryDisplayNames[category]}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {relatedProducts.map((product) => (
                        <Link key={product.id} href={`/products/${product.slug}`} className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all">
                                {/* Image */}
                                <div className="aspect-[4/3] relative overflow-hidden bg-secondary-100">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${product.images[0] || '/images/products/placeholder.jpg'})`,
                                            backgroundColor: '#E2E8F0',
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />

                                    {product.series && (
                                        <div className="absolute top-3 right-3 px-2 py-1 bg-primary-600 text-white rounded-full text-xs font-medium">
                                            {product.series} Series
                                        </div>
                                    )}

                                    <div className="absolute bottom-3 left-3 right-3 text-white">
                                        <h3 className="font-semibold mb-1">{product.name}</h3>
                                        {product.tagline && (
                                            <p className="text-xs text-secondary-200">{product.tagline}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-secondary-600">
                                            {categoryDisplayNames[product.category]}
                                        </span>
                                        <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                            View <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                    >
                        View All Products →
                    </Link>
                </div>
            </div>
        </section>
    )
}
