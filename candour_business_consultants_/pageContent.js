const PageContent = {
    async getPageContent(page) {
        try {
            const pageModule = await import(`./pages/${page}.js`);
            return pageModule.default;
        } catch (error) {
            console.error(`Failed to load page: ${page}`, error);
            return '<div class="section"><div class="container"><h1>Page Not Found</h1><p>The requested page could not be found.</p></div></div>';
        }
    }
};

// Make PageContent available globally for the router
window.PageContent = PageContent;

export default PageContent;

