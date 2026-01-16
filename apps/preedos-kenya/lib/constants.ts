/**
 * Site-wide constants
 */

export const SITE_CONFIG = {
  name: 'Preedos Kenya',
  tagline: 'German Engineering Excellence in East Africa',
  description:
    "East Africa's premier provider of German-engineered elevator solutions. HSFTECH partnership delivering world-class vertical transportation.",
  url: 'https://preedos.ke',
  email: 'info@preedos.ke',
  phone: '+254 791 240 000',
  phoneSecondary: '+254 784 820 208',
  whatsapp: '+254791240000',
  address: {
    street: '54 Muthithi Road, Westlands',
    city: 'Nairobi',
    country: 'Kenya',
    postalCode: '00100',
  },
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed',
    emergency: '24/7 Emergency Support',
  },
  social: {
    facebook: 'https://facebook.com/preedoskenya',
    twitter: 'https://twitter.com/preedoskenya',
    linkedin: 'https://linkedin.com/company/preedoskenya',
    instagram: 'https://instagram.com/preedoskenya',
  },
} as const

export const HSFTECH_INFO = {
  name: 'HSFTECH',
  fullName: 'Suzhou Hansif Industrial Technology Co., Ltd',
  founded: 2010,
  headquarters: 'Suzhou City, Jiangsu Province, China',
  factorySize: '100,000 m²',
  annualCapacity: 12000,
  globalPresence: '50+ countries',
  projectsCompleted: '800+',
  cities: '200+',
  philosophy: 'Intelligence, Environmental-Friendliness, and Supreme Service',
  website: 'https://www.hsfelevator.com',
} as const

export const STATS = [
  {
    value: 12000,
    suffix: '+',
    label: 'Units Annually',
    description: 'Production capacity',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Countries',
    description: 'Global presence',
  },
  {
    value: 800,
    suffix: '+',
    label: 'Projects',
    description: 'Worldwide',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Cities',
    description: 'Served globally',
  },
] as const

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Contact', href: '/contact' },
  ],
  products: [
    { label: 'Passenger Elevators', href: '/products/passenger-elevators' },
    { label: 'Freight Elevators', href: '/products/freight-elevators' },
    { label: 'Hospital Elevators', href: '/products/hospital-elevators' },
    { label: 'Panoramic Elevators', href: '/products/panoramic-elevators' },
    { label: 'Home Elevators', href: '/products/home-elevators' },
    { label: 'Escalators', href: '/products/escalators' },
    { label: 'Moving Walks', href: '/products/moving-walks' },
    { label: 'Modernization', href: '/products/modernization' },
  ],
  solutions: [
    { label: 'Residential', href: '/solutions/residential' },
    { label: 'Commercial', href: '/solutions/commercial' },
    { label: 'Healthcare', href: '/solutions/healthcare' },
    { label: 'Hospitality', href: '/solutions/hospitality' },
    { label: 'Industrial', href: '/solutions/industrial' },
    { label: 'Public Transit', href: '/solutions/public-transit' },
  ],
  resources: [
    { label: 'FAQs', href: '/resources/faqs' },
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Downloads', href: '/resources/downloads' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const

export const SERVICES = [
  {
    id: 'consultation',
    title: 'Consultation & Design',
    description:
      'Expert guidance from initial concept to final design, ensuring optimal elevator solutions for your project.',
    icon: 'clipboard-list',
    features: [
      'Free site assessment',
      'Traffic analysis',
      'Custom engineering',
      'Regulatory compliance',
    ],
  },
  {
    id: 'installation',
    title: 'Installation',
    description:
      'Professional installation by certified technicians following German engineering standards.',
    icon: 'wrench',
    features: [
      'Project management',
      'Quality assurance',
      'Safety protocols',
      'Post-installation inspection',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description:
      '24/7 maintenance services to ensure your elevators operate at peak performance.',
    icon: 'settings',
    features: [
      'Preventive maintenance',
      '24/7 emergency response',
      'Remote monitoring',
      'Spare parts availability',
    ],
  },
  {
    id: 'modernization',
    title: 'Modernization',
    description:
      'Upgrade existing systems with latest technology for improved safety, efficiency, and aesthetics.',
    icon: 'refresh-cw',
    features: [
      'System assessment',
      'Energy efficiency upgrades',
      'Safety enhancements',
      'Aesthetic renovations',
    ],
  },
  {
    id: 'supply',
    title: 'Parts & Components',
    description:
      'Genuine HSFTECH parts and components for all elevator and escalator systems.',
    icon: 'package',
    features: [
      'Original parts',
      'Fast delivery',
      'Technical support',
      'Warranty coverage',
    ],
  },
  {
    id: 'training',
    title: 'Training & Certification',
    description:
      'Comprehensive training programs for operators, maintenance staff, and building managers.',
    icon: 'graduation-cap',
    features: [
      'Operator training',
      'Maintenance certification',
      'Safety protocols',
      'Building manager education',
    ],
  },
] as const

export const KENYA_REGIONS = [
  'Nairobi',
  'Mombasa',
  'Kisumu',
  'Nakuru',
  'Eldoret',
  'Thika',
  'Malindi',
  'Kitale',
  'Garissa',
  'Nyeri',
  'Machakos',
  'Meru',
  'Lamu',
  'Other',
] as const

export const BUILDING_TYPES = [
  { value: 'residential', label: 'Residential Building' },
  { value: 'commercial', label: 'Commercial/Office' },
  { value: 'hospital', label: 'Hospital/Medical' },
  { value: 'hotel', label: 'Hotel/Hospitality' },
  { value: 'industrial', label: 'Industrial/Logistics' },
  { value: 'mixed', label: 'Mixed-Use' },
  { value: 'retail', label: 'Retail/Shopping' },
  { value: 'educational', label: 'Educational' },
] as const

export const ELEVATOR_TYPES = [
  { value: 'passenger', label: 'Passenger Elevator' },
  { value: 'freight', label: 'Freight/Cargo Elevator' },
  { value: 'hospital', label: 'Hospital Elevator' },
  { value: 'panoramic', label: 'Panoramic/Glass Elevator' },
  { value: 'home', label: 'Home/Villa Elevator' },
  { value: 'escalator', label: 'Escalator' },
  { value: 'moving-walk', label: 'Moving Walk' },
] as const

export const ELEVATOR_CAPACITIES = [
  { value: '450', label: '6 persons (450kg)' },
  { value: '630', label: '8 persons (630kg)' },
  { value: '800', label: '10 persons (800kg)' },
  { value: '1000', label: '13 persons (1000kg)' },
  { value: '1150', label: '15 persons (1150kg)' },
  { value: '1600', label: '20 persons (1600kg)' },
  { value: 'custom', label: 'Custom capacity' },
] as const

export const ELEVATOR_SPEEDS = [
  { value: 'standard', label: 'Standard (1.0-1.5 m/s)' },
  { value: 'high', label: 'High-speed (1.75-2.5 m/s)' },
  { value: 'ultra', label: 'Ultra high-speed (3.0+ m/s)' },
] as const
