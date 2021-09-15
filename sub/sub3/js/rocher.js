//rocher.js

$(function () {
    $('nav, #header_lnb').hover(
        function () {
            $('#header_lnb').stop().slideDown();
        },
        function () {
            $('#header_lnb').stop().slideUp();
        });

    $('#header_wrap .family_btn').click(function () {
        $('#header_wrap .familysite').stop().slideToggle();
    });

}); // header ---------------------------------------------------------------------------

$(function () {
    $('.main_bg').animate({
        top: '60px',
        opacity: 1
    }, 2000, 'easeOutBounce');

    $('.main_txt1').delay(1500).animate({
        opacity: 1
    }, 1000);

    $('.main_txt2').delay(2000).animate({
        opacity: 1
    }, 1000);
}); // main ---------------------------------------------------------------------------

$(function () {
    var acall = setInterval(autoSlide, 10);

    $('.slide_wrap').hover(
        function () {
            clearInterval(acall);
        },
        function () {
            acall = setInterval(autoSlide, 10);
        });
});


var mnum = 0;

function autoSlide() {
    mnum++;

    var fw = $('.slide_wrap li').first().width();

    if (mnum > fw) {
        $('.slide_wrap').append($('.slide_wrap li').first()).css({
            left: 0
        });

        mnum = 0;

    } else {
        $('.slide_wrap').css({
            left: -mnum + 'px'
        });
    }
};

// auto slide --------------------------------------------------------------------

$(window).scroll(function(){
    var scTop = $(this).scrollTop();
    
    if (scTop > 100) {
        $('.rotate_box').css({
            transform : 'perspective(800px) rotateY(0deg)'
        });
    }

    if(scTop > 1160) {
        $('.synopsis_txt').css({
            opacity : 1
        });
    }

    $('.pr_info').hover(
        function(){
            $(this).css({
                transform : 'perspective(800px)',
                transformStyle: 'preserve-3d'
            });

            $('.rotate_box').css({
                transform : 'rotateY(180deg)'
            });
        },
        function(){
            $('.rotate_box').css({
                transform : 'rotateY(0deg)'
            });
        }
    );

});

$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer ----------------------------------------------------------------------
