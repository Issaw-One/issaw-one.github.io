
document.addEventListener("DOMContentLoaded", () => {
  const sites = [{'id': 'cinepulse', 'name': 'Cinepulse', 'url': 'https://cinepulse.fr', 'color': '#4B0082', 'logo': '🎬'}, {'id': 'ivdid', 'name': 'IVDID', 'url': 'https://ivdid.com', 'color': '#B22222', 'logo': '🍿'}];

  const container = document.getElementById("site-container");
  container.innerHTML = "";

  sites.forEach(site => {
    const card = document.createElement("div");
    card.className = "site-card";
    card.innerHTML = `
      <div style="padding: 1rem; background: #4B0082; border-radius: 10px; color: white; margin-bottom: 1rem;">
        <h3>🎬 ${site.name}</h3>
        <a href="${site.url}" target="_blank" style="color: yellow;">Visiter</a>
      </div>
    `;
    container.appendChild(card);
  });
});
