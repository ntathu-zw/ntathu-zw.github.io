import Router from './router.js';
import Navigation from './navigation.js';
import FormHandler from './formHandler.js';
import PageContent from './pageContent.js';

// Initialize the application
const router = new Router();
Navigation.init();
FormHandler.init();

// Make router available globally for navigation module
window.router = router;