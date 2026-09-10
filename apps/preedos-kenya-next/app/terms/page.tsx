import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Preedos Kenya - Legal terms and conditions for using our services and website.',
}

export default function TermsPage() {
    const lastUpdated = 'January 16, 2026'

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white py-20">
                    <div className="container-custom">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
                        <p className="text-xl text-secondary-200">Last updated: {lastUpdated}</p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16">
                    <div className="container-custom max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            <p className="lead text-xl text-secondary-700 mb-8">
                                These Terms of Service (&quot;Terms&quot;) govern your use of the {SITE_CONFIG.name} website and services. By accessing or using our services, you agree to be bound by these Terms.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-secondary-600 mb-6">
                                By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">2. Services Offered</h2>
                            <p className="text-secondary-600 mb-4">{SITE_CONFIG.name} provides the following services:</p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li>Elevator and escalator consultation, design, and engineering</li>
                                <li>Installation of HSFTECH elevators, escalators, and moving walks</li>
                                <li>Maintenance, repair, and modernization services</li>
                                <li>Supply of genuine parts and components</li>
                                <li>Training and certification programs</li>
                                <li>24/7 emergency support services</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">3. User Responsibilities</h2>
                            <p className="text-secondary-600 mb-4">When using our services, you agree to:</p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li>Provide accurate and complete information</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Not use our services for any unlawful or prohibited purposes</li>
                                <li>Not interfere with or disrupt our services or servers</li>
                                <li>Not attempt to gain unauthorized access to our systems</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">4. Service Agreements and Quotations</h2>
                            <h3 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Quotations</h3>
                            <p className="text-secondary-600 mb-6">
                                All quotations provided are valid for 30 days unless otherwise stated. Prices are subject to change based on project specifications, material costs, and other factors. Final pricing will be confirmed in the service agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Service Agreements</h3>
                            <p className="text-secondary-600 mb-6">
                                All elevator installation, maintenance, and modernization projects require a signed service agreement. The agreement will specify the scope of work, timeline, payment terms, warranties, and other relevant details.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">5. Payment Terms</h2>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li><strong>Installation Projects:</strong> Typically require a deposit (30-50%) with balance paid according to project milestones</li>
                                <li><strong>Maintenance Contracts:</strong> Billed monthly, quarterly, or annually as specified in the agreement</li>
                                <li><strong>Emergency Services:</strong> Billed separately and due within 30 days of service completion</li>
                                <li><strong>Late Payments:</strong> May incur interest charges and suspension of services</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">6. Warranties</h2>
                            <h3 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Product Warranties</h3>
                            <p className="text-secondary-600 mb-4">
                                All HSFTECH elevators and escalators come with manufacturer warranties covering:
                            </p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li>Materials and workmanship defects</li>
                                <li>Specific warranty periods as outlined in product documentation</li>
                                <li>Terms and conditions as specified by HSFTECH</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-secondary-800 mt-6 mb-3">Installation Warranties</h3>
                            <p className="text-secondary-600 mb-6">
                                We provide warranties on our installation workmanship for a period specified in your service agreement, typically 12 months from project completion.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">7. Maintenance and Safety</h2>
                            <p className="text-secondary-600 mb-4">
                                To maintain safety and warranty coverage, clients must:
                            </p>
                            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                                <li>Adhere to recommended maintenance schedules</li>
                                <li>Use only authorized personnel for repairs and modifications</li>
                                <li>Report any malfunctions or safety concerns immediately</li>
                                <li>Allow access for scheduled inspections and maintenance</li>
                                <li>Comply with all safety regulations and building codes</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">8. Limitation of Liability</h2>
                            <p className="text-secondary-600 mb-6">
                                To the maximum extent permitted by law, {SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">9. Force Majeure</h2>
                            <p className="text-secondary-600 mb-6">
                                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, supply chain disruptions, or government regulations.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">10. Intellectual Property</h2>
                            <p className="text-secondary-600 mb-6">
                                All content on this website, including text, graphics, logos, images, and software, is the property of {SITE_CONFIG.name} or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">11. Confidentiality</h2>
                            <p className="text-secondary-600 mb-6">
                                We maintain strict confidentiality regarding all project information, building specifications, and client data. We expect clients to maintain confidentiality regarding our proprietary designs, quotations, and technical information.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">12. Termination</h2>
                            <p className="text-secondary-600 mb-6">
                                We reserve the right to terminate or suspend access to our services for violation of these Terms, non-payment, or any other reason at our discretion. Maintenance contracts may be terminated by either party with 30 days&apos; written notice.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">13. Dispute Resolution</h2>
                            <p className="text-secondary-600 mb-6">
                                Any disputes arising from these Terms or our services shall be resolved through good faith negotiations. If negotiations fail, disputes shall be submitted to arbitration in accordance with the Arbitration Act of Kenya.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">14. Governing Law</h2>
                            <p className="text-secondary-600 mb-6">
                                These Terms shall be governed by and construed in accordance with the laws of Kenya. Any legal action or proceeding shall be brought exclusively in the courts of Kenya.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">15. Changes to Terms</h2>
                            <p className="text-secondary-600 mb-6">
                                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated &quot;Last Updated&quot; date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">16. Severability</h2>
                            <p className="text-secondary-600 mb-6">
                                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                            </p>

                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mt-12 mb-4">17. Contact Information</h2>
                            <p className="text-secondary-600 mb-4">
                                For questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-secondary-50 rounded-lg p-6 mb-8">
                                <p className="font-semibold text-secondary-900 mb-2">{SITE_CONFIG.name}</p>
                                <p className="text-secondary-600">{SITE_CONFIG.address.street}</p>
                                <p className="text-secondary-600">{SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}</p>
                                <p className="text-secondary-600 mt-3">Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:text-primary-700">{SITE_CONFIG.email}</a></p>
                                <p className="text-secondary-600">Phone: <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary-600 hover:text-primary-700">{SITE_CONFIG.phone}</a></p>
                            </div>

                            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                                <p className="text-secondary-800">
                                    <strong>Note:</strong> These Terms of Service apply to general services. Specific projects may require additional terms as outlined in individual service agreements. In case of any conflict, the terms in the signed service agreement shall prevail.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
