const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');
const imgSrc = document.querySelector('.step-image img');
const text = document.querySelector('.riz-text');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    console.log(currentActive);
    update();

});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if (currentActive === 4) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }

    imgSrc.src = `imgs/img${currentActive}.png`

    const steps = ['Log in', 'Upload your Files', 'Receive feedback', 'Improve your files'];
    text.innerText = steps[currentActive - 1];
}
imgSrc.src = `imgs/img1.png`