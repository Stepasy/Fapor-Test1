$(document).ready(function() {
    if ($(window).width() > 964) {
        $(".fa-bars").click(function() {
            $(".navbar-holder").slideToggle(0);
            $(".navbar").css("opacity", "1");
            if ($(".navbar").css("opacity") == 1){
                $(".navbar").css("opacity", "0.6");
            }
    });
    $(window).resize(function() {
        if ($(window).width() > 964) {
            $(".navbar-holder").css("display", "block");
            $(".navbar").css("opacity", "1");
        }
        else{
            $(".navbar-holder").css("display", "none");
            $(".navbar").css("opacity", "0.6");
        }
      });
    }
});