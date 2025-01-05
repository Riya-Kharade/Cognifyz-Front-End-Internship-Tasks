const form = document.getElementById('user-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
    errorMessage.textContent = '';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let valid = true;

    if (name === '') {
        valid = false;
        errorMessage.textContent += 'Name is required. ';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        errorMessage.textContent += 'Invalid email format. ';
    }

    if (password.length < 6) {
        valid = false;
        errorMessage.textContent += 'Password must be at least 6 characters long.';
    }

    if (!valid) {
        event.preventDefault();
    }
});
