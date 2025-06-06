const boxes = document.querySelectorAll('.box');
const btn = document.querySelector('.btn');

window.addEventListener('scroll', checkboxes)

checkboxes();

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    for (box of boxes) {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }
}

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});