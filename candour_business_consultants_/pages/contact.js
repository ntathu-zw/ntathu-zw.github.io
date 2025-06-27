export default `
<section class="section">
    <div class="container">
        <h1 class="section-title">Get In Touch</h1>
        <p class="section-subtitle">Ready to transform your business? Contact us to discuss your consulting needs</p>
        
        <div class="contact-content">
            <div class="contact-form">
                <h3>Send us a message</h3>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" id="company" name="company">
                    </div>
                    <div class="form-group">
                        <label for="service">Service Interest</label>
                        <select id="service" name="service" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 8px;">
                            <option value="">Select a service</option>
                            <option value="project-management">Project Management</option>
                            <option value="business-analysis">Business Analysis</option>
                            <option value="information-systems">Information Systems</option>
                            <option value="multiple">Multiple Services</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Tell us about your project requirements and how we can help..." required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Send Message</button>
                </form>
            </div>
            
            <div class="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Address:</strong><br>
                123 Business Center Drive<br>
                Suite 500<br>
                Metro City, MC 12345</p>
                
                <p><strong>Phone:</strong><br>
                +1 (555) 123-4567</p>
                
                <p><strong>Email:</strong><br>
                info@candourbusiness.com</p>
                
                <p><strong>Business Hours:</strong><br>
                Monday - Friday: 8:00 AM - 6:00 PM<br>
                Saturday: 9:00 AM - 2:00 PM<br>
                Sunday: Closed</p>
                
                <div class="map-placeholder">
                    📍 Interactive Map Coming Soon
                </div>
            </div>
        </div>
    </div>
</section>
`;

