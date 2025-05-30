        // Sample movie data
        
        
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
