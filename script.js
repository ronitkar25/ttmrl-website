// Toggle the navigation menu when the hamburger icon is clicked
document.querySelector('.hamburger input').addEventListener('change', function () {
    const navLinks = document.querySelector('.nav-links');
    if (this.checked) {
        navLinks.classList.add('active'); // Show the menu
    } else {
        navLinks.classList.remove('active'); // Hide the menu
    }
});

// Optional: Close the menu when a navigation link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        const hamburgerInput = document.querySelector('.hamburger input');
        if (hamburgerInput.checked) {
            hamburgerInput.checked = false; // Uncheck the hamburger input
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active'); // Hide the menu
        }
    });
});
