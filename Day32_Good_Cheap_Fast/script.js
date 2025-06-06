const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => {
    toggle.addEventListener('change', handleToggleChange);
});

function handleToggleChange(e) {
    const clickedToggle = e.target;

    if (good.checked && cheap.checked && fast.checked) {
        if (clickedToggle === good) {
            fast.checked = false;
        } else if (clickedToggle === cheap) {
            good.checked = false;
        } else if (clickedToggle === fast) {
            cheap.checked = false;
        }
    }
}
