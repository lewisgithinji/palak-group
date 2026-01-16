import { Testimonial } from '@/types'

/**
 * Client Testimonials Database
 */

export const testimonials: Testimonial[] = [
    {
        quote:
            'Preedos Kenya delivered exactly what they promised. The elevator installation was completed on time, and the quality of the HSFTECH equipment is exceptional. Our residents are delighted with the smooth, quiet operation.',
        author: 'John Kariuki',
        role: 'Managing Director',
        company: 'Ace Towers Ltd',
        image: '/images/testimonials/john-kariuki.jpg',
    },
    {
        quote:
            'We were impressed by the professionalism of the Preedos team from initial consultation to final handover. They understood our hospital\'s unique requirements and delivered a solution that perfectly serves our patients and staff.',
        author: 'Dr. Sarah Omondi',
        role: 'Hospital Administrator',
        company: 'Nairobi Medical Center',
        image: '/images/testimonials/sarah-omondi.jpg',
    },
    {
        quote:
            'The panoramic elevator has become the centerpiece of our hotel lobby. Guests constantly comment on how beautiful and smooth the ride is. It\'s exceeded our expectations in every way.',
        author: 'Michael Mwamba',
        role: 'General Manager',
        company: 'Sunset Beach Resort',
        image: '/images/testimonials/michael-mwamba.jpg',
    },
    {
        quote:
            'As property developers, we need reliable partners. Preedos Kenya has installed elevators in three of our projects now. Their consistency, quality, and after-sales support are unmatched in Kenya.',
        author: 'Alice Mutua',
        role: 'Chief Operating Officer',
        company: 'Urban Heights Development',
        image: '/images/testimonials/alice-mutua.jpg',
    },
    {
        quote:
            'The freight elevator has transformed our warehouse operations. We can now move heavy equipment between floors efficiently and safely. The maintenance team responds within hours when needed.',
        author: 'Richard Oduor',
        role: 'Operations Manager',
        company: 'East African Logistics',
        image: '/images/testimonials/richard-oduor.jpg',
    },
    {
        quote:
            'Their home elevator solution allowed my elderly parents to continue living comfortably in their two-story home. The installation was quick and the elevator blends perfectly with our interior.',
        author: 'Christine Wangari',
        role: 'Homeowner',
        company: 'Private Residence, Karen',
        image: '/images/testimonials/christine-wangari.jpg',
    },
]

// Featured testimonials for homepage (3)
export const featuredTestimonials = testimonials.slice(0, 3)

// Get random testimonials
export function getRandomTestimonials(count: number): Testimonial[] {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}
