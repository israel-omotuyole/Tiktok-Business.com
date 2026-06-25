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


document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("brand-counter-text");

    const brandSwiper = new Swiper('.brand-swiper-container', {
        loop: false,
        speed: 500,
        allowTouchMove: true, 
        navigation: {
            nextEl: '.brand-next',
            prevEl: '.brand-prev',
        },
        on: {
            slideChange: function () {
                let currentSlideNum = this.realIndex + 1;
                counterElement.textContent = "0" + currentSlideNum + " / 03";
            }
        }
    });
});