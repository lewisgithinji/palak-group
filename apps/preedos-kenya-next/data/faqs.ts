import { FAQ, FAQCategory } from '@/types'

/**
 * Frequently Asked Questions Database
 */

export const faqs: FAQ[] = [
    // ============================================
    // GENERAL
    // ============================================
    {
        id: 'gen-1',
        question: 'What is Preedos Kenya?',
        answer:
            'Preedos Kenya is East Africa\'s premier provider of German-engineered elevator and escalator solutions. As the official partner of HSFTECH (Suzhou Hansif Industrial Technology Co., Ltd), we bring world-class vertical transportation technology to Kenya and the broader East African market.',
        category: 'general',
    },
    {
        id: 'gen-2',
        question: 'What areas do you serve?',
        answer:
            'We serve all of Kenya, with primary operations in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. We also extend services to neighboring East African countries including Uganda, Tanzania, Rwanda, and Ethiopia for major projects.',
        category: 'general',
    },
    {
        id: 'gen-3',
        question: 'What makes HSFTECH elevators different?',
        answer:
            'HSFTECH elevators are built on German engineering principles with over 12,000 units produced annually. With installations in 50+ countries and 800+ projects globally, they represent proven quality, reliability, and innovative technology at competitive pricing.',
        category: 'general',
    },
    {
        id: 'gen-4',
        question: 'How long has HSFTECH been in business?',
        answer:
            'HSFTECH was founded in 2010 and has grown to be a leading elevator manufacturer with a 100,000 m² production facility in Suzhou, China. They\'ve completed over 800 projects in 200+ cities worldwide.',
        category: 'general',
    },
    {
        id: 'gen-5',
        question: 'Do you offer free consultations?',
        answer:
            'Yes! We offer free initial consultations and site assessments. Our engineers will visit your site, understand your requirements, and provide tailored recommendations with no obligation.',
        category: 'general',
    },

    // ============================================
    // PRODUCTS
    // ============================================
    {
        id: 'prod-1',
        question: 'What types of elevators do you offer?',
        answer:
            'We offer a comprehensive range including: Passenger Elevators (MRL and conventional), Freight/Cargo Elevators, Hospital Elevators, Panoramic/Observation Elevators, Home/Villa Elevators, Escalators, and Moving Walks. We also provide modernization services for existing systems.',
        category: 'products',
    },
    {
        id: 'prod-2',
        question: 'What is a Machine-Room-Less (MRL) elevator?',
        answer:
            'MRL elevators integrate the machinery within the hoistway itself, eliminating the need for a separate machine room on the roof. This saves valuable building space, reduces construction costs, and offers excellent energy efficiency.',
        category: 'products',
    },
    {
        id: 'prod-3',
        question: 'What elevator capacities are available?',
        answer:
            'Our elevators range from 450kg (6 persons) for small residential buildings up to 5,000kg for heavy-duty freight applications. The most popular capacities are: 630kg (8 persons), 1000kg (13 persons), and 1600kg (21 persons).',
        category: 'products',
    },
    {
        id: 'prod-4',
        question: 'What speeds are available?',
        answer:
            'We offer three speed categories: Standard (1.0-1.5 m/s) suitable for low to mid-rise buildings, High-speed (1.75-2.5 m/s) for taller structures, and Ultra high-speed (3.0+ m/s) for skyscrapers and premium applications.',
        category: 'products',
    },
    {
        id: 'prod-5',
        question: 'Can elevator cabins be customized?',
        answer:
            'Absolutely! We offer extensive customization options including various ceiling designs, lighting styles, wall finishes (stainless steel, glass, wood panels), flooring materials, and handrail configurations. Our premium series offers luxury finishes.',
        category: 'products',
    },
    {
        id: 'prod-6',
        question: 'Do you supply escalators for outdoor use?',
        answer:
            'Yes, our E300 Heavy-Duty External Escalator series is specifically designed for outdoor installations and public transit. They feature weather-resistant construction, drainage systems, and corrosion protection.',
        category: 'products',
    },

    // ============================================
    // INSTALLATION
    // ============================================
    {
        id: 'inst-1',
        question: 'How long does elevator installation take?',
        answer:
            'Installation timelines vary by project complexity: Home elevators typically take 2-4 weeks, standard commercial elevators 6-10 weeks, and large-scale projects 3-6 months. We provide detailed timelines during the quotation phase.',
        category: 'installation',
    },
    {
        id: 'inst-2',
        question: 'What building requirements are needed for elevator installation?',
        answer:
            'Key requirements include: adequate pit depth (typically 1.2-1.5m for standard elevators, less for MRL), sufficient headroom (minimum 3.6m above top floor), shaft dimensions based on capacity, and adequate electrical supply. Our engineers assess all requirements during site visits.',
        category: 'installation',
    },
    {
        id: 'inst-3',
        question: 'Can you install elevators in existing buildings?',
        answer:
            'Yes, we specialize in both new installations and retrofits. For existing buildings, we can install elevators within stairwells, external shafts, or purpose-built enclosures. Home elevators require minimal structural work.',
        category: 'installation',
    },
    {
        id: 'inst-4',
        question: 'Who handles the electrical and civil work?',
        answer:
            'We coordinate with approved contractors for civil and electrical work. We provide detailed specifications and drawings, and our project managers ensure all work meets our requirements. Some clients prefer to use their own contractors under our guidance.',
        category: 'installation',
    },
    {
        id: 'inst-5',
        question: 'What certifications and approvals are required?',
        answer:
            'All our installations comply with Kenyan building codes and international safety standards (EN81, ASME A17.1). We handle all necessary inspections and certifications, including NEMA approvals where required.',
        category: 'installation',
    },

    // ============================================
    // MAINTENANCE
    // ============================================
    {
        id: 'maint-1',
        question: 'What maintenance services do you offer?',
        answer:
            'We offer comprehensive maintenance packages including: Preventive maintenance (scheduled inspections and servicing), Emergency response (24/7 breakdown service), Remote monitoring, and Full maintenance contracts covering all parts and labor.',
        category: 'maintenance',
    },
    {
        id: 'maint-2',
        question: 'How often should elevators be serviced?',
        answer:
            'We recommend monthly preventive maintenance visits for commercial elevators and quarterly visits for light-use residential elevators. Escalators and moving walks in high-traffic areas require bi-weekly or monthly servicing.',
        category: 'maintenance',
    },
    {
        id: 'maint-3',
        question: 'What is your emergency response time?',
        answer:
            'For clients on our maintenance contracts, we guarantee 2-hour response time within Nairobi and 4-hour response in other major cities. Our 24/7 hotline ensures immediate assistance for passenger entrapments or urgent safety issues.',
        category: 'maintenance',
    },
    {
        id: 'maint-4',
        question: 'Do you service elevators from other brands?',
        answer:
            'Yes, our qualified technicians can maintain and repair elevators from most major manufacturers. We also offer modernization services to upgrade aging systems from any brand to new HSFTECH technology.',
        category: 'maintenance',
    },
    {
        id: 'maint-5',
        question: 'What is remote monitoring?',
        answer:
            'Our remote monitoring system connects your elevator to our operations center, allowing real-time tracking of performance, automatic fault detection, and proactive maintenance scheduling. This minimizes downtime and extends equipment life.',
        category: 'maintenance',
    },

    // ============================================
    // PRICING
    // ============================================
    {
        id: 'price-1',
        question: 'How much does an elevator cost in Kenya?',
        answer:
            'Elevator costs vary significantly based on type, capacity, speed, and customization. As a rough guide: Home elevators start from KES 2.5M, standard commercial elevators from KES 4-8M, and premium high-speed elevators can exceed KES 15M. Use our online estimator for a personalized quote.',
        category: 'pricing',
    },
    {
        id: 'price-2',
        question: 'What payment terms do you offer?',
        answer:
            'Standard terms include: 30% deposit upon order confirmation, 50% upon shipment arrival in Kenya, and 20% upon installation completion and handover. We can arrange flexible payment plans for large projects.',
        category: 'pricing',
    },
    {
        id: 'price-3',
        question: 'Are maintenance costs included in the purchase price?',
        answer:
            'The purchase price includes a 1-year comprehensive warranty covering all parts and labor. After the warranty period, maintenance is charged separately. We offer annual maintenance contracts at competitive rates.',
        category: 'pricing',
    },
    {
        id: 'price-4',
        question: 'What is the cost of annual maintenance?',
        answer:
            'Annual maintenance costs typically range from 1-3% of the elevator\'s value, depending on the service level and usage intensity. Our standard maintenance contracts start from KES 120,000/year for basic residential elevators.',
        category: 'pricing',
    },
    {
        id: 'price-5',
        question: 'Do you offer financing options?',
        answer:
            'Yes, we partner with leading banks and leasing companies to offer elevator financing. Options include equipment leasing, hire purchase arrangements, and project financing for developers. Contact us for available options.',
        category: 'pricing',
    },

    // ============================================
    // TECHNICAL
    // ============================================
    {
        id: 'tech-1',
        question: 'What power supply is required for elevators?',
        answer:
            'Standard commercial elevators require 3-phase 415V power supply. Home elevators can operate on single-phase 220V. Power requirements range from 7.5kW for small home elevators to 30kW+ for high-speed systems. We recommend backup power for all installations.',
        category: 'technical',
    },
    {
        id: 'tech-2',
        question: 'What happens during a power outage?',
        answer:
            'All our elevators feature Automatic Rescue Devices (ARD) that safely lower the car to the nearest floor and open doors during power failures. We strongly recommend Uninterruptible Power Supply (UPS) or generator backup for critical applications.',
        category: 'technical',
    },
    {
        id: 'tech-3',
        question: 'How energy-efficient are your elevators?',
        answer:
            'Our MRL elevators use regenerative drives that feed energy back to the building grid during descent, reducing energy consumption by 30-40% compared to traditional systems. LED lighting and standby mode further enhance efficiency.',
        category: 'technical',
    },
    {
        id: 'tech-4',
        question: 'What safety features are included?',
        answer:
            'Standard safety features include: Overspeed governors, safety brakes, door interlocks, car and landing door sensors, emergency lighting, alarm systems, and emergency communication. Hospital and public elevators include additional safety systems.',
        category: 'technical',
    },
    {
        id: 'tech-5',
        question: 'What is the lifespan of an elevator?',
        answer:
            'Well-maintained elevators typically last 25-30 years. Many components can be replaced or upgraded during this period. After 20 years, we recommend modernization to upgrade controls, doors, and safety systems while retaining the basic structure.',
        category: 'technical',
    },
    {
        id: 'tech-6',
        question: 'Can elevators be integrated with smart building systems?',
        answer:
            'Yes, our elevators can integrate with building management systems (BMS), access control systems (card readers, biometrics), fire alarm systems (automatic evacuation mode), and smart home platforms for residential installations.',
        category: 'technical',
    },
]

// Get FAQs by category
export function getFAQsByCategory(category: FAQCategory): FAQ[] {
    return faqs.filter((faq) => faq.category === category)
}

// Get all categories with count
export function getFAQCategories(): { category: FAQCategory; count: number; label: string }[] {
    const categories: { category: FAQCategory; label: string }[] = [
        { category: 'general', label: 'General' },
        { category: 'products', label: 'Products' },
        { category: 'installation', label: 'Installation' },
        { category: 'maintenance', label: 'Maintenance' },
        { category: 'pricing', label: 'Pricing' },
        { category: 'technical', label: 'Technical' },
    ]

    return categories.map(({ category, label }) => ({
        category,
        label,
        count: faqs.filter((faq) => faq.category === category).length,
    }))
}

// Search FAQs
export function searchFAQs(query: string): FAQ[] {
    const lowerQuery = query.toLowerCase()
    return faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(lowerQuery) ||
            faq.answer.toLowerCase().includes(lowerQuery)
    )
}

// Get featured FAQs for homepage
export const featuredFAQs = faqs.slice(0, 6)
