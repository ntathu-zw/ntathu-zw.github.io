// Modal System - Contact and Beta signup modals

class ModalSystem {
    constructor() {
        this.currentModal = null;
        this.init();
    }

    init() {
        this.createModalContainer();
        this.bindEvents();
    }

    createModalContainer() {
        if (!document.getElementById('modal-container')) {
            const container = document.createElement('div');
            container.id = 'modal-container';
            container.className = 'modal-container';
            document.body.appendChild(container);
        }
    }

    bindEvents() {
        // Contact Us buttons
        document.addEventListener('click', (e) => {
            if (e.target.id === 'contact-us-btn' || 
                e.target.id === 'contact-web-dev' || 
                e.target.id === 'support-contact-btn' || 
                e.target.id === 'campaign-contact-btn' ||
                e.target.id === 'get-quote-btn') {
                this.showContactModal(e.target.id);
            }
        });

        // Beta signup buttons
        document.addEventListener('click', (e) => {
            if (e.target.id === 'join-beta-btn' || 
                e.target.id === 'start-advertising-btn' || 
                e.target.id === 'monetize-wifi-btn' ||
                e.target.id === 'advertiser-signup' ||
                e.target.id === 'hotspot-signup') {
                this.showBetaModal(e.target.id);
            }
        });

        // Close modal on backdrop click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                this.closeModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.closeModal();
            }
        });
    }

    showContactModal(buttonId) {
        let service = 'General Inquiry';
        let title = 'Contact Us';
        
        switch(buttonId) {
            case 'contact-web-dev':
            case 'get-quote-btn':
                service = 'Web Development';
                title = 'Get a Web Development Quote';
                break;
            case 'support-contact-btn':
                service = 'IT Support';
                title = 'Get IT Support';
                break;
            case 'campaign-contact-btn':
                service = 'Influencer Campaigns';
                title = 'Start Your Campaign';
                break;
        }

        const modal = this.createModal(title, this.getContactForm(service));
        this.showModal(modal);
    }

    showBetaModal(buttonId) {
        let type = 'general';
        let title = 'Join Beta Program';
        
        if (buttonId.includes('advertiser') || buttonId.includes('advertising')) {
            type = 'advertiser';
            title = 'Join as Advertiser';
        } else if (buttonId.includes('hotspot') || buttonId.includes('monetize')) {
            type = 'hotspot';
            title = 'Monetize Your Wi-Fi';
        }

        const modal = this.createModal(title, this.getBetaForm(type));
        this.showModal(modal);
    }

    createModal(title, content) {
        return `
            <div class="modal-backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <h3>${title}</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                </div>
            </div>
        `;
    }

    getContactForm(service) {
        return `
            <form class="modal-form" id="contact-modal-form">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <input type="text" name="company" placeholder="Company Name">
                </div>
                <div class="form-group">
                    <select name="service" required>
                        <option value="${service}">${service}</option>
                        <option value="Web Development">Web Development</option>
                        <option value="IT Support">IT Support</option>
                        <option value="Influencer Campaigns">Influencer Campaigns</option>
                        <option value="Wi-Fi Advertising">Wi-Fi Advertising</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Tell us about your project or requirements" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-full">Send Message</button>
            </form>
        `;
    }

    getBetaForm(type) {
        let specificFields = '';
        
        if (type === 'advertiser') {
            specificFields = `
                <div class="form-group">
                    <input type="text" name="business_type" placeholder="Type of Business" required>
                </div>
                <div class="form-group">
                    <input type="text" name="target_audience" placeholder="Target Audience">
                </div>
                <div class="form-group">
                    <select name="budget_range" required>
                        <option value="">Monthly Budget Range</option>
                        <option value="under-100">Under $100</option>
                        <option value="100-500">$100 - $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-plus">$1,000+</option>
                    </select>
                </div>
            `;
        } else if (type === 'hotspot') {
            specificFields = `
                <div class="form-group">
                    <input type="text" name="venue_type" placeholder="Venue Type (Cafe, Restaurant, etc.)" required>
                </div>
                <div class="form-group">
                    <input type="text" name="location" placeholder="Location/Address" required>
                </div>
                <div class="form-group">
                    <input type="number" name="daily_users" placeholder="Estimated Daily Wi-Fi Users">
                </div>
            `;
        }

        return `
            <form class="modal-form" id="beta-modal-form">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <input type="tel" name="phone" placeholder="Phone Number">
                </div>
                ${specificFields}
                <div class="form-group">
                    <textarea name="additional_info" placeholder="Additional Information" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-full">Join Beta Program</button>
            </form>
        `;
    }

    showModal(modalHTML) {
        const container = document.getElementById('modal-container');
        container.innerHTML = modalHTML;
        container.style.display = 'block';
        
        // Add animation
        setTimeout(() => {
            container.classList.add('active');
        }, 10);

        // Bind close button
        const closeBtn = container.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Bind form submission
        const forms = container.querySelectorAll('.modal-form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        });

        this.currentModal = container;
    }

    closeModal() {
        const container = document.getElementById('modal-container');
        if (container) {
            container.classList.remove('active');
            setTimeout(() => {
                container.style.display = 'none';
                container.innerHTML = '';
            }, 300);
        }
        this.currentModal = null;
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Create email content based on form type
        let subject = 'New Contact Form Submission - ntathu.net';
        let body = 'New form submission:\n\n';
        
        Object.entries(data).forEach(([key, value]) => {
            body += `${key.replace('_', ' ').toUpperCase()}: ${value}\n`;
        });
        
        // Send email to info@ntathu.net
        const mailtoLink = `mailto:info@ntathu.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
        
        // Show success message
        this.showSuccessMessage();
        
        // Close modal after delay
        setTimeout(() => {
            this.closeModal();
        }, 2000);
    }

    showSuccessMessage() {
        const modalBody = document.querySelector('.modal-body');
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h4>Thank You!</h4>
                    <p>We've received your information and will get back to you soon.</p>
                </div>
            `;
        }
    }
}

// Initialize modal system
document.addEventListener('DOMContentLoaded', () => {
    new ModalSystem();
});

// Re-initialize when components are loaded
document.addEventListener('componentsLoaded', () => {
    new ModalSystem();
});

export { ModalSystem };