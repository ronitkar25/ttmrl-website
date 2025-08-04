console.log("Script is running!");

// Hamburger menu functionality
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

    // Hero slider functionality
    const heroElement = document.querySelector('.hero');
    const heroTextElement = document.querySelector('#heroText');

    if (heroElement && heroTextElement) {
        const slides = [
            {
                image: 'assets/images/home-hero-1.jpg',
                text: 'Pioneering blood research to advance transfusion medicine and enhance outcomes for critically ill and trauma patients.'
            },
            {
                image: 'assets/images/home-hero-3.jpg',
                text: 'Utilizing novel microfluidic devices to study flow-dependent platelet function and high-shear platelet-rich thrombosis.'
            },
            {
                image: 'assets/images/home-hero-4.jpg',
                text: 'Revealing the spatial distribution of factor IX and its unique role in regulating hemostasis during traumatic injury.'
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
        setInterval(changeSlide, 6000); // Change slide every 6 seconds
    } else {
        console.error('Hero element or text element not found!');
    }

    // News section functionality
    const newsContainer = document.getElementById("news-container");

    if (newsContainer) {
        // Fetch the news JSON file
        fetch("news.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load news data");
                }
                return response.json();
            })
            .then(newsItems => {
                newsItems.forEach(item => {
                    const newsItem = document.createElement("div");
                    newsItem.classList.add("news-item");
                
                    // Conditionally build the HTML content
                    newsItem.innerHTML = `
                        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ""}
                        <div>
                            <h2>${item.title}</h2>
                            ${item.date ? `<h3>${item.date}</h3>` : ""}
                            <p>
                                ${item.text}
                                ${item.link ? `<a href="${item.link}" target="_blank">Read more</a>` : ""}
                            </p>
                        </div>
                    `;
                
                    newsContainer.appendChild(newsItem);
                });
                
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                newsContainer.innerHTML = "<p>Failed to load news items.</p>";
            });
    } else {
        console.warn("News container not found on this page.");
    }
});
