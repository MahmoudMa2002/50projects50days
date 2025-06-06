const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Task completed successfully!',
    'New notification received',
    'Something went wrong, please try again',
    'Settings have been updated',
    'Connection established',
    'File uploaded successfully'
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type || getRandomType());

    const messageSpan = document.createElement('span');
    messageSpan.classList.add('toast-message');
    messageSpan.textContent = message || getRandomMessage();

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close notification');

    toast.appendChild(messageSpan);
    toast.appendChild(closeBtn);
    toasts.appendChild(toast);

    closeBtn.addEventListener('click', () => removeToast(toast));

    const timeout = setTimeout(() => removeToast(toast), 4000);

    closeBtn.addEventListener('click', () => clearTimeout(timeout));
}

function removeToast(toast) {
    if (toast.classList.contains('removing')) return;

    toast.classList.add('removing');
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 300);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}