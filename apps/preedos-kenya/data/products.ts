import { Product, ProductCategory } from '@/types'

/**
 * Product Catalog Database
 * Based on HSFTECH product range
 */

export const products: Product[] = [
    // ============================================
    // PASSENGER ELEVATORS
    // ============================================
    {
        id: 'series-3100',
        slug: 'series-3100-mrl-passenger',
        name: 'Series 3100 MRL',
        category: 'passenger-elevators',
        series: '3100',
        tagline: 'Machine-Room-Less Excellence',
        description:
            'The Series 3100 represents the pinnacle of machine-room-less elevator technology. Designed for modern buildings where space optimization is crucial, this elevator delivers exceptional performance without the need for a dedicated machine room.',
        features: [
            'Machine-room-less design',
            'Space-saving installation',
            'Energy-efficient gearless motor',
            'Quiet operation (<55dB)',
            'Regenerative drive system',
            'Advanced destination control',
            'Modern LCD display',
            'LED lighting',
        ],
        specifications: [
            { label: 'Capacity', value: '450-1600 kg (6-21 persons)' },
            { label: 'Speed', value: '1.0-2.5 m/s' },
            { label: 'Max Travel', value: '80m' },
            { label: 'Max Stops', value: '24' },
            { label: 'Door Type', value: 'Center/Side opening' },
            { label: 'Drive', value: 'VVVF Gearless' },
        ],
        applications: [
            'Office buildings',
            'Residential towers',
            'Hotels',
            'Mixed-use developments',
        ],
        images: ['/images/products/passenger-elevator.jpg'],
        brochureUrl: '/documents/series-3100-brochure.pdf',
    },
    {
        id: 'series-3200',
        slug: 'series-3200-mrl-passenger',
        name: 'Series 3200 MRL',
        category: 'passenger-elevators',
        series: '3200',
        tagline: 'Small Machine Room, Maximum Efficiency',
        description:
            'The Series 3200 offers an optimal balance between traditional and modern elevator technology. With a compact machine room design, it provides the reliability of conventional systems with the efficiency of modern engineering.',
        features: [
            'Compact machine room',
            'High-efficiency motor',
            'Smooth ride quality',
            'Advanced safety systems',
            'Remote monitoring capability',
            'Customizable cabin designs',
            'Energy recovery system',
        ],
        specifications: [
            { label: 'Capacity', value: '630-2000 kg (8-26 persons)' },
            { label: 'Speed', value: '1.0-4.0 m/s' },
            { label: 'Max Travel', value: '150m' },
            { label: 'Max Stops', value: '48' },
            { label: 'Door Type', value: 'Center/Side opening' },
            { label: 'Drive', value: 'VVVF Geared/Gearless' },
        ],
        applications: [
            'High-rise buildings',
            'Commercial complexes',
            'Government facilities',
            'Transport hubs',
        ],
        images: ['/images/products/passenger-elevator.jpg'],
        brochureUrl: '/documents/series-3200-brochure.pdf',
    },
    {
        id: 'hfks-premium',
        slug: 'hfks-premium-passenger',
        name: 'HFKS Premium Series',
        category: 'passenger-elevators',
        series: 'HFKS',
        tagline: 'Premium Residential Excellence',
        description:
            'The HFKS Premium Series is designed for discerning clients who demand the finest in vertical transportation. With luxurious finishes, whisper-quiet operation, and cutting-edge technology, this elevator transforms everyday travel into an experience.',
        features: [
            'Luxury cabin finishes',
            'Ultra-quiet operation (<48dB)',
            'Smart home integration',
            'Biometric access control',
            'Personalized floor announcements',
            'Ambient lighting options',
            'Premium materials',
            'White-glove installation',
        ],
        specifications: [
            { label: 'Capacity', value: '400-1000 kg (5-13 persons)' },
            { label: 'Speed', value: '1.0-1.75 m/s' },
            { label: 'Max Travel', value: '60m' },
            { label: 'Max Stops', value: '20' },
            { label: 'Door Type', value: 'Center opening' },
            { label: 'Drive', value: 'VVVF Gearless' },
        ],
        applications: [
            'Luxury residences',
            'Boutique hotels',
            'Private offices',
            'Penthouses',
        ],
        images: ['/images/products/passenger-elevator.jpg'],
        brochureUrl: '/documents/hfks-brochure.pdf',
    },

    // ============================================
    // FREIGHT/CARGO ELEVATORS
    // ============================================
    {
        id: 'f100-freight',
        slug: 'f100-heavy-duty-freight',
        name: 'F100 Heavy-Duty Freight',
        category: 'freight-elevators',
        series: 'F100',
        tagline: 'Built for Industrial Demands',
        description:
            'The F100 Heavy-Duty Freight Elevator is engineered to handle the most demanding industrial and logistics applications. With robust construction, high load capacity, and durable components, it keeps your operations moving.',
        features: [
            'Heavy-duty construction',
            'Large load capacity',
            'Reinforced car structure',
            'Anti-vibration system',
            'Wide door options',
            'Industrial-grade controls',
            'Low maintenance design',
            'Oil-resistant flooring',
        ],
        specifications: [
            { label: 'Capacity', value: '1600-5000 kg' },
            { label: 'Speed', value: '0.5-1.0 m/s' },
            { label: 'Max Travel', value: '60m' },
            { label: 'Car Size', value: 'Up to 3000mm x 3500mm' },
            { label: 'Door Width', value: 'Up to 2400mm' },
            { label: 'Drive', value: 'VVVF Geared' },
        ],
        applications: [
            'Factories',
            'Warehouses',
            'Logistics centers',
            'Industrial parks',
            'Distribution facilities',
        ],
        images: ['/images/products/freight-elevator.jpg'],
        brochureUrl: '/documents/f100-brochure.pdf',
    },
    {
        id: 'f200-mrl-freight',
        slug: 'f200-mrl-freight',
        name: 'F200 MRL Freight',
        category: 'freight-elevators',
        series: 'F200',
        tagline: 'Space-Efficient Cargo Solutions',
        description:
            'The F200 MRL Freight Elevator combines cargo-handling capability with machine-room-less technology, ideal for buildings where space is at a premium but freight transport is essential.',
        features: [
            'Machine-room-less design',
            'Medium-duty capacity',
            'Compact footprint',
            'Energy-efficient',
            'Quiet operation',
            'Flexible car configurations',
        ],
        specifications: [
            { label: 'Capacity', value: '1000-3000 kg' },
            { label: 'Speed', value: '0.5-1.5 m/s' },
            { label: 'Max Travel', value: '40m' },
            { label: 'Car Size', value: 'Up to 2500mm x 3000mm' },
            { label: 'Drive', value: 'VVVF Gearless' },
        ],
        applications: [
            'Commercial buildings',
            'Hospitals',
            'Hotels',
            'Retail centers',
        ],
        images: ['/images/products/freight-elevator.jpg'],
    },

    // ============================================
    // HOSPITAL ELEVATORS
    // ============================================
    {
        id: 'medical-h1',
        slug: 'medical-h1-hospital',
        name: 'Medical H1 Hospital Elevator',
        category: 'hospital-elevators',
        series: 'H1',
        tagline: 'Designed for Healthcare Excellence',
        description:
            'The Medical H1 is purpose-built for healthcare environments, featuring stretcher-compatible dimensions, smooth ride quality for patient comfort, and hygienic surfaces for infection control.',
        features: [
            'Stretcher-compatible car size',
            'Ultra-smooth ride quality',
            'Antibacterial surfaces',
            'Easy-clean materials',
            'Priority floor access',
            'Emergency power backup',
            'Hands-free controls',
            'Wide door openings',
        ],
        specifications: [
            { label: 'Capacity', value: '1600-2500 kg' },
            { label: 'Speed', value: '1.0-2.5 m/s' },
            { label: 'Car Depth', value: 'Up to 2700mm (stretcher-compatible)' },
            { label: 'Door Width', value: '1100-1400mm' },
            { label: 'Features', value: 'Anti-bacterial, easy-clean' },
            { label: 'Drive', value: 'VVVF Gearless' },
        ],
        applications: [
            'Hospitals',
            'Medical centers',
            'Clinics',
            'Nursing homes',
            'Rehabilitation centers',
        ],
        images: ['/images/projects/hospital-elevator.jpg'],
        brochureUrl: '/documents/hospital-h1-brochure.pdf',
    },

    // ============================================
    // PANORAMIC ELEVATORS
    // ============================================
    {
        id: 'panorama-p1',
        slug: 'panorama-p1-observation',
        name: 'Panorama P1 Observation Elevator',
        category: 'panoramic-elevators',
        series: 'P1',
        tagline: 'Elevate Your View',
        description:
            'The Panorama P1 transforms vertical travel into a visual experience. With floor-to-ceiling glass panels, architectural LED lighting, and smooth, silent operation, it becomes a building\'s centerpiece.',
        features: [
            'Full glass cabin',
            'Architectural lighting',
            '360° viewing options',
            'Custom shapes available',
            'Weather-resistant glass',
            'Anti-glare coating',
            'Silent operation',
            'Dramatic illumination',
        ],
        specifications: [
            { label: 'Capacity', value: '630-1600 kg (8-21 persons)' },
            { label: 'Speed', value: '1.0-2.0 m/s' },
            { label: 'Max Travel', value: '100m' },
            { label: 'Glass Type', value: 'Laminated safety glass' },
            { label: 'Shapes', value: 'Round, oval, square, custom' },
            { label: 'Drive', value: 'VVVF Gearless' },
        ],
        applications: [
            'Hotels',
            'Shopping malls',
            'Office lobbies',
            'Tourist attractions',
            'Airports',
        ],
        images: ['/images/products/panoramic-elevator.jpg'],
        brochureUrl: '/documents/panorama-brochure.pdf',
    },

    // ============================================
    // HOME ELEVATORS
    // ============================================
    {
        id: 'home-villa',
        slug: 'home-villa-elevator',
        name: 'Villa Home Elevator',
        category: 'home-elevators',
        series: 'Villa',
        tagline: 'Luxury Living, Elevated',
        description:
            'The Villa Home Elevator brings convenience and accessibility to private residences without compromising on style. Compact, customizable, and whisper-quiet, it integrates seamlessly into your home.',
        features: [
            'Compact footprint',
            'No machine room required',
            'Customizable cabin design',
            'Whisper-quiet operation',
            'Battery backup',
            'Remote diagnostics',
            'Smart home compatible',
            'Multiple finish options',
        ],
        specifications: [
            { label: 'Capacity', value: '250-400 kg (3-5 persons)' },
            { label: 'Speed', value: '0.3-0.5 m/s' },
            { label: 'Max Travel', value: '15m (5 floors)' },
            { label: 'Pit Depth', value: '150-250mm' },
            { label: 'Headroom', value: '2600mm minimum' },
            { label: 'Power', value: 'Single phase 220V' },
        ],
        applications: [
            'Single-family homes',
            'Villas',
            'Duplexes',
            'Townhouses',
            'Accessibility retrofits',
        ],
        images: ['/images/products/passenger-elevator.jpg'],
        brochureUrl: '/documents/villa-brochure.pdf',
    },

    // ============================================
    // ESCALATORS
    // ============================================
    {
        id: 'e200-commercial',
        slug: 'e200-commercial-escalator',
        name: 'E200 Commercial Escalator',
        category: 'escalators',
        series: 'E200',
        tagline: 'Engineered for High Traffic',
        description:
            'The E200 Commercial Escalator is designed for commercial environments with medium to high traffic volumes. Reliable, efficient, and built to last, it keeps your customers moving.',
        features: [
            'High-traffic design',
            'Energy-saving mode',
            'Variable speed control',
            'Safety sensors',
            'Anti-slip steps',
            'Automatic lubrication',
            'LED step lighting',
            'Remote monitoring',
        ],
        specifications: [
            { label: 'Step Width', value: '600mm / 800mm / 1000mm' },
            { label: 'Speed', value: '0.5 m/s' },
            { label: 'Rise Height', value: 'Up to 12m' },
            { label: 'Inclination', value: '30° / 35°' },
            { label: 'Capacity', value: '6000-9000 persons/hour' },
            { label: 'Drive', value: 'VVVF Geared' },
        ],
        applications: [
            'Shopping malls',
            'Department stores',
            'Office buildings',
            'Hotels',
            'Airports',
        ],
        images: ['/images/projects/shopping-mall.jpg'],
        brochureUrl: '/documents/e200-brochure.pdf',
    },
    {
        id: 'e300-heavy-duty',
        slug: 'e300-heavy-duty-escalator',
        name: 'E300 Heavy-Duty External Escalator',
        category: 'escalators',
        series: 'E300',
        tagline: 'Built for Public Transit',
        description:
            'The E300 Heavy-Duty External Escalator is purpose-built for public transit and outdoor installations. Weather-resistant, high-capacity, and extremely durable.',
        features: [
            'Outdoor/weather-resistant',
            'Heavy-duty construction',
            'Extended service intervals',
            'Corrosion protection',
            'High-visibility step demarcation',
            'Emergency stop stations',
            'Drainage system',
            'UV-resistant materials',
        ],
        specifications: [
            { label: 'Step Width', value: '1000mm' },
            { label: 'Speed', value: '0.5-0.65 m/s' },
            { label: 'Rise Height', value: 'Up to 18m' },
            { label: 'Inclination', value: '30°' },
            { label: 'Capacity', value: '9000+ persons/hour' },
            { label: 'Environment', value: 'Indoor/Outdoor' },
        ],
        applications: [
            'Metro stations',
            'Railway terminals',
            'Airports',
            'Bus terminals',
            'Public buildings',
        ],
        images: ['/images/projects/kuala-lumpur-mrt.jpg'],
        brochureUrl: '/documents/e300-brochure.pdf',
    },

    // ============================================
    // MOVING WALKS
    // ============================================
    {
        id: 'mw-horizontal',
        slug: 'horizontal-moving-walk',
        name: 'Horizontal Moving Walk',
        category: 'moving-walks',
        series: 'MW',
        tagline: 'Effortless Horizontal Transport',
        description:
            'Our Horizontal Moving Walks provide smooth, efficient passenger transport across large horizontal distances. Perfect for airports, convention centers, and large retail environments.',
        features: [
            'Extended length capability',
            'Pallet or belt type',
            'Cart-compatible',
            'Variable speed',
            'Energy saving mode',
            'Smooth acceleration',
            'Wide width options',
            'Minimal maintenance',
        ],
        specifications: [
            { label: 'Width', value: '800mm / 1000mm / 1200mm' },
            { label: 'Speed', value: '0.5 m/s' },
            { label: 'Max Length', value: 'Up to 100m' },
            { label: 'Inclination', value: '0° (horizontal)' },
            { label: 'Type', value: 'Pallet / Belt' },
            { label: 'Capacity', value: '6000-10000 persons/hour' },
        ],
        applications: [
            'Airports',
            'Convention centers',
            'Train stations',
            'Large shopping centers',
            'Exhibition halls',
        ],
        images: ['/images/products/moving-walk.jpg'],
        brochureUrl: '/documents/moving-walk-brochure.pdf',
    },
    {
        id: 'mw-inclined',
        slug: 'inclined-moving-walk',
        name: 'Inclined Moving Walk',
        category: 'moving-walks',
        series: 'MW-I',
        tagline: 'Shopping Made Effortless',
        description:
            'Inclined Moving Walks combine the convenience of escalators with the cart-friendly nature of moving walks. Ideal for supermarkets and retail environments where customers transport goods.',
        features: [
            'Cart-compatible surface',
            'Anti-slip cleats',
            'Shopping cart tracking',
            'Gentle incline',
            'High capacity',
            'Energy efficient',
        ],
        specifications: [
            { label: 'Width', value: '1000mm / 1200mm' },
            { label: 'Speed', value: '0.5 m/s' },
            { label: 'Inclination', value: '10° / 12°' },
            { label: 'Surface', value: 'Cleated belt' },
            { label: 'Cart Lock', value: 'Automatic engagement' },
        ],
        applications: [
            'Supermarkets',
            'Hypermarkets',
            'Retail centers',
            'IKEA-style stores',
        ],
        images: ['/images/products/inclined-moving-walk.jpg'],
    },

    // ============================================
    // MODERNIZATION
    // ============================================
    {
        id: 'mod-complete',
        slug: 'complete-modernization',
        name: 'Complete Elevator Modernization',
        category: 'modernization',
        tagline: 'Breathe New Life Into Your Elevators',
        description:
            'Our Complete Modernization service transforms aging elevator systems into modern, efficient, and safe vertical transportation. We upgrade everything from controls to cabin aesthetics.',
        features: [
            'Full system assessment',
            'Control system upgrade',
            'New door operators',
            'Modern fixtures',
            'Cabin renovation',
            'Safety enhancements',
            'Code compliance updates',
            'Energy efficiency improvements',
        ],
        specifications: [
            { label: 'Assessment', value: 'Comprehensive 50-point inspection' },
            { label: 'Timeline', value: '2-8 weeks depending on scope' },
            { label: 'Warranty', value: '5-year parts and labor' },
            { label: 'Downtime', value: 'Minimized with phased approach' },
        ],
        applications: [
            'Aging buildings',
            'Code compliance upgrades',
            'Aesthetic renovations',
            'Performance improvements',
            'Safety upgrades',
        ],
        images: ['/images/products/passenger-elevator.jpg'],
        brochureUrl: '/documents/modernization-brochure.pdf',
    },
]

