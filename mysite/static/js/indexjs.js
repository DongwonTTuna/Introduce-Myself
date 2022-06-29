$(document).scroll(function() {
    var y = $(document).scrollTop();
    var result = (y-235)/($(document).height()-235 -$(window).height())*100;
    if (y > 235) {
        $('.menu').css('position', 'fixed');
        $('.menu').css('top', '-1px');
        $('.progress-bar').css('visibility', 'visible');    
        $('.progress-bar').css("width",result+"%");

    } else {
        $('.menu').css('position', 'relative');
        $('.progress-bar').css('visibility', 'hidden');
    }
});