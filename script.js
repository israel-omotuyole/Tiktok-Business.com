let passwordBtn = document.getElementById('password-icon-btn');
let passwordIcon = document.getElementById('password-visibility-icon');
let passwordInput = document.getElementById('password-input');

passwordBtn.addEventListener('click', () => {
    if(passwordIcon.classList.contains('fa-eye')) {
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
        passwordInput.type = 'text';
    } else {
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
        passwordInput.type = 'password';
    }
})