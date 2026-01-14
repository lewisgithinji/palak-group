// Project Data for Palak Developers
const projectsData = [
    // COMPLETED PROJECTS
    {
        id: 1,
        name: "Jalaram Pride Apartment",
        slug: "jalaram-pride",
        category: "Residential",
        status: "Completed",
        location: "3rd Parklands Avenue, Nairobi",
        timeline: { start: "2012", end: "2014" },
        shortDesc: "41-unit luxury apartment complex with duplex penthouses",
        description: "A prestigious residential development comprising 41 luxury apartments across two modern blocks. This signature project showcases our expertise in high-end residential construction with meticulous attention to detail and premium finishes throughout.",
        features: [
            "Block 1: 6-storey building with 8 spacious 3-bedroom apartments (1,700 sqft each)",
            "2 exclusive duplex penthouses (3,400 sqft) with 5 ensuite bedrooms",
            "Block 2: 7-storey building with 10 premium 4-bedroom apartments (3,000 sqft)",
            "2 grand duplex penthouses (7,600 sqft) featuring 5 ensuite bedrooms, dual living rooms, and private terraces",
            "2-level basement parking facility",
            "Modern security systems and CCTV surveillance",
            "Elegant lobby and common areas",
            "Backup power generator"
        ],
        amenities: ["Basement Parking (2 Levels)", "Security & CCTV", "Elevator", "Backup Generator"],
        images: [
            "./images/projects/jalaram-pride/1.jpg",
            "./images/projects/jalaram-pride/2.jpg",
            "./images/projects/jalaram-pride/3.jpg",
            "./images/projects/jalaram-pride/4.jpg"
        ],
        specs: {
            "Total Units": "41 Apartments",
            "Blocks": "2",
            "Floors": "6-7 Storeys",
            "Unit Sizes": "1,700 - 7,600 sqft"
        }
    },
    {
        id: 2,
        name: "Poonam Apartments",
        slug: "poonam-apartments",
        category: "Residential",
        status: "Completed",
        location: "4th Parklands, Nairobi",
        timeline: { start: "2013", end: "2015" },
        shortDesc: "9-storey residential tower with 18 spacious ensuite apartments",
        description: "An elegant 9-storey residential tower in the heart of Parklands, featuring 18 generously sized 4-bedroom apartments. This project exemplifies modern urban living with premium amenities and superior construction quality.",
        features: [
            "18 luxury 4-bedroom apartments (3,200 sqft each)",
            "All bedrooms ensuite with modern bathrooms",
            "Spacious balconies with city views",
            "High-quality finishes and fixtures",
            "Ample natural lighting and ventilation",
            "Modern kitchen with premium fittings",
            "Secure basement parking",
            "24/7 security and CCTV"
        ],
        amenities: ["Basement Parking", "24/7 Security", "CCTV Surveillance", "Elevator", "Backup Power"],
        images: [
            "./images/projects/poonam-apartments/1.jpg",
            "./images/projects/poonam-apartments/2.jpg",
            "./images/projects/poonam-apartments/3.jpg"
        ],
        specs: {
            "Total Units": "18 Apartments",
            "Floors": "9 Storeys",
            "Unit Size": "3,200 sqft",
            "Bedrooms": "4 Ensuite per unit"
        }
    },
    {
        id: 3,
        name: "Riya Residency",
        slug: "riya-residency",
        category: "Residential",
        status: "Completed",
        location: "1st Parklands Avenue, Nairobi",
        timeline: { start: "September 2020", end: "February 2024" },
        shortDesc: "17-storey premium residential tower with 60+ units and comprehensive amenities",
        description: "Our flagship residential project in Parklands, Riya Residency is a landmark 17-storey tower offering 60 premium apartments and 4 exclusive penthouses. Complete with world-class amenities including a party hall and fully equipped gym.",
        features: [
            "60 spacious 4-bedroom apartments (3,000 sqft) with all ensuite bedrooms",
            "4 ultra-luxury penthouses (8,000 sqft) with 4 ensuite bedrooms",
            "3-level basement parking facility",
            "Fully equipped modern gym with premium equipment",
            "Elegant party hall for residents",
            "High-speed elevators",
            "Advanced security and access control systems",
            "Landscaped common areas",
            "Rooftop amenities"
        ],
        amenities: ["Basement Parking (3 Levels)", "Fully Equipped Gym", "Party Hall", "Swimming Pool", "24/7 Security", "High-Speed Elevators"],
        images: [
            "./images/projects/riya-residency/1.jpg",
            "./images/projects/riya-residency/2.jpg",
            "./images/projects/riya-residency/3.jpg",
            "./images/projects/riya-residency/4.jpg"
        ],
        specs: {
            "Total Units": "64 (60 Apartments + 4 Penthouses)",
            "Floors": "17 Storeys",
            "Apartment Size": "3,000 sqft",
            "Penthouse Size": "8,000 sqft",
            "Duration": "3.5 Years"
        }
    },
    {
        id: 4,
        name: "Palak Steel Mill Ltd Factory",
        slug: "steel-mill-factory",
        category: "Industrial",
        status: "Completed",
        location: "Lari Sub-County, Kiambu",
        timeline: { start: "March 2020", end: "May 2022" },
        shortDesc: "State-of-the-art steel manufacturing facility on 7 acres",
        description: "A comprehensive industrial complex featuring cutting-edge steel manufacturing facilities, office blocks, and staff accommodation. This project demonstrates our capability in large-scale industrial construction spanning 7 acres.",
        features: [
            "Modern steel manufacturing plant with advanced machinery",
            "Heavy-duty industrial flooring and foundations",
            "Dedicated office block for administrative operations",
            "On-site staff quarters for workers",
            "7-acre industrial compound",
            "High-capacity electrical infrastructure",
            "Industrial water treatment systems",
            "Security perimeter and access control",
            "Loading and unloading bays",
            "Material storage warehouses"
        ],
        amenities: ["Office Block", "Staff Quarters", "Security Systems", "Industrial Infrastructure", "Warehousing"],
        images: [
            "./images/projects/steel-mill-factory/1.jpg",
            "./images/projects/steel-mill-factory/2.jpg",
            "./images/projects/steel-mill-factory/3.jpg"
        ],
        specs: {
            "Land Area": "7 Acres",
            "Project Type": "Industrial Manufacturing",
            "Duration": "2 Years 2 Months",
            "Facilities": "Factory, Offices, Staff Quarters"
        }
    },
    {
        id: 5,
        name: "Palak Steel Mill Head Office",
        slug: "steel-mill-office",
        category: "Commercial",
        status: "Completed",
        location: "54 Muthithi Road, Westlands, Nairobi",
        timeline: { start: "September 2024", end: "December 2024" },
        shortDesc: "Executive office with modern amenities and staff recreational areas",
        description: "A modern executive office complex designed for optimal productivity and employee well-being. Features contemporary design, premium finishes, and dedicated recreational areas for staff.",
        features: [
            "Executive office suites with modern layouts",
            "Open-plan work areas with natural lighting",
            "Dedicated staff recreational area",
            "Modern conference and meeting rooms",
            "High-speed internet and IT infrastructure",
            "Climate-controlled environments",
            "Secure parking facilities",
            "Professional reception and lobby",
            "Kitchenette and break areas",
            "Disabled access and facilities"
        ],
        amenities: ["Staff Recreational Area", "Secure Parking", "Conference Rooms", "Modern IT Infrastructure", "Kitchenette"],
        images: [
            "./images/projects/steel-mill-office/1.jpg",
            "./images/projects/steel-mill-office/2.jpg",
            "./images/projects/steel-mill-office/3.jpg"
        ],
        specs: {
            "Project Type": "Commercial Office",
            "Duration": "4 Months",
            "Location": "Prime Westlands",
            "Features": "Executive + Recreational"
        }
    },
    {
        id: 6,
        name: "Luxury Bungalow in Runda",
        slug: "runda-bungalow",
        category: "Residential",
        status: "Completed",
        location: "Runda Mhasibu, Nairobi",
        timeline: { start: "January 2024", end: "February 2025" },
        shortDesc: "5-bedroom luxury bungalow with premium amenities",
        description: "An exquisite luxury bungalow in the prestigious Runda estate, featuring state-of-the-art amenities including a modern elevator, private gym, rooftop terrace, and beautifully landscaped grounds with eco-friendly waste management.",
        features: [
            "5 spacious bedrooms with premium finishes",
            "7 modern bathrooms with luxury fittings",
            "2 elegant sitting rooms for entertaining",
            "Family room for private gatherings",
            "Fully equipped private gym",
            "Rooftop terrace with panoramic views",
            "Modern elevator for convenience",
            "Contemporary open-plan kitchen with premium appliances",
            "Gazebo with integrated bar area",
            "2 ensuite domestic staff quarters (DSQ)",
            "Professional landscaping with indigenous plants",
            "Cabro paved driveways and walkways",
            "On-site biodigester waste treatment system",
            "Perimeter wall and security systems"
        ],
        amenities: ["Modern Elevator", "Private Gym", "Rooftop Terrace", "Gazebo with Bar", "2 DSQ", "Biodigester", "Landscaping"],
        images: [
            "./images/projects/runda-bungalow/1.jpg",
            "./images/projects/runda-bungalow/2.jpg"
        ],
        specs: {
            "Bedrooms": "5",
            "Bathrooms": "7",
            "Sitting Rooms": "2 + Family Room",
            "Duration": "13 Months",
            "Special Features": "Elevator, Gym, Rooftop"
        }
    },

    // ONGOING PROJECTS
    {
        id: 7,
        name: "New Furnace Installation",
        slug: "furnace-installation",
        category: "Industrial",
        status: "Ongoing",
        location: "Palak Steel Mill, Lari Sub-County",
        timeline: { start: "September 2024", end: "Present" },
        shortDesc: "Advanced furnace installation for steel manufacturing expansion",
        description: "A major industrial infrastructure upgrade involving the installation of a state-of-the-art furnace system at our steel manufacturing facility. This project enhances production capacity and efficiency with cutting-edge technology.",
        features: [
            "Installation of advanced industrial furnace",
            "Heavy-duty foundation and structural work",
            "Integration with existing factory infrastructure",
            "Electrical and mechanical systems upgrade",
            "Safety systems and controls installation",
            "Environmental compliance measures",
            "Testing and commissioning",
            "Operator training facilities"
        ],
        amenities: ["Advanced Technology", "Safety Systems", "Environmental Controls", "Training Facilities"],
        images: [
            "./images/projects/furnace-installation/1.jpg",
            "./images/projects/furnace-installation/2.jpg"
        ],
        specs: {
            "Project Type": "Industrial Infrastructure",
            "Status": "Ongoing",
            "Started": "September 2024",
            "Scope": "Furnace Installation & Integration"
        }
    },
    {
        id: 8,
        name: "Bungalow in Tatu City",
        slug: "tatu-city-bungalow",
        category: "Residential",
        status: "Ongoing",
        location: "Tatu City, Zaria Village, Nairobi",
        timeline: { start: "June 2025", end: "Present" },
        shortDesc: "Modern residential bungalow in Kenya's premier smart city",
        description: "An elegant contemporary bungalow under construction in Tatu City's exclusive Zaria Village. This project combines modern architectural design with sustainable building practices in Kenya's first green city.",
        features: [
            "Modern architectural design",
            "Spacious living areas with open-plan layout",
            "Premium quality materials and finishes",
            "Energy-efficient design and systems",
            "Landscaped gardens",
            "Smart home pre-wiring",
            "Eco-friendly construction methods",
            "Ample natural lighting and ventilation"
        ],
        amenities: ["Smart City Infrastructure", "Green Building", "Modern Design", "Landscaping"],
        images: [
            "./images/projects/tatu-city-bungalow/1.jpg",
            "./images/projects/tatu-city-bungalow/2.jpg",
            "./images/projects/tatu-city-bungalow/3.jpg"
        ],
        specs: {
            "Project Type": "Residential Bungalow",
            "Location": "Tatu City - Zaria Village",
            "Status": "Under Construction",
            "Started": "June 2025"
        }
    }
];

// Helper functions for filtering
function filterProjects(status = 'all', category = 'all') {
    return projectsData.filter(project => {
        const matchesStatus = status === 'all' || project.status.toLowerCase() === status.toLowerCase();
        const matchesCategory = category === 'all' || project.category.toLowerCase() === category.toLowerCase();
        return matchesStatus && matchesCategory;
    });
}

function getProjectBySlug(slug) {
    return projectsData.find(project => project.slug === slug);
}

function getProjectsByCategory(category) {
    return projectsData.filter(project => project.category.toLowerCase() === category.toLowerCase());
}

function getProjectsByStatus(status) {
    return projectsData.filter(project => project.status.toLowerCase() === status.toLowerCase());
}
