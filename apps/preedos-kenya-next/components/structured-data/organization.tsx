import { SITE_CONFIG } from '@/lib/constants'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'customer service',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phoneSecondary,
        contactType: 'sales',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: 'KE',
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.instagram,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
