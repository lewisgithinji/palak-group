// Projects Page JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Load project data
    const projects = projectsData;

    // State
    let currentFilters = {
        status: 'all',
        category: 'all'
    };
    let currentProject = null;
    let currentImageIndex = 0;
    let autoplayInterval = null;
    let autoplayDelay = 4000; // 4 seconds between images

    // DOM Elements
    const statusFilters = document.querySelectorAll('[data-status-filter]');
    const categoryFilters = document.querySelectorAll('[data-category-filter]');
    const projectsGrid = document.getElementById('projects-grid');
    const projectsCount = document.getElementById('projects-count');
    const projectModal = document.getElementById('project-modal');

    // Initialize
    renderProjects();
    updateCount();

    // Event Listeners - Status Filters
    statusFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            const status = this.getAttribute('data-status-filter');
            currentFilters.status = status;

            // Update active states
            statusFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            renderProjects();
            updateCount();
        });
    });

    // Event Listeners - Category Filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            const category = this.getAttribute('data-category-filter');
            currentFilters.category = category;

            // Update active states
            categoryFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            renderProjects();
            updateCount();
        });
    });

    // Filter projects based on current filters
    function getFilteredProjects() {
        return projects.filter(project => {
            const matchesStatus = currentFilters.status === 'all' ||
                project.status.toLowerCase() === currentFilters.status.toLowerCase();
            const matchesCategory = currentFilters.category === 'all' ||
                project.category.toLowerCase() === currentFilters.category.toLowerCase();
            return matchesStatus && matchesCategory;
        });
    }

    // Render projects
    function renderProjects() {
        const filteredProjects = getFilteredProjects();
        projectsGrid.innerHTML = '';

        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                    <p style="font-family: var(--buildex-secondary-font); font-size: 18px; color: var(--buildex-secondary-color);">
                        No projects found matching your filters.
                    </p>
                </div>
            `;
            return;
        }

        filteredProjects.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    }

    // Create project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openProjectModal(project);

        card.innerHTML = `
            <img src="${project.images[0]}" alt="${project.name}" class="project-card-image">
            <div class="project-card-overlay">
                <div class="project-badges">
                    <span class="project-badge badge-status ${project.status.toLowerCase()}">${project.status}</span>
                    <span class="project-badge badge-category ${project.category.toLowerCase()}">${project.category}</span>
                </div>
                <h3 class="project-card-title">${project.name}</h3>
                <div class="project-card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${project.location}
                </div>
                <div class="project-card-timeline">
                    ${project.timeline.start} - ${project.timeline.end}
                </div>
            </div>
        `;

        return card;
    }

    // Update project count
    function updateCount() {
        const filteredProjects = getFilteredProjects();
        const count = filteredProjects.length;

        let filterText = '';
        if (currentFilters.category !== 'all' && currentFilters.status !== 'all') {
            filterText = `${currentFilters.category} ${currentFilters.status}`;
        } else if (currentFilters.category !== 'all') {
            filterText = currentFilters.category;
        } else if (currentFilters.status !== 'all') {
            filterText = currentFilters.status;
        } else {
            filterText = '';
        }

        const projectWord = count === 1 ? 'project' : 'projects';
        const displayText = filterText
            ? `Showing <span>${count}</span> ${filterText} ${projectWord}`
            : `Showing <span>${count}</span> ${projectWord}`;

        projectsCount.innerHTML = displayText;
    }

    // Open project modal
    function openProjectModal(project) {
        currentProject = project;
        currentImageIndex = 0;

        const modal = projectModal;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        renderModalContent();
        startAutoplay();
    }

    // Close project modal
    function closeProjectModal() {
        stopAutoplay();
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
        currentProject = null;
    }

    // Render modal content
    function renderModalContent() {
        if (!currentProject) return;

        const project = currentProject;

        document.getElementById('modal-gallery-image').src = project.images[currentImageIndex];
        document.getElementById('modal-title').textContent = project.name;
        document.getElementById('modal-location').textContent = project.location;
        document.getElementById('modal-timeline').textContent = `${project.timeline.start} - ${project.timeline.end}`;
        document.getElementById('modal-category').textContent = project.category;
        document.getElementById('modal-description').textContent = project.description;

        // Update badges
        const statusBadge = document.querySelector('.modal-badges .badge-status');
        statusBadge.className = `project-badge badge-status ${project.status.toLowerCase()}`;
        statusBadge.textContent = project.status;

        const categoryBadge = document.querySelector('.modal-badges .badge-category');
        categoryBadge.className = `project-badge badge-category ${project.category.toLowerCase()}`;
        categoryBadge.textContent = project.category;

        // Render features
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = project.features.map(feature =>
            `<div class="feature-item">${feature}</div>`
        ).join('');

        // Render amenities
        const amenitiesList = document.getElementById('modal-amenities');
        amenitiesList.innerHTML = project.amenities.map(amenity =>
            `<div class="amenity-item">${amenity}</div>`
        ).join('');

        // Render specs
        const specsList = document.getElementById('modal-specs');
        specsList.innerHTML = Object.entries(project.specs).map(([label, value]) =>
            `<div class="spec-item">
                <div class="spec-label">${label}</div>
                <div class="spec-value">${value}</div>
            </div>`
        ).join('');

        // Update gallery indicators
        renderGalleryIndicators();

        // Show/hide navigation buttons
        const prevBtn = document.getElementById('gallery-prev');
        const nextBtn = document.getElementById('gallery-next');
        prevBtn.style.display = project.images.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = project.images.length > 1 ? 'flex' : 'none';
    }

    // Render gallery indicators
    function renderGalleryIndicators() {
        if (!currentProject) return;

        const indicatorsContainer = document.getElementById('gallery-indicators');
        indicatorsContainer.innerHTML = currentProject.images.map((_, index) =>
            `<span class="gallery-indicator ${index === currentImageIndex ? 'active' : ''}" data-index="${index}"></span>`
        ).join('');

        // Add click handlers to indicators
        indicatorsContainer.querySelectorAll('.gallery-indicator').forEach(indicator => {
            indicator.addEventListener('click', function () {
                currentImageIndex = parseInt(this.getAttribute('data-index'));
                document.getElementById('modal-gallery-image').src = currentProject.images[currentImageIndex];
                renderGalleryIndicators();
                // Restart autoplay when user clicks indicator
                startAutoplay();
            });
        });
    }

    // Gallery navigation
    function nextImage() {
        if (!currentProject) return;
        currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        document.getElementById('modal-gallery-image').src = currentProject.images[currentImageIndex];
        renderGalleryIndicators();
        // Restart autoplay when user manually navigates
        startAutoplay();
    }

    function prevImage() {
        if (!currentProject) return;
        currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        document.getElementById('modal-gallery-image').src = currentProject.images[currentImageIndex];
        renderGalleryIndicators();
        // Restart autoplay when user manually navigates
        startAutoplay();
    }

    // Autoplay functions
    function startAutoplay() {
        // Only autoplay if there are multiple images
        if (!currentProject || currentProject.images.length <= 1) return;

        // Clear any existing interval
        stopAutoplay();

        // Start new autoplay interval
        autoplayInterval = setInterval(() => {
            nextImage();
        }, autoplayDelay);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // Event listeners for modal
    document.getElementById('modal-close').addEventListener('click', closeProjectModal);
    document.getElementById('gallery-prev').addEventListener('click', prevImage);
    document.getElementById('gallery-next').addEventListener('click', nextImage);

    // Close modal on overlay click
    projectModal.addEventListener('click', function (e) {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }

        // Gallery navigation with arrow keys
        if (projectModal.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    });
});
