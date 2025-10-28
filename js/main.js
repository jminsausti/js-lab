// Main application script
import { loadSectionContent } from './contentLoader.js';

// Make loadSectionContent globally available for direct calls from HTML
window.loadSectionContent = loadSectionContent;

document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners for navigation
    setupNavigation();
    
    // Load default content (Fundamentos JS - Teoría)
    loadSectionContent('fundamentos', 'teoria');
    
    // Set initial active state for the first menu item
    const firstSubmenuLink = document.querySelector('.submenu a');
    if (firstSubmenuLink) {
        firstSubmenuLink.classList.add('active');
    }
});

function setupNavigation() {
    // Toggle submenu on nav item click
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close other open items
            navItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
        
        // Handle submenu item clicks
        const submenuLinks = item.querySelectorAll('.submenu a');
        submenuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active states
                submenuLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Get section and subsection from data attributes
                const section = item.getAttribute('data-section');
                const subsection = link.getAttribute('data-subsection');
                
                // Update breadcrumb
                updateBreadcrumb(item.textContent.trim(), link.textContent);
                
                // Load content
                loadSectionContent(section, subsection);
            });
        });
    });
}

function updateBreadcrumb(section, subsection) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = `${section} > ${subsection}`;
    }
    
    // Update section title
    const sectionTitle = document.getElementById('section-title');
    if (sectionTitle) {
        sectionTitle.textContent = section;
    }
}
