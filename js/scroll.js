// Scroll functionality

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Skip if it's not a section link
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Add highlight effect to the target section
        targetElement.classList.add('highlight');
        
        // Scroll to the target element with smooth behavior
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Offset for fixed navbar
          behavior: 'smooth'
        });
        
        // Remove highlight after animation completes
        setTimeout(() => {
          targetElement.classList.remove('highlight');
        }, 1000);
        
        // Update URL without refreshing the page
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Add active class to navigation links based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});