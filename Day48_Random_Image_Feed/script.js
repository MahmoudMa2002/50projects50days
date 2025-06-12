const container = document.querySelector('.container');
const loadMoreBtn = document.querySelector('.load-more');
const url = `https://picsum.photos/`;

loadImages();

function loadImages(count = 12) {
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = `${url}${getRandomSize()}`;
        container.appendChild(img)
    }
}

function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}?random`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 800;
}

loadMoreBtn.addEventListener('click', () => {
    loadImages(6);
});