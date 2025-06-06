const circleMe = document.querySelector('.circleMe');
const times = document.querySelector('#times');

let TimesClicked = 0;

circleMe.addEventListener('dblclick', (e) => {
    creatCircle(e);
})

const creatCircle = (e) => {
    const circle = document.createElement('i');
    circle.classList.add('fa-regular');
    circle.classList.add('fa-circle');

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    circle.style.top = `${yInside}px`
    circle.style.left = `${xInside}px`

    circleMe.appendChild(circle);

    times.innerHTML = ++TimesClicked;

    setTimeout(() => circle.remove(), 1000);
}