document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const memberId = params.get("id");

  if (!memberId) {
    document.querySelector('.bio-container').innerHTML = "<h2>No team member ID specified.</h2>";
    return;
  }

  fetch("data/team.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load team data.");
      }
      return response.json();
    })
    .then(data => {
      const member = data.find(person => person.id === memberId);

      if (!member) {
        document.querySelector('.bio-container').innerHTML = "<h2>Team member not found.</h2>";
        return;
      }

      // Fill in content
      document.getElementById("bio-name").textContent = member.name;
      document.getElementById("bio-photo").src = `assets/images/headshots/${member.image}`;
      document.getElementById("bio-photo").alt = member.name;
      document.getElementById("bio-text").textContent = member.bio;
    })
    .catch(err => {
      console.error(err);
      document.querySelector('.bio-container').innerHTML = "<h2>Error loading team member profile.</h2>";
    });
});
