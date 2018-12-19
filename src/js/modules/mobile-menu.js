$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(".navbar-holder").slideToggle(0);
    });
    $(window).resize(function() {
        if ($(window).width() > 1020) {
            $(".navbar-holder").css("display", "block");
        }
        else{
            $(".navbar-holder").css("display", "none");
        }
      });
});