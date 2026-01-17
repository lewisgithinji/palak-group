'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    ArrowRight,
    ArrowLeft,
    Building2,
    Calculator,
    CheckCircle,
    Phone,
    Mail,
    User,
    Briefcase,
    Layers,
    Users,
    Settings,
    Zap,
    Shield,
    Download,
    Send,
    Save,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { downloadQuotePDF, type QuoteData } from '@/lib/pdf-generator'

// Pricing configuration (base prices in USD)
const PRICING = {
    elevator: {
        base: 25000,
        perFloor: 3500,
        capacity: {
            '6': 0,
            '8': 2500,
            '13': 5000,
            '21': 8500,
            '26': 12000,
        },
        speed: {
            '1.0': 0,
            '1.6': 3000,
            '2.5': 7500,
            '4.0': 15000,
        },
        features: {
            'destination-dispatch': 8500,
            'emergency-power': 4500,
            'smart-control': 6000,
            'premium-cabin': 12000,
            'voice-announce': 2000,
        },
    },
    escalator: {
        base: 45000,
        perMeter: 1500,
        width: {
            '600': 0,
            '800': 5000,
            '1000': 10000,
        },
        speed: {
            '0.5': 0,
            '0.65': 3500,
        },
        features: {
            'energy-saving': 5000,
            'direction-auto': 3500,
            'safety-sensors': 4000,
            'led-lighting': 2500,
        },
    },
    'moving-walk': {
        base: 35000,
        perMeter: 1200,
        width: {
            '800': 0,
            '1000': 4000,
            '1200': 8000,
        },
        inclination: {
            '0': 0,
            '10': 6000,
            '12': 8000,
        },
        features: {
            'cart-compatible': 3000,
            'variable-speed': 4500,
            'energy-recovery': 6500,
        },
    },
}

const PRODUCT_TYPES = [
    {
        id: 'elevator',
        name: 'Elevator',
        description: 'Passenger, freight, or panoramic elevators',
        icon: Building2,
    },
    {
        id: 'escalator',
        name: 'Escalator',
        description: 'Indoor and outdoor escalators',
        icon: Layers,
    },
    {
        id: 'moving-walk',
        name: 'Moving Walk',
        description: 'Horizontal and inclined moving walks',
        icon: ArrowRight,
    },
]

export default function EstimatePage() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        productType: '',
        // Elevator specific
        floors: 5,
        capacity: '8',
        elevatorSpeed: '1.6',
        // Escalator specific
        escalatorLength: 6,
        escalatorWidth: '800',
        escalatorSpeed: '0.5',
        // Moving walk specific
        walkLength: 20,
        walkWidth: '1000',
        inclination: '0',
        // Features
        selectedFeatures: [] as string[],
        // Contact info
        name: '',
        email: '',
        phone: '',
        company: '',
        projectDetails: '',
        timeline: 'flexible',
    })
    const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)
    const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [savedConfig, setSavedConfig] = useState(false)

    // Load saved configuration from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('preedos-estimate-config')
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                setFormData((prev) => ({ ...prev, ...parsed.formData }))
                if (parsed.estimatedPrice) {
                    setEstimatedPrice(parsed.estimatedPrice)
                }
                setSavedConfig(true)
            } catch (e) {
                console.error('Failed to load saved configuration:', e)
            }
        }
    }, [])

    // Save configuration to local storage whenever relevant data changes
    useEffect(() => {
        if (formData.productType) {
            const dataToSave = {
                formData: {
                    productType: formData.productType,
                    floors: formData.floors,
                    capacity: formData.capacity,
                    elevatorSpeed: formData.elevatorSpeed,
                    escalatorLength: formData.escalatorLength,
                    escalatorWidth: formData.escalatorWidth,
                    escalatorSpeed: formData.escalatorSpeed,
                    walkLength: formData.walkLength,
                    walkWidth: formData.walkWidth,
                    inclination: formData.inclination,
                    selectedFeatures: formData.selectedFeatures,
                },
                estimatedPrice,
                savedAt: new Date().toISOString(),
            }
            localStorage.setItem('preedos-estimate-config', JSON.stringify(dataToSave))
        }
    }, [formData.productType, formData.floors, formData.capacity, formData.elevatorSpeed,
    formData.escalatorLength, formData.escalatorWidth, formData.escalatorSpeed,
    formData.walkLength, formData.walkWidth, formData.inclination,
    formData.selectedFeatures, estimatedPrice])

    const calculateEstimate = () => {
        let total = 0
        const type = formData.productType as keyof typeof PRICING

        if (type === 'elevator') {
            const config = PRICING.elevator
            total = config.base
            total += formData.floors * config.perFloor
            total += config.capacity[formData.capacity as keyof typeof config.capacity] || 0
            total += config.speed[formData.elevatorSpeed as keyof typeof config.speed] || 0
            formData.selectedFeatures.forEach((feature) => {
                total += config.features[feature as keyof typeof config.features] || 0
            })
        } else if (type === 'escalator') {
            const config = PRICING.escalator
            total = config.base
            total += formData.escalatorLength * config.perMeter
            total += config.width[formData.escalatorWidth as keyof typeof config.width] || 0
            total += config.speed[formData.escalatorSpeed as keyof typeof config.speed] || 0
            formData.selectedFeatures.forEach((feature) => {
                total += config.features[feature as keyof typeof config.features] || 0
            })
        } else if (type === 'moving-walk') {
            const config = PRICING['moving-walk']
            total = config.base
            total += formData.walkLength * config.perMeter
            total += config.width[formData.walkWidth as keyof typeof config.width] || 0
            total += config.inclination[formData.inclination as keyof typeof config.inclination] || 0
            formData.selectedFeatures.forEach((feature) => {
                total += config.features[feature as keyof typeof config.features] || 0
            })
        }

        setEstimatedPrice(total)
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price)
    }

    const handleNext = () => {
        if (step === 2) {
            calculateEstimate()
        }
        setStep(step + 1)
    }

    const handleBack = () => {
        setStep(step - 1)
    }

    const toggleFeature = (feature: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedFeatures: prev.selectedFeatures.includes(feature)
                ? prev.selectedFeatures.filter((f) => f !== feature)
                : [...prev.selectedFeatures, feature],
        }))
    }

    const handleDownloadPDF = () => {
        if (!estimatedPrice) return

        const quoteData: QuoteData = {
            productType: formData.productType,
            floors: formData.floors,
            capacity: formData.capacity,
            elevatorSpeed: formData.elevatorSpeed,
            escalatorLength: formData.escalatorLength,
            escalatorWidth: formData.escalatorWidth,
            escalatorSpeed: formData.escalatorSpeed,
            walkLength: formData.walkLength,
            walkWidth: formData.walkWidth,
            inclination: formData.inclination,
            selectedFeatures: formData.selectedFeatures,
            estimatedPrice,
            name: formData.name || 'Prospective Client',
            email: formData.email || 'info@example.com',
            phone: formData.phone || 'N/A',
            company: formData.company,
            timeline: formData.timeline,
            quoteDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
        }

        downloadQuotePDF(quoteData)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill in all required fields')
            return
        }

        setSubmissionState('submitting')

        try {
            const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'YOUR_FORMSPREE_ID'
            const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    timeline: formData.timeline,
                    projectDetails: formData.projectDetails,
                    productType: formData.productType,
                    estimatedPrice: estimatedPrice ? formatPrice(estimatedPrice) : 'N/A',
                    specifications: {
                        floors: formData.floors,
                        capacity: formData.capacity,
                        elevatorSpeed: formData.elevatorSpeed,
                        escalatorLength: formData.escalatorLength,
                        escalatorWidth: formData.escalatorWidth,
                        walkLength: formData.walkLength,
                        walkWidth: formData.walkWidth,
                        inclination: formData.inclination,
                    },
                    selectedFeatures: formData.selectedFeatures.join(', '),
                    _subject: `New Quote Request from ${formData.name} - ${formatPrice(estimatedPrice || 0)}`,
                }),
            })

            if (!response.ok) {
                throw new Error('Form submission failed')
            }

            setSubmissionState('success')

            // Automatically download PDF after successful submission
            handleDownloadPDF()
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmissionState('error')
        }
    }

    const clearSavedConfiguration = () => {
        localStorage.removeItem('preedos-estimate-config')
        setSavedConfig(false)
        // Reset form
        setFormData({
            productType: '',
            floors: 5,
            capacity: '8',
            elevatorSpeed: '1.6',
            escalatorLength: 6,
            escalatorWidth: '800',
            escalatorSpeed: '0.5',
            walkLength: 20,
            walkWidth: '1000',
            inclination: '0',
            selectedFeatures: [],
            name: '',
            email: '',
            phone: '',
            company: '',
            projectDetails: '',
            timeline: 'flexible',
        })
        setEstimatedPrice(null)
        setStep(1)
    }

    const getFeatureOptions = () => {
        if (formData.productType === 'elevator') {
            return [
                { id: 'destination-dispatch', name: 'Destination Dispatch', price: '+$8,500' },
                { id: 'emergency-power', name: 'Emergency Power System', price: '+$4,500' },
                { id: 'smart-control', name: 'Smart Building Integration', price: '+$6,000' },
                { id: 'premium-cabin', name: 'Premium Cabin Finish', price: '+$12,000' },
                { id: 'voice-announce', name: 'Voice Announcements', price: '+$2,000' },
            ]
        } else if (formData.productType === 'escalator') {
            return [
                { id: 'energy-saving', name: 'Energy Saving Mode', price: '+$5,000' },
                { id: 'direction-auto', name: 'Auto Direction Switch', price: '+$3,500' },
                { id: 'safety-sensors', name: 'Advanced Safety Sensors', price: '+$4,000' },
                { id: 'led-lighting', name: 'LED Step Lighting', price: '+$2,500' },
            ]
        } else {
            return [
                { id: 'cart-compatible', name: 'Shopping Cart Compatible', price: '+$3,000' },
                { id: 'variable-speed', name: 'Variable Speed Control', price: '+$4,500' },
                { id: 'energy-recovery', name: 'Energy Recovery System', price: '+$6,500' },
            ]
        }
    }

    return (
        <main className="min-h-screen bg-secondary-50 pt-24 pb-16">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        <Calculator className="h-4 w-4" />
                        Instant Quote Calculator
                    </span>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                        Get Your Free Estimate
                    </h1>
                    <p className="text-lg text-secondary-600">
                        Use our calculator to get an instant estimate, then submit your details for a
                        customized quote from our team.
                    </p>
                </div>

                {/* Saved Configuration Notice */}
                {savedConfig && step === 1 && (
                    <div className="max-w-3xl mx-auto mb-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <Save className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-blue-900">
                                        Previous configuration loaded
                                    </p>
                                    <p className="text-sm text-blue-700">
                                        We&apos;ve restored your last estimate to save you time.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={clearSavedConfiguration}
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Start Fresh
                            </button>
                        </div>
                    </div>
                )}

                {/* Progress Steps */}
                <div className="max-w-3xl mx-auto mb-10">
                    <div className="flex items-center justify-between">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center flex-1">
                                <div
                                    className={cn(
                                        'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all',
                                        step >= s
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-secondary-200 text-secondary-500'
                                    )}
                                >
                                    {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                                </div>
                                {s < 4 && (
                                    <div
                                        className={cn(
                                            'flex-1 h-1 mx-2 rounded',
                                            step > s ? 'bg-primary-600' : 'bg-secondary-200'
                                        )}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-sm text-secondary-600">Product</span>
                        <span className="text-sm text-secondary-600">Specifications</span>
                        <span className="text-sm text-secondary-600">Estimate</span>
                        <span className="text-sm text-secondary-600">Contact</span>
                    </div>
                </div>

                {/* Step Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Step 1: Product Selection */}
                    {step === 1 && (
                        <Card padding="lg" className="animate-in fade-in">
                            <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                                Select Product Type
                            </h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {PRODUCT_TYPES.map((product) => {
                                    const Icon = product.icon
                                    return (
                                        <button
                                            key={product.id}
                                            onClick={() => setFormData({ ...formData, productType: product.id, selectedFeatures: [] })}
                                            className={cn(
                                                'p-6 rounded-xl border-2 text-left transition-all hover:shadow-md',
                                                formData.productType === product.id
                                                    ? 'border-primary-600 bg-primary-50'
                                                    : 'border-secondary-200 bg-white'
                                            )}
                                        >
                                            <Icon
                                                className={cn(
                                                    'h-10 w-10 mb-4',
                                                    formData.productType === product.id
                                                        ? 'text-primary-600'
                                                        : 'text-secondary-400'
                                                )}
                                            />
                                            <h3 className="font-semibold text-secondary-900 mb-1">{product.name}</h3>
                                            <p className="text-sm text-secondary-600">{product.description}</p>
                                        </button>
                                    )
                                })}
                            </div>
                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={handleNext}
                                    disabled={!formData.productType}
                                    rightIcon={<ArrowRight className="h-5 w-5" />}
                                >
                                    Continue
                                </Button>
                            </div>
                        </Card>
                    )}

                    {/* Step 2: Specifications */}
                    {step === 2 && (
                        <Card padding="lg" className="animate-in fade-in">
                            <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                                Configure Your {formData.productType.charAt(0).toUpperCase() + formData.productType.slice(1).replace('-', ' ')}
                            </h2>

                            {formData.productType === 'elevator' && (
                                <div className="space-y-8">
                                    {/* Floors */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Number of Floors
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="range"
                                                min="2"
                                                max="30"
                                                value={formData.floors}
                                                onChange={(e) => setFormData({ ...formData, floors: parseInt(e.target.value) })}
                                                className="flex-1 h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                            />
                                            <span className="w-16 text-center font-semibold text-secondary-900">
                                                {formData.floors} floors
                                            </span>
                                        </div>
                                    </div>

                                    {/* Capacity */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Passenger Capacity
                                        </label>
                                        <div className="grid grid-cols-5 gap-2">
                                            {[
                                                { value: '6', label: '6 persons' },
                                                { value: '8', label: '8 persons' },
                                                { value: '13', label: '13 persons' },
                                                { value: '21', label: '21 persons' },
                                                { value: '26', label: '26 persons' },
                                            ].map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => setFormData({ ...formData, capacity: option.value })}
                                                    className={cn(
                                                        'p-3 rounded-lg border text-center text-sm transition-all',
                                                        formData.capacity === option.value
                                                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                            : 'border-secondary-200 bg-white hover:border-secondary-300'
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Speed */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Travel Speed
                                        </label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[
                                                { value: '1.0', label: '1.0 m/s' },
                                                { value: '1.6', label: '1.6 m/s' },
                                                { value: '2.5', label: '2.5 m/s' },
                                                { value: '4.0', label: '4.0 m/s' },
                                            ].map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => setFormData({ ...formData, elevatorSpeed: option.value })}
                                                    className={cn(
                                                        'p-3 rounded-lg border text-center text-sm transition-all',
                                                        formData.elevatorSpeed === option.value
                                                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                            : 'border-secondary-200 bg-white hover:border-secondary-300'
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {formData.productType === 'escalator' && (
                                <div className="space-y-8">
                                    {/* Length */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Escalator Length (meters)
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="range"
                                                min="3"
                                                max="20"
                                                value={formData.escalatorLength}
                                                onChange={(e) => setFormData({ ...formData, escalatorLength: parseInt(e.target.value) })}
                                                className="flex-1 h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                            />
                                            <span className="w-16 text-center font-semibold text-secondary-900">
                                                {formData.escalatorLength}m
                                            </span>
                                        </div>
                                    </div>

                                    {/* Width */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Step Width
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { value: '600', label: '600mm (Single)' },
                                                { value: '800', label: '800mm (Standard)' },
                                                { value: '1000', label: '1000mm (Wide)' },
                                            ].map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => setFormData({ ...formData, escalatorWidth: option.value })}
                                                    className={cn(
                                                        'p-3 rounded-lg border text-center text-sm transition-all',
                                                        formData.escalatorWidth === option.value
                                                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                            : 'border-secondary-200 bg-white hover:border-secondary-300'
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {formData.productType === 'moving-walk' && (
                                <div className="space-y-8">
                                    {/* Length */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Moving Walk Length (meters)
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="range"
                                                min="5"
                                                max="100"
                                                value={formData.walkLength}
                                                onChange={(e) => setFormData({ ...formData, walkLength: parseInt(e.target.value) })}
                                                className="flex-1 h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                            />
                                            <span className="w-16 text-center font-semibold text-secondary-900">
                                                {formData.walkLength}m
                                            </span>
                                        </div>
                                    </div>

                                    {/* Width */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Pallet Width
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { value: '800', label: '800mm' },
                                                { value: '1000', label: '1000mm' },
                                                { value: '1200', label: '1200mm' },
                                            ].map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => setFormData({ ...formData, walkWidth: option.value })}
                                                    className={cn(
                                                        'p-3 rounded-lg border text-center text-sm transition-all',
                                                        formData.walkWidth === option.value
                                                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                            : 'border-secondary-200 bg-white hover:border-secondary-300'
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Inclination */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                                            Inclination
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { value: '0', label: '0° (Horizontal)' },
                                                { value: '10', label: '10° Inclined' },
                                                { value: '12', label: '12° Inclined' },
                                            ].map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => setFormData({ ...formData, inclination: option.value })}
                                                    className={cn(
                                                        'p-3 rounded-lg border text-center text-sm transition-all',
                                                        formData.inclination === option.value
                                                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                            : 'border-secondary-200 bg-white hover:border-secondary-300'
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            <div className="mt-8 pt-8 border-t border-secondary-200">
                                <label className="block text-sm font-medium text-secondary-700 mb-3">
                                    Optional Features
                                </label>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {getFeatureOptions().map((feature) => (
                                        <button
                                            key={feature.id}
                                            onClick={() => toggleFeature(feature.id)}
                                            className={cn(
                                                'p-4 rounded-lg border text-left transition-all flex items-center justify-between',
                                                formData.selectedFeatures.includes(feature.id)
                                                    ? 'border-primary-600 bg-primary-50'
                                                    : 'border-secondary-200 bg-white hover:border-secondary-300'
                                            )}
                                        >
                                            <span className="font-medium text-secondary-800">{feature.name}</span>
                                            <span className="text-sm text-secondary-500">{feature.price}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 flex justify-between">
                                <Button variant="outline" onClick={handleBack} leftIcon={<ArrowLeft className="h-5 w-5" />}>
                                    Back
                                </Button>
                                <Button onClick={handleNext} rightIcon={<ArrowRight className="h-5 w-5" />}>
                                    Calculate Estimate
                                </Button>
                            </div>
                        </Card>
                    )}

                    {/* Step 3: Estimate Result */}
                    {step === 3 && (
                        <div className="animate-in fade-in">
                            <Card padding="lg" className="text-center mb-6">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calculator className="h-8 w-8 text-primary-600" />
                                </div>
                                <h2 className="text-xl font-semibold text-secondary-900 mb-2">
                                    Your Estimated Price
                                </h2>
                                <div className="text-5xl font-bold text-primary-600 mb-2">
                                    {estimatedPrice && formatPrice(estimatedPrice)}
                                </div>
                                <p className="text-secondary-600 mb-6">
                                    *This is an approximate estimate. Final pricing depends on site conditions and
                                    installation requirements.
                                </p>

                                {/* Summary */}
                                <div className="bg-secondary-50 rounded-xl p-6 text-left max-w-md mx-auto">
                                    <h3 className="font-semibold text-secondary-900 mb-4">Quote Summary</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-secondary-600">Product Type:</span>
                                            <span className="font-medium text-secondary-900 capitalize">
                                                {formData.productType.replace('-', ' ')}
                                            </span>
                                        </div>
                                        {formData.productType === 'elevator' && (
                                            <>
                                                <div className="flex justify-between">
                                                    <span className="text-secondary-600">Floors:</span>
                                                    <span className="font-medium text-secondary-900">{formData.floors}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-secondary-600">Capacity:</span>
                                                    <span className="font-medium text-secondary-900">{formData.capacity} persons</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-secondary-600">Speed:</span>
                                                    <span className="font-medium text-secondary-900">{formData.elevatorSpeed} m/s</span>
                                                </div>
                                            </>
                                        )}
                                        {formData.selectedFeatures.length > 0 && (
                                            <div className="pt-2 border-t border-secondary-200">
                                                <span className="text-secondary-600">Features:</span>
                                                <ul className="mt-1 space-y-1">
                                                    {formData.selectedFeatures.map((f) => (
                                                        <li key={f} className="text-secondary-900 flex items-center gap-1">
                                                            <CheckCircle className="h-3 w-3 text-primary-500" />
                                                            {f.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>

                            <div className="flex flex-wrap gap-4">
                                <Button variant="outline" onClick={handleBack} leftIcon={<ArrowLeft className="h-5 w-5" />}>
                                    Modify Specifications
                                </Button>
                                <Button variant="outline" onClick={handleDownloadPDF} leftIcon={<Download className="h-5 w-5" />}>
                                    Download PDF
                                </Button>
                                <Button onClick={handleNext} rightIcon={<ArrowRight className="h-5 w-5" />} className="flex-1 sm:flex-none">
                                    Get Official Quote
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Contact Form */}
                    {step === 4 && (
                        <Card padding="lg" className="animate-in fade-in">
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                                        Request Your Official Quote
                                    </h2>
                                    <p className="text-secondary-600 mb-6">
                                        Complete the form below and our team will send you a detailed proposal within 24
                                        hours.
                                    </p>

                                    {submissionState === 'success' ? (
                                        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                                            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-green-800 mb-2">
                                                Quote Request Sent Successfully!
                                            </h3>
                                            <p className="text-green-700 mb-4">
                                                Thank you for your request. Our team will send you a detailed proposal within 24 hours.
                                            </p>
                                            <p className="text-sm text-green-600 mb-6">
                                                Your quote PDF has been downloaded automatically.
                                            </p>
                                            <div className="flex gap-3 justify-center">
                                                <Button variant="outline" onClick={handleDownloadPDF} leftIcon={<Download className="h-5 w-5" />}>
                                                    Download PDF Again
                                                </Button>
                                                <Button onClick={() => { setSubmissionState('idle'); clearSavedConfiguration(); }}>
                                                    Start New Quote
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                                                        Full Name *
                                                    </label>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                                                        <input
                                                            type="text"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                            placeholder="Your name"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                                                        Company
                                                    </label>
                                                    <div className="relative">
                                                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                                                        <input
                                                            type="text"
                                                            value={formData.company}
                                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                            placeholder="Company name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                                                        Email *
                                                    </label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                                                        <input
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                            placeholder="you@company.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                                                        Phone *
                                                    </label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                                                        <input
                                                            type="tel"
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                            placeholder="+254 791 240 000"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                                    Project Timeline
                                                </label>
                                                <div className="grid grid-cols-4 gap-2">
                                                    {[
                                                        { value: 'urgent', label: 'Urgent' },
                                                        { value: '3-months', label: '3 months' },
                                                        { value: '6-months', label: '6 months' },
                                                        { value: 'flexible', label: 'Flexible' },
                                                    ].map((option) => (
                                                        <button
                                                            key={option.value}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, timeline: option.value })}
                                                            className={cn(
                                                                'p-3 rounded-lg border text-center text-sm transition-all',
                                                                formData.timeline === option.value
                                                                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                                    : 'border-secondary-200 bg-white hover:border-secondary-300'
                                                            )}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                                    Additional Details
                                                </label>
                                                <textarea
                                                    value={formData.projectDetails}
                                                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                                                    rows={4}
                                                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                    placeholder="Tell us more about your project requirements, building type, or any specific needs..."
                                                />
                                            </div>

                                            {submissionState === 'error' && (
                                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                                                    <p>Something went wrong. Please try again or contact us directly.</p>
                                                </div>
                                            )}

                                            <div className="flex gap-4">
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={handleBack}
                                                    leftIcon={<ArrowLeft className="h-5 w-5" />}
                                                    disabled={submissionState === 'submitting'}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    className="flex-1"
                                                    rightIcon={submissionState === 'submitting' ? undefined : <Send className="h-5 w-5" />}
                                                    disabled={submissionState === 'submitting'}
                                                >
                                                    {submissionState === 'submitting' ? 'Sending...' : 'Submit Request'}
                                                </Button>
                                            </div>
                                        </form>
                                    )}
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    <Card padding="md" className="bg-primary-50 border-primary-100">
                                        <h3 className="font-semibold text-secondary-900 mb-2">Your Estimate</h3>
                                        <div className="text-3xl font-bold text-primary-600 mb-2">
                                            {estimatedPrice && formatPrice(estimatedPrice)}
                                        </div>
                                        <p className="text-sm text-secondary-600">
                                            Based on your specifications
                                        </p>
                                    </Card>

                                    <Card padding="md">
                                        <h3 className="font-semibold text-secondary-900 mb-4">Why Choose Us</h3>
                                        <ul className="space-y-3">
                                            {[
                                                { icon: Shield, text: 'German Engineering Standards' },
                                                { icon: Zap, text: 'Fast Installation' },
                                                { icon: Settings, text: '24/7 Support & Maintenance' },
                                                { icon: Users, text: '800+ Projects Completed' },
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-secondary-700">
                                                    <item.icon className="h-5 w-5 text-primary-500" />
                                                    {item.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    )
}
