// Main JavaScript functionality

// Close navbar when clicking on a nav item on mobile
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Add click event to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Check if navbar collapse has show class (is expanded)
      if (navbarCollapse.classList.contains('show')) {
        // Click the toggler to collapse it
        navbarToggler.click();
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Initialize the application
  initApp();
});

// Initialize application features
function initApp() {
  console.log('Restaurant Menu Application Initialized');
  
  // Animate menu items when they come into viewport
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.menu-item').forEach(item => {
    item.style.animationPlayState = 'paused';
    observer.observe(item);
  });
}