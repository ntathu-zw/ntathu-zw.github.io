// Coming Soon Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notifyForm');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Smooth scroll for service navigation
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Add floating animation to construction icon
    const icon = document.querySelector('.construction-icon');
    if (icon) {
        setInterval(() => {
            icon.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg)';
        }, 3000);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('notifyForm').querySelector('input[type="email"]').value;
    
    if (email) {
        // Send email to info@ntathu.net
        const subject = encodeURIComponent('New Email Signup - ntathu.net');
        const body = encodeURIComponent(`New email signup from: ${email}\n\nPlease add this email to the launch notification list.`);
        const mailtoLink = `mailto:info@ntathu.net?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.open(mailtoLink);
        
        // Show success message
        showNotification('Thank you! We\'ll notify you when we launch.', 'success');
        document.getElementById('notifyForm').reset();
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
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
        transition: 'all 0.3s ease',
        maxWidth: '400px'
    });
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
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