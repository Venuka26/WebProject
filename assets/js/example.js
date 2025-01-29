'use strict';

// Utility function to add event listeners to multiple elements
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Get the necessary DOM elements
const navbar = document.querySelector("[data-navbar]");  // Navbar
const navTogglers = document.querySelectorAll("[data-nav-toggler]");  // Menu buttons
const navLinks = document.querySelectorAll("[data-nav-link]");  // Links in the navbar
const overlay = document.querySelector("[data-overlay]");  // Overlay to dim the background

// Function to toggle the navbar visibility
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add event listeners for the toggler buttons (hamburger)
addEventOnElem(navTogglers, "click", toggleNavbar);

// Function to close the navbar when a link is clicked
const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

// Add event listeners for the navbar links to close the navbar
addEventOnElem(navLinks, "click", closeNavbar);

// Optional: Close navbar when overlay is clicked
overlay.addEventListener("click", closeNavbar);