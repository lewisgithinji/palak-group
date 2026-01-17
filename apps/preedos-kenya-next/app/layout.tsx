import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import {
  GoogleAnalytics,
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from '@/components/analytics'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Preedos Kenya | German Elevator Technology for East Africa',
    template: '%s | Preedos Kenya',
  },
  description:
    'East Africa\'s premier provider of German-engineered elevator solutions. HSFTECH partnership delivering world-class passenger elevators, freight elevators, escalators, and modernization services across Kenya.',
  keywords: [
    'elevators Kenya',
    'escalators Kenya',
    'HSFTECH',
    'German elevator technology',
    'passenger elevators',
    'freight elevators',
    'elevator maintenance',
    'elevator modernization',
    'Nairobi elevators',
    'East Africa elevators',
  ],
  authors: [{ name: 'Preedos Kenya' }],
  creator: 'Preedos Kenya',
  publisher: 'Preedos Kenya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://preedos.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://preedos.ke',
    siteName: 'Preedos Kenya',
    title: 'Preedos Kenya | German Elevator Technology for East Africa',
    description:
      'East Africa\'s premier provider of German-engineered elevator solutions. World-class passenger elevators, freight elevators, escalators, and modernization services.',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Preedos Kenya - German Elevator Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preedos Kenya | German Elevator Technology for East Africa',
    description:
      'East Africa\'s premier provider of German-engineered elevator solutions.',
    images: ['/og/default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <GoogleTagManagerNoScript />
        {children}
        <GoogleAnalytics />
        <GoogleTagManager />
      </body>
    </html>
  )
}
