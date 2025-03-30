AOS.init();

$(document).ready(function () {
    // Бургер-меню
    $('.burger-menu').click(function () {
        $(this).toggleClass('active');
        $('.nav-links').toggleClass('active');
    });

    // Функція відкриття модального вікна
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('hide');
        modal.style.display = 'block';
    }

    // Функція закриття модального вікна
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('hide');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }

    // Відкриття модального вікна реєстрації
    document.getElementById('Hogar').addEventListener('click', function () {
        openModal('Bienvenido');
    });

    // Закриття модального вікна реєстрації
    document.querySelector('#Bienvenido .close').addEventListener('click', function () {
        closeModal('Bienvenido');
    });

    // Закриття при кліку поза вікном
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('Bienvenido');
        if (event.target === modal) {
            closeModal('Bienvenido');
        }
    });
});