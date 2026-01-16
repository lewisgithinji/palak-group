/**
 * Pricing Configuration for Calculator
 * Base prices in USD (converted to KES based on current rates)
 */

// Exchange rate (update periodically)
export const USD_TO_KES = 155

// Base prices by elevator type (in USD)
export const basePrices = {
    passenger: {
        standard: 25000,
        mrl: 30000,
        premium: 40000,
    },
    freight: {
        standard: 35000,
        heavyDuty: 50000,
    },
    hospital: {
        standard: 45000,
    },
    panoramic: {
        standard: 55000,
        custom: 75000,
    },
    home: {
        standard: 18000,
        premium: 25000,
    },
    escalator: {
        standard: 40000,
        heavyDuty: 60000,
    },
    movingWalk: {
        standard: 35000,
        extended: 55000,
    },
}

// Speed modifiers (percentage increase on base price)
export const speedModifiers = {
    standard: 0, // 1.0-1.5 m/s
    high: 0.15, // 1.75-2.5 m/s (+15%)
    ultra: 0.35, // 3.0+ m/s (+35%)
}

// Capacity modifiers (percentage increase on base price)
export const capacityModifiers = {
    '450': 0, // 6 persons (base)
    '630': 0.05, // 8 persons (+5%)
    '800': 0.10, // 10 persons (+10%)
    '1000': 0.18, // 13 persons (+18%)
    '1150': 0.25, // 15 persons (+25%)
    '1600': 0.40, // 20 persons (+40%)
    custom: 0.50, // Custom capacity (+50%)
}

// Floor/travel height modifiers (per floor above 5)
export const perFloorCost = {
    passenger: 1500,
    freight: 2000,
    hospital: 2000,
    panoramic: 2500,
    home: 1000,
}

// Feature add-ons (in USD)
export const featureAddons = {
    mrl: { label: 'Machine-Room-Less', price: 5000 },
    regenerative: { label: 'Regenerative Drive', price: 3000 },
    destinationControl: { label: 'Destination Control System', price: 8000 },
    smartAccess: { label: 'Smart Access Integration', price: 4000 },
    customCabin: { label: 'Custom Cabin Design', price: 6000 },
    monitoring247: { label: '24/7 Remote Monitoring', price: 2500 },
    fireService: { label: 'Fire Service Mode', price: 1500 },
    loadWeighing: { label: 'Load Weighing System', price: 1200 },
    voiceAnnouncement: { label: 'Voice Announcement', price: 800 },
    emergencyPower: { label: 'Emergency Power System', price: 5000 },
}

// Installation cost factor by region
export const regionFactors: Record<string, number> = {
    Nairobi: 1.0,
    Mombasa: 1.08,
    Kisumu: 1.12,
    Nakuru: 1.05,
    Eldoret: 1.10,
    Thika: 1.02,
    Malindi: 1.15,
    Kitale: 1.15,
    Garissa: 1.25,
    Nyeri: 1.08,
    Machakos: 1.03,
    Meru: 1.12,
    Lamu: 1.30,
    Other: 1.20,
}

// Annual maintenance cost (percentage of equipment value)
export const maintenanceRates = {
    basic: 0.015, // 1.5% annually
    standard: 0.02, // 2% annually
    comprehensive: 0.03, // 3% annually
}

// Installation timeline (weeks)
export const installationTimelines = {
    home: { min: 2, max: 4 },
    passenger: { min: 6, max: 10 },
    freight: { min: 8, max: 12 },
    hospital: { min: 8, max: 14 },
    panoramic: { min: 10, max: 16 },
    escalator: { min: 10, max: 14 },
    movingWalk: { min: 8, max: 12 },
}

// Calculate estimate
export function calculateEstimate(params: {
    elevatorType: string
    capacity: string
    speed: string
    floors: number
    count: number
    features: string[]
    region: string
}): {
    minPrice: number
    maxPrice: number
    currency: 'USD' | 'KES'
    timeline: string
    maintenanceMin: number
    maintenanceMax: number
} {
    const { elevatorType, capacity, speed, floors, count, features, region } = params

    // Get base price
    let basePrice = basePrices.passenger.mrl // Default
    if (elevatorType === 'freight') basePrice = basePrices.freight.standard
    else if (elevatorType === 'hospital') basePrice = basePrices.hospital.standard
    else if (elevatorType === 'panoramic') basePrice = basePrices.panoramic.standard
    else if (elevatorType === 'home') basePrice = basePrices.home.standard
    else if (elevatorType === 'escalator') basePrice = basePrices.escalator.standard
    else if (elevatorType === 'moving-walk') basePrice = basePrices.movingWalk.standard

    // Apply speed modifier
    const speedMod = speedModifiers[speed as keyof typeof speedModifiers] || 0
    basePrice *= 1 + speedMod

    // Apply capacity modifier
    const capacityMod = capacityModifiers[capacity as keyof typeof capacityModifiers] || 0
    basePrice *= 1 + capacityMod

    // Add per-floor cost
    const additionalFloors = Math.max(0, floors - 5)
    const floorCost = perFloorCost[elevatorType as keyof typeof perFloorCost] || 1500
    basePrice += additionalFloors * floorCost

    // Add features
    features.forEach((feature) => {
        if (featureAddons[feature as keyof typeof featureAddons]) {
            basePrice += featureAddons[feature as keyof typeof featureAddons].price
        }
    })

    // Apply region factor
    const regionFactor = regionFactors[region] || 1.2
    basePrice *= regionFactor

    // Multiply by count
    const totalPrice = basePrice * count

    // Add variance for estimate range
    const minPrice = Math.round(totalPrice * 0.9)
    const maxPrice = Math.round(totalPrice * 1.15)

    // Calculate maintenance
    const maintenanceMin = Math.round(totalPrice * maintenanceRates.basic)
    const maintenanceMax = Math.round(totalPrice * maintenanceRates.comprehensive)

    // Get timeline
    const timelineRange =
        installationTimelines[elevatorType as keyof typeof installationTimelines] ||
        installationTimelines.passenger
    const timeline = `${timelineRange.min}-${timelineRange.max} weeks`

    return {
        minPrice: minPrice * USD_TO_KES,
        maxPrice: maxPrice * USD_TO_KES,
        currency: 'KES',
        timeline,
        maintenanceMin: maintenanceMin * USD_TO_KES,
        maintenanceMax: maintenanceMax * USD_TO_KES,
    }
}

// Format price
export function formatPrice(amount: number, currency: 'USD' | 'KES' = 'KES'): string {
    return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}
