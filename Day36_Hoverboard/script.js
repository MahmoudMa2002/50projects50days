const container = document.getElementById('container');
const color = '#3b82f6';
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    square.addEventListener('click', () => toggleLock(square));


    container.append(square);
}

function setColor(e) {
    e.style.backgroundColor = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
    if (!e.classList.contains('locked')) {
        e.style.backgroundColor = '#2c323b';
        e.style.boxShadow = '0 0 2px #000';
    }
}

function toggleLock(element) {
    if (element.classList.contains('locked')) {
        // Unlock
        element.classList.remove('locked');
        element.style.backgroundColor = '#2c323b';
        element.style.boxShadow = '0 0 2px #000';
        element.style.transform = 'scale(1)';
    } else {
        // Lock
        element.style.backgroundColor = color;
        element.style.boxShadow = `0 0 4px ${color}, 0 0 20px ${color}`;
        element.style.transform = 'scale(1.1)';
        element.classList.add('locked');
    }
}