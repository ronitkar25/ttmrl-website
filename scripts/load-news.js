document.addEventListener("DOMContentLoaded", () => {
  fetch("data/news.json")
    .then(res => res.json())
    .then(data => {
      const pubContainer = document.getElementById("pub-container");
      const yearSidebar = document.getElementById("year-sidebar");

      // Sort publications by date descending
      data.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Group by year
      const grouped = {};
      data.forEach(pub => {
        const year = pub.year;
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(pub);
      });

      // Sidebar + content rendering
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
          section.classList.add("pub-year-section");
          section.id = `year-${year}`;

          const heading = document.createElement("h2");
          heading.textContent = year;
          section.appendChild(heading);

          // === Publications List ===
          grouped[year].forEach(pub => {
            const pubDiv = document.createElement("div");
            pubDiv.classList.add("publication");

            const title = document.createElement("h3");
            title.textContent = pub.title;

            const authors = document.createElement("p");
            authors.className = "authors";
            authors.textContent = pub.authors;

            const journal = document.createElement("p");
            journal.className = "journal";
            journal.textContent = pub.journal;

            const links = document.createElement("p");
            links.className = "pub-links";

            if (pub.doi) {
              const doiLink = document.createElement("a");
              doiLink.href = pub.doi;
              doiLink.target = "_blank";
              doiLink.textContent = "View DOI";
              links.appendChild(doiLink);
            }

            if (pub.pdf) {
              const pdfLink = document.createElement("a");
              pdfLink.href = pub.pdf;
              pdfLink.target = "_blank";
              pdfLink.textContent = "Download PDF";
              links.appendChild(document.createTextNode("| "));
              links.appendChild(pdfLink);
            }

            pubDiv.appendChild(title);
            pubDiv.appendChild(authors);
            pubDiv.appendChild(journal);
            pubDiv.appendChild(links);
            section.appendChild(pubDiv);
          });

          pubContainer.appendChild(section);
        });
    })
    .catch(err => {
      console.error("Error loading publications:", err);
      document.getElementById("pub-container").innerHTML = "<p>Failed to load publications.</p>";
    });
});
