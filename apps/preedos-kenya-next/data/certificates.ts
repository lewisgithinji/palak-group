import { LucideIcon, Shield, FileCheck, Building2, Zap } from 'lucide-react'

/**
 * Company Certificates Database
 * Preedos Kenya regulatory compliance and certifications
 */

export interface Certificate {
    id: string
    name: string
    shortName: string
    description: string
    authority: string
    pdfPath: string | null  // null for certificates under renewal
    status: 'active' | 'under-renewal' | 'expired'
    issueDate?: string
    expiryDate?: string
    icon: LucideIcon
    details?: string  // Additional details for display
}

export const certificates: Certificate[] = [
    {
        id: 'epra-v1-2025',
        name: 'EPRA License Class V1',
        shortName: 'EPRA V1',
        description: 'Electrical Installation License - Class V1 for building electrical installations',
        authority: 'Energy & Petroleum Regulatory Authority (EPRA)',
        pdfPath: '/documents/Epra V1 2025.pdf',
        status: 'active',
        issueDate: '2025',
        icon: Zap,
        details: 'Licensed for electrical installations in commercial and residential buildings',
    },
    {
        id: 'epra-v2-2025',
        name: 'EPRA License Class V2',
        shortName: 'EPRA V2',
        description: 'Electrical Installation License - Class V2 for industrial electrical works',
        authority: 'Energy & Petroleum Regulatory Authority (EPRA)',
        pdfPath: '/documents/Epra V2 2025.pdf',
        status: 'active',
        issueDate: '2025',
        icon: Zap,
        details: 'Licensed for industrial-grade electrical installations and heavy machinery',
    },
    {
        id: 'epra-a2-renewal',
        name: 'EPRA License Class A2',
        shortName: 'EPRA A2',
        description: 'Electrical Contractor License - Class A2 for major electrical projects',
        authority: 'Energy & Petroleum Regulatory Authority (EPRA)',
        pdfPath: null,  // Under renewal - no PDF available yet
        status: 'under-renewal',
        icon: Shield,
        details: 'Class A2 license for major electrical contracting works - Currently being renewed',
    },
    {
        id: 'company-certificate',
        name: 'Company Registration Certificate',
        shortName: 'Company Cert',
        description: 'Official business registration certificate for Preedos Kenya Limited',
        authority: 'Registrar of Companies, Kenya',
        pdfPath: '/documents/PREEDOS KENYA LIMITED Certificate.pdf',
        status: 'active',
        icon: Building2,
        details: 'Registered and licensed to operate as a limited liability company in Kenya',
    },
]

// Get certificates by status
export function getCertificatesByStatus(status: Certificate['status']): Certificate[] {
    return certificates.filter((cert) => cert.status === status)
}

// Get active certificates count
export function getActiveCertificatesCount(): number {
    return certificates.filter((cert) => cert.status === 'active').length
}
