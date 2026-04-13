function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const projectItems = document.querySelectorAll('.project-item');
  const nextButton = document.getElementById('next-projects-btn');
  
  if (nextButton) {
    let visibleProjects = 3; // Number of projects to show at once
    let currentIndex = 0;
    
    function showProjects() {
      // Hide all projects
      projectItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Show current set of projects
      for (let i = currentIndex; i < currentIndex + visibleProjects && i < projectItems.length; i++) {
        if (projectItems[i]) {
          projectItems[i].classList.add('active');
        }
      }
      
      // Update button text
      const navigationText = nextButton.querySelector('.navigation-text');
      if (navigationText) {
        if (currentIndex + visibleProjects >= projectItems.length) {
          navigationText.textContent = 'Back to First';
        } else {
          navigationText.textContent = 'Next Projects';
        }
      }
    }
    
    nextButton.addEventListener('click', function() {
      currentIndex += visibleProjects;
      if (currentIndex >= projectItems.length) {
        currentIndex = 0;
      }
      showProjects();
    });
    
    // Initialize
    showProjects();
  }
});



