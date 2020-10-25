
$(document).ready(function(){
    //text animations
    $('.fadein').textillate({
        loop: false,
        autostart: true,
        in: {
            effect: 'fadeIn',
            delayScale : 2,
            delay : 40
        }
    });
    $('.message p').textillate({
        loop: false,
        autostart: false,
        in: {
            effect: 'fadeIn',
            delayScale : 1,
            delay : 50
        }
    });

    //godown 
    $("#arrow-go-down").click(function(){
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 500);
    });

    var bottomscroll = window.pageYOffset + $(window).height();
    var runtext = false;
    $(window).scroll(function(){
        bottomscroll = window.pageYOffset + $(window).height();
        if (bottomscroll >=  $('footer').offset().top && !runtext) {
            runtext=true;
            $("footer .inner-container").addClass('active');
            $('.message p').textillate('start');
        }
    })
});