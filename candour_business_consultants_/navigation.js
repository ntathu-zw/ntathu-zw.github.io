const Navigation = {
    init() {
        this.setupMobileMenu();
        this.setupNavigationClicks();
        this.createMobileOverlay();
    },

    createMobileOverlay() {
        // Create overlay for mobile menu
        const overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        document.body.appendChild(overlay);

        // Close menu when overlay is clicked
        overlay.addEventListener('click', () => {
            this.closeMobileMenu();
        });
    },

    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.contains('active');
            
            if (isActive) {
                this.closeMobileMenu();
            } else {
                this.openMobileMenu();
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });

        // Prevent body scroll when menu is open
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        mediaQuery.addListener(() => {
            if (!mediaQuery.matches) {
                this.closeMobileMenu();
            }
        });
    },

    openMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    },

    setupNavigationClicks() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href !== '#') {
                    window.location.hash = href;
                }
            });
        });

        // Add smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').slice(1);
                if (targetId && window.router && targetId !== window.router.currentRoute) {
                    window.location.hash = '#' + targetId;
                }
            }
        });
    }
};

export default Navigation;