// Forms Module - Contact form handling and validation
// Updated to handle dynamic component loading

let contactForm;

function initializeForms() {
    contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Remove existing listeners by cloning the form
        const newForm = contactForm.cloneNode(true);
        contactForm.parentNode.replaceChild(newForm, contactForm);
        contactForm = newForm;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const service = document.getElementById('service')?.value;
            const message = document.getElementById('message')?.value;
            
            // Simple form validation
            if (name && email && service && message) {
                // Simulate form submission
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all fields.', 'error');
            }
        });
    }
}

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease'
    });
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to DOM and animate in
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Initialize on DOM ready and when components are reloaded
document.addEventListener('DOMContentLoaded', initializeForms);
document.addEventListener('reinitializeForms', initializeForms);

export { initializeForms, validateEmail, showNotification };