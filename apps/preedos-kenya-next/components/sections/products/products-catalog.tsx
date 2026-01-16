'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { products, getProductCategories, categoryDisplayNames, categoryDescriptions } from '@/data'
import { ProductCategory } from '@/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    Building2,
    Truck,
    Heart,
    Eye,
    Home,
    ArrowUpDown,
    MoveHorizontal,
    Wrench,
    ChevronRight,
    ArrowRight,
} from 'lucide-react'

const categoryIcons: Record<ProductCategory, React.ComponentType<{ className?: string }>> = {
    'passenger-elevators': Building2,
    'freight-elevators': Truck,
    'hospital-elevators': Heart,
    'panoramic-elevators': Eye,
    'home-elevators': Home,
    escalators: ArrowUpDown,
    'moving-walks': MoveHorizontal,
    modernization: Wrench,
}

export function ProductsCatalog() {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all')
    const categories = getProductCategories()

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((p) => p.category === selectedCategory)

    return (
        <section className="section bg-secondary-50">
            <div className="container-custom">
                {/* Category Filters */}
                <div className="mb-12">
                    <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6 text-center">
                        Browse by Category
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'all'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-secondary-600 hover:bg-secondary-100 border border-secondary-200'
                                }`}
                        >
                            All Products ({products.length})
                        </button>
                        {categories.map(({ category, count }) => {
                            const Icon = categoryIcons[category]
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-white text-secondary-600 hover:bg-secondary-100 border border-secondary-200'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {categoryDisplayNames[category]} ({count})
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Category Description */}
                <AnimatePresence mode="wait">
                    {selectedCategory !== 'all' && (
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center mb-8"
                        >
                            <p className="text-secondary-600 max-w-2xl mx-auto">
                                {categoryDescriptions[selectedCategory]}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, index) => {
                            const CategoryIcon = categoryIcons[product.category]
                            return (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link href={`/products/${product.slug}`}>
                                        <Card className="h-full hover:shadow-soft-lg transition-all group overflow-hidden">
                                            {/* Image */}
                                            <div className="aspect-[4/3] relative bg-secondary-100 overflow-hidden">
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                                    style={{
                                                        backgroundImage: `url(${product.images[0] || '/images/products/placeholder.jpg'})`,
                                                        backgroundColor: '#E2E8F0',
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />

                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary-700">
                                                        <CategoryIcon className="h-3.5 w-3.5" />
                                                        {categoryDisplayNames[product.category]}
                                                    </span>
                                                </div>

                                                {/* Series Badge */}
                                                {product.series && (
                                                    <div className="absolute top-4 right-4">
                                                        <span className="px-2 py-1 bg-primary-600 text-white rounded-full text-xs font-medium">
                                                            {product.series} Series
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-5">
                                                <h3 className="font-semibold text-lg text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
                                                    {product.name}
                                                </h3>
                                                {product.tagline && (
                                                    <p className="text-primary-600 text-sm font-medium mb-2">
                                                        {product.tagline}
                                                    </p>
                                                )}
                                                <p className="text-secondary-600 text-sm line-clamp-2 mb-4">
                                                    {product.description}
                                                </p>

                                                {/* Quick Specs */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {product.specifications.slice(0, 2).map((spec, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-xs"
                                                        >
                                                            {spec.label}: {spec.value}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center text-primary-600 text-sm font-medium group-hover:gap-2 transition-all gap-1">
                                                    View Details
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-secondary-600">No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
