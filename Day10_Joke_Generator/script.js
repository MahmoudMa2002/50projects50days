const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    jokeEl.innerHTML = '<div class="loading">Loading...</div>';

    const config = {
        headers: {
            Accept: 'application/json'
        }
    };
    try {
        const res = await axios.get('https://icanhazdadjoke.com', config);
        jokeEl.innerHTML = res.data.joke;
    } catch (e) {
        jokeEl.innerHTML = "Couldn't find a joke";
    }
}

