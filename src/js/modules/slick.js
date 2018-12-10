$(document).ready(function() {
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: false,
        accessibility: false,
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left"></i>',
        responsive: [
            {
                breakpoint: 767,
                settings:{
                dots: true,
                arrows: false,
                }
            }

          ]
    });
});