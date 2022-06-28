function shiftsei(){
    document.getElementById("textmain").outerHTML = "여기에 내용이 추가됩니다.<br>dddasdfafdsf";
};

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 208) {
        $('.menu').css('position', 'fixed');
        $('.menu').css('top', '0px');
    } else {
        $('.menu').css('position', 'relative');
    }
});