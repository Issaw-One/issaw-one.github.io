
const watchedEpisodes = new Set();

function getWatchedEpisodes() {
    return Array.from(watchedEpisodes);
}

function saveWatchedEpisode(url) {
    if (url) {
        watchedEpisodes.add(url);
    }
}

function isWatched(url) {
    return watchedEpisodes.has(url);
}

try {

    const WATCHED_STORAGE_KEY = 'plex2wish_watched_episodes';
    const savedData = localStorage.getItem(WATCHED_STORAGE_KEY);
    if (savedData) {
        JSON.parse(savedData).forEach(url => watchedEpisodes.add(url));
    }

    const originalSave = saveWatchedEpisode;
    saveWatchedEpisode = function (url) {
        originalSave(url);
        localStorage.setItem(WATCHED_STORAGE_KEY, JSON.stringify(Array.from(watchedEpisodes)));
    };
} catch (e) {

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

function openVideoPlayer(url, title) {
    const iframe = document.getElementById('videoPlayerIframe');
    const titleElement = document.getElementById('videoPlayerTitle');
    const container = document.getElementById('videoPlayerContainer');

    iframe.src = url;
    titleElement.textContent = title;
    container.classList.add('active');


    saveWatchedEpisode(url);

    const rows = document.querySelectorAll('#movieList tr');
    rows.forEach(row => {
        const link = row.querySelector('a[data-url="' + url + '"]');
        if (link) {
            row.classList.add('watched');
        }
    });


    document.body.style.overflow = 'hidden';
}


function closeVideoPlayer() {
    const iframe = document.getElementById('videoPlayerIframe');
    const container = document.getElementById('videoPlayerContainer');

    container.classList.remove('active');


    setTimeout(() => {
        iframe.src = '';
    }, 300);


    document.body.style.overflow = '';
}


function renderMovies(filterText = '') {
    const movieListElement = document.getElementById('movieList');
    movieListElement.innerHTML = ''; 

    const filteredMovies = filterText
        ? movies
            .filter(movie => movie.name.toLowerCase().includes(filterText.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name))
        : [...movies].sort((a, b) => b.id - a.id);

    filteredMovies.forEach(movie => {
        const row = document.createElement('tr');


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


    document.querySelectorAll('.copy-link').forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(`Link copied for: ${filteredMovies[index].name}`);
        });
    });

    document.querySelectorAll('.movie-link').forEach((link, index) => {
        link.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            const title = filteredMovies[index].name;
            if (url) {
                openVideoPlayer(url, title);
            }
        });
    });


    document.querySelectorAll('.dl-link a').forEach(link => {
        link.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            if (url) {
                saveWatchedEpisode(url);

                const row = this.closest('tr');
                row.classList.add('watched');
            }
        });
    });


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


function initTags() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const searchTerm = tag.textContent;


            document.querySelector('.search-input').value = searchTerm;


            renderMovies(searchTerm);


            document.querySelector('.tag.active')?.classList.remove('active');
            tag.classList.add('active');
        });
    });
}


function initSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        renderMovies(searchTerm);
    });


    searchInput.closest('form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        renderMovies(searchTerm);
    });
}


function copyToClipboard(text) {
    if (!text) return alert("Lien non disponible");
    navigator.clipboard.writeText(text)
        .then(() => alert("Lien copié dans le presse-papiers !"))
        .catch(() => alert("Échec de la copie"));
}


document.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    initTags();
    initSearch();


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
