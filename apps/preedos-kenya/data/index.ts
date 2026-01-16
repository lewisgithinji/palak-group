/**
 * Data Layer Index
 * Central export for all static data
 */

// Projects
export { projects, featuredProjects, getProjectBySlug, getProjectsByType, getProjectsByCountry, getProjectCountries, getProjectTypes, projectStats } from './projects'

// Products
export { products, getProductsByCategory, getProductBySlug, getProductCategories, categoryDisplayNames, categoryDescriptions } from './products'

// FAQs
export { faqs, getFAQsByCategory, getFAQCategories, searchFAQs, featuredFAQs } from './faqs'

// Solutions
export { solutions, getSolutionBySlug, featuredSolutions } from './solutions'

// Team
export { teamMembers, leadershipTeam, getTeamMemberById } from './team'

// Testimonials
export { testimonials, featuredTestimonials, getRandomTestimonials } from './testimonials'

// Pricing
export { basePrices, speedModifiers, capacityModifiers, featureAddons, regionFactors, calculateEstimate, formatPrice, USD_TO_KES } from './pricing'
