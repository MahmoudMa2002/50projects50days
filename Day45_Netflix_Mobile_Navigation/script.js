const open_btn = document.querySelector('.open-btn');
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
    overlay.classList.add('visible');
})

close.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
    overlay.classList.remove('visible');
})

overlay.addEventListener('click', ()=>{
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
    overlay.classList.remove('visible'); 
});