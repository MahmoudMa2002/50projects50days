const codes = document.querySelectorAll('.code');
const resendLink = document.querySelector('.resend-link');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
        if (e.key === 'ArrowLeft' && idx > 0) {
            codes[idx - 1].focus();
        }
        if (e.key === 'ArrowRight' && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    })
});
resendLink.addEventListener('click', (e) => {
    e.preventDefault();
    codes.forEach(code => {
        code.value = '';
    });
    codes[0].focus();
    window.alert('Code sent!');
});