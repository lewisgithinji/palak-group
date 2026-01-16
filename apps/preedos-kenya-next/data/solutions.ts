import { Solution } from '@/types'

/**
 * Industry Solutions Database
 */

export const solutions: Solution[] = [
    {
        id: 'residential',
        slug: 'residential',
        title: 'Residential Solutions',
        description:
            'From luxury high-rises to private villas, we deliver elevator solutions that enhance property value, provide accessibility, and offer smooth, quiet rides for residents.',
        icon: 'home',
        features: [
            'Machine-room-less options to maximize living space',
            'Quiet operation for residential comfort',
            'Customizable cabin designs to match interiors',
            'Energy-efficient regenerative drives',
            'Smart home integration capabilities',
            'Compact home elevators for villas',
            'Accessibility compliance for aging in place',
        ],
        benefits: [
            'Increase property value by 10-15%',
            'Enable aging in place for elderly residents',
            'Convenient furniture and grocery transport',
            'Modern aesthetic appeal',
            'Low operating costs',
        ],
        products: ['series-3100', 'hfks-premium', 'home-villa'],
        caseStudies: ['malaysia-villas', 'philippines-platinum'],
        image: '/images/solutions/residential.jpg',
    },
    {
        id: 'commercial',
        slug: 'commercial',
        title: 'Commercial Solutions',
        description:
            'Optimize traffic flow in office buildings, retail centers, and mixed-use developments with high-performance elevator and escalator systems designed for demanding commercial environments.',
        icon: 'building',
        features: [
            'High-speed elevators for tall buildings',
            'Destination control for optimized traffic',
            'Group elevator management',
            'Commercial-grade escalators',
            'Integration with access control systems',
            'Energy-efficient operation',
            'Remote monitoring and maintenance',
        ],
        benefits: [
            'Reduced wait times during peak hours',
            'Lower energy consumption',
            'Enhanced tenant satisfaction',
            'Professional aesthetic',
            'Minimal disruption during maintenance',
        ],
        products: ['series-3200', 'e200-commercial', 'panorama-p1'],
        caseStudies: ['panama-sands', 'colombia-supermarket'],
        image: '/images/solutions/commercial.jpg',
    },
    {
        id: 'healthcare',
        slug: 'healthcare',
        title: 'Healthcare Solutions',
        description:
            'Purpose-built elevator systems for hospitals, clinics, and medical facilities featuring stretcher compatibility, hygienic surfaces, and priority floor access for emergency situations.',
        icon: 'heart-pulse',
        features: [
            'Stretcher-compatible car dimensions',
            'Ultra-smooth ride for patient comfort',
            'Antibacterial and easy-clean surfaces',
            'Priority floor access for emergencies',
            'Wide door openings for equipment',
            'Emergency power backup integration',
            'Hands-free operation options',
        ],
        benefits: [
            'Enhanced patient care and comfort',
            'Efficient staff and equipment movement',
            'Infection control compliance',
            'Reliable operation in emergencies',
            'Regulatory compliance assured',
        ],
        products: ['medical-h1', 'f100-freight'],
        caseStudies: [],
        image: '/images/solutions/healthcare.jpg',
    },
    {
        id: 'hospitality',
        slug: 'hospitality',
        title: 'Hospitality Solutions',
        description:
            'Create lasting impressions in hotels and resorts with elegant elevator designs, panoramic observation lifts, and efficient vertical transportation that enhances the guest experience.',
        icon: 'luggage',
        features: [
            'Stunning panoramic/observation elevators',
            'Luxury cabin finishes and lighting',
            'Quiet, smooth operation',
            'Card-key integration for floor access',
            'Service elevators for housekeeping',
            'Guest-facing aesthetic excellence',
            'High-capacity for peak times',
        ],
        benefits: [
            'Memorable guest experiences',
            'Architectural centerpiece potential',
            'Efficient staff operations',
            'Secure floor access',
            'Reliable 24/7 operation',
        ],
        products: ['panorama-p1', 'hfks-premium', 'f200-mrl-freight'],
        caseStudies: ['pakistan-unicon', 'indonesia-lorin', 'nz-crowne-plaza'],
        image: '/images/solutions/hospitality.jpg',
    },
    {
        id: 'industrial',
        slug: 'industrial',
        title: 'Industrial Solutions',
        description:
            'Heavy-duty freight elevators and cargo lifts engineered for factories, warehouses, and logistics facilities where durability, high capacity, and reliability are paramount.',
        icon: 'factory',
        features: [
            'Heavy-duty load capacities up to 5,000kg',
            'Extra-large car dimensions',
            'Wide door openings for pallets/equipment',
            'Durable, oil-resistant flooring',
            'Industrial-grade components',
            'Minimal maintenance requirements',
            'Hazardous environment options',
        ],
        benefits: [
            'Improved logistics efficiency',
            'Reduced manual handling injuries',
            'Fast loading/unloading cycles',
            'Low total cost of ownership',
            'Maximum uptime reliability',
        ],
        products: ['f100-freight', 'f200-mrl-freight'],
        caseStudies: ['midea-wuhu'],
        image: '/images/solutions/industrial.jpg',
    },
    {
        id: 'public-transit',
        slug: 'public-transit',
        title: 'Public Transit Solutions',
        description:
            'Robust escalators, elevators, and moving walks engineered for metro stations, airports, railway terminals, and public buildings with extremely high traffic and demanding environments.',
        icon: 'train',
        features: [
            'Heavy-duty external escalators',
            'Weather-resistant outdoor units',
            'High-capacity (9,000+ persons/hour)',
            'Extended service intervals',
            'Vandal-resistant construction',
            'Accessibility-compliant elevators',
            'Long-distance moving walks',
        ],
        benefits: [
            'Handle massive passenger volumes',
            'Minimal downtime in critical locations',
            'Long operational lifespan',
            'Public safety compliance',
            'Universal accessibility',
        ],
        products: ['e300-heavy-duty', 'mw-horizontal', 'series-3200'],
        caseStudies: ['kl-mrt-1-2', 'turkey-metro', 'taiwan-airport', 'seoul-metro', 'urumqi-station'],
        image: '/images/solutions/public-transit.jpg',
    },
]

// Get solution by slug
export function getSolutionBySlug(slug: string): Solution | undefined {
    return solutions.find((s) => s.slug === slug)
}

// Get featured solutions for homepage
export const featuredSolutions = solutions.slice(0, 4)
