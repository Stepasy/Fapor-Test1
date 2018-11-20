// This is an examples of simple export.
//
// You can remove or add your own function in this file.



$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(".mobile-navbar-wrapper").slideToggle();
    });
    $('.owl-carousel').owlCarousel({
        items:1,
    });
});

$('#subscribe').blur(function() {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;
    if($(this).val() && !pattern.test($(this).val())) {
      $(this).focus();
    }
  });