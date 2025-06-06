const labels = document.querySelectorAll('.form-control label');
const logBtn = document.querySelector('#btn1');
const logReg = document.querySelector('#btn2');

for (let label of labels) {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`)
        .join('')
}

logBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    switchToRegister();
});

logReg.addEventListener('click', (e) => {
    e.preventDefault();
    switchToLogin();
});

function switchToRegister() {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('register-page').classList.add('active');
}

function switchToLogin() {
    document.getElementById('register-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
}
