document.addEventListener('DOMContentLoaded', function () {
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
                case 'dll': return '<i class="fa-solid fa-download"></i>';
                case 'animes': return '<i class="fas fa-dragon"></i>';
                case 'drama': return '<i class="fas fa-theater-masks"></i>';
                case 'torrent': return '<i class="fas fa-magnet"></i>';
                default: return '';
            }
        }


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


        const isNew = site.isNew === true;
        if (isNew) {
            card.classList.add('new-site');
        }


        setTimeout(() => {
            card.classList.add('animate-in');
        }, 100);

        return card;
    }


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


    function setupSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();
            const allSiteCards = document.querySelectorAll('.site-card');
            const categorySection = document.querySelectorAll('.category-section');


            if (query === '') {
                allSiteCards.forEach(card => {
                    card.style.display = 'flex';
                });
                categorySection.forEach(section => {
                    section.style.display = 'block';
                });
                return;
            }


            const categoriesWithResults = new Set();


            allSiteCards.forEach(card => {
                const siteName = card.querySelector('h3').textContent.toLowerCase();
                const siteDescription = card.querySelector('p').textContent.toLowerCase();
                const siteTags = card.querySelectorAll('.site-tag');
                let tagsText = '';
                siteTags.forEach(tag => {
                    tagsText += tag.textContent.toLowerCase() + ' ';
                });

                const isMatch = siteName.includes(query) ||
                    siteDescription.includes(query) ||
                    tagsText.includes(query);

                if (isMatch) {
                    card.style.display = 'flex';

                    const categoryId = card.dataset.category;
                    if (categoryId) {
                        categoriesWithResults.add(categoryId);
                    }
                } else {
                    card.style.display = 'none';
                }
            });


            categorySection.forEach(section => {
                const sectionId = section.id;
                if (categoriesWithResults.has(sectionId)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }

   
    function setupCategorySearch() {
    }

    function setupFilters() {
    }


    function setupThemeToggle() {
        const themeSwitch = document.querySelector('.theme-switch');
        const body = document.body;

        let currentTheme = 'dark-theme';


        body.classList.add(currentTheme);

        themeSwitch.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                themeSwitch.querySelector('i').classList.replace('fa-moon', 'fa-sun');
                currentTheme = 'light-theme';
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                themeSwitch.querySelector('i').classList.replace('fa-sun', 'fa-moon');
                currentTheme = 'dark-theme';
            }
        });
    }


    function setupScrollAnimations() {
        const sections = document.querySelectorAll('.category-section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }


    function setupSmoothScrolling() {
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }


    function setupScrollSpy() {
        const sections = document.querySelectorAll('.category-section');
        const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

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


    function handleMissingImages() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.onerror = function () {

                this.src = 'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Crect width=\"100\" height=\"100\" fill=\"%23cccccc\"/%3E%3Ctext x=\"50\" y=\"50\" font-size=\"18\" text-anchor=\"middle\" alignment-baseline=\"middle\" font-family=\"Arial\" fill=\"%23666666\"%3E' + this.alt + '%3C/text%3E%3C/svg%3E';
                this.classList.add('placeholder-img');
            };
        });
    }


    function setupHeaderScroll() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    function setupPafStreamingLink() {
        const pafStreamingLink = document.querySelector('a[href="plex2wish/index.html"]');

        if (pafStreamingLink) {
            pafStreamingLink.addEventListener('click', function (e) {
                console.log('Tentative d\'ouverture de Paf-Streaming...');
            });
        }
    }


    function showPafStreamingError() {
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #ff6b6b, #ee5a24);
                color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 9999;
                max-width: 350px;
                font-family: inherit;
            ">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 10px; font-size: 20px;"></i>
                    <strong>Paf-Streaming indisponible</strong>
                </div>
                <p style="margin: 0 0 15px 0; opacity: 0.9;">
                    Le service Paf-Streaming est temporairement indisponible.
                </p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: rgba(255,255,255,0.2);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                ">
                    Fermer
                </button>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 7000);
    }


    function initApp() {
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
        setupHeaderScroll();
        setupPafStreamingLink();
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