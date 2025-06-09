const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const send = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

panel.addEventListener('click', (e) => {
    const rating = e.target.closest('.rating');
    if (rating) {
        removeActive();
        rating.classList.add('active');
        selectedRating = rating.querySelector('small').innerHTML;
    }
});

send.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fa-solid fa-ghost"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
    ratings.forEach(rating => rating.classList.remove('active'));
}
