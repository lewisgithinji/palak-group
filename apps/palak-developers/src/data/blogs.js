// Blog Posts Data for Palak Developers
const blogsData = [
    {
        id: 1,
        title: "Kenya's Construction Sector Sees 12% Growth in 2026",
        slug: "kenyas-construction-growth-2026",
        excerpt: "The Kenyan construction industry continues its robust expansion, driven by major infrastructure projects and the affordable housing initiative.",
        category: "Industry News",
        author: "Palak Developers",
        date: "January 10, 2026",
        image: "/images/project-2.png",
        featured: true,
        link: "blog/kenyas-construction-growth-2026.html"
    },
    {
        id: 2,
        title: "Green Building Certifications Rise 30% in Kenyan Market",
        slug: "green-building-certifications-rise",
        excerpt: "More developers are pursuing EDGE and LEED certifications as sustainability becomes a key market differentiator in Kenya's construction sector.",
        category: "Sustainability",
        author: "Palak Developers",
        date: "January 5, 2026",
        image: "/images/project-3.png",
        featured: false,
        link: "#"
    },
    {
        id: 3,
        title: "Commercial Real Estate Demand Surges in Westlands",
        slug: "westlands-real-estate-demand",
        excerpt: "Office space occupancy reaches 85% as businesses expand operations in Nairobi's premium business district.",
        category: "Market Trends",
        author: "Palak Developers",
        date: "January 3, 2026",
        image: "/images/project-4.png",
        featured: false,
        link: "#"
    },
    {
        id: 4,
        title: "Modern Construction Technologies Transforming Kenya",
        slug: "construction-tech-kenya",
        excerpt: "From BIM to prefabrication, new technologies are revolutionizing how we build in Kenya's growing construction industry.",
        category: "Technology",
        author: "Palak Developers",
        date: "December 28, 2025",
        image: "/images/project-5.png",
        featured: false,
        link: "#"
    },
    {
        id: 5,
        title: "Affordable Housing Program Exceeds Targets",
        slug: "affordable-housing-targets",
        excerpt: "Government's affordable housing initiative delivers 15,000 units in 2025, surpassing initial projections.",
        category: "Industry News",
        author: "Palak Developers",
        date: "December 20, 2025",
        image: "/images/project-6.png",
        featured: false,
        link: "#"
    },
    {
        id: 6,
        title: "Quality Control Best Practices in Construction",
        slug: "quality-control-practices",
        excerpt: "Essential standards and procedures for ensuring construction quality and compliance in modern building projects.",
        category: "Best Practices",
        author: "Palak Developers",
        date: "December 15, 2025",
        image: "/images/project-7.png",
        featured: false,
        link: "#"
    },
    {
        id: 7,
        title: "Sustainable Materials Gaining Traction in Kenya",
        slug: "sustainable-materials-kenya",
        excerpt: "Eco-friendly building materials are becoming more accessible and cost-effective for Kenyan developers.",
        category: "Sustainability",
        author: "Palak Developers",
        date: "December 10, 2025",
        image: "/images/project-8.png",
        featured: false,
        link: "#"
    },
    {
        id: 8,
        title: "Property Prices Stabilize After Market Correction",
        slug: "property-prices-stabilize",
        excerpt: "Real estate market shows signs of stability as prices level off following Q3 2025 adjustments.",
        category: "Market Trends",
        author: "Palak Developers",
        date: "December 5, 2025",
        image: "/images/project-1.png",
        featured: false,
        link: "#"
    },
    {
        id: 9,
        title: "Safety Protocols for High-Rise Construction",
        slug: "safety-protocols-highrise",
        excerpt: "Implementing comprehensive safety measures for workers on multi-story building projects.",
        category: "Best Practices",
        author: "Palak Developers",
        date: "November 28, 2025",
        image: "/images/project-2.png",
        featured: false,
        link: "#"
    }
];

// Helper functions
function getAllCategories() {
    const categories = [...new Set(blogsData.map(blog => blog.category))];
    return categories;
}

function getCategoryCount(category) {
    if (category === 'all') return blogsData.length;
    return blogsData.filter(blog => blog.category === category).length;
}

function filterBlogsByCategory(category) {
    if (category === 'all') return blogsData;
    return blogsData.filter(blog => blog.category === category);
}

function getRecentBlogs(count = 3) {
    return blogsData.slice(0, count);
}

function getFeaturedBlog() {
    return blogsData.find(blog => blog.featured) || blogsData[0];
}

// Export for ES modules
export { blogsData, getAllCategories, getCategoryCount, filterBlogsByCategory, getRecentBlogs, getFeaturedBlog };
