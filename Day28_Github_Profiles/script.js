const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
    try {
        const res = await axios(APIURL + username);
        createUserCard(res.data);
        getRepos(username);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard('No profile with this user name');
        } else if (err.response.status == 403) {
            createErrorCard('You have reached the GitHub’s API has rate limits, Wait 1 hour and retry');
        } else {
            createErrorCard('Error fetching GitHub API')
        }
    }
}

async function getRepos(username) {
    try {
        const res = await axios(APIURL + username + '/repos?sort=created');
        addReposToCard(res.data);
    } catch (err) {
        createErrorCard('Problem fetching repos');
    }
}

function createUserCard(user) {
    const bio = user.bio ? `<p class="bio">${user.bio}</p>` : '';
    const cardHTML = `
     <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                ${bio}
                <ul>
                    <li>
                        <span class="number">${user.followers}</span>
                        <span class="label">Followers</span>
                    </li>
                    <li>
                        <span class="number">${user.following}</span>
                        <span class="label">Following</span>
                    </li>
                    <li>
                        <span class="number">${user.public_repos}</span>
                        <span class="label">Repos</span>
                    </li>
                </ul>
                <div id="repos">
                </div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card error-card">
            <h2><i class="fas fa-exclamation-triangle"></i></h2>
            <h3>${msg}</h3>
        </div>
            `;
    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const repoEl = document.getElementById('repos');
    repoEl.innerHTML = '';

    repos.slice(0, 10).forEach(repo => {
        const repoLink = document.createElement('a');
        repoLink.classList.add('repo');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.innerText = repo.name;

        repoEl.appendChild(repoLink);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = '';
    }
})