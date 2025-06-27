class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
        this.init();
    }

    init() {
        // Handle initial load
        window.addEventListener('load', () => {
            this.handleRoute();
        });

        // Handle navigation
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });
    }

    addRoute(path, component) {
        this.routes[path] = component;
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        this.currentRoute = hash;
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('active');
            }
        });

        // Load page content
        this.loadPage(hash);
    }

    async loadPage(page) {
        const app = document.getElementById('app');
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });

        // Show current page or create it
        let pageElement = document.getElementById(`page-${page}`);
        if (!pageElement) {
            pageElement = await this.createPage(page);
            app.appendChild(pageElement);
        }
        
        pageElement.classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    }

    async createPage(page) {
        const pageElement = document.createElement('div');
        pageElement.id = `page-${page}`;
        pageElement.className = 'page';
        pageElement.innerHTML = await window.PageContent.getPageContent(page);
        return pageElement;
    }
}

export default Router;