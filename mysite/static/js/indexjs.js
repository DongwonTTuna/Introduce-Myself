$(document).scroll(function() {
    var y = $(document).scrollTop();
    var result = (y-210)/($(document).height()-210 -$(window).height())*100;
    if (y > 210) {
        $('.menu').css('position', 'fixed');
        $('.menu').css('top', '-1px');
        $('.maincontents').css('margin-top', '140px');
        $('.progress-bar').css('visibility', 'visible');    
        $('.progress-bar').css("width",result+"%");

    } else {
        $('.menu').css('position', 'relative');
        $('.maincontents').css('margin-top', '30px');
        $('.progress-bar').css('visibility', 'hidden');
    }
});