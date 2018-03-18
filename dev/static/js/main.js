$(document).ready(function () {
    $('.nav__item:has(ul)').on('click', function (e) {
        e.preventDefault();
        $('.nav__item .dropdown').slideToggle();
    })
});