jQuery(function($) {

$('.hamburger-menu').click(function() {
        $('.hamburger-menu').toggleClass('active');
        $('.menu-overlay').toggleClass('open');
        $('body').toggleClass('nav-active');
    });
    $('.menu-overlay').click(function() {
        $('.hamburger-menu').removeClass('active');
        $('.menu-overlay').removeClass('open');
        $('body').removeClass('nav-active');
    });

} );

