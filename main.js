document.addEventListener('DOMContentLoaded', function () {
    const sitesData = {
        films: [
            {
                id: 'cinepulse',
                name: 'Cinepulse',
                logo: 'logoSites/Cinepulse.webp',
                headerBg: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
                description: 'cinepulse.fr',
                tags: ['Update : 13/05/2025'],
                url: 'https://cinepulse.fr/',
                featured: true,
                category: 'films'
            },
            {
                id: 'ivdid',
                name: 'IVDID',
                logo: 'logoSites/Ivdid.webp',
                headerBg: 'linear-gradient(135deg, #E21143 0%, #FFB03A 100%)',
                description: 'ivdid.com',
                tags: ['Update : 13/05/2025'],
                url: 'https://ivdid.com',
                featured: true,
                category: 'films'
            },
            {
                id: 'topstream',
                name: 'Topstream',
                logo: 'logoSites/TopStream.webp',
                headerBg: 'linear-gradient(135deg, #834D9B 0%, #D04ED6 100%)',
                description: 'top-stream.io',
                tags: ['Update : 13/05/2025'],
                url: 'https://top-stream.io',
                featured: false,
                category: 'films'
            },
            {
                id: 'vfstream',
                name: 'VFStream',
                logo: 'logoSites/VfStream.webp',
                headerBg: 'linear-gradient(135deg, #C31432 0%, #240B36 100%)',
                description: 'films.vfstream.eu',
                tags: ['Update : 13/05/2025'],
                url: 'https://films.vfstream.eu/',
                featured: false,
                category: 'films'
            },
            {
                id: '1jour1film',
                name: '1jour1film',
                logo: 'logoSites/1jour1film.webp',
                headerBg: 'linear-gradient(135deg, #3A1C71 0%, #D76D77 50%, #FFAF7B 100%)',
                description: '1jour1film2.online<br><s>1jour1film11.online</s>',
                tags: ['Update : 15/05/2025'],
                url: 'https://1jour1film2.online/',
                featured: false,
                category: 'series'
            },
            {
                id: 'cultissime',
                name: 'Cultissime',
                logo: 'logoSites/16.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'cultissime.lol',
                tags: ['Update : 13/05/2025'],
                url: 'https://cultissime.lol/',
                featured: false,
                category: 'series'
            },
            {
                id: 'senpaistream',
                name: 'Senpai-Stream',
                logo: 'logoSites/senpai-stream.svg',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'senpai-stream.art<br><s>senpai-stream.stream</s>',
                tags: ['Update : 16/05/2025'],
                url: 'https://senpai-stream.art/',
                featured: true,
                category: 'series'
            },
            {
                id: 'wowfilms',
                name: 'WOW-FILMS',
                logo: 'logoSites/WowFilms.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'wowfilms11.mom<br><s>wowfilms1.mom</s>',
                tags: ['Update : 15/05/2025'],
                url: 'https://wowfilms11.mom/',
                featured: true,
                category: 'series'
            },
            {
                id: 'darkiworld',
                name: 'Darkiworld',
                logo: 'logoSites/darkiworld.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'darki-tometjerry.com<br><s>darkiworld9.com</s>',
                tags: ['Update : 16/05/2025'],
                url: 'https://darki-tometjerry.com/',
                featured: true,
                category: 'series'
            },
        ],
        series: [
            {
                id: 'nightflix',
                name: 'NightFlix',
                logo: 'logoSites/NightFlix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'nightflix.run<br><s>nightflix.store</s>',
                tags: ['Update : 15/05/2025'],
                url: 'https://nightflix.run/',
                featured: true,
                category: 'series'
            },
            {
                id: 'wiflix',
                name: 'WiFlix',
                logo: 'logoSites/WiFlix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'flemmix.ws',
                tags: ['Update : 13/05/2025'],
                url: 'https://flemmix.ws/',
                featured: true,
                category: 'series'
            },
            {
                id: 'papadustream',
                name: 'PapaDuStream',
                logo: 'logoSites/PapaDuStream.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'papadustream.boo',
                tags: ['Update : 13/05/2025'],
                url: 'https://papadustream.boo',
                featured: true,
                category: 'series'
            },
            {
                id: 'monstream',
                name: 'MonStream',
                logo: 'logoSites/MonStream.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'monstream.cafe',
                tags: ['Update : 13/05/2025'],
                url: 'https://vww.monstream.cafe',
                featured: true,
                category: 'series'
            },
            {
                id: 'frenchstream',
                name: 'French-Stream',
                logo: 'logoSites/FrechStream.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'fsmirror57.lol<br><s>fsmirror41.lol</s>',
                tags: ['Update : 13/05/2025'],
                url: 'https://fsmirror57.lol/',
                featured: true,
                category: 'series'
            },
            {
                id: 'coflix',
                name: 'Coflix',
                logo: 'logoSites/coflix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'coflix.mov',
                tags: ['Update : 13/05/2025'],
                url: 'https://coflix.mov/',
                featured: true,
                category: 'series'
            },
            {
                id: 'movix',
                name: 'Movix',
                logo: 'logoSites/Movix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'movix.site',
                tags: ['Update : 13/05/2025'],
                url: 'https://www.movix.site/',
                featured: true,
                category: 'series'
            },
            {
                id: 'netmirror',
                name: 'NetMirror',
                logo: 'logoSites/netmirror.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'netfree2.cc',
                tags: ['Update : 13/05/2025'],
                url: 'https://netfree2.cc/home',
                featured: true,
                category: 'series'
            },
            {
                id: 'sadisflix',
                name: 'Sadisflix',
                logo: 'logoSites/SadisFlix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'sadisflix-officiel.sbs<br><s>sadisflix.hair</s>',
                tags: ['Update : 16/05/2025'],
                url: 'https://sadisflix-officiel.sbs/',
                featured: true,
                category: 'series'
            },
            {
                id: 'yopflix',
                name: 'YopFlix',
                logo: 'logoSites/YopFlix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'yopflix.quest',
                tags: ['Update : 13/05/2025'],
                url: 'https://yopflix.quest/',
                featured: true,
                category: 'series'
            },
            {
                id: 'hdstream',
                name: 'Hdstream',
                logo: 'logoSites/10.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'hdstream.top',
                tags: ['Update : 13/05/2025'],
                url: 'https://www.hdstream.top/',
                featured: true,
                category: 'series'
            },
            {
                id: 'dulourd',
                name: 'Dulourd',
                logo: 'logoSites/dulourd.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'dulourd.day',
                tags: ['Update : 13/05/2025'],
                url: 'https://www.dulourd.day/',
                featured: true,
                category: 'series'
            },
            {
                id: 'filmoflix',
                name: 'FilmoFlix',
                logo: 'logoSites/FilmoFlix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'filmoflix.is',
                tags: ['Update : 16/05/2025'],
                url: 'https://www.filmoflix.is/',
                featured: true,
                category: 'series'
            },
            {
                id: 'cinemay',
                name: 'Cinemay',
                logo: 'logoSites/cinemay.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'cinemay.cloud',
                tags: ['Update : 16/05/2025'],
                url: 'https://cinemay.cloud/',
                featured: true,
                category: 'series'
            },
            {
                id: 'dustreaming',
                name: 'Dustreaming',
                logo: 'logoSites/dustreaming.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'dustreaming.info',
                tags: ['Update : 16/05/2025'],
                url: 'https://dustreaming.info/',
                featured: true,
                category: 'series'
            },
        ],
        animes: [
            {
                id: 'animekai',
                name: 'AnimeKai',
                logo: 'logoSites/AnimeKai.webp',
                headerBg: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
                description: 'animekai.to',
                tags: ['Update : 13/05/2025'],
                url: 'https://animekai.to/',
                featured: true,
                category: 'animes'
            },
            {
                id: 'animesama',
                name: 'AnimeSama',
                logo: 'logoSites/AnimeSama.webp',
                headerBg: 'linear-gradient(135deg, #000046 0%, #1CB5E0 100%)',
                description: 'anime-sama.fr',
                tags: ['Update : 13/05/2025'],
                url: 'https://anime-sama.fr/',
                featured: true,
                category: 'animes'
            },
            {
                id: 'frenchanime',
                name: 'FrenchAnime',
                logo: 'logoSites/FrenchAnime.webp',
                headerBg: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
                description: 'french-anime.com',
                tags: ['Update : 13/05/2025'],
                url: 'https://french-anime.com/',
                featured: true,
                category: 'animes'
            },
            {
                id: 'franime',
                name: 'FRAnime',
                logo: 'logoSites/FRAnime.webp',
                headerBg: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
                description: 'franime.fr',
                tags: ['Update : 13/05/2025'],
                url: 'https://franime.fr/',
                featured: true,
                category: 'animes'
            },
            {
                id: 'voiranime',
                name: 'Voiranime',
                logo: 'logoSites/VoirAnime.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'v6.voiranime.com',
                tags: ['Update : 16/05/2025'],
                url: 'https://v6.voiranime.com/',
                featured: true,
                category: 'animes'
            },
            {
                id: 'mavanimes',
                name: 'Mavanimes',
                logo: 'logoSites/MavAnimes.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'mavanimes.co',
                tags: ['Update : 16/05/2025'],
                url: 'https://www.mavanimes.co/',
                featured: true,
                category: 'animes'
            },
            {
                id: 'yukiflix',
                name: 'YukiFlix',
                logo: 'logoSites/YukiFlix.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'yukiflix.pythonanywhere.com',
                tags: ['Update : 16/05/2025'],
                url: 'https://yukiflix.pythonanywhere.com/decouvrir',
                featured: true,
                category: 'animes'
            }
        ],
        drama: [
            {
                id: 'kisskh',
                name: 'KissKh',
                logo: 'logoSites/512x512bb-removebg-preview.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'kisskh.co',
                tags: ['Update : 13/05/2025'],
                url: 'https://kisskh.co/',
                featured: true,
                category: 'drama'
            },
            {
                id: 'voirdrama',
                name: 'VoirDrama',
                logo: 'logoSites/VoirDrama.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'voirdrama.org',
                tags: ['Update : 13/05/2025'],
                url: 'https://voirdrama.org/',
                featured: false,
                category: 'drama'
            },
            {
                id: 'dramacool',
                name: 'DramaCool',
                logo: 'logoSites/dramacool.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'dramacool.com.de',
                tags: ['Update : 13/05/2025'],
                url: 'https://ww5.dramacool.com.de/',
                featured: false,
                category: 'drama'
            },
            {
                id: 'myasiantv',
                name: 'MyAsianTv',
                logo: 'logoSites/myasiantv.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'myasiantv.rest',
                tags: ['Update : 13/05/2025'],
                url: 'https://www.myasiantv.rest/',
                featured: true,
                category: 'drama'
            },
            {
                id: 'sojuoppa',
                name: 'Sojuoppa',
                logo: 'logoSites/sojuoppa.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'sojuoppa.site',
                tags: ['Update : 13/05/2025'],
                url: 'https://sojuoppa.site/',
                featured: true,
                category: 'drama'
            },
            {
                id: 'kissasian',
                name: 'KissAsian',
                logo: 'logoSites/kissasian.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'kissasian.nl',
                tags: ['Update : 13/05/2025'],
                url: 'https://kissasian.nl/',
                featured: true,
                category: 'drama'
            },
            {
                id: 'dramacountdown',
                name: 'DramaCountDown',
                logo: 'logoSites/dramacountdown.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'dramacountdown.com',
                tags: ['Update : 13/05/2025'],
                url: 'https://dramacountdown.com/',
                featured: true,
                category: 'drama'
            },
        ],
        torrent: [
            {
                id: 'thepiratebay',
                name: 'The Pirate Bay',
                logo: 'logoSites/tpb.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'thepiratebay10.info',
                tags: ['Update : 14/05/2025'],
                url: 'https://thepiratebay10.info/',
                featured: true,
                category: 'torrent'
            },
            {
                id: '1337x',
                name: '1337X',
                logo: 'logoSites/logo.svg',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: '1337x.to',
                tags: ['Update : 14/05/2025'],
                url: 'https://1337x.to/',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'oxtorrent',
                name: 'OxTorrent',
                logo: 'logoSites/oxtorrent.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'oxtorrent5.com<br><s>oxtorrent3.com</s>',
                tags: ['Update : 14/05/2025'],
                url: 'https://www.oxtorrent5.com/home',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'yggtorrent',
                name: 'YggTorrent',
                logo: 'logoSites/ygg.svg',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'yggtorrent3.com',
                tags: ['Update : 14/05/2025'],
                url: 'https://www.yggtorrent3.com/home',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'cpasbien',
                name: 'Cpasbien',
                logo: 'logoSites/cpasbien.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'cpasbien4.com',
                tags: ['Update : 14/05/2025'],
                url: 'https://www.cpasbien4.com/home',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'zetorrents',
                name: 'Zetorrents',
                logo: 'logoSites/zetorrents.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'zetorrents1.com',
                tags: ['Update : 14/05/2025'],
                url: 'https://www.zetorrents1.com/home',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'torrent9',
                name: 'Torrentz9',
                logo: 'logoSites/torrentz.svg',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'torrentz9.org',
                tags: ['Update : 13/05/2025'],
                url: 'https://torrentz9.org/',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'limetorrents',
                name: 'LimeTorrents',
                logo: 'logoSites/limetorrents.webp',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'limetorrents.lol',
                tags: ['Update : 14/05/2025'],
                url: 'https://www.limetorrents.lol/',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'bingebrowser',
                name: 'Binge Browser',
                logo: 'logoSites/binge.ico',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'binge-browser.vercel.app',
                tags: ['Update : 14/05/2025'],
                url: 'https://binge-browser.vercel.app/',
                featured: true,
                category: 'torrent'
            },
            {
                id: 'nyaa',
                name: 'Nyaa',
                logo: 'logoSites/nyaa.png',
                headerBg: 'linear-gradient(135deg, #355C7D 0%, #6C5B7B 50%, #C06C84 100%)',
                description: 'nyaa.land',
                tags: ['Update : 14/05/2025'],
                url: 'https://nyaa.land/',
                featured: true,
                category: 'torrent'
            },
        ]
    };

    // Fonction pour créer une carte de site
    function createSiteCard(site) {
        const card = document.createElement('div');
        card.className = 'site-card';
        card.dataset.id = site.id;
        card.dataset.category = site.category;

        // Créer des tags à partir des tags du site
        const tagsHTML = site.tags.map(tag => `<span class="site-tag">${tag}</span>`).join('');

        
        card.innerHTML = `
            <div class="site-header" style="background: ${site.headerBg}">
                <div class="logo-container">
                    <img src="${site.logo}" alt="${site.name}" class="site-logo">
                </div>
            </div>
            <div class="site-content">
                <h3 class="site-title">${site.name}</h3>
                <p class="site-desc">${site.description}</p>
                <div class="site-tags">
                    ${tagsHTML}
                </div>
                <form class="site-search-form" action="${site.url}" method="get" target="_blank">
                    <input type="text" name="s" placeholder="Rechercher sur ${site.name}...">
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
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

    // Fonction d'initialisation
    function initApp() {
        // Appeler les fonctions principales
        populateSiteGrids(); // Cette fonction est cruciale pour afficher les sites
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

    // Démarrer l'application
    initApp();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log("✅ Service Worker enregistré"))
      .catch(err => console.warn("❌ Erreur SW :", err));
  }