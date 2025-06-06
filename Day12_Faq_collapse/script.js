const btns=document.querySelectorAll('.btn');

for (let button of btns) {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    });
}