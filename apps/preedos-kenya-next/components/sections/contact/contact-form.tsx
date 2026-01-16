'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { BUILDING_TYPES } from '@/lib/constants'

export function ContactForm() {
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
            // Formspree integration
            // Configure your Formspree ID in .env.local
            // Get your form ID from https://formspree.io/forms
            const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'YOUR_FORMSPREE_ID'
            const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    projectType: formData.projectType,
                    message: formData.message,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                }),
            })

            if (!response.ok) {
                throw new Error('Form submission failed')
            }

            setFormState('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                message: '',
            })
        } catch (error) {
            console.error('Form submission error:', error)
            setFormState('error')
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                            Send Us a Message
                        </h2>
                        <p className="text-lg text-secondary-600">
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    {formState === 'success' ? (
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-green-800 mb-2">
                                Message Sent Successfully!
                            </h3>
                            <p className="text-green-700">
                                Thank you for reaching out. Our team will contact you within 24 hours.
                            </p>
                            <Button
                                className="mt-6"
                                variant="outline"
                                onClick={() => setFormState('idle')}
                            >
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-secondary-700 mb-2"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                                        placeholder="John Mwangi"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-secondary-700 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                                        placeholder="john@company.co.ke"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-secondary-700 mb-2"
                                    >
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                                        placeholder="+254 791 240 000"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-secondary-700 mb-2"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                                        placeholder="Your Company Ltd"
                                    />
                                </div>
                            </div>

                            {/* Project Type */}
                            <div>
                                <label
                                    htmlFor="projectType"
                                    className="block text-sm font-medium text-secondary-700 mb-2"
                                >
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                                >
                                    <option value="">Select project type...</option>
                                    {BUILDING_TYPES.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                    <option value="maintenance">Maintenance & Support</option>
                                    <option value="modernization">Modernization</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-secondary-700 mb-2"
                                >
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                                    placeholder="Tell us about your project requirements..."
                                />
                            </div>

                            {formState === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                                    <AlertCircle className="h-5 w-5" />
                                    <span>Something went wrong. Please try again.</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full"
                                disabled={formState === 'submitting'}
                                rightIcon={<Send className="h-5 w-5" />}
                            >
                                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                            </Button>

                            <p className="text-sm text-secondary-500 text-center">
                                By submitting this form, you agree to our privacy policy.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
