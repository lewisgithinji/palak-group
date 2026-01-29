'use client'

import { Target, Eye, Heart } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function CompanyStory() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            Our Story
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-6">
                            Building Vertical Excellence in East Africa
                        </h2>
                        <div className="space-y-4 text-secondary-600 leading-relaxed">
                            <p>
                                Preedos Kenya was founded with a singular vision: to bring world-class
                                elevator and escalator technology to East Africa. As buildings across
                                Kenya reach new heights, the need for reliable, safe, and efficient
                                vertical transportation has never been greater.
                            </p>
                            <p>
                                Our partnership with HSFTECH, a global leader in elevator manufacturing
                                with German engineering standards, positions us uniquely in the market.
                                With HSFTECH&apos;s annual production capacity of 12,000 units and presence
                                in over 50 countries, we bring proven technology and expertise to every
                                project.
                            </p>
                            <p>
                                From luxury residential towers in Nairobi to commercial complexes in
                                Mombasa, we&apos;ve established ourselves as the trusted partner for
                                organizations that demand the best in vertical transportation.
                            </p>
                        </div>
                    </div>

                    {/* Image/Stats */}
                    <div className="relative">
                        <div
                            className="aspect-square rounded-3xl overflow-hidden bg-secondary-100"
                            style={{
                                backgroundImage: 'url(/images/preedos-factory.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-soft-lg p-6 border border-secondary-100">
                            <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                            <div className="text-secondary-600 text-sm">Years Combined Experience</div>
                        </div>
                    </div>
                </div>

                {/* Mission, Vision, Values */}
                <div className="grid md:grid-cols-3 gap-8 mt-24">
                    <Card className="text-center" padding="lg">
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6">
                            <Target className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                            Our Mission
                        </h3>
                        <p className="text-secondary-600">
                            To deliver world-class vertical transportation solutions that enhance
                            building functionality, safety, and value across East Africa.
                        </p>
                    </Card>

                    <Card className="text-center" padding="lg">
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6">
                            <Eye className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                            Our Vision
                        </h3>
                        <p className="text-secondary-600">
                            To be the undisputed leader in elevator solutions in East Africa,
                            recognized for German engineering excellence and exceptional service.
                        </p>
                    </Card>

                    <Card className="text-center" padding="lg">
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6">
                            <Heart className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
                            Our Values
                        </h3>
                        <p className="text-secondary-600">
                            Excellence, Integrity, Innovation, and Customer Focus guide every
                            decision we make and every project we undertake.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}
