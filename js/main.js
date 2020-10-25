
$(documnet).ready(function(){
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
});