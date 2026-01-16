/**
 * Project types
 */
export interface Project {
  id: string
  slug: string
  title: string
  location: string
  country: string
  type: ProjectType
  elevatorType: string
  units: number
  developer?: string
  description: string
  challenge?: string
  solution?: string
  specifications?: ProjectSpecifications
  images: string[]
  featured: boolean
  testimonial?: Testimonial
  completionYear?: number
}

export type ProjectType =
  | 'residential'
  | 'commercial'
  | 'hotel'
  | 'hospital'
  | 'industrial'
  | 'public-transit'
  | 'educational'
  | 'mixed-use'
  | 'logistics'

export interface ProjectSpecifications {
  capacity?: string
  speed?: string
  floors?: number
  travelHeight?: string
  doorType?: string
  features?: string[]
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

/**
 * Product types
 */
export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  series?: string
  tagline: string
  description: string
  features: string[]
  specifications: ProductSpecification[]
  applications: string[]
  images: string[]
  brochureUrl?: string
}

export type ProductCategory =
  | 'passenger-elevators'
  | 'freight-elevators'
  | 'hospital-elevators'
  | 'panoramic-elevators'
  | 'home-elevators'
  | 'escalators'
  | 'moving-walks'
  | 'modernization'

export interface ProductSpecification {
  label: string
  value: string
}

/**
 * Service types
 */
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image?: string
}

/**
 * FAQ types
 */
export interface FAQ {
  id: string
  question: string
  answer: string
  category: FAQCategory
}

export type FAQCategory =
  | 'general'
  | 'products'
  | 'installation'
  | 'maintenance'
  | 'pricing'
  | 'technical'

/**
 * Team member types
 */
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  email?: string
}

/**
 * Blog post types
 */
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: Author
  publishedAt: string
  updatedAt?: string
  category: BlogCategory
  tags: string[]
  image: string
  readingTime: number
}

export interface Author {
  name: string
  role: string
  image: string
  bio?: string
}

export type BlogCategory =
  | 'news'
  | 'guides'
  | 'technology'
  | 'case-studies'
  | 'industry'

/**
 * Calculator types
 */
export interface CalculatorInput {
  buildingType: string
  floors: number
  elevatorCount: number
  elevatorType: string
  capacity: string
  speed: string
  location: string
  features: CalculatorFeature[]
  timeline: 'urgent' | 'standard' | 'flexible'
}

export interface CalculatorFeature {
  id: string
  label: string
  selected: boolean
  priceModifier: number
}

export interface CalculatorResult {
  priceRange: {
    min: number
    max: number
    currency: 'KES' | 'USD'
  }
  recommendedModel: string
  specifications: string[]
  timeline: string
  energyRating: string
  annualMaintenance: {
    min: number
    max: number
  }
}

/**
 * Contact form types
 */
export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  subject: string
  message: string
  projectType?: string
  budget?: string
}

export interface QuoteRequestData extends ContactFormData {
  buildingType: string
  floors: number
  elevatorCount: number
  elevatorType: string
  additionalRequirements?: string
}

/**
 * Navigation types
 */
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

/**
 * Solution types
 */
export interface Solution {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  products: string[]
  caseStudies: string[]
  image: string
}
