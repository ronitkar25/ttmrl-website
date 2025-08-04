document.addEventListener('DOMContentLoaded', () => {
  fetch('data/team.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('team-container');

      // Group members by role
      const grouped = {};
      data.forEach(member => {
        if (!grouped[member.role]) grouped[member.role] = [];
        grouped[member.role].push(member);
      });

      Object.entries(grouped).forEach(([role, members]) => {
        const sectionId = role.toLowerCase().replace(/\s+/g, '-');

        const section = document.createElement('section');
        section.id = sectionId;
        section.className = 'team-section';

        const heading = document.createElement('h2');
        heading.textContent = role;

        const grid = document.createElement('div');
        grid.className = 'team-grid';

        members.forEach(member => {
          const tile = document.createElement('div');
          tile.className = 'team-member';
          tile.innerHTML = `
            <img src="assets/images/headshots/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <a href="bio.html?id=${member.id}" class="read-bio-button">Read Bio</a>
          `;
          grid.appendChild(tile);
        });

        section.appendChild(heading);
        section.appendChild(grid);
        container.appendChild(section);
      });
    })
    .catch(err => {
      console.error("Error loading team data:", err);
      document.getElementById('team-container').innerHTML = '<p>Error loading team information.</p>';
    });
});