// Get products by category
export function getProductsByCategory(category: ProductCategory): Product[] {
    return products.filter((p) => p.category === category)
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug)
}

// Get all categories with product count
export function getProductCategories(): { category: ProductCategory; count: number }[] {
    const categories: ProductCategory[] = [
        'passenger-elevators',
        'freight-elevators',
        'hospital-elevators',
        'panoramic-elevators',
        'home-elevators',
        'escalators',
        'moving-walks',
        'modernization',
    ]

    return categories.map((category) => ({
        category,
        count: products.filter((p) => p.category === category).length,
    }))
}

// Category display names
export const categoryDisplayNames: Record<ProductCategory, string> = {
    'passenger-elevators': 'Passenger Elevators',
    'freight-elevators': 'Freight Elevators',
    'hospital-elevators': 'Hospital Elevators',
    'panoramic-elevators': 'Panoramic Elevators',
    'home-elevators': 'Home Elevators',
    escalators: 'Escalators',
    'moving-walks': 'Moving Walks',
    modernization: 'Modernization',
}

// Category descriptions
export const categoryDescriptions: Record<ProductCategory, string> = {
    'passenger-elevators':
        'Machine-room-less and conventional passenger elevators for all building types.',
    'freight-elevators':
        'Heavy-duty cargo and freight elevators for industrial and commercial applications.',
    'hospital-elevators':
        'Purpose-built elevators for healthcare environments with stretcher compatibility.',
    'panoramic-elevators':
        'Glass observation elevators that transform vertical travel into a visual experience.',
    'home-elevators':
        'Compact, stylish elevators designed for private residences and villas.',
    escalators:
        'Commercial and heavy-duty escalators for retail, transit, and public buildings.',
    'moving-walks':
        'Horizontal and inclined moving walkways for airports, malls, and large facilities.',
    modernization:
        'Complete elevator modernization services to upgrade aging systems.',
}
