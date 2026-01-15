// Related Articles Script
// Dynamically renders related articles based on category
import { blogsData } from '../data/blogs.js';

document.addEventListener('DOMContentLoaded', () => {
    const relatedGrid = document.getElementById('related-articles-grid');
    if (!relatedGrid) return;

    // Get current article category from meta tag or data attribute
    const currentCategory = document.querySelector('meta[name="article-category"]')?.content ||
        document.body.getAttribute('data-article-category') ||
        'Industry News'; // Default fallback

    const currentSlug = document.querySelector('meta[name="article-slug"]')?.content ||
        window.location.pathname.split('/').pop().replace('.html', '');

    // Get related articles from the same category, excluding current article
    const relatedArticles = blogsData
        .filter(blog =>
            blog.category === currentCategory &&
            !blog.link.includes(currentSlug)
        )
        .slice(0, 3); // Get max 3 related articles

    // If less than 3 from same category, fill with other recent articles
    if (relatedArticles.length < 3) {
        const additionalArticles = blogsData
            .filter(blog =>
                blog.category !== currentCategory &&
                !blog.link.includes(currentSlug) &&
                !relatedArticles.includes(blog)
            )
            .slice(0, 3 - relatedArticles.length);

        relatedArticles.push(...additionalArticles);
    }

    // Render related articles
    relatedGrid.innerHTML = relatedArticles.map(article => `
        <div class="related-card">
            <div style="height: 240px; overflow: hidden;">
                <img src="../${article.image}" alt="${article.title}"
                    style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 30px;">
                <span
                    style="display: inline-block; background: rgba(217,119,6,0.1); color: #FFA826; padding: 6px 14px; border-radius: 15px; font-size: 12px; font-weight: 600; margin-bottom: 14px;">${article.category}</span>
                <h3
                    style="font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 600; color: #1A1D2E; margin-bottom: 12px; line-height: 1.3;">
                    ${article.title}</h3>
                <p style="color: #4a5568; font-size: 15px; line-height: 1.6; margin-bottom: 18px;">${article.excerpt}</p>
                <a href="../${article.link}"
                    style="display: inline-flex; align-items: center; gap: 8px; color: #FFA826; font-weight: 600; text-decoration: none; font-size: 15px;">
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    `).join('');
});
