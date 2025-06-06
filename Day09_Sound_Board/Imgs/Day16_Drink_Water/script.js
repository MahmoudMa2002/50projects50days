const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const precentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const reset = document.getElementById('reset-btn');

updateBigCup

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

// Small cups controls
function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') &&
        !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup();
}

// Update big cup
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        precentage.style.visibility = 'hidden';
        precentage.style.height = 0;
    } else {
        precentage.style.visibility = 'visible'
        precentage.style.height = `${fullCups / totalCups * 330}px`;
        precentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups == totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        const num = 2 - (250 * fullCups / 1000)
        liters.innerText = `${num}L`
        if (num < 1) {
            liters.innerText = `${1000 * num}ml`
        }
    }
}

// Reset button controls
reset.addEventListener('click', () => {
    smallCups.forEach(cup => cup.classList.remove('full'))
    updateBigCup();
})