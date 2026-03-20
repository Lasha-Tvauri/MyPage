document.addEventListener("DOMContentLoaded", function() {
  // Simulate a delay to showcase the loader
  setTimeout(function() {
    document.querySelector(".loader-container").style.display = "none";
    document.querySelector(".content").style.display = "block";
    projectsFunction();
    document.getElementById('homeButton').style.color = 'var(--menu-btn-active)';
  }, 1500); 
});
