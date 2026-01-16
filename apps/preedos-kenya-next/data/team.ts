import { TeamMember } from '@/types'

/**
 * Team Members Database
 */

export const teamMembers: TeamMember[] = [
    {
        id: 'ceo',
        name: 'James Mwangi',
        role: 'Chief Executive Officer',
        bio: 'With over 20 years of experience in the construction and building services industry, James leads Preedos Kenya with a vision to transform vertical transportation in East Africa. His strategic partnerships and commitment to quality have established Preedos as the region\'s premier elevator solutions provider.',
        image: '/images/team/james-mwangi.jpg',
        linkedin: 'https://linkedin.com/in/jamesmwangi',
        email: 'james@preedos.ke',
    },
    {
        id: 'technical-director',
        name: 'Eng. Peter Ochieng',
        role: 'Technical Director',
        bio: 'A registered professional engineer with expertise in electromechanical systems, Peter oversees all technical operations from design to installation. Trained in Germany, he ensures that every installation meets the highest German engineering standards.',
        image: '/images/team/peter-ochieng.jpg',
        linkedin: 'https://linkedin.com/in/peterochieng',
        email: 'peter@preedos.ke',
    },
    {
        id: 'operations-manager',
        name: 'Grace Wanjiku',
        role: 'Operations Manager',
        bio: 'Grace brings exceptional organizational skills to manage projects across Kenya. With her background in logistics and operations management, she ensures every installation is completed on time and to specification.',
        image: '/images/team/grace-wanjiku.jpg',
        linkedin: 'https://linkedin.com/in/gracewanjiku',
        email: 'grace@preedos.ke',
    },
    {
        id: 'sales-manager',
        name: 'David Kamau',
        role: 'Sales & Business Development Manager',
        bio: 'David leads the sales team with his deep understanding of client needs and market dynamics. His consultative approach helps clients find the perfect elevator solutions for their specific requirements and budgets.',
        image: '/images/team/david-kamau.jpg',
        linkedin: 'https://linkedin.com/in/davidkamau',
        email: 'david@preedos.ke',
    },
    {
        id: 'service-manager',
        name: 'Samuel Kiprop',
        role: 'Service & Maintenance Manager',
        bio: 'Samuel manages our maintenance division, ensuring all installed systems operate at peak performance. His team of certified technicians provides 24/7 support across Kenya.',
        image: '/images/team/samuel-kiprop.jpg',
        email: 'samuel@preedos.ke',
    },
    {
        id: 'finance-manager',
        name: 'Lucy Njeri',
        role: 'Finance & Administration Manager',
        bio: 'Lucy oversees financial operations and administration, ensuring smooth business processes and client-friendly payment arrangements. She brings over 15 years of financial management experience.',
        image: '/images/team/lucy-njeri.jpg',
        email: 'lucy@preedos.ke',
    },
]

// Leadership team for about page
export const leadershipTeam = teamMembers.slice(0, 4)

// Get team member by ID
export function getTeamMemberById(id: string): TeamMember | undefined {
    return teamMembers.find((member) => member.id === id)
}
