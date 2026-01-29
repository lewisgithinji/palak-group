'use client'

import { useState } from 'react'
import { Eye, RefreshCw, CheckCircle } from 'lucide-react'
import { certificates, Certificate } from '@/data/certificates'
import { PDFViewerModal } from '@/components/ui/pdf-viewer-modal'

function StatusBadge({ status }: { status: Certificate['status'] }) {
    if (status === 'active') {
        return (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                <CheckCircle className="h-3 w-3" />
                Active
            </span>
        )
    }

    if (status === 'under-renewal') {
        return (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium animate-pulse">
                <RefreshCw className="h-3 w-3" />
                Under Renewal
            </span>
        )
    }

    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
            Expired
        </span>
    )
}

function CertificateCard({
    certificate,
    onView
}: {
    certificate: Certificate
    onView: (cert: Certificate) => void
}) {
    const Icon = certificate.icon
    const canView = certificate.pdfPath !== null

    return (
        <div className="bg-white rounded-2xl p-6 border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all group">
            {/* Icon and Status */}
            <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <Icon className="h-7 w-7" />
                </div>
                <StatusBadge status={certificate.status} />
            </div>

            {/* Title and Description */}
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                {certificate.name}
            </h3>
            <p className="text-secondary-500 text-sm mb-2">
                {certificate.description}
            </p>

            {/* Details */}
            {certificate.details && (
                <p className="text-xs text-primary-600 mb-3 italic">
                    {certificate.details}
                </p>
            )}

            {/* Authority */}
            <p className="text-xs text-secondary-400 mb-4">
                Issued by: <span className="font-medium text-secondary-600">{certificate.authority}</span>
            </p>

            {/* View Button or Unavailable Notice */}
            {canView ? (
                <button
                    onClick={() => onView(certificate)}
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-secondary-50 hover:bg-primary-50 text-secondary-700 hover:text-primary-700 rounded-lg text-sm font-medium transition-colors group-hover:bg-primary-50 group-hover:text-primary-700"
                >
                    <Eye className="h-4 w-4" />
                    View Certificate
                </button>
            ) : (
                <div className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium">
                    <RefreshCw className="h-4 w-4" />
                    Renewal in Progress
                </div>
            )}
        </div>
    )
}


export function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
    const activeCerts = certificates.filter(c => c.status === 'active').length
    const totalCerts = certificates.length

    const handleView = (cert: Certificate) => {
        setSelectedCert(cert)
    }

    const handleClose = () => {
        setSelectedCert(null)
    }

    return (
        <>
            <section className="section bg-secondary-50" id="certifications">
                <div className="container-custom">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            Regulatory Compliance
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                            Our Certifications & Licenses
                        </h2>
                        <p className="text-lg text-secondary-600">
                            Preedos Kenya maintains all required regulatory licenses and certifications
                            to operate as an authorized electrical and elevator contractor in Kenya.
                        </p>
                    </div>

                    {/* Stats Bar */}
                    <div className="flex justify-center gap-8 mb-10">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">{activeCerts}</div>
                            <div className="text-sm text-secondary-500">Active Licenses</div>
                        </div>
                        <div className="w-px bg-secondary-200" />
                        <div className="text-center">
                            <div className="text-3xl font-bold text-secondary-700">{totalCerts}</div>
                            <div className="text-sm text-secondary-500">Total Certificates</div>
                        </div>
                    </div>

                    {/* Certificates Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {certificates.map((cert) => (
                            <CertificateCard
                                key={cert.id}
                                certificate={cert}
                                onView={handleView}
                            />
                        ))}
                    </div>

                    {/* Trust Note */}
                    <div className="mt-12 text-center">
                        <p className="text-sm text-secondary-500">
                            All certificates are verified and up-to-date. Click on any certificate to view.
                        </p>
                    </div>
                </div>
            </section>

            {/* PDF Viewer Modal */}
            {selectedCert && selectedCert.pdfPath && (
                <PDFViewerModal
                    isOpen={!!selectedCert}
                    onClose={handleClose}
                    pdfPath={selectedCert.pdfPath}
                    title={selectedCert.name}
                />
            )}
        </>
    )
}


