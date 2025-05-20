        // Sample movie data
        const movies = [
            { id: 16, name: "Ici tout commence - Episode 1180 du mercredi 21 mai 2025", size: "769,8 Mo", seeders: 3265, leechers: 397, url: "https://vidmoly.to/embed-3vmlnnq1lips.html" },
            { id: 15, name: "Plus belle la vie, encore plus belle - Episode 337 du mercredi 21 mai 2025", size: "325 Mo", seeders: 3265, leechers: 397, url: "https://vidmoly.to/embed-sjfzxv01y1tn.html" },
            { id: 14, name: "Plus belle la vie, encore plus belle - Episode 336 du mardi 20 mai 2025", size: "198 Mo", seeders: 3265, leechers: 397, url: "https://vidmoly.to/embed-t752rsb7cp1o.html" },
            { id: 13, name: "Ici tout commence - Episode 1179 du mardi 20 mai 2025", size: "299 Mo", seeders: 3265, leechers: 397, url: "https://vidmoly.to/embed-lpj9kfyc66sb.html" },
            { id: 12, name: "Plus belle la vie, encore plus belle - Episode 335 du lundi 19 mai 2025", size: "324,6 Mo", seeders: 3265, leechers: 397, url: "https://vidmoly.to/embed-f01yt31h74ah.html" },
            { id: 11, name: "Plus belle la vie, encore plus belle - Episode 334 du vendredi 16 mai 2025", size: "315,1 Mo", seeders: 3265, leechers: 397, url: "https://vidmoly.to/embed-i02544pnrrpy.html" },
            { id: 10, name: "Ici tout commence - Episode 1178 du lundi 19 mai 2025", size: "489,8 Mo", seeders: 3265, leechers: 397, url: "https://vidmoly.to/embed-nhlbpvi9upmh.html" },
            { id: 9, name: "Ici tout commence - Episode 1177 du vendredi 16 mai 2025", size: "115,123 Mo", seeders: 3265, leechers: 397, url: "https://uqload.net/embed-akmsieeo14w1.html" },
            { id: 8, name: "Ici tout commence - Episode 1176 du jeudi 15 mai 2025", size: "116,886 Mo", seeders: 3265, leechers: 397, url: "https://uqload.net/embed-l7y8ao9twia9.html" },
            { id: 7, name: "Ici tout commence - Episode 1175 du mercredi 14 mai 2025", size: "121,447 Mo", seeders: 3265, leechers: 397, url: "https://uqload.net/embed-13cx8leayy78.html" },
            { id: 6, name: "Ici tout commence - Episode 1174 du mardi 13 mai 2025", size: "114.224 Mo", seeders: 3265, leechers: 397, url: "https://uqload.net/embed-0a2rt3gwjfh2.html" },
            { id: 5, name: "Ici tout commence - Episode 1173 du lundi 12 mai 2025", size: "110,399 Mo", seeders: 3265, leechers: 397, url: "https://uqload.net/embed-i2k66gnvpv4m.html" },
            { id: 4, name: "Plus belle la vie, encore plus belle - Episode 333 du jeudi 15 mai 2025", size: "61,16 Mo", seeders: 3265, leechers: 397, url: "https://uqload.net/embed-qowlqnjg63m7.html" },
            { id: 3, name: "Plus belle la vie, encore plus belle - Episode 332 du mercredi 14 mai 2025", size: "68,74 Mo", seeders: 3265, leechers: 397, url: "https://uqload.net/embed-ne447jclrj4i.html" },
            { id: 2, name: "Plus belle la vie, encore plus belle - Episode 331 du mardi 13 mai 2025", size: "69,11 Mo", seeders: 4341, leechers: 205, url: "https://uqload.net/embed-kqb28l8f2jdv.html" },
            { id: 1, name: "Plus belle la vie, encore plus belle - Episode 330 du lundi 12 mai 2025", size: "73,18 Mo", seeders: 4341, leechers: 205, url: "https://uqload.net/embed-6fart5y07838.html" },
        ];
        
        // Variable en mémoire pour stocker les épisodes vus pendant la session
        // Utilisé à la place de localStorage pour éviter les problèmes de sandbox
        const watchedEpisodes = new Set();
        
        // Function to get watched episodes
        function getWatchedEpisodes() {
            return Array.from(watchedEpisodes);
        }
        
        // Function to save watched episode
        function saveWatchedEpisode(url) {
            if (url) {
                watchedEpisodes.add(url);
            }
        }
        
        // Function to check if an episode is watched
        function isWatched(url) {
            return watchedEpisodes.has(url);
        }
        
        // Tentative d'utiliser localStorage si disponible, sans causer d'erreur si non disponible
        try {
            // Tenter de charger les données précédentes si localStorage est disponible
            const WATCHED_STORAGE_KEY = 'plex2wish_watched_episodes';
            const savedData = localStorage.getItem(WATCHED_STORAGE_KEY);
            if (savedData) {
                JSON.parse(savedData).forEach(url => watchedEpisodes.add(url));
            }
            
            // Remplacer saveWatchedEpisode pour utiliser localStorage si disponible
            const originalSave = saveWatchedEpisode;
            saveWatchedEpisode = function(url) {
                originalSave(url);
                localStorage.setItem(WATCHED_STORAGE_KEY, JSON.stringify(Array.from(watchedEpisodes)));
            };
        } catch (e) {
            // Ignorer silencieusement les erreurs de localStorage
            console.log("localStorage n'est pas disponible, utilisation du stockage en mémoire uniquement");
        }
        
        const WATCHED_PROGRESS_KEY = 'plex2wish_progress';

function saveProgress(url, time) {
    const data = JSON.parse(localStorage.getItem(WATCHED_PROGRESS_KEY) || '{}');
    data[url] = time;
    localStorage.setItem(WATCHED_PROGRESS_KEY, JSON.stringify(data));
}

function getProgress(url) {
    const data = JSON.parse(localStorage.getItem(WATCHED_PROGRESS_KEY) || '{}');
    return data[url] || 0;
}


        // Function pour ouvrir le lecteur vidéo
        function openVideoPlayer(url, title) {
            const iframe = document.getElementById('videoPlayerIframe');
            const titleElement = document.getElementById('videoPlayerTitle');
            const container = document.getElementById('videoPlayerContainer');
            
            iframe.src = url;
            titleElement.textContent = title;
            container.classList.add('active');
            
            // Marquer l'épisode comme vu
            saveWatchedEpisode(url);
            
            // Mettre à jour visuellement la liste
            const rows = document.querySelectorAll('#movieList tr');
            rows.forEach(row => {
                const link = row.querySelector('a[data-url="' + url + '"]');
                if (link) {
                    row.classList.add('watched');
                }
            });
            
            

            // Empêcher le défilement de la page
            document.body.style.overflow = 'hidden';
        }
        
        // Function pour fermer le lecteur vidéo
        function closeVideoPlayer() {
            const iframe = document.getElementById('videoPlayerIframe');
            const container = document.getElementById('videoPlayerContainer');
            
            container.classList.remove('active');
            
            // Attendre que l'animation de fermeture soit terminée avant de vider l'iframe
            setTimeout(() => {
                iframe.src = '';
            }, 300);
            
            // Réactiver le défilement de la page
            document.body.style.overflow = '';
        }
        
        // Function to render movies with optional filter
        function renderMovies(filterText = '') {
            const movieListElement = document.getElementById('movieList');
            movieListElement.innerHTML = ''; // Pour vider l'ancien contenu

            const filteredMovies = filterText 
                ? movies
                    .filter(movie => movie.name.toLowerCase().includes(filterText.toLowerCase()))
                    .sort((a, b) => a.name.localeCompare(b.name))
                : [...movies].sort((a, b) => b.id - a.id); // tri par ID décroissant sur l'accueil

            filteredMovies.forEach(movie => {
                const row = document.createElement('tr');
                
                // Check if this movie has been watched
                const watched = movie.url && isWatched(movie.url);
                if (watched) {
                    row.classList.add('watched');
                }
                
                row.innerHTML = `
                    <td class="index-col">${movie.id}</td>
                    <td>
                        <div class="title-container">
                            <a class="movie-link" data-url="${movie.url || ''}">${movie.name}</a>
                            <span class="watched-icon">✓</span>
                        </div>
                    </td>
                    <td class="size-col">${movie.size}</td>
                    <td class="action-col">
                        <div class="copy-link" onclick="copyToClipboard('${movie.url || ''}')">Copy link</div>
                    </td>
                    <td class="action-col">
                        <div class="dl-link"><a href="${movie.url || '#'}" target="_blank" data-url="${movie.url || ''}">link</a></div>
                    </td>
                `;
                
                movieListElement.appendChild(row);
            });

            // Add event listeners for copy links
            document.querySelectorAll('.copy-link').forEach((button, index) => {
                button.addEventListener('click', () => {
                    alert(`Link copied for: ${filteredMovies[index].name}`);
                });
            });
            
            // Add event listeners for movie links to open the video player
            document.querySelectorAll('.movie-link').forEach((link, index) => {
                link.addEventListener('click', function() {
                    const url = this.getAttribute('data-url');
                    const title = filteredMovies[index].name;
                    if (url) {
                        openVideoPlayer(url, title);
                    }
                });
            });
            
            // Add event listeners for external links (they still mark as watched)
            document.querySelectorAll('.dl-link a').forEach(link => {
                link.addEventListener('click', function() {
                    const url = this.getAttribute('data-url');
                    if (url) {
                        saveWatchedEpisode(url);
                        // Add visual indication immediately
                        const row = this.closest('tr');
                        row.classList.add('watched');
                    }
                });
            });
            
            // Show message if no results found
            if (filteredMovies.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td colspan="5" style="text-align: center; padding: 20px;">
                        No results found matching "${filterText}"
                    </td>
                `;
                movieListElement.appendChild(row);
            }
        }

        // Initialize tag functionality
        function initTags() {
            const tags = document.querySelectorAll('.tag');
            tags.forEach(tag => {
                tag.addEventListener('click', () => {
                    const searchTerm = tag.textContent;
                    
                    // Update search input
                    document.querySelector('.search-input').value = searchTerm;
                    
                    // Filter results
                    renderMovies(searchTerm);
                    
                    // Toggle active class
                    document.querySelector('.tag.active')?.classList.remove('active');
                    tag.classList.add('active');
                });
            });
        }

        // Initialize search functionality
        function initSearch() {
            const searchInput = document.querySelector('.search-input');
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                renderMovies(searchTerm);
            });
            
            // Also handle form submission
            searchInput.closest('form')?.addEventListener('submit', (e) => {
                e.preventDefault();
                const searchTerm = searchInput.value.toLowerCase();
                renderMovies(searchTerm);
            });
        }

        // Function to copy link to clipboard
        function copyToClipboard(text) {
            if (!text) return alert("Lien non disponible");
            navigator.clipboard.writeText(text)
                .then(() => alert("Lien copié dans le presse-papiers !"))
                .catch(() => alert("Échec de la copie"));
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            renderMovies();
            initTags();
            initSearch();
            
            // Initialiser le bouton Fermer du lecteur vidéo
            document.getElementById('videoPlayerClose').addEventListener('click', closeVideoPlayer);
        });

        let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'block';
});

installButton.addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('✅ Installation acceptée');
            } else {
                console.log('❌ Installation refusée');
            }
            deferredPrompt = null;
            installButton.style.display = 'none';
        });
    }
});
