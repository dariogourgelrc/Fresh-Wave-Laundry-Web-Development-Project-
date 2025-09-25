// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('.nav');
    
    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a navigation link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                nav.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburgerMenu.contains(event.target) && !nav.contains(event.target)) {
                hamburgerMenu.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
});