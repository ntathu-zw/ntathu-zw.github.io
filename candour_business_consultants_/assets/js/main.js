document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('includes/navbar.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        // Re-attach event listener for mobile menu toggle after navbar is loaded
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                document.querySelector('.nav-menu').classList.toggle('active');
                this.classList.toggle('active');
            });
        }
      });
    // Load footer
    fetch('includes/footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
});
