const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'SPACE ' : e.key}
            <small>Event Key</small>
        </div>
        <div class="key" id="copyable" data-copy="${e.keyCode}">
            ${e.keyCode}
            <small>Event keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>Event Code</small>
        </div>
        <p id="copyMessage">Press on the Event KeyCode to copy the code</p>
    `;

    const message = document.getElementById('copyMessage');
    const copyable = document.getElementById('copyable');

    copyable.addEventListener('click', () => {
        const valueToCopy = `${e.code} : ${copyable.getAttribute('data-copy')}`;
        navigator.clipboard.writeText(valueToCopy)
            .then(() => {
                copyable.classList.add('copied');
                message.textContent = `Copied the value of ${valueToCopy}`;
                setTimeout(() => copyable.classList.remove('copied'), 1000);
            })
            .catch(err => {
                console.error('Copy failed:', err);
                message.textContent = `Failed to copy`;
            });
    });
});
