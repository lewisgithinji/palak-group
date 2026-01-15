// Blog Page Filtering and Dynamic Content
import { blogsData, getAllCategories, getCategoryCount, filterBlogsByCategory, getRecentBlogs, getFeaturedBlog } from '../data/blogs.js';

document.addEventListener('DOMContentLoaded', function () {
    let currentCategory = 'all';

    // Initialize the blog page
    initializeBlogPage();

    function initializeBlogPage() {
        // Render dynamic category counts
        renderCategoryCounts();

        // Render blog posts
        renderBlogPosts(blogsData);

        // Render recent stories sidebar
        renderRecentStories();

        // Setup category filter click handlers
        setupCategoryFilters();
    }

    function renderCategoryCounts() {
        // Update category counts
        const categoryElements = {
            'Industry News': document.querySelector('[data-category="Industry News"] .category-count'),
            'Sustainability': document.querySelector('[data-category="Sustainability"] .category-count'),
            'Market Trends': document.querySelector('[data-category="Market Trends"] .category-count'),
            'Technology': document.querySelector('[data-category="Technology"] .category-count'),
            'Best Practices': document.querySelector('[data-category="Best Practices"] .category-count')
        };

        Object.keys(categoryElements).forEach(category => {
            const element = categoryElements[category];
            if (element) {
                element.textContent = `(${getCategoryCount(category)})`;
            }
        });
    }

    function renderBlogPosts(blogs) {
        const blogGrid = document.getElementById('blog-posts-grid');
        if (!blogGrid) return;

        // Clear existing posts (except featured)
        blogGrid.innerHTML = '';

        // Filter out featured blog
        const regularBlogs = blogs.filter(blog => !blog.featured);

        // Render each blog post
        regularBlogs.forEach(blog => {
            const blogCard = createBlogCard(blog);
            blogGrid.appendChild(blogCard);
        });
    }

    function createBlogCard(blog) {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.style.cssText = 'background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08); transition: transform 0.3s;';

        card.innerHTML = `
            <div style="height: 220px; overflow: hidden;">
                <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 25px;">
                <span style="display: inline-block; background: var(--buildex-primary-color); color: white; padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: 600; margin-bottom: 10px; text-transform: uppercase;">${blog.category}</span>
                <h3 style="font-family: var(--buildex-primary-font); font-size: 20px; font-weight: 700; color: var(--buildex-dark); margin-bottom: 10px; line-height: 1.4;">
                    <a href="${blog.link}" style="color: inherit; text-decoration: none;">${blog.title}</a>
                </h3>
                <p style="color: var(--buildex-grey-color); font-size: 13px; margin-bottom: 10px;">
                    <span style="color: var(--buildex-primary-color); font-weight: 600;">${blog.date}</span> | By ${blog.author}
                </p>
                <p style="color: var(--buildex-grey-color); font-size: 14px; line-height: 1.6; margin-bottom: 15px;">${blog.excerpt}</p>
                <a href="${blog.link}" style="color: var(--buildex-primary-color); font-weight: 600; font-size: 14px; text-decoration: none;">Read More →</a>
            </div>
        `;

        return card;
    }

    function renderRecentStories() {
        const recentStoriesContainer = document.getElementById('recent-stories-list');
        if (!recentStoriesContainer) return;

        const recentBlogs = getRecentBlogs(3);

        recentStoriesContainer.innerHTML = recentBlogs.map(blog => `
            <div style="display: flex; gap: 15px;">
                <div style="flex-shrink: 0; width: 80px; height: 80px; overflow: hidden; border-radius: 8px;">
                    <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                    <h4 style="font-family: var(--buildex-primary-font); font-size: 15px; font-weight: 600; color: var(--buildex-dark); margin-bottom: 6px; line-height: 1.4;">
                        <a href="${blog.link}" style="color: inherit; text-decoration: none;">${blog.title}</a>
                    </h4>
                    <span style="color: var(--buildex-grey-color); font-size: 12px;">${blog.date}</span>
                </div>
            </div>
        `).join('');
    }

    function setupCategoryFilters() {
        // Add click handlers to category links
        document.querySelectorAll('[data-category]').forEach(categoryLink => {
            categoryLink.addEventListener('click', function (e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                filterByCategory(category);

                // Update active state
                document.querySelectorAll('[data-category]').forEach(link => {
                    link.style.color = 'var(--buildex-grey-color)';
                });
                this.style.color = 'var(--buildex-primary-color)';
            });
        });
    }

    function filterByCategory(category) {
        currentCategory = category;
        const filteredBlogs = filterBlogsByCategory(category);
        renderBlogPosts(filteredBlogs);
    }
});
