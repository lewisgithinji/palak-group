// Homepage Services Carousel
import { servicesData } from '../data/services.js';

document.addEventListener('DOMContentLoaded', function () {
    const servicesGrid = document.getElementById('home-services-grid');

    if (!servicesGrid) return;

    // Render all service cards
    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card-buildex">
            <div class="service-image-wrapper">
                <img src="${service.image}" alt="${service.name}" class="service-image">
            </div>
            <div class="service-content-wrapper">
                <div class="service-icon-buildex">
                    ${service.icon}
                </div>
                <h3 class="service-title-buildex">${service.name.replace(' ', '<br>')}</h3>
                <p class="service-desc-buildex">${service.shortDesc}</p>
                <a href="${service.link}" class="service-link-buildex">Read More</a>
            </div>
        </div>
    `).join('');
});

// Carousel Navigation Functions
function scrollServicesLeft() {
    const container = document.getElementById('home-services-grid');
    if (container) {
        container.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    }
}

function scrollServicesRight() {
    const container = document.getElementById('home-services-grid');
    if (container) {
        container.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    }
}

// Make functions globally available
window.scrollServicesLeft = scrollServicesLeft;
window.scrollServicesRight = scrollServicesRight;
