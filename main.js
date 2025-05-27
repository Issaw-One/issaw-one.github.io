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
        <div class="site-card-header" style="background: ${site.headerBg};">
            <img src="${site.logo}" alt="${site.name} logo">
            <div class="category-icon">${getCategoryIcon(site.category)}</div>
        </div>
        <div class="site-card-content">
            <h3>${site.name}</h3>
            <p>${site.description}</p>
            <div class="site-tags">
                ${tagsHTML}
            </div>
            ${searchFormHTML}
            <div class="site-actions">
                <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="btn-visit">Visiter le site</a>
            </div>
        </div>
    `;

    // Ajout de la classe 'new-site' si la date de mise à jour est récente
    // La logique ici est basée sur une date en dur pour l'exemple.
    // Pour une utilisation réelle, vous devriez ajouter une propriété 'dateAdded' ou 'lastUpdated' à vos objets 'site' dans sites.js.
    const isNew = site.tags.some(tag => tag.includes('Update : 17/05/2025')); // Adapte la date si tu veux afficher que les très récents
    if (isNew) {
        card.classList.add('new-site');
    }

    // Ajout de la classe d'animation pour l'apparition
    setTimeout(() => {
        card.classList.add('animate-in');
    }, 100); // Délai léger pour l'animation (ajustable)

    return card;
}


    // Fonction pour populer les grilles de sites
    function populateSiteGrids() {
        for (const category in sitesData) {
            const grid = document.getElementById(`${category}-grid`);
            if (grid) {
                sitesData[category].forEach(site => {
                    grid.appendChild(createSiteCard(site));
                });
            }
        }
    }

    // Fonction de recherche
    function setupSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const allSiteCards = document.querySelectorAll('.site-card');

            allSiteCards.forEach(card => {
                const siteName = card.querySelector('h3').textContent.toLowerCase();
                const siteDescription = card.querySelector('p').textContent.toLowerCase();
                const siteTags = card.querySelectorAll('.site-tag');
                let tagsText = '';
                siteTags.forEach(tag => {
                    tagsText += tag.textContent.toLowerCase() + ' ';
                });

                if (siteName.includes(query) || siteDescription.includes(query) || tagsText.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Fonction de recherche par catégorie (si besoin de plus de filtres à l'avenir)
    function setupCategorySearch() {
        // Cette fonction peut être étendue pour gérer des filtres par catégorie
        // Actuellement, la recherche est globale, mais on peut ajouter des boutons de filtre ici
    }

    // Fonction de filtrage (actuellement non utilisée directement, mais peut être utile)
    function setupFilters() {
        // Peut être utilisée pour des filtres plus complexes (ex: par langue, par type de contenu)
    }

    // Fonction pour le basculement du thème
    function setupThemeToggle() {
        const themeSwitch = document.querySelector('.theme-switch');
        const body = document.body;

        // Charger le thème depuis localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);
            if (savedTheme === 'light-theme') {
                themeSwitch.querySelector('i').classList.replace('fa-moon', 'fa-sun');
            }
        } else {
            // Définir le thème par défaut si aucun n'est sauvegardé
            body.classList.add('dark-theme');
        }

        themeSwitch.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                themeSwitch.querySelector('i').classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light-theme');
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                themeSwitch.querySelector('i').classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark-theme');
            }
        });
    }

    // Fonction pour les animations de défilement (si tu en as déjà)
    function setupScrollAnimations() {
        // Exemple basique : animer les sections quand elles apparaissent
        const sections = document.querySelectorAll('.category-section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // observer.unobserve(entry.target); // Optionnel: pour n'animer qu'une seule fois
                }
            });
        }, { threshold: 0.1 }); // Se déclenche quand 10% de la section est visible

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Fonction pour le défilement fluide
    function setupSmoothScrolling() {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Fonction pour le "scroll spy" (active le lien de nav quand on scroll)
    function setupScrollSpy() {
        const sections = document.querySelectorAll('.category-section');
        const navLinks = document.querySelectorAll('nav ul li a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Fonction pour le menu mobile
    function setupMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileNav = document.querySelector('nav.mobile-nav');

        if (mobileMenuButton && mobileNav) {
            mobileMenuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('mobile-open');
                const icon = mobileMenuButton.querySelector('i');
                if (mobileNav.classList.contains('mobile-open')) {
                    icon.classList.replace('fa-bars', 'fa-times');
                } else {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            });

            // Fermer le menu si un lien est cliqué
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('mobile-open');
                    const icon = document.querySelector('.mobile-menu-button i');
                    if (icon) {
                        icon.classList.replace('fa-times', 'fa-bars');
                    }
                });
            });
        }
    }

    // Fonction pour gérer les images manquantes
    function handleMissingImages() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.onerror = function () {
                // Remplacer l'image par un placeholder
                this.src = 'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Crect width=\"100\" height=\"100\" fill=\"%23cccccc\"/%3E%3Ctext x=\"50\" y=\"50\" font-size=\"18\" text-anchor=\"middle\" alignment-baseline=\"middle\" font-family=\"Arial\" fill=\"%23666666\"%3E' + this.alt + '%3C/text%3E%3C/svg%3E';
                this.classList.add('placeholder-img');
            };
        });
    }

    // Nouvelle fonction pour l'effet de header au scroll
    function setupHeaderScroll() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Si l'utilisateur a scrollé plus de 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
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
        setupHeaderScroll(); // Appel de la nouvelle fonction
    }

        initApp();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered: ', registration);
            })
            .catch(registrationError => {
                console.log('ServiceWorker registration failed: ', registrationError);
            });
    });
}