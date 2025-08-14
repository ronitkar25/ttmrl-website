document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const memberId = params.get("id");

  if (!memberId) {
    document.querySelector('.bio-container').innerHTML = "<h2>No team member ID specified.</h2>";
    return;
  }

  fetch("data/team.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load team data.");
      return response.json();
    })
    .then(data => {
      const member = data.find(person => person.id === memberId);

      if (!member) {
        document.querySelector('.bio-container').innerHTML = "<h2>Team member not found.</h2>";
        return;
      }

      // Base fields
      document.getElementById("bio-name").textContent = member.name;
      const photo = document.getElementById("bio-photo");
      photo.src = `assets/images/headshots/${member.image}`;
      photo.alt = member.name;

      // ----- Title (italic), placed AFTER the name and BEFORE the bio -----
      // Use an existing #bio-title if present; otherwise create and insert it after #bio-name.
      let titleEl = document.getElementById("bio-title");
      if (!titleEl) {
        titleEl = document.createElement("div");
        titleEl.id = "bio-title";
        const nameEl = document.getElementById("bio-name");
        nameEl.insertAdjacentElement("afterend", titleEl);
      }
      titleEl.innerHTML = member.title ? `<em>${member.title}</em>` : "";

      // Bio text
      const bioTextEl = document.getElementById("bio-text");
      bioTextEl.textContent = member.bio || "";

      // ----- Email (after bio) -----
      // Use an existing #bio-email if present; otherwise create and insert after #bio-text.
      let emailEl = document.getElementById("bio-email");
      if (!emailEl) {
        emailEl = document.createElement("div");
        emailEl.id = "bio-email";
        bioTextEl.insertAdjacentElement("afterend", emailEl);
      }
      emailEl.innerHTML = member.email
        ? `Email address: <a href="mailto:${member.email}">${member.email}</a>`
        : "";
    })
    .catch(err => {
      console.error(err);
      document.querySelector('.bio-container').innerHTML = "<h2>Error loading team member profile.</h2>";
    });
});
