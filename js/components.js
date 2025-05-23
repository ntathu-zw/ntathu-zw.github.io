// Component Loader - Handles loading and rendering HTML templates

class ComponentLoader {
    constructor() {
        this.cache = new Map();
    }

    async loadTemplate(templatePath) {
        if (this.cache.has(templatePath)) {
            return this.cache.get(templatePath);
        }

        try {
            const response = await fetch(templatePath);
            const html = await response.text();
            this.cache.set(templatePath, html);
            return html;
        } catch (error) {
            console.error(`Failed to load template: ${templatePath}`, error);
            return '';
        }
    }

    async renderComponent(containerId, templatePath) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container not found: ${containerId}`);
            return;
        }

        const html = await this.loadTemplate(templatePath);
        container.innerHTML = html;
    }

    async renderPage() {
        const app = document.getElementById('app');
        if (!app) {
            console.error('App container not found');
            return;
        }

        // Load all components in order - added CTA banner after hero
        const components = [
            'templates/navigation.html',
            'templates/hero.html',
            'templates/cta-banner.html',
            'templates/wifi-advertising.html',
            'templates/services.html',
            'templates/portfolio.html',
            'templates/cta.html',
            'templates/contact.html',
            'templates/footer.html'
        ];

        try {
            const htmlParts = await Promise.all(
                components.map(component => this.loadTemplate(component))
            );

            app.innerHTML = htmlParts.join('');
            
            // Dispatch custom event to notify that components are loaded
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
        } catch (error) {
            console.error('Failed to render page components:', error);
        }
    }
}

export { ComponentLoader };