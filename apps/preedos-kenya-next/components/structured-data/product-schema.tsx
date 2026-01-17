import { Product } from '@/types'
import { SITE_CONFIG } from '@/lib/constants'

interface ProductSchemaProps {
  product: Product
}

export function ProductSchema({ product }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${SITE_CONFIG.url}${img}`),
    brand: {
      '@type': 'Brand',
      name: 'HSFTECH',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KES',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    category: product.category,
    sku: product.id,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
