import { jsPDF } from 'jspdf'

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
    let yPosition = 20

    // Header - Company Logo Area (placeholder)
    doc.setFillColor(245, 158, 11) // Primary color (#F59E0B)
    doc.rect(0, 0, pageWidth, 30, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text('Preedos Kenya', 15, 20)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('German Elevator Technology for East Africa', 15, 26)

    yPosition = 45

    // Title
    doc.setTextColor(15, 23, 42) // secondary-900
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text('Project Estimate', 15, yPosition)

    yPosition += 10

    // Quote Information
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105) // secondary-600
    doc.text(`Quote Date: ${data.quoteDate}`, 15, yPosition)
    yPosition += 6
    doc.text(`Valid Until: ${getValidUntilDate(data.quoteDate)}`, 15, yPosition)

    yPosition += 15

    // Customer Information Box
    doc.setDrawColor(226, 232, 240) // secondary-200
    doc.setLineWidth(0.5)
    doc.rect(15, yPosition, pageWidth - 30, 35)

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(15, 23, 42)
    doc.text('Customer Information', 20, yPosition + 8)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)
    doc.text(`Name: ${data.name}`, 20, yPosition + 16)
    doc.text(`Email: ${data.email}`, 20, yPosition + 22)
    doc.text(`Phone: ${data.phone}`, 20, yPosition + 28)
    if (data.company) {
        doc.text(`Company: ${data.company}`, 120, yPosition + 16)
    }
    if (data.timeline) {
        doc.text(`Timeline: ${data.timeline}`, 120, yPosition + 22)
    }

    yPosition += 45

    // Product Specifications Box
    doc.rect(15, yPosition, pageWidth - 30, getSpecBoxHeight(data))

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(15, 23, 42)
    doc.text('Product Specifications', 20, yPosition + 8)

    yPosition += 16
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)

    const productName = data.productType.charAt(0).toUpperCase() + data.productType.slice(1).replace('-', ' ')
    doc.text(`Product Type: ${productName}`, 20, yPosition)
    yPosition += 6

    // Product-specific specs
    if (data.productType === 'elevator') {
        doc.text(`Number of Floors: ${data.floors}`, 20, yPosition)
        yPosition += 6
        doc.text(`Capacity: ${data.capacity} persons`, 20, yPosition)
        yPosition += 6
        doc.text(`Speed: ${data.elevatorSpeed} m/s`, 20, yPosition)
        yPosition += 6
    } else if (data.productType === 'escalator') {
        doc.text(`Length: ${data.escalatorLength}m`, 20, yPosition)
        yPosition += 6
        doc.text(`Step Width: ${data.escalatorWidth}mm`, 20, yPosition)
        yPosition += 6
        doc.text(`Speed: ${data.escalatorSpeed} m/s`, 20, yPosition)
        yPosition += 6
    } else if (data.productType === 'moving-walk') {
        doc.text(`Length: ${data.walkLength}m`, 20, yPosition)
        yPosition += 6
        doc.text(`Pallet Width: ${data.walkWidth}mm`, 20, yPosition)
        yPosition += 6
        doc.text(`Inclination: ${data.inclination}°`, 20, yPosition)
        yPosition += 6
    }

    // Optional Features
    if (data.selectedFeatures.length > 0) {
        yPosition += 4
        doc.setFont('helvetica', 'bold')
        doc.text('Optional Features:', 20, yPosition)
        yPosition += 6
        doc.setFont('helvetica', 'normal')
        data.selectedFeatures.forEach((feature) => {
            const featureName = feature.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
            doc.text(`• ${featureName}`, 25, yPosition)
            yPosition += 6
        })
    }

    yPosition += 10

    // Price Box - Highlighted
    doc.setFillColor(254, 249, 235) // primary-50
    doc.setDrawColor(245, 158, 11) // primary-600
    doc.setLineWidth(1)
    doc.rect(15, yPosition, pageWidth - 30, 25, 'FD')

    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(15, 23, 42)
    doc.text('Estimated Price', 20, yPosition + 10)

    doc.setFontSize(20)
    doc.setTextColor(217, 119, 6) // primary-600
    const priceText = formatPrice(data.estimatedPrice)
    doc.text(priceText, pageWidth - 20, yPosition + 16, { align: 'right' })

    yPosition += 35

    // Important Notes
    doc.setFontSize(9)
    doc.setFont('helvetica', 'italic')
    doc.setTextColor(100, 116, 139)
    doc.text('*This is an approximate estimate based on standard specifications.', 20, yPosition)
    yPosition += 5
    doc.text('Final pricing depends on site conditions, installation requirements, and customizations.', 20, yPosition)
    yPosition += 5
    doc.text('Quote is valid for 30 days from the date above.', 20, yPosition)

    yPosition += 15

    // What's Included
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(15, 23, 42)
    doc.text('What\'s Included:', 20, yPosition)
    yPosition += 8

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(71, 85, 105)
    const included = [
        'Product supply and delivery',
        'Professional installation by certified technicians',
        'Safety testing and commissioning',
        'German engineering standards compliance',
        '12-month warranty',
        'Operator training',
    ]
    included.forEach((item) => {
        doc.text(`✓ ${item}`, 20, yPosition)
        yPosition += 5
    })

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 25
    doc.setDrawColor(226, 232, 240)
    doc.setLineWidth(0.5)
    doc.line(15, footerY, pageWidth - 15, footerY)

    doc.setFontSize(9)
    doc.setTextColor(100, 116, 139)
    doc.text('Preedos Kenya | Official HSFTECH Partner', 15, footerY + 5)
    doc.text('Email: info@preedos.ke | Phone: +254 791 240 000 / +254 784 820 208', 15, footerY + 10)
    doc.text('www.preedos.ke', 15, footerY + 15)

    return doc
}

function getSpecBoxHeight(data: QuoteData): number {
    let baseHeight = 30
    if (data.selectedFeatures.length > 0) {
        baseHeight += 10 + (data.selectedFeatures.length * 6)
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

export function downloadQuotePDF(data: QuoteData, filename?: string): void {
    const pdf = generateQuotePDF(data)
    const fileName = filename || `Preedos-Quote-${data.name.replace(/\s+/g, '-')}-${new Date().getTime()}.pdf`
    pdf.save(fileName)
}
