// Get elements for the menu button, navigation links, and icon within the button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu visibility and icon state on menu button click
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open"); // Toggle 'open' class on navLinks
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line"; // Toggle icon class
});

// Close the menu when a navigation link is clicked
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open"); // Remove 'open' class to close menu
  menuBtnIcon.className = "ri-menu-line"; // Reset icon to menu
});

// Highlight the active link in the navigation based on current page URL
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-link"); // Select all nav links
  const currentPath = window.location.pathname; // Get current URL path

  // Add 'active' class to the matching link
  navItems.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

// ScrollReveal configuration for animation effects
const scrollRevealOptions = {
  distance: "50px", // Animation travel distance
  origin: "bottom", // Animation starts from the bottom
  duration: 1000,   // Animation duration in milliseconds
};

// Apply ScrollReveal animations to elements in the header container
const revealElements = [
  { selector: ".header__container h1", delay: 0 },
  { selector: ".header__container p", delay: 500 },
  { selector: ".header__container form", delay: 1000 },
  { selector: ".header__container a", delay: 1500 },
];

revealElements.forEach(({ selector, delay }) => {
  ScrollReveal().reveal(selector, { ...scrollRevealOptions, delay });
});

// Initialize Swiper for slideshow functionality
const swiper = new Swiper(".swiper", {
  loop: true, // Enable looping for continuous slide playback
  pagination: {
    el: ".swiper-pagination", // Selector for pagination element
  },
});
