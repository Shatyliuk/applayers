$(document).ready(function () {
    $('.nav__item:has(ul)').on('click', function (e) {
        e.preventDefault();
        $('.nav__item .dropdown').slideToggle();
    });

    $('#navIcon').on('click', function () {
        $(this).toggleClass('open');
        $('#navbar').slideToggle();
    })
});