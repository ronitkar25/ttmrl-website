// Hero slider functionality
const heroImages = document.querySelectorAll('#hero .hero-slider img');
let currentImageIndex = 0;
let imageInterval;

function showImage(index) {
    heroImages.forEach((image, i) => {
        image.style.opacity = (i === index ? 1 : 0);
    });
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= heroImages.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

function startSlider() {
    imageInterval = setInterval(nextImage, 3000); // Change image every 3 seconds
}

// Start the slider when the page loads
window.addEventListener('load', () => {
    startSlider();
});