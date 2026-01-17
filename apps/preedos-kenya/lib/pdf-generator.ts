import { jsPDF } from 'jspdf'
import { SITE_CONFIG } from './constants'

export interface QuoteData {
    productType: string
    floors?: number
    capacity?: string
    elevatorSpeed?: string
    escalatorLength?: number
    escalatorWidth?: string
    escalatorSpeed?: string
    walkLength?: number
    walkWidth?: string
    inclination?: string
    selectedFeatures: string[]
    estimatedPrice: number
    name: string
    email: string
    phone: string
    company?: string
    timeline?: string
    quoteDate: string
}

export function generateQuotePDF(data: QuoteData): jsPDF {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    let yPosition = 20

    // Colors
    const primaryColor = [217, 119, 6] // Bronze #D97706
    const secondaryColor = [15, 23, 42] // Navy #0F172A
    const lightGray = [241, 245, 249] // #F1F5F9
    const mediumGray = [148, 163, 184] // #94A3B8

    // Header with company branding
    doc.setFillColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.rect(0, 0, pageWidth, 50, 'F')

    // Logo text (since we can't embed images easily in jsPDF)
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(26)
    doc.setFont('helvetica', 'bold')
    doc.text('PREEDOS', 15, 22)
    doc.setFontSize(18)
    doc.setFont('helvetica', 'normal')
    doc.text('KENYA', 59, 22)

    // Tagline
    doc.setFontSize(9)
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text('Industrial Solutions', 15, 28)
    doc.setTextColor(255, 255, 255)
    doc.text('Official HSFTECH Partner | German Engineering Standards', 15, 35)
    doc.setFontSize(8)
    doc.text(`${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}`, 15, 40)
    doc.text(`${SITE_CONFIG.email} | ${SITE_CONFIG.phone}`, 15, 45)

    // Document title and date (right side)
    doc.setFontSize(22)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text('ESTIMATE', pageWidth - 15, 25, { align: 'right' })

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(255, 255, 255)
    doc.text(`Date: ${data.quoteDate}`, pageWidth - 15, 32, { align: 'right' })
    doc.text(`Valid Until: ${getValidUntilDate(data.quoteDate)}`, pageWidth - 15, 37, { align: 'right' })
    doc.text(`Quote #: PRD-${new Date().getTime().toString().slice(-8)}`, pageWidth - 15, 42, { align: 'right' })

    yPosition = 60

    // Customer Information Section
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2])
    doc.rect(15, yPosition, pageWidth - 30, 38, 'F')
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.setLineWidth(0.5)
    doc.line(15, yPosition, pageWidth - 15, yPosition)

    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.text('CUSTOMER INFORMATION', 20, yPosition + 8)

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)

    // Left column
    doc.setFont('helvetica', 'bold')
    doc.text('Name:', 20, yPosition + 16)
    doc.setFont('helvetica', 'normal')
    doc.text(data.name, 38, yPosition + 16)

    doc.setFont('helvetica', 'bold')
    doc.text('Email:', 20, yPosition + 22)
    doc.setFont('helvetica', 'normal')
    doc.text(data.email, 38, yPosition + 22)

    doc.setFont('helvetica', 'bold')
    doc.text('Phone:', 20, yPosition + 28)
    doc.setFont('helvetica', 'normal')
    doc.text(data.phone, 38, yPosition + 28)

    // Right column
    if (data.company) {
        doc.setFont('helvetica', 'bold')
        doc.text('Company:', 120, yPosition + 16)
        doc.setFont('helvetica', 'normal')
        doc.text(data.company, 145, yPosition + 16)
    }
    if (data.timeline) {
        doc.setFont('helvetica', 'bold')
        doc.text('Timeline:', 120, yPosition + 22)
        doc.setFont('helvetica', 'normal')
        doc.text(capitalizeFirst(data.timeline), 145, yPosition + 22)
    }

    yPosition += 48

    // Product Specifications Section
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2])
    const specHeight = getSpecBoxHeight(data)
    doc.rect(15, yPosition, pageWidth - 30, specHeight, 'F')
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.line(15, yPosition, pageWidth - 15, yPosition)

    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.text('PRODUCT SPECIFICATIONS', 20, yPosition + 8)

    yPosition += 16
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)

    const productName = data.productType.charAt(0).toUpperCase() + data.productType.slice(1).replace('-', ' ')
    doc.setFont('helvetica', 'bold')
    doc.text('Product Type:', 20, yPosition)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text(productName, 50, yPosition)
    doc.setTextColor(71, 85, 105)
    yPosition += 7

    // Product-specific specs in table format
    if (data.productType === 'elevator') {
        addSpecRow(doc, 'Number of Floors:', data.floors?.toString() || '', 20, yPosition)
        yPosition += 6
        addSpecRow(doc, 'Capacity:', `${data.capacity} persons`, 20, yPosition)
        yPosition += 6
        addSpecRow(doc, 'Travel Speed:', `${data.elevatorSpeed} m/s`, 20, yPosition)
        yPosition += 6
    } else if (data.productType === 'escalator') {
        addSpecRow(doc, 'Length:', `${data.escalatorLength}m`, 20, yPosition)
        yPosition += 6
        addSpecRow(doc, 'Step Width:', `${data.escalatorWidth}mm`, 20, yPosition)
        yPosition += 6
        addSpecRow(doc, 'Speed:', `${data.escalatorSpeed} m/s`, 20, yPosition)
        yPosition += 6
    } else if (data.productType === 'moving-walk') {
        addSpecRow(doc, 'Length:', `${data.walkLength}m`, 20, yPosition)
        yPosition += 6
        addSpecRow(doc, 'Pallet Width:', `${data.walkWidth}mm`, 20, yPosition)
        yPosition += 6
        addSpecRow(doc, 'Inclination:', `${data.inclination}°`, 20, yPosition)
        yPosition += 6
    }

    // Optional Features
    if (data.selectedFeatures.length > 0) {
        yPosition += 4
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
        doc.text('Optional Features:', 20, yPosition)
        yPosition += 6
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(71, 85, 105)
        data.selectedFeatures.forEach((feature) => {
            const featureName = feature.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
            doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
            doc.text('●', 23, yPosition)
            doc.setTextColor(71, 85, 105)
            doc.text(featureName, 28, yPosition)
            yPosition += 5
        })
        yPosition += 2
    }

    yPosition += 10

    // Price Section - Large and prominent
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.rect(15, yPosition, pageWidth - 30, 28, 'F')

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(255, 255, 255)
    doc.text('ESTIMATED INVESTMENT', 20, yPosition + 11)

    doc.setFontSize(24)
    const priceText = formatPrice(data.estimatedPrice)
    doc.text(priceText, pageWidth - 20, yPosition + 19, { align: 'right' })

    yPosition += 38

    // Important Notes with border
    doc.setDrawColor(mediumGray[0], mediumGray[1], mediumGray[2])
    doc.setLineWidth(0.3)
    doc.rect(15, yPosition, pageWidth - 30, 22)

    doc.setFontSize(8)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.text('IMPORTANT NOTES:', 20, yPosition + 6)

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)
    doc.text('• This is an estimated cost based on standard specifications and typical installation conditions.', 20, yPosition + 11)
    doc.text('• Final pricing will be confirmed after site survey and detailed engineering assessment.', 20, yPosition + 15)
    doc.text('• Quote validity: 30 days from the date above. Prices subject to change after expiry.', 20, yPosition + 19)

    yPosition += 30

    // What's Included Section
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2])
    doc.rect(15, yPosition, (pageWidth - 30) / 2 - 2, 46, 'F')
    doc.rect(15 + (pageWidth - 30) / 2 + 2, yPosition, (pageWidth - 30) / 2 - 2, 46, 'F')

    // Left box - What's Included
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.text('WHAT\u0027S INCLUDED', 20, yPosition + 7)

    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)
    const included = [
        'Product supply & delivery',
        'Professional installation',
        'Safety testing & commissioning',
        'German engineering standards',
        '12-month warranty',
    ]
    included.forEach((item, index) => {
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
        doc.text('✓', 20, yPosition + 14 + (index * 5))
        doc.setTextColor(71, 85, 105)
        doc.text(item, 25, yPosition + 14 + (index * 5))
    })

    // Right box - Next Steps
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.text('NEXT STEPS', 15 + (pageWidth - 30) / 2 + 7, yPosition + 7)

    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)
    const nextSteps = [
        '1. Review this estimate',
        '2. Schedule site survey',
        '3. Receive detailed proposal',
        '4. Sign service agreement',
        '5. Project commencement',
    ]
    nextSteps.forEach((item, index) => {
        doc.text(item, 15 + (pageWidth - 30) / 2 + 7, yPosition + 14 + (index * 5))
    })

    // Footer
    const footerY = pageHeight - 20
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.setLineWidth(1)
    doc.line(15, footerY, pageWidth - 15, footerY)

    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(mediumGray[0], mediumGray[1], mediumGray[2])
    doc.text('Thank you for considering Preedos Kenya for your vertical transportation needs.', pageWidth / 2, footerY + 5, { align: 'center' })
    doc.text('We look forward to serving you with excellence.', pageWidth / 2, footerY + 10, { align: 'center' })

    doc.setFontSize(7)
    doc.text('www.preedoskenya.com', pageWidth / 2, footerY + 15, { align: 'center' })

    return doc
}

function addSpecRow(doc: jsPDF, label: string, value: string, x: number, y: number) {
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(71, 85, 105)
    doc.text(label, x, y)
    doc.setFont('helvetica', 'normal')
    doc.text(value, x + 50, y)
}

function getSpecBoxHeight(data: QuoteData): number {
    let baseHeight = 35
    if (data.selectedFeatures.length > 0) {
        baseHeight += 12 + (data.selectedFeatures.length * 5)
    }
    return baseHeight
}

function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price)
}

function getValidUntilDate(quoteDate: string): string {
    const date = new Date(quoteDate)
    date.setDate(date.getDate() + 30)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function downloadQuotePDF(data: QuoteData, filename?: string): void {
    const pdf = generateQuotePDF(data)
    const fileName = filename || `Preedos-Estimate-${data.name.replace(/\s+/g, '-')}-${new Date().getTime()}.pdf`
    pdf.save(fileName)
}
