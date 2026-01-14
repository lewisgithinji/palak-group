/**
 * Navigation JavaScript Module
 * Handles mobile menu, dropdowns, and sticky header
 */

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.main-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const body = document.body;

    if (menu && overlay && menuIcon) {
        const isActive = menu.classList.contains('mobile-active');

        if (isActive) {
            // Close menu
            menu.classList.remove('mobile-active');
            overlay.classList.remove('active');
            menuIcon.classList.remove('active');
            body.style.overflow = '';
        } else {
            // Open menu
            menu.classList.add('mobile-active');
            overlay.classList.add('active');
            menuIcon.classList.add('active');
            body.style.overflow = 'hidden';
        }
    }
}

// Close Mobile Menu
function closeMobileMenu() {
    const menu = document.querySelector('.main-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const body = document.body;

    if (menu && overlay && menuIcon) {
        menu.classList.remove('mobile-active');
        overlay.classList.remove('active');
        menuIcon.classList.remove('active');
        body.style.overflow = '';
    }
}

// Handle Dropdown Toggle on Mobile
function handleDropdownToggle(event) {
    // Only handle on mobile
    if (window.innerWidth > 991) return;

    const menuItem = event.currentTarget.parentElement;
    const isActive = menuItem.classList.contains('active');

    // Close all other dropdowns
    document.querySelectorAll('.menu-item.has-dropdown').forEach(item => {
        if (item !== menuItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current dropdown
    if (isActive) {
        menuItem.classList.remove('active');
    } else {
        menuItem.classList.add('active');
    }

    event.preventDefault();
}

// Initialize Navigation
function initNavigation() {
    // Mobile menu toggle button
    const menuToggle = document.querySelector('.mobile-menu-icon');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Mobile menu overlay click
    const overlay = document.querySelector('.mobile-menu-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    // Dropdown toggle on mobile
    const dropdownLinks = document.querySelectorAll('.menu-item.has-dropdown > a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', handleDropdownToggle);
    });

    // Close menu when clicking a regular menu link on mobile
    const menuLinks = document.querySelectorAll('.main-menu .menu-item:not(.has-dropdown) > a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                closeMobileMenu();
            }
        });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Sticky Header (if not already implemented)
    initStickyHeader();
}

// Sticky Header Functionality
function initStickyHeader() {
    const navigationWrapper = document.querySelector('.navigation-wrapper');
    const topHeader = document.querySelector('.top-header');

    if (!navigationWrapper) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navigationWrapper.classList.add('sticky');
            if (topHeader) {
                topHeader.style.display = 'none';
            }
        } else {
            navigationWrapper.classList.remove('sticky');
            if (topHeader) {
                topHeader.style.display = '';
            }
        }
    });
}

// Search Modal Functionality
function initSearchModal() {
    const searchIcon = document.querySelector('.dl-search-icon');

    if (!searchIcon) return;

    // Create search modal if it doesn't exist
    let searchModal = document.querySelector('.search-modal');
    if (!searchModal) {
        searchModal = createSearchModal();
        document.body.appendChild(searchModal);
    }

    // Open search modal on icon click
    searchIcon.addEventListener('click', () => {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus on search input
        const searchInput = searchModal.querySelector('.search-input');
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 100);
        }
    });

    // Close search modal
    const closeBtn = searchModal.querySelector('.search-close');
    const searchOverlay = searchModal.querySelector('.search-overlay');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSearchModal);
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', closeSearchModal);
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            closeSearchModal();
        }
    });
}

function createSearchModal() {
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-overlay"></div>
        <div class="search-container">
            <div class="search-header">
                <h3>Search Our Website</h3>
                <button class="search-close" aria-label="Close search">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
            <form class="search-form" onsubmit="handleSearch(event)">
                <div class="search-input-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <input type="text" class="search-input" placeholder="Search for services, projects, blog posts..." autocomplete="off">
                </div>
            </form>
            <div class="search-suggestions">
                <div class="suggestion-title">Popular Searches:</div>
                <div class="suggestion-links">
                    <a href="/services.html">Construction Services</a>
                    <a href="/projects.html">Our Projects</a>
                    <a href="/about.html">About Us</a>
                    <a href="/contact.html">Contact Information</a>
                    <a href="/blog.html">Blog Articles</a>
                </div>
            </div>
        </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .search-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
            display: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .search-modal.active {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            opacity: 1;
        }

        .search-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(26, 29, 46, 0.95);
            backdrop-filter: blur(5px);
        }

        .search-container {
            position: relative;
            width: 100%;
            max-width: 700px;
            background: white;
            border-radius: 15px;
            margin: 100px 20px 20px;
            padding: 40px;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .search-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .search-header h3 {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #1A1D2E;
            margin: 0;
        }

        .search-close {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            border-radius: 50%;
            transition: all 0.3s;
            color: #4a5568;
        }

        .search-close:hover {
            background: rgba(255, 168, 38, 0.1);
            color: #FFA826;
        }

        .search-form {
            margin-bottom: 30px;
        }

        .search-input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }

        .search-input-wrapper svg {
            position: absolute;
            left: 20px;
            color: #FFA826;
        }

        .search-input {
            width: 100%;
            padding: 18px 20px 18px 55px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 16px;
            font-family: 'Rubik', sans-serif;
            transition: all 0.3s;
        }

        .search-input:focus {
            outline: none;
            border-color: #FFA826;
            box-shadow: 0 0 0 4px rgba(255, 168, 38, 0.1);
        }

        .search-suggestions {
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
        }

        .suggestion-title {
            font-size: 14px;
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 15px;
        }

        .suggestion-links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .suggestion-links a {
            padding: 8px 16px;
            background: rgba(255, 168, 38, 0.1);
            color: #FFA826;
            text-decoration: none;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s;
        }

        .suggestion-links a:hover {
            background: #FFA826;
            color: white;
        }

        @media (max-width: 768px) {
            .search-container {
                margin: 60px 15px 15px;
                padding: 25px;
            }

            .search-header h3 {
                font-size: 22px;
            }

            .suggestion-links {
                flex-direction: column;
            }

            .suggestion-links a {
                display: block;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);

    return modal;
}

function closeSearchModal() {
    const searchModal = document.querySelector('.search-modal');
    if (searchModal) {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
        // Clear search input
        const searchInput = searchModal.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = '';
        }
    }
}

function handleSearch(event) {
    event.preventDefault();
    const searchInput = event.target.querySelector('.search-input');
    const query = searchInput.value.trim();

    if (query) {
        // For now, redirect to services page with search query
        // You can implement a proper search page later
        window.location.href = `/services.html?search=${encodeURIComponent(query)}`;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initNavigation();
        initSearchModal();
    });
} else {
    initNavigation();
    initSearchModal();
}

// Export functions for inline usage if needed
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.handleSearch = handleSearch;
