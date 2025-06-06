const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Auto Text Effect.....';

let idx = 1;
let speed = 300 / speedEl.value;
let timeoutId;

function writeText() {
    textEl.textContent = text.slice(0, idx);

    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    timeoutId = setTimeout(writeText, speed);
}

function updateSpeed() {
    const newSpeed = parseInt(speedEl.value);
    if (newSpeed >= 1 && newSpeed <= 5) {
        speed = 300 / newSpeed;
        clearTimeout(timeoutId);
        writeText();
    }
}

writeText();

speedEl.addEventListener('input', updateSpeed);