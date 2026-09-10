import { MetadataRoute } from 'next'

// Required by output: "export" in Next 15 — metadata routes must be static
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://preedos.ke/sitemap.xml',
  }
}
