import { Project } from '@/types'

/**
 * Project Portfolio Database
 * Based on HSFTECH International and Domestic Projects
 */

export const projects: Project[] = [
    // ============================================
    // INTERNATIONAL FLAGSHIP PROJECTS
    // ============================================
    {
        id: 'kl-mrt-1-2',
        slug: 'kuala-lumpur-mrt',
        title: 'Kuala Lumpur MRT Lines 1 & 2',
        location: 'Kuala Lumpur',
        country: 'Malaysia',
        type: 'public-transit',
        elevatorType: 'External Escalators',
        units: 279,
        description:
            'One of the largest mass rapid transit projects in Southeast Asia, featuring 279 external escalators engineered to withstand tropical weather conditions while maintaining peak performance.',
        challenge:
            'Installing escalators in an outdoor tropical environment with high humidity and heavy rainfall while ensuring minimal disruption to daily commuters.',
        solution:
            'Deployed weather-resistant external escalators with specialized drainage systems, corrosion-resistant materials, and rainwater deflection canopies.',
        specifications: {
            speed: '0.5 m/s',
            features: [
                'Weather-resistant design',
                'Heavy-duty external escalators',
                'Remote monitoring system',
                'Energy-efficient operation',
            ],
        },
        images: ['/images/projects/kuala-lumpur-mrt.jpg'],
        featured: true,
        completionYear: 2022,
    },
    {
        id: 'turkey-metro',
        slug: 'turkey-metro-istanbul',
        title: 'Turkey Metro System',
        location: 'Istanbul',
        country: 'Turkey',
        type: 'public-transit',
        elevatorType: 'Metro Escalators',
        units: 186,
        description:
            'Comprehensive metro escalator installation across Istanbul\'s expanding subway network, serving millions of daily commuters.',
        challenge:
            'High-volume passenger traffic requiring extremely durable equipment with minimal maintenance downtime.',
        solution:
            'Heavy-duty metro escalators with reinforced step chains, extended service intervals, and real-time monitoring for predictive maintenance.',
        specifications: {
            speed: '0.5 m/s',
            features: [
                'Heavy-duty construction',
                'High-capacity step chains',
                'Predictive maintenance sensors',
                'Extended service life',
            ],
        },
        images: ['/images/projects/turkey-metro.jpg'],
        featured: true,
        completionYear: 2021,
    },
    {
        id: 'iran-bridges',
        slug: 'iran-platform-bridges',
        title: 'Iran Platform Bridges',
        location: 'Tehran, Esfahan, Tabriz',
        country: 'Iran',
        type: 'public-transit',
        elevatorType: 'Escalators',
        units: 143,
        description:
            'Multi-city public infrastructure project installing escalators on pedestrian platform bridges to improve urban mobility.',
        specifications: {
            features: [
                'Outdoor installation',
                'Multi-city deployment',
                'Public facility grade',
            ],
        },
        images: ['/images/projects/airport-escalators.jpg'],
        featured: false,
        completionYear: 2020,
    },
    {
        id: 'malaysia-villas',
        slug: 'desa-hill-villas-malaysia',
        title: 'Desa Hill Villas',
        location: 'Kuala Lumpur',
        country: 'Malaysia',
        type: 'residential',
        elevatorType: 'Villa Elevators',
        units: 120,
        description:
            'Luxury villa development featuring 120 premium home elevator installations, each customized to match individual villa aesthetics.',
        specifications: {
            capacity: '4-6 persons',
            speed: '1.0 m/s',
            features: [
                'Custom cabin designs',
                'Quiet operation',
                'Energy-efficient',
                'Premium finishes',
            ],
        },
        images: ['/images/projects/residential-tower.jpg'],
        featured: false,
        completionYear: 2021,
    },
    {
        id: 'eu-bangladesh',
        slug: 'european-university-bangladesh',
        title: 'European University Bangladesh',
        location: 'Dhaka',
        country: 'Bangladesh',
        type: 'educational',
        elevatorType: 'E200 Escalators',
        units: 34,
        description:
            'Educational institution escalator installation providing efficient vertical transportation across the university campus.',
        specifications: {
            features: ['E200 Series', 'Educational facility design', 'High-traffic capacity'],
        },
        images: ['/images/projects/eu-bangladesh.jpg'],
        featured: false,
        completionYear: 2019,
    },
    {
        id: 'seoul-metro',
        slug: 'seoul-metro',
        title: 'Seoul Metro',
        location: 'Seoul',
        country: 'South Korea',
        type: 'public-transit',
        elevatorType: 'Public Facility',
        units: 14,
        description:
            'Escalator installation for Seoul\'s world-renowned metro system, meeting the highest standards for public transportation infrastructure.',
        images: ['/images/projects/seoul-metro.jpg'],
        featured: false,
        completionYear: 2020,
    },
    {
        id: 'pakistan-unicon',
        slug: 'unicon-hotel-lahore',
        title: 'UNICON Hotel Lahore',
        location: 'Lahore',
        country: 'Pakistan',
        type: 'hotel',
        elevatorType: 'Passenger + Observation',
        units: 11,
        description:
            'Luxury hotel installation featuring a combination of passenger elevators and stunning observation elevators with panoramic views.',
        specifications: {
            features: [
                'Observation elevator',
                'Passenger elevators',
                'Premium hotel-grade',
                'Custom interiors',
            ],
        },
        images: ['/images/projects/luxury-hotel.jpg'],
        featured: true,
        completionYear: 2022,
    },
    {
        id: 'taiwan-airport',
        slug: 'taoyuan-airport-taiwan',
        title: 'Taiwan Taoyuan Airport',
        location: 'Taoyuan City',
        country: 'Taiwan',
        type: 'public-transit',
        elevatorType: 'Moving Walks (97m)',
        units: 10,
        description:
            'Long-distance moving walkways spanning 97 meters, designed to efficiently transport passengers across the international airport.',
        specifications: {
            travelHeight: '97m length',
            speed: '0.5 m/s',
            features: [
                'Airport-grade durability',
                'Extended length design',
                'High passenger volume',
                'Smooth acceleration',
            ],
        },
        images: ['/images/projects/airport-escalators.jpg'],
        featured: true,
        completionYear: 2021,
    },
    {
        id: 'indonesia-lorin',
        slug: 'lorin-bogor-hotel',
        title: 'Lorin Bogor Hotel',
        location: 'Bogor',
        country: 'Indonesia',
        type: 'hotel',
        elevatorType: 'Passenger (MRL)',
        units: 8,
        description:
            'Machine-room-less passenger elevators for a boutique hotel, maximizing space efficiency without compromising performance.',
        specifications: {
            capacity: '8-10 persons',
            features: ['MRL technology', 'Space-saving', 'Quiet operation'],
        },
        images: ['/images/projects/luxury-hotel.jpg'],
        featured: false,
        completionYear: 2020,
    },
    {
        id: 'iran-parsian',
        slug: 'parsian-esteghlal-hotel',
        title: 'Parsian Esteghlal Hotel',
        location: 'Tehran',
        country: 'Iran',
        type: 'hotel',
        elevatorType: 'Renovation',
        units: 7,
        description:
            'Complete elevator system renovation for a historic hotel, modernizing the infrastructure while preserving architectural heritage.',
        specifications: {
            features: [
                'Full system renovation',
                'Modern control systems',
                'Heritage preservation',
                'Safety upgrades',
            ],
        },
        images: ['/images/projects/luxury-hotel.jpg'],
        featured: false,
        completionYear: 2019,
    },
    {
        id: 'nz-crowne-plaza',
        slug: 'crowne-plaza-christchurch',
        title: 'Crowne Plaza Christchurch',
        location: 'Christchurch',
        country: 'New Zealand',
        type: 'hotel',
        elevatorType: 'Reconstructive',
        units: 5,
        description:
            'Post-earthquake hotel reconstruction with seismically engineered elevator systems designed for New Zealand\'s unique requirements.',
        specifications: {
            features: [
                'Seismic engineering',
                'Reconstructive installation',
                'Hotel-grade quality',
            ],
        },
        images: ['/images/projects/luxury-hotel.jpg'],
        featured: false,
        completionYear: 2021,
    },
    {
        id: 'panama-sands',
        slug: 'the-sands-panama',
        title: 'The Sands Complex',
        location: 'Panama City',
        country: 'Panama',
        type: 'commercial',
        elevatorType: 'High-speed',
        units: 12,
        description:
            'High-speed elevator installation for a premium commercial complex, with speeds reaching 2.5 m/s for efficient vertical transportation.',
        specifications: {
            speed: '2.5 m/s',
            features: ['High-speed operation', 'Commercial grade', 'Premium finishes'],
        },
        images: ['/images/projects/kenya-commercial.jpg'],
        featured: false,
        completionYear: 2022,
    },
    {
        id: 'philippines-platinum',
        slug: 'platinum-apartments',
        title: 'Platinum Apartments',
        location: 'Manila',
        country: 'Philippines',
        type: 'residential',
        elevatorType: 'HFKS Series',
        units: 2,
        description:
            'Premium residential apartment complex with HFKS Series elevators providing quiet, smooth operation for discerning residents.',
        specifications: {
            features: ['HFKS Series', 'Residential premium', 'Quiet operation'],
        },
        images: ['/images/projects/residential-tower.jpg'],
        featured: false,
        completionYear: 2020,
    },
    {
        id: 'colombia-supermarket',
        slug: 'colombia-supermarket',
        title: 'Colombia Supermarket Complex',
        location: 'Bogota',
        country: 'Colombia',
        type: 'commercial',
        elevatorType: 'Escalator/Moving Walk Renovation',
        units: 8,
        description:
            'Complete renovation of escalator and moving walk systems in a major retail supermarket complex.',
        specifications: {
            features: ['Escalator renovation', 'Moving walk renovation', 'Retail environment'],
        },
        images: ['/images/projects/shopping-mall.jpg'],
        featured: false,
        completionYear: 2021,
    },
    {
        id: 'pakistan-indus',
        slug: 'indus-university',
        title: 'Indus University',
        location: 'Karachi',
        country: 'Pakistan',
        type: 'educational',
        elevatorType: 'Group Control Passenger',
        units: 3,
        description:
            'Smart group control passenger elevators for an educational institution, optimizing traffic flow during class changes.',
        specifications: {
            features: [
                'Group control system',
                'Traffic optimization',
                'Educational facility design',
            ],
        },
        images: ['/images/projects/indus-university.jpg'],
        featured: false,
        completionYear: 2020,
    },

    // ============================================
    // CHINA DOMESTIC PROJECTS (For Credibility)
    // ============================================
    {
        id: 'yangcheng-kunshan',
        slug: 'yangcheng-kunshan',
        title: 'Yangcheng Real Estate',
        location: 'Kunshan, Jiangsu',
        country: 'China',
        type: 'residential',
        elevatorType: 'Passenger Elevators',
        units: 304,
        developer: 'Suzhou Yangcheng Real Estate',
        description:
            'Large-scale residential development with 304 elevator units, establishing HSFTECH\'s reputation for high-volume installations.',
        images: ['/images/projects/yangcheng.jpg'],
        featured: false,
        completionYear: 2019,
    },
    {
        id: 'ruicheng-xinbo',
        slug: 'ruicheng-xinbo-jiayuan',
        title: 'Ruicheng Real Estate - Xinbo Jiayuan',
        location: 'Zhang Pu, Kunshan',
        country: 'China',
        type: 'residential',
        elevatorType: 'Passenger Elevators',
        units: 176,
        developer: 'Kunshan Ruicheng Real Estate',
        description:
            'Multi-phase residential project with 176 units as part of a larger 425-unit development.',
        images: ['/images/projects/ruicheng.jpg'],
        featured: false,
        completionYear: 2020,
    },
    {
        id: 'jintang-longmuwan',
        slug: 'jintang-longmuwan',
        title: 'Jintang Longmuwan',
        location: 'Kunshan, Jiangsu',
        country: 'China',
        type: 'residential',
        elevatorType: 'Residential & Villa Elevators',
        units: 164,
        developer: 'Suzhou Jinfeiya Real Estate',
        description:
            'Mixed residential and villa development combining apartment elevators with luxury villa installations.',
        images: ['/images/projects/jintang.jpg'],
        featured: false,
        completionYear: 2018,
    },
    {
        id: 'guanfu-harbin',
        slug: 'guanfu-international',
        title: 'Guanfu International',
        location: 'Harbin, Heilongjiang',
        country: 'China',
        type: 'residential',
        elevatorType: 'Passenger Elevators',
        units: 155,
        developer: 'Harbin Guanfu Cultural Investment',
        description:
            'Northern China residential complex with cold-climate engineered elevator systems.',
        images: ['/images/projects/guanfu.jpg'],
        featured: false,
        completionYear: 2019,
    },
    {
        id: 'world-expo-german',
        slug: 'world-expo-german-pavilion',
        title: 'World Expo German Pavilion',
        location: 'Shanghai',
        country: 'China',
        type: 'mixed-use',
        elevatorType: 'Customized Passenger',
        units: 5,
        description:
            'Prestigious installation at the World Expo German Pavilion, showcasing HSFTECH\'s partnership with German engineering excellence.',
        specifications: {
            features: [
                'Custom design',
                'Exhibition-grade',
                'German Pavilion showcase',
            ],
        },
        images: ['/images/projects/world-expo.jpg'],
        featured: true,
        completionYear: 2010,
    },
    {
        id: 'midea-wuhu',
        slug: 'midea-group-wuhu',
        title: 'Midea Group Factory',
        location: 'Wuhu, Anhui',
        country: 'China',
        type: 'industrial',
        elevatorType: 'F100 Freight Elevators',
        units: 30,
        description:
            'Industrial freight elevator installation for Midea Group\'s manufacturing facility, handling heavy logistics requirements.',
        specifications: {
            features: ['F100 Series', 'Heavy-duty freight', 'Industrial grade', 'High capacity'],
        },
        images: ['/images/projects/midea-wuhu.jpg'],
        featured: false,
        completionYear: 2020,
    },
    {
        id: 'urumqi-station',
        slug: 'urumqi-station',
        title: 'Urumqi Station',
        location: 'Xinjiang',
        country: 'China',
        type: 'public-transit',
        elevatorType: 'Heavy-duty Escalators',
        units: 19,
        description:
            'Heavy-duty public facility escalators designed for extreme temperature variations in Xinjiang.',
        specifications: {
            features: [
                'Heavy-duty construction',
                'Extreme temperature tolerance',
                'Public transit grade',
            ],
        },
        images: ['/images/projects/urumqi.jpg'],
        featured: false,
        completionYear: 2019,
    },
    {
        id: 'shenzhen-university',
        slug: 'shenzhen-university',
        title: 'Shenzhen University',
        location: 'Shenzhen, Guangdong',
        country: 'China',
        type: 'educational',
        elevatorType: 'Passenger Elevators',
        units: 7,
        developer: 'Shenzhen Yinguangsha Architectural',
        description:
            'University campus elevator installation providing accessibility across academic buildings.',
        images: ['/images/projects/shenzhen-uni.jpg'],
        featured: false,
        completionYear: 2018,
    },
]

// Featured projects for homepage
export const featuredProjects = projects.filter((p) => p.featured)

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}

// Get projects by type
export function getProjectsByType(type: string): Project[] {
    return projects.filter((p) => p.type === type)
}

// Get projects by country
export function getProjectsByCountry(country: string): Project[] {
    return projects.filter((p) => p.country === country)
}

// Get all unique countries
export function getProjectCountries(): string[] {
    return Array.from(new Set(projects.map((p) => p.country)))
}

// Get all unique types
export function getProjectTypes(): string[] {
    return Array.from(new Set(projects.map((p) => p.type)))
}

// Project statistics
export const projectStats = {
    totalInternational: projects.filter((p) => p.country !== 'China').length,
    totalDomestic: projects.filter((p) => p.country === 'China').length,
    totalUnits: projects.reduce((sum, p) => sum + p.units, 0),
    countries: getProjectCountries().length,
}

