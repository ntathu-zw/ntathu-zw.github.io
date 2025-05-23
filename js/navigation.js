// Navigation Module - Mobile menu and smooth scrolling
// Updated to handle both internal links and section anchors

let navToggle, navMenu, navLinks;

function initializeNavigation() {
    navToggle = document.getElementById('nav-toggle');
    navMenu = document.getElementById('nav-menu');
    navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Handle navigation links - differentiate between internal pages and section links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Check if it's a section link (starts with #) or internal page link
            if (href && href.startsWith('#')) {
                // Section link - prevent default and smooth scroll
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else if (href && href.startsWith('/')) {
                // Internal page link - let it navigate normally
                // Don't prevent default, allow normal navigation
                return;
            }
        });
    });

    // Enhanced glassmorphic navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.2)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.1)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            }
        }
    });
}

// Initialize on DOM ready and when components are reloaded
document.addEventListener('DOMContentLoaded', initializeNavigation);
document.addEventListener('reinitializeNavigation', initializeNavigation);

export { initializeNavigation };