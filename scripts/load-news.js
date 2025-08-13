document.addEventListener("DOMContentLoaded", () => {
  fetch("data/news.json")
    .then(res => res.json())
    .then(data => {
      const newsContainer = document.getElementById("news-container");
      const yearSidebar = document.getElementById("year-sidebar");

      // Sort news by date (most recent first)
      data.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Group by year
      const grouped = {};
      data.forEach(item => {
        const year = new Date(item.date).getFullYear();
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(item);
      });

      // Sidebar + News rendering
      Object.keys(grouped)
        .sort((a, b) => b - a)
        .forEach(year => {
          // === Sidebar Link ===
          const link = document.createElement("a");
          link.href = `#year-${year}`;
          link.textContent = year;
          yearSidebar.appendChild(link);

          // === Year Section ===
          const section = document.createElement("section");
          section.classList.add("news-year-section");
          section.id = `year-${year}`;

          const heading = document.createElement("h2");
          heading.textContent = year;
          section.appendChild(heading);

          // === News Items ===
          grouped[year].forEach(item => {
            const newsDiv = document.createElement("div");
            newsDiv.classList.add("news-item");

            if (item.image) {
              const img = document.createElement("img");
              img.src = item.image;
              img.alt = item.title;
              img.classList.add("news-image");
              newsDiv.appendChild(img);
            }

            const title = document.createElement("h3");
            title.textContent = item.title;
            newsDiv.appendChild(title);

            const desc = document.createElement("p");
            desc.classList.add("news-description");
            desc.textContent = item.description || "";
            newsDiv.appendChild(desc);

            if (item.link) {
              const linkEl = document.createElement("a");
              linkEl.href = item.link;
              linkEl.target = "_blank";
              linkEl.textContent = "Read more";
              newsDiv.appendChild(linkEl);
            }

            section.appendChild(newsDiv);
          });

          newsContainer.appendChild(section);
        });
    })
    .catch(err => {
      console.error("Error loading news:", err);
      document.getElementById("news-container").innerHTML = "<p>Failed to load news.</p>";
    });
});
