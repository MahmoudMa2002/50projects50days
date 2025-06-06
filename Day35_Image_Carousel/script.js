const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const indicatorsContainer = document.getElementById('indicators');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

createIndicators()
let interval = setInterval(run, 2000);

updateIndicators()

function createIndicators() {
    for (let i = 0; i < img.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === idx);
    });
}

function run() {
    idx++
    changImage();
}

function changImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }
    updateIndicators();
    imgs.style.transform = `translate(-${idx * 900}px)`

}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

function goToSlide(index) {
    idx = index;
    changImage();
    resetInterval();
}

leftBtn.addEventListener('click', () => {
    idx--;

    changImage();
    updateIndicators();
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    idx++;

    changImage();
    updateIndicators();
    resetInterval()
})

