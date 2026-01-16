import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Preedos Kenya - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
    const lastUpdated = 'January 16, 2026'

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white py-20">
                    <div className="container-custom">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
                        <p className="text-xl text-secondary-200">Last updated: {lastUpdated}</p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16">
                    <div className="container-custom max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            <p className="lead text-xl text-secondary-700 mb-8">
                                At {SITE_CONFIG.name}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">1. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Personal Information</h3>
                            <p className="text-secondary-600 mb-4">We may collect the following types of personal information:</p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li>Name and contact information (email address, phone number, mailing address)</li>
                                <li>Company name and job title</li>
                                <li>Project details and building specifications</li>
                                <li>Communication preferences</li>
                                <li>Payment and billing information</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Automatically Collected Information</h3>
                            <p className="text-secondary-600 mb-4">When you visit our website, we may automatically collect:</p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li>IP address and browser type</li>
                                <li>Pages visited and time spent on our website</li>
                                <li>Referring website addresses</li>
                                <li>Device information and operating system</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">2. How We Use Your Information</h2>
                            <p className="text-secondary-600 mb-4">We use the collected information for the following purposes:</p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li><strong>Service Delivery:</strong> To provide elevator and escalator installation, maintenance, and support services</li>
                                <li><strong>Communication:</strong> To respond to inquiries, send quotes, and provide project updates</li>
                                <li><strong>Business Operations:</strong> To process orders, schedule installations, and manage service agreements</li>
                                <li><strong>Marketing:</strong> To send promotional materials about our products and services (with your consent)</li>
                                <li><strong>Website Improvement:</strong> To analyze usage patterns and enhance user experience</li>
                                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">3. Information Sharing and Disclosure</h2>
                            <p className="text-secondary-600 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li><strong>HSFTECH:</strong> Our manufacturing partner for technical support and product information</li>
                                <li><strong>Service Providers:</strong> Third-party contractors and consultants who assist in our operations</li>
                                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">4. Data Security</h2>
                            <p className="text-secondary-600 mb-6">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li>Secure server infrastructure and encrypted data transmission</li>
                                <li>Access controls and authentication procedures</li>
                                <li>Regular security assessments and updates</li>
                                <li>Employee training on data protection practices</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">5. Your Rights</h2>
                            <p className="text-secondary-600 mb-4">You have the following rights regarding your personal information:</p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li><strong>Access:</strong> Request copies of your personal data</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                                <li><strong>Portability:</strong> Request transfer of your data to another party</li>
                                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">6. Cookies and Tracking Technologies</h2>
                            <p className="text-secondary-600 mb-6">
                                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">7. Data Retention</h2>
                            <p className="text-secondary-600 mb-6">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">8. International Data Transfers</h2>
                            <p className="text-secondary-600 mb-6">
                                Your information may be transferred to and processed in countries other than Kenya, including China (for our partnership with HSFTECH). We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">9. Children's Privacy</h2>
                            <p className="text-secondary-600 mb-6">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">10. Changes to This Privacy Policy</h2>
                            <p className="text-secondary-600 mb-6">
                                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">11. Contact Us</h2>
                            <p className="text-secondary-600 mb-4">
                                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                            </p>
                            <div className="bg-secondary-50 rounded-lg p-6 mb-8">
                                <p className="font-semibold text-secondary-900 mb-2">{SITE_CONFIG.name}</p>
                                <p className="text-secondary-600">{SITE_CONFIG.address.street}</p>
                                <p className="text-secondary-600">{SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}</p>
                                <p className="text-secondary-600 mt-3">Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:text-primary-700">{SITE_CONFIG.email}</a></p>
                                <p className="text-secondary-600">Phone: <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary-600 hover:text-primary-700">{SITE_CONFIG.phone}</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
