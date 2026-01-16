import { SITE_CONFIG } from '@/lib/constants'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
    {
        icon: Phone,
        title: 'Phone',
        description: 'Call us for immediate assistance',
        value: `${SITE_CONFIG.phone} / ${SITE_CONFIG.phoneSecondary}`,
        link: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
        highlight: true,
    },
    {
        icon: Mail,
        title: 'Email',
        description: 'Send us a detailed inquiry',
        value: SITE_CONFIG.email,
        link: `mailto:${SITE_CONFIG.email}`,
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        description: 'Quick questions via WhatsApp',
        value: 'Chat with us',
        link: `https://wa.me/${SITE_CONFIG.whatsapp}`,
        highlight: true,
    },
    {
        icon: MapPin,
        title: 'Office',
        description: 'Visit our Nairobi office',
        value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}`,
        link: 'https://www.google.com/maps/search/?api=1&query=54+Muthithi+Road+Westlands+Nairobi+Kenya',
    },
]

export function ContactInfo() {
    return (
        <section className="section bg-secondary-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Methods */}
                    <div>
                        <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-8">
                            Other Ways to Reach Us
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactMethods.map((method, index) => (
                                <Link
                                    key={index}
                                    href={method.link}
                                    target={method.link.startsWith('http') ? '_blank' : undefined}
                                    className={`p-5 rounded-2xl transition-all hover:shadow-soft ${method.highlight
                                        ? 'bg-primary-50 border border-primary-100 hover:border-primary-200'
                                        : 'bg-white border border-secondary-100 hover:border-secondary-200'
                                        }`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${method.highlight
                                            ? 'bg-primary-100 text-primary-600'
                                            : 'bg-secondary-100 text-secondary-600'
                                            }`}
                                    >
                                        <method.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-secondary-900 mb-1">{method.title}</h3>
                                    <p className="text-sm text-secondary-500 mb-2">{method.description}</p>
                                    <p
                                        className={`text-sm font-medium ${method.highlight ? 'text-primary-600' : 'text-secondary-700'
                                            }`}
                                    >
                                        {method.value}
                                    </p>
                                </Link>
                            ))}
                        </div>

                        {/* Business Hours */}
                        <div className="mt-8 bg-white rounded-2xl p-6 border border-secondary-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-secondary-900">Business Hours</h3>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-secondary-600">Monday - Friday</span>
                                    <span className="text-secondary-900 font-medium">{SITE_CONFIG.hours.weekdays}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-secondary-600">Saturday</span>
                                    <span className="text-secondary-900 font-medium">{SITE_CONFIG.hours.saturday}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-secondary-600">Sunday</span>
                                    <span className="text-secondary-900 font-medium">{SITE_CONFIG.hours.sunday}</span>
                                </div>
                                <div className="pt-2 mt-2 border-t border-secondary-100 flex justify-between">
                                    <span className="text-primary-600 font-medium">Emergency</span>
                                    <span className="text-primary-600 font-medium">{SITE_CONFIG.hours.emergency}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div>
                        <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-8">
                            Our Location
                        </h2>
                        <div className="rounded-2xl overflow-hidden h-[400px] shadow-lg border border-secondary-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.788931966434!2d36.804967!3d-1.262397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171d3d3f3f3f%3A0x0!2z!5e0!3m2!1sen!2ske!4v1234567890!5m2!1sen!2ske&q=54+Muthithi+Road,+Westlands,+Nairobi"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Preedos Kenya Office Location"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <Link
                                href="https://www.google.com/maps/search/?api=1&query=54+Muthithi+Road+Westlands+Nairobi+Kenya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                            >
                                <MapPin className="h-4 w-4" />
                                Open in Google Maps →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
