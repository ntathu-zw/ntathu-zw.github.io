// Main JavaScript - Updated to include modal system
import { ComponentLoader } from './js/components.js';
import './js/navigation.js';
import './js/animations.js';
import './js/forms.js';
import './js/modals.js';
import './js/utils.js';

// Initialize component loader
const componentLoader = new ComponentLoader();

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {
    console.log('ntathu.net - Initializing...');
    
    // Check if we're on the home page or a product page
    const path = window.location.pathname;
    
    if (path === '/' || path === '/index.html') {
        // Load and render all page components for home page
        await componentLoader.renderPage();
        console.log('ntathu.net - Home page components loaded successfully');
    } else {
        // For product pages, the content is already in the HTML
        console.log('ntathu.net - Product page loaded successfully');
    }
});

// Re-initialize scripts after components are loaded
document.addEventListener('componentsLoaded', () => {
    // Re-run navigation initialization since DOM elements are now available
    const navInitEvent = new CustomEvent('reinitializeNavigation');
    document.dispatchEvent(navInitEvent);
    
    // Re-run animation observers
    const animationInitEvent = new CustomEvent('reinitializeAnimations');
    document.dispatchEvent(animationInitEvent);
    
    // Re-run form initialization
    const formInitEvent = new CustomEvent('reinitializeForms');
    document.dispatchEvent(formInitEvent);
    
    console.log('ntathu.net - All modules reinitialized');
});