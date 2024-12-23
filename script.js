// Get references to elements
const hamburgerInput = document.querySelector('#hamburger-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

// Toggle navigation and overlay visibility
hamburgerInput.addEventListener('change', function () {
    if (this.checked) {
        navLinks.classList.add('active'); // Show navigation links
        navOverlay.classList.add('active'); // Show overlay
    } else {
        navLinks.classList.remove('active'); // Hide navigation links
        navOverlay.classList.remove('active'); // Hide overlay
    }
});

// Close menu when overlay is clicked
navOverlay.addEventListener('click', function () {
    hamburgerInput.checked = false; // Uncheck the hamburger input
    navLinks.classList.remove('active'); // Hide navigation links
    navOverlay.classList.remove('active'); // Hide overlay
});

// Close menu when a navigation link is clicked
navLinks.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        hamburgerInput.checked = false; // Uncheck the hamburger input
        navLinks.classList.remove('active'); // Hide navigation links
        navOverlay.classList.remove('active'); // Hide overlay
    }
});
