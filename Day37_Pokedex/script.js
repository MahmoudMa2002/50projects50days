const poke_container = document.getElementById('poke-container');
const pokemon_count = 151;

const colors = {
    normal: "#7a7c7a",
    fire: "#b85a28",
    water: "#4a6bb8",
    electric: "#b8a025",
    grass: "#5a9438",
    ice: "#6ba8b5",
    fighting: "#8f1c2e",
    poison: "#7a337a",
    ground: "#a89554",
    flying: "#7d6bb8",
    psychic: "#b8456a",
    bug: "#7a851c",
    rock: "#8a7628",
    ghost: "#5a4275",
    dragon: "#5a2eb8",
    dark: "#5a453c",
    steel: "#8a8ca8",
    fairy: "#b8748a"
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    creatPokemonCard(data);
}

const creatPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name.toUpperCase();
    const id = pokemon.id.toString().padStart(3, '0');

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;
    pokemonEl.innerHTML = pokemonInnerHTML;

    pokemonEl.style.backgroundColor = color
    poke_container.appendChild(pokemonEl);
};


fetchPokemons();