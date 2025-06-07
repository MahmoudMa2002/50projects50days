const password = document.getElementById('password');
const background = document.getElementById('background');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

function calculateStrength(password) {
    let score = 0;
    let feedback = '';

    if (password.length === 0) {
        return { score: 0, feedback: 'Enter a password', level: 'none' };
    }

    if (password.length >= 8) score += 2;
    else if (password.length >= 6) score += 1;

    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2) {
        feedback = 'Weak password';
        return { score, feedback, level: 'weak' };
    } else if (score <= 4) {
        feedback = 'Fair password';
        return { score, feedback, level: 'fair' };
    } else if (score <= 5) {
        feedback = 'Good password';
        return { score, feedback, level: 'good' };
    } else {
        feedback = 'Strong password';
        return { score, feedback, level: 'strong' };
    }
}

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const strength = calculateStrength(input);

    const maxBlur = 20;
    const blurValue = Math.max(0, maxBlur - (strength.score * 3 + 2));
    background.style.filter = `blur(${blurValue}px)`;

    const percentage = (strength.score / 6) * 100;
    strengthBar.style.width = `${percentage}%`;

    strengthBar.className = `strength-bar strength-${strength.level}`;
    strengthText.textContent = strength.feedback;

    if (strength.level === 'weak') {
        strengthText.className = 'strength-text text-red-500';
    } else if (strength.level === 'fair') {
        strengthText.className = 'strength-text text-yellow-500';
    } else if (strength.level === 'good') {
        strengthText.className = 'strength-text text-green-500';
    } else if (strength.level === 'strong') {
        strengthText.className = 'strength-text text-green-600';
    } else {
        strengthText.className = 'strength-text text-gray-500';
    }
});