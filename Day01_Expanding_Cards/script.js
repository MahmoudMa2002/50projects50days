const panels = document.querySelectorAll('.panel');

for (let panel of panels) {
    panel.addEventListener('click', () => {
        removeAticeClasses();
        panel.classList.add('active');
    })
}

function removeAticeClasses() {
    for (let panel of panels) {
        panel.classList.remove('active');
    }
}