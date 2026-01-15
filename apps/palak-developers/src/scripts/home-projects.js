// Homepage Projects Carousel
import { projectsData } from '../data/projects.js';

document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.getElementById('home-projects-carousel');

    if (carouselTrack && projectsData) {
        // Take first 6 completed projects for the homepage
        const featuredProjects = projectsData.filter(p => p.status === 'Completed').slice(0, 6);

        // Render projects twice for infinite scroll effect
        const renderProjects = () => {
            return featuredProjects.map(project => `
                <div class="project-card-carousel">
                    <div class="project-card-image">
                        <img src="${project.images[0]}" alt="${project.name}">
                    </div>
                    <div class="project-card-info">
                        <span class="project-category">${project.category.toUpperCase()}</span>
                        <h3 class="project-title">${project.name}</h3>
                    </div>
                </div>
            `).join('');
        };

        // Add cards twice for seamless infinite scroll
        carouselTrack.innerHTML = renderProjects() + renderProjects();
    }
});

// Make scroll functions globally available
window.scrollProjectsLeft = function () {
    const projectsTrack = document.querySelector('.projects-carousel-track');
    if (projectsTrack) {
        projectsTrack.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    }
};

window.scrollProjectsRight = function () {
    const projectsTrack = document.querySelector('.projects-carousel-track');
    if (projectsTrack) {
        projectsTrack.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    }
};

// Projects Carousel Auto-Scroll
const projectsTrack = document.querySelector('.projects-carousel-track');
let scrollInterval;

function startProjectsAutoScroll() {
    scrollInterval = setInterval(() => {
        if (projectsTrack) {
            const maxScroll = projectsTrack.scrollWidth - projectsTrack.clientWidth;

            // If reached the end, scroll back to start smoothly
            if (projectsTrack.scrollLeft >= maxScroll - 10) {
                projectsTrack.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                projectsTrack.scrollBy({
                    left: 1,
                    behavior: 'auto'
                });
            }
        }
    }, 20); // Smooth continuous scroll
}

// Pause auto-scroll on hover
if (projectsTrack) {
    projectsTrack.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
    });

    projectsTrack.addEventListener('mouseleave', () => {
        startProjectsAutoScroll();
    });

    // Start auto-scroll on page load
    startProjectsAutoScroll();
}
