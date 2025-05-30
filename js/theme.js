// Theme switching functionality

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or respect OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Default to dark mode as required
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    updateThemeIcon(false);
  } else {
    // Either savedTheme is 'dark' or null (not set yet)
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');
    
    // Determine current mode
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update button icon
    updateThemeIcon(isDarkMode);
    
    // Add transitioning class for smoother theme change
    document.body.classList.add('transitioning');
    setTimeout(() => {
      document.body.classList.remove('transitioning');
    }, 300);
  });
  
  // Function to update theme toggle icon
  function updateThemeIcon(isDarkMode) {
    const iconElement = themeToggle.querySelector('i');
    if (isDarkMode) {
      iconElement.classList.remove('bi-sun-fill');
      iconElement.classList.add('bi-moon-fill');
    } else {
      iconElement.classList.remove('bi-moon-fill');
      iconElement.classList.add('bi-sun-fill');
    }
  }
});