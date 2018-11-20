// This is an examples of simple export.
//
// You can remove or add your own function in this file.



$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(".mobile-navbar-wrapper").slideToggle();
    });
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true
    });
});