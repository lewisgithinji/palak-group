'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle, AlertCircle, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { BUILDING_TYPES, SITE_CONFIG } from '@/lib/constants'
import Link from 'next/link'

export function ContactFormCompact() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormState('submitting')

        try {
            const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'YOUR_FORMSPREE_ID'
            const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                }),
            })

            if (!response.ok) throw new Error('Form submission failed')

            setFormState('success')
            setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' })
        } catch (error) {
            console.error('Form submission error:', error)
            setFormState('error')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <section className="section bg-gradient-to-br from-white to-secondary-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Form */}
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-3">
                            Send Us a Message
                        </h2>
                        <p className="text-secondary-600 mb-8">
                            Fill out the form and our team will respond within 24 hours.
                        </p>

                        {formState === 'success' ? (
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                                <h3 className="text-lg font-semibold text-green-800 mb-2">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-green-700 text-sm mb-4">
                                    Thank you for reaching out. We'll contact you within 24 hours.
                                </p>
                                <Button variant="outline" size="sm" onClick={() => setFormState('idle')}>
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                                            placeholder="John Mwangi"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-1.5">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                                            placeholder="john@company.co.ke"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-1.5">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                                            placeholder="+254 791 240 000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-1.5">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 text-sm rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                                            placeholder="Your Company Ltd"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-1.5">
                                        Project Type
                                    </label>
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white"
                                    >
                                        <option value="">Select project type...</option>
                                        {BUILDING_TYPES.map((type) => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                        <option value="maintenance">Maintenance & Support</option>
                                        <option value="modernization">Modernization</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-1.5">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none resize-none"
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>

                                {formState === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                                        <AlertCircle className="h-4 w-4" />
                                        <span>Something went wrong. Please try again.</span>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={formState === 'submitting'}
                                    rightIcon={<Send className="h-4 w-4" />}
                                >
                                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Right Column - Contact Info & Map */}
                    <div className="space-y-6">
                        {/* Quick Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Link
                                href={`tel:${SITE_CONFIG.phone.replace(/\\s/g, '')}`}
                                className="p-4 rounded-xl bg-primary-50 border border-primary-100 hover:border-primary-200 transition-all hover:shadow-md group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-secondary-900 text-sm mb-1">Call Us</h3>
                                <p className="text-xs text-primary-600 font-medium">{SITE_CONFIG.phone}</p>
                            </Link>

                            <Link
                                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                                target="_blank"
                                className="p-4 rounded-xl bg-green-50 border border-green-100 hover:border-green-200 transition-all hover:shadow-md group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-secondary-900 text-sm mb-1">WhatsApp</h3>
                                <p className="text-xs text-green-600 font-medium">Chat with us</p>
                            </Link>

                            <Link
                                href={`mailto:${SITE_CONFIG.email}`}
                                className="p-4 rounded-xl bg-white border border-secondary-200 hover:border-secondary-300 transition-all hover:shadow-md group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-secondary-100 text-secondary-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-secondary-900 text-sm mb-1">Email</h3>
                                <p className="text-xs text-secondary-600 font-medium">{SITE_CONFIG.email}</p>
                            </Link>

                            <div className="p-4 rounded-xl bg-white border border-secondary-200">
                                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-secondary-900 text-sm mb-1">Hours</h3>
                                <p className="text-xs text-secondary-600">Mon-Fri: {SITE_CONFIG.hours.weekdays}</p>
                                <p className="text-xs text-primary-600 font-medium mt-1">24/7 Emergency</p>
                            </div>
                        </div>

                        {/* Office Location */}
                        <div className="bg-white rounded-xl border border-secondary-200 p-5">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-900 mb-1">Visit Our Office</h3>
                                    <p className="text-sm text-secondary-600">{SITE_CONFIG.address.street}</p>
                                    <p className="text-sm text-secondary-600">{SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-lg overflow-hidden h-[280px] border border-secondary-200">
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=54+Muthithi+Road+Westlands+Nairobi+Kenya&zoom=15"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Preedos Kenya Office Location"
                                />
                            </div>

                            <Link
                                href="https://www.google.com/maps/search/?api=1&query=54+Muthithi+Road+Westlands+Nairobi+Kenya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm mt-3"
                            >
                                <MapPin className="h-4 w-4" />
                                Get Directions →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
