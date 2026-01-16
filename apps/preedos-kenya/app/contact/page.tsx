import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ContactHero } from '@/components/sections/contact/contact-hero'
import { ContactFormCompact } from '@/components/sections/contact/contact-form-compact'

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Get in touch with Preedos Kenya for elevator consultations, quotes, or support. Visit our Nairobi office or call us 24/7 for emergency services.',
    openGraph: {
        title: 'Contact Us | Preedos Kenya',
        description:
            'Reach out for elevator consultation, quotes, or 24/7 emergency support.',
    },
}

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <ContactHero />
                <ContactFormCompact />
            </main>
            <Footer />
        </>
    )
}
