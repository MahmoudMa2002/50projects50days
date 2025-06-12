const resetBtn = document.getElementById('reset');
const playBtn = document.getElementById('play');
const timerEl = document.getElementById('timer');
const root = document.querySelector(':root');
const timeInput = document.getElementById('timeInput');
const setTimeBtn = document.getElementById('setTime');

let totalSeconds = 60;

let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(currentSeconds);

const timerInterval = setInterval(run, 1000)

playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.classList.toggle('play');
    playBtn.classList.toggle('bg-blue-500');
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-pause');
});

resetBtn.addEventListener('click', resetAll);

function run() {
    if (playing) {
        currentSeconds -= 1;
        if (currentSeconds <= 0) {
            clearInterval(timerInterval);
            resetAll();
        }
        timerEl.innerText = formatTime(currentSeconds);
        root.style.setProperty('--degrees', calcDeg())
    }
}

function resetAll() {
    playing = false;
    playBtn.classList.remove('play');
    playBtn.classList.remove('bg-blue-500');
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.add('fa-play');
    playIcon.classList.remove('fa-pause');
    currentSeconds = totalSeconds;
    timerEl.innerText = formatTime(totalSeconds);
    root.style.setProperty('--degrees', '0deg');
}

function calcDeg() {
    return `${360 - (currentSeconds / totalSeconds) * 360}deg`
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const newSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
}

setTimeBtn.addEventListener('click', () => {
    const inputSeconds = parseInt(timeInput.value);

    if (isNaN(inputSeconds) || inputSeconds <= 0) {
        alert('Please enter a valid number greater than 0.');
        return;
    }

    if (inputSeconds > 3600) {
        alert('Max amount of seconds is 3600.');
        resetAll();
        return;
    }

    totalSeconds = inputSeconds;
    currentSeconds = totalSeconds;
    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty('--degrees', '0deg');
    resetAll();
});