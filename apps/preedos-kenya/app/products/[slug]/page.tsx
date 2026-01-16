import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProductDetail } from '@/components/sections/products/product-detail'
import { RelatedProducts } from '@/components/sections/products/related-products'
import { CTASection } from '@/components/sections/cta-section'
import { products, getProductBySlug } from '@/data'

interface ProductPageProps {
    params: {
        slug: string
    }
}

// Generate static paths for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }))
}

// Generate metadata for each product
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const product = getProductBySlug(params.slug)

    if (!product) {
        return {
            title: 'Product Not Found',
        }
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: `${product.name} | Preedos Kenya`,
            description: product.tagline || product.description,
            images: product.images[0] ? [product.images[0]] : undefined,
        },
    }
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = getProductBySlug(params.slug)

    if (!product) {
        notFound()
    }

    return (
        <>
            <Header />
            <main>
                <ProductDetail product={product} />
                <RelatedProducts currentProductId={product.id} category={product.category} />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
