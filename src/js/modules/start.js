// This is an examples of simple export.
//
// You can remove or add your own function in this file.



$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(".mobile-navbar-wrapper").slideToggle();
    });
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav:true,
        navText: [
            '<i class="fas fa-angle-left fa-2x"></i>',
            '<i class="fas fa-angle-right fa-2x"></i>'
        ],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    });
});