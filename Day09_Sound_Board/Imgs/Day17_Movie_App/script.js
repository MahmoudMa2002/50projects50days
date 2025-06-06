const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc65496722723e82168fadd3e6fadc4b';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=bc65496722723e82168fadd3e6fadc4b&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const pageNumber = document.getElementById('page-number');

let currentPage = 1;
let currentURL = API_URL;

getMovies(currentURL, currentPage);

// Fetch and show movies
async function getMovies(url, page = 1) {
    const res = await fetch(`${url}&page=${page}`);
    const data = await res.json();

    showMovies(data.results);

    // Update page controls
    currentPage = data.page;
    pageNumber.innerText = `Page ${currentPage}`;
    prev.disabled = currentPage === 1;
    next.disabled = currentPage >= data.total_pages;
}

// Display movies
function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { id, title, poster_path, vote_average, overview, release_date } = movie;

        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const year = release_date?.slice(0, 4) || 'N/A';

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        const posterContent = poster_path
            ? `<img src="${IMG_PATH + poster_path}" alt="${title}" loading="lazy">`
            : `<div class="no-image"><i class="fa-solid fa-film"></i> No Image</div>`;

        movieEl.innerHTML = `
            ${posterContent}
            <div class="movie-info">
                <h3>${title} (${year})</h3>
                <span class="${getClassByRate(vote_average)}">${Number(vote_average.toFixed(1))}</span>
            </div>
            <div class="overview">
             <h3>${title} (${year})</h3>
             <hr> 
             <p>
                ${overview}
                </p>
                <hr>
               <p class='links'>
                    <a href="https://letterboxd.com/film/${slug}/" target="_blank" rel="noopener noreferrer">
                    <img src="imgs/letterboxd.png" alt="">
                    </a>
                    <a href="https://www.themoviedb.org/movie/${id}" target="_blank" rel="noopener noreferrer">
                    <img src="imgs/TMDB.png" alt="">
                    </a>
                    <!--Couldn't figure out how to do imdb links-->
                    <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
                    <img src="imgs/IMDB.png" alt="">
                    </a>
                </p>  
            </div>
        `;

        main.appendChild(movieEl);
    });
}


// Determine rating class
function getClassByRate(vote) {
    if(vote>=8){
        return 'blue'
    }
    else if (vote >= 7) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if (searchTerm) {
        currentURL = SEARCH_URL + encodeURIComponent(searchTerm);
        currentPage = 1;
        getMovies(currentURL, currentPage);
        search.value = '';
    } else {
        window.location.reload();
    }
});

// Pagination controls
prev.addEventListener('click', () => {
    if (currentPage > 1) {
        getMovies(currentURL, currentPage - 1);
    }
});

next.addEventListener('click', () => {
    getMovies(currentURL, currentPage + 1);
});
