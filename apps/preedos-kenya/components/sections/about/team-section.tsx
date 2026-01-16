import Image from 'next/image'
import { leadershipTeam } from '@/data'
import { Linkedin, Mail } from 'lucide-react'

export function TeamSection() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                        Meet Our Leadership
                    </h2>
                    <p className="text-lg text-secondary-600">
                        Experienced professionals committed to delivering excellence in vertical
                        transportation solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leadershipTeam.map((member) => (
                        <div
                            key={member.id}
                            className="group bg-secondary-50 rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="aspect-square relative bg-secondary-200 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${member.image})`,
                                        backgroundColor: '#CBD5E1',
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Social Links Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    )}
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors"
                                        >
                                            <Mail className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-secondary-600 text-sm line-clamp-3">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
