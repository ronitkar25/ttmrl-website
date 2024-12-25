console.log("Script is running!");


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

// Close menu when a navigation link is clicked
navLinks.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        hamburgerInput.checked = false; // Uncheck the hamburger input
        navLinks.classList.remove('active'); // Hide navigation links
        navOverlay.classList.remove('active'); // Hide overlay
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    const heroElement = document.querySelector('.hero');
    const heroTextElement = document.querySelector('#heroText');

    if (!heroElement || !heroTextElement) {
        console.error('Hero element or text element not found!');
        return;
    }

    console.log('Hero element:', heroElement);
    console.log('Hero text element:', heroTextElement);

    const slides = [
        {
            image: 'assets/images/home-hero-1.jpg',
            text: 'Pioneering blood research to advance transfusion medicine and enhance outcomes for critically ill and trauma patients.'
        },
        {
            image: 'assets/images/home-hero-4.jpg',
            text: 'Advancing trauma care through innovative research, clinical collaboration, and insights from the University of Pittsburgh and UPMC.'
        }
    ];

    let currentIndex = 0;

    function changeSlide() {
        console.log('Changing to slide:', currentIndex + 1);

        // Update background image
        currentIndex = (currentIndex + 1) % slides.length;
        heroElement.style.backgroundImage = `url(${slides[currentIndex].image})`;

        // Fade out text
        heroTextElement.classList.remove('visible');
        setTimeout(() => {
            // Change text and fade in
            heroTextElement.textContent = slides[currentIndex].text;
            heroTextElement.classList.add('visible');
        }, 1000); // Sync with the CSS transition duration
    }

    // Initial setup: Set background image and make text visible
    heroElement.style.backgroundImage = `url(${slides[currentIndex].image})`;
    heroTextElement.textContent = slides[currentIndex].text;
    heroTextElement.classList.add('visible'); // Add the visible class initially

    console.log('Initial slide loaded');
    setInterval(changeSlide, 6000); // Change slide every 10 seconds
});
