document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour créer une carte de site
    function createSiteCard(site) {
    const card = document.createElement('div');
    card.className = 'site-card';
    card.dataset.id = site.id;
    card.dataset.category = site.category;

    const tagsHTML = site.tags.map(tag => `<span class="site-tag">${tag}</span>`).join('');
    
    function getCategoryIcon(category) {
    switch (category) {
        case 'films': return '<i class="fas fa-film"></i>';
        case 'series': return '<i class="fas fa-tv"></i>';
        case 'animes': return '<i class="fas fa-dragon"></i>';
        case 'drama': return '<i class="fas fa-theater-masks"></i>';
        case 'torrent': return '<i class="fas fa-magnet"></i>';
        default: return '';
    }
}

    // Génération du champ de recherche si searchUrl est défini
    let searchFormHTML = '';
    if (site.searchUrl && site.searchUrl.includes('{query}')) {
        searchFormHTML = `
            <form class="site-search-form" onsubmit="event.preventDefault(); const q = this.querySelector('input').value.trim(); if (q) window.open('${site.searchUrl.replace('{query}', "' + encodeURIComponent(q) + '")}', '_blank');">
                <input type="text" placeholder="Rechercher sur ${site.name}...">
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        `;
    }

    card.innerHTML = `
        <div class="site-header" style="background: ${site.headerBg}; position: relative;">
  <div class="category-icon">${getCategoryIcon(site.category)}</div>

            <div class="logo-container">
                <img src="${site.logo}" alt="${site.name}" class="site-logo">
            </div>
        </div>
        <div class="site-content">
            <h3 class="site-title">
  <a href="${site.url}" target="_blank">
    ${site.name}
    ${site.showStar ? '<i class="fa-solid fa-star" style="color: #FFD43B; margin-left: 5px;"></i>' : ''}
  </a>
</h3>

            <p class="site-desc">${site.description}</p>
            <div class="site-tags">
                ${tagsHTML}
            </div>
            ${searchFormHTML}
        </div>
        <div class="site-footer">
            <a href="${site.url}" class="visit-btn" target="_blank">Visiter</a>
        </div>
    `;

    return card;
}


    // Fonction pour remplir les grilles de sites
    function populateSiteGrids() {
        // Remplir la grille des sites mis en avant
        const featuredGrid = document.querySelector('.featured-sites');
        if (featuredGrid) {
            const featuredSites = [
                ...sitesData.films.filter(site => site.featured),
                ...sitesData.series.filter(site => site.featured),
                ...sitesData.animes.filter(site => site.featured),
                ...sitesData.drama.filter(site => site.featured),
                ...sitesData.torrent.filter(site => site.featured)
            ];

            featuredSites.forEach(site => {
                featuredGrid.appendChild(createSiteCard(site));
            });
        }

        // Remplir la grille des films
        const filmsGrid = document.querySelector('.films-grid');
        if (filmsGrid) {
            sitesData.films.forEach(site => {
                filmsGrid.appendChild(createSiteCard(site));
            });
        }

        // Remplir la grille des séries
        const seriesGrid = document.querySelector('.series-grid');
        if (seriesGrid) {
            sitesData.series.forEach(site => {
                seriesGrid.appendChild(createSiteCard(site));
            });
        }

        // Remplir la grille des animés
        const animesGrid = document.querySelector('.animes-grid');
        if (animesGrid) {
            sitesData.animes.forEach(site => {
                animesGrid.appendChild(createSiteCard(site));
            });
        }

        // Remplir la grille des drama
        const dramaGrid = document.querySelector('.drama-grid');
        if (animesGrid) {
            sitesData.drama.forEach(site => {
                dramaGrid.appendChild(createSiteCard(site));
            });
        }

        // Remplir la grille des torrent
        const torrentGrid = document.querySelector('.torrent-grid');
        if (torrentGrid) {
            sitesData.torrent.forEach(site => {
                torrentGrid.appendChild(createSiteCard(site));
            });
        }
    }

    // Fonction pour la recherche
    function setupSearch() {
    const searchInput = document.getElementById('search-input');

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();
            const allSiteCards = document.querySelectorAll('.site-card');

            allSiteCards.forEach(card => {
                const siteName = card.querySelector('.site-title').textContent.toLowerCase();
                const siteDesc = card.querySelector('.site-desc').textContent.toLowerCase();
                const shouldShow = siteName.includes(query) || siteDesc.includes(query);

                card.style.display = shouldShow ? 'block' : 'none';
            });

            // 🔽 Masquer les grilles de catégories vides
            const categoryGrids = document.querySelectorAll('.films-grid, .series-grid, .animes-grid, .drama-grid, .torrent-grid');

            categoryGrids.forEach(grid => {
                const visibleCards = Array.from(grid.querySelectorAll('.site-card')).filter(card => card.style.display !== 'none');
                const section = grid.closest('section'); // S'assure que toute la section est masquée
                if (visibleCards.length === 0) {
                    if (section) section.style.display = 'none';
                } else {
                    if (section) section.style.display = '';
                }
            });
        });
    }
}


    
    function setupCategorySearch() {
        const searchInputs = document.querySelectorAll('.category-search');
        searchInputs.forEach(input => {
            input.addEventListener('input', function () {
                const category = this.dataset.category;
                const query = this.value.toLowerCase().trim();
                const cards = document.querySelectorAll(`.${category}-grid .site-card`);
                cards.forEach(card => {
                    const name = card.querySelector('.site-title').textContent.toLowerCase();
                    const desc = card.querySelector('.site-desc').textContent.toLowerCase();
                    const match = name.includes(query) || desc.includes(query);
                    card.style.display = match ? 'block' : 'none';
                });
            });
        });
    }

    // Fonction pour configurer les filtres
    function setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Retirer la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Ajouter la classe active au bouton cliqué
                this.classList.add('active');

                // Filtrer les sites
                const filter = this.dataset.filter;
                const featuredCards = document.querySelectorAll('.featured-sites .site-card');

                if (filter === 'all') {
                    // Afficher tous les sites
                    featuredCards.forEach(card => card.style.display = 'block');
                } else {
                    // Filtrer les sites selon le tag
                    featuredCards.forEach(card => {
                        const tags = card.querySelectorAll('.site-tag');
                        let hasTag = false;

                        tags.forEach(tag => {
                            if (tag.textContent.toLowerCase().includes(filter.toLowerCase())) {
                                hasTag = true;
                            }
                        });

                        card.style.display = hasTag ? 'block' : 'none';
                    });
                }
            });
        });
    }

    // Fonction pour basculer entre les thèmes clair et sombre
    function setupThemeToggle() {
        const themeSwitch = document.querySelector('.theme-switch');
        const themeIcon = themeSwitch.querySelector('i');
        const toggleThemeLink = document.getElementById('toggleTheme');
        const body = document.body;

        // Vérifier si un thème est déjà enregistré dans le localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        // Fonction pour basculer le thème
        function toggleTheme() {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-theme');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        }

        // Ajouter des écouteurs d'événements pour le basculement du thème
        if (themeSwitch) {
            themeSwitch.addEventListener('click', toggleTheme);
        }

        if (toggleThemeLink) {
            toggleThemeLink.addEventListener('click', function (e) {
                e.preventDefault();
                toggleTheme();
            });
        }
    }

    // Fonction pour les animations au défilement
    function setupScrollAnimations() {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
            section.classList.add('scroll-animation');
        });
    }

    // Fonction pour gérer le défilement fluide
    function setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');

                if (targetId.startsWith('#') && targetId !== '#') {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        // Défiler vers l'élément cible avec une animation fluide
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });

                        // Ajouter la classe active au lien cliqué et la retirer des autres
                        navLinks.forEach(navLink => navLink.classList.remove('active'));
                        this.classList.add('active');
                    }
                }
            });
        });
    }

    // Fonction pour mettre à jour les éléments actifs dans le menu de navigation lors du défilement
    function setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a');

        window.addEventListener('scroll', function () {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = '#' + section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Fonction pour gérer le menu mobile
    function setupMobileMenu() {
        const header = document.querySelector('header');
        const mobileMenuButton = document.createElement('div');
        mobileMenuButton.className = 'mobile-menu-button';
        mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';

        header.querySelector('.container').appendChild(mobileMenuButton);

        mobileMenuButton.addEventListener('click', function () {
            const nav = document.querySelector('nav');
            nav.classList.toggle('mobile-open');

            const icon = this.querySelector('i');
            if (nav.classList.contains('mobile-open')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Fermer le menu mobile lorsqu'un lien est cliqué
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                const nav = document.querySelector('nav');
                nav.classList.remove('mobile-open');

                const icon = document.querySelector('.mobile-menu-button i');
                if (icon) {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            });
        });
    }

    // Fonction pour gérer les images manquantes
    function handleMissingImages() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.onerror = function () {
                // Remplacer l'image par un placeholder
                this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23cccccc"/%3E%3Ctext x="50" y="50" font-size="18" text-anchor="middle" alignment-baseline="middle" font-family="Arial" fill="%23666666"%3E' + this.alt + '%3C/text%3E%3C/svg%3E';
                this.classList.add('placeholder-img');
            };
        });
    }

    function initApp() 
    {
        populateSiteGrids();
        setupSearch();
        setupCategorySearch();
        setupFilters();
        setupThemeToggle();
        setupScrollAnimations();
        setupSmoothScrolling();
        setupScrollSpy();
        setupMobileMenu();
        handleMissingImages();
    }

        initApp();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log("✅ Service Worker enregistré"))
      .catch(err => console.warn("❌ Erreur SW :", err));
  }