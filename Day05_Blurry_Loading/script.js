const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const progressBar = document.querySelector('.loading-progress');

let load = 0;
const interval = setInterval(updateProgress, 50);

function updateProgress() {
    load++;

    if (load > 100) {
        clearInterval(interval);
        document.querySelector('.loading-bar').style.opacity = '0';
        return;
    }

    loadText.textContent = `${load}%`;
    progressBar.style.width = `${load}%`;

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
