'use client'

import Link from 'next/link'
import { Product } from '@/types'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { categoryDisplayNames } from '@/data'
import {
    ArrowLeft,
    CheckCircle,
    Download,
    FileText,
    Building2,
    Settings,
    Zap,
} from 'lucide-react'

interface ProductDetailProps {
    product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
    return (
        <section className="section bg-white pt-8">
            <div className="container-custom">
                {/* Back Button */}
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-secondary-600 hover:text-primary-600 mb-8 group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Hero Image */}
                        <div
                            className="aspect-video rounded-2xl bg-secondary-100 mb-8 relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${product.images[0] || '/images/products/placeholder.jpg'})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-secondary-700 rounded-full text-sm font-medium">
                                    {categoryDisplayNames[product.category]}
                                </span>
                                {product.series && (
                                    <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                                        {product.series} Series
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-2">
                                {product.name}
                            </h1>
                            {product.tagline && (
                                <p className="text-xl text-primary-600 font-medium">{product.tagline}</p>
                            )}
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none mb-10">
                            <p className="text-secondary-600 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Features */}
                        <div className="mb-10">
                            <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-primary-500" />
                                Key Features
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-primary-50 rounded-xl">
                                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-secondary-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="mb-10">
                            <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                                <Settings className="h-5 w-5 text-primary-500" />
                                Technical Specifications
                            </h3>
                            <Card>
                                <div className="divide-y divide-secondary-100">
                                    {product.specifications.map((spec, index) => (
                                        <div key={index} className="flex justify-between py-3 px-4">
                                            <span className="text-secondary-600">{spec.label}</span>
                                            <span className="font-medium text-secondary-900 text-right">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Applications */}
                        {product.applications && product.applications.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                                    <Building2 className="h-5 w-5 text-primary-500" />
                                    Ideal Applications
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((app, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg"
                                        >
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Quick Actions */}
                            <Card padding="lg">
                                <h3 className="font-semibold text-secondary-900 mb-4">Request Information</h3>
                                <div className="space-y-3">
                                    <Link href={`/contact?product=${product.slug}`}>
                                        <Button className="w-full">Get a Quote</Button>
                                    </Link>
                                    {product.brochureUrl && (
                                        <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="w-full">
                                                <Download className="h-4 w-4 mr-2" />
                                                Download Brochure
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </Card>

                            {/* Quick Specs */}
                            <Card padding="lg" className="bg-secondary-50 border-secondary-100">
                                <h3 className="font-semibold text-secondary-900 mb-4">Quick Specs</h3>
                                <div className="space-y-3">
                                    {product.specifications.slice(0, 4).map((spec, index) => (
                                        <div key={index} className="flex justify-between text-sm">
                                            <span className="text-secondary-600">{spec.label}</span>
                                            <span className="font-medium text-secondary-900">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Technical Support */}
                            <Card padding="lg" className="bg-primary-50 border-primary-100">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-6 w-6 text-primary-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-secondary-900 mb-1">Need Technical Help?</h4>
                                        <p className="text-sm text-secondary-600 mb-3">
                                            Our engineers are ready to help you select the right configuration.
                                        </p>
                                        <Link href="/contact">
                                            <Button size="sm" variant="outline">
                                                Contact Technical Team
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
