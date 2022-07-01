const purpose = document.querySelector('#fa');



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

purpose.addEventListener('change', (value) => {
    if (value.target.value === '1'){
        $('.upload-fires').html('<label class="form-label" style="margin-bottom: 40px;">RFIをアップロードしてください</label><br><div class="mb-3"><input type="file" class="form-control" aria-label="file" style=" width : 600px; margin :0 auto;" required></div><div class="mb-3"><input type="file" class="form-control" aria-label="file2" style=" width : 600px; margin :0 auto;" required></div><label class="form-label">希望額</label><div class="input-group mb-3" style="width :400px; margin: 0 auto;"><span class="input-group-text">¥</span><input type="text" class="form-control" aria-label="Yen" required><span class="input-group-text">円</span></div><div style ="margin-bottom: 50px;"></div>');
    } else {
        $('.upload-fires').html('');
    }
})