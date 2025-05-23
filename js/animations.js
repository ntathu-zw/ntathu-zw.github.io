// Animation Module - Scroll animations and effects
// Updated to handle dynamic component loading

import { throttle } from './utils.js';

let observer;

function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    if (observer) {
        observer.disconnect();
    }

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and portfolio items
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .feature-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        // Remove existing listeners by cloning the button
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        newButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        newButton.addEventListener('mouseleave', function() {
            if (!this.classList.contains('btn-secondary')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Add loading animation
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
}

// Initialize on DOM ready and when components are reloaded
document.addEventListener('DOMContentLoaded', initializeAnimations);
document.addEventListener('reinitializeAnimations', initializeAnimations);

// Initialize page opacity
document.body.style.opacity = '0';

export { initializeAnimations, observer };