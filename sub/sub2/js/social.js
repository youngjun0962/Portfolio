//social.js

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
    $('.snb_gnb, .snb_snb').hover(
        function () {
            $(this).children('ul').stop().slideDown();
        },
        function () {
            $(this).children('ul').stop().slideUp();
        });

    var lnbTop = $('#snb').offset().top - 80;

    $(window).scroll(function () {
        var scTop = $(this).scrollTop();

        if (scTop > lnbTop) {
            $('#snb').css({
                position: 'fixed',
                top: '80px',
                backgroundColor: '#fff',
                zIndex: 99,
                borderBottom: '1px solid #999'
            });

            $('.snb_wrap h3 a').css({
                color: '#000'
            });
        } else {
            $('#snb').css({
                position: 'absolute',
                top: 'initial',
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderBottom: 'none'
            });

            $('.snb_wrap h3 a').css({
                color: '#fff'
            });
        }
    });

}); // snb ---------------------------------------------------------------------------


$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    
    if(scTop >= 200) {
        $('.our_bg').css({
            top : 0,
            opacity : 1
        });
    }

    if(scTop > 800) {

        $('.foundation').animate({
            top : 0,
            opacity : 1
        },1500);

        $('.kinder').delay(500).animate({
            top : 0,
            opacity : 1
        },1500);

        $('.enterprise').delay(1000).animate({
            top : 0,
            opacity : 1
        },1500);
    }

}); // scroll effect ------------------------------------------------------------------

$(function () {

    $('.slide li').click(function(){
        var cname = $(this).attr('class');

        $('.slide_top_txt > li'+'.'+cname+'_txt').addClass('on').siblings().removeClass('on');
    });


    var acall = setInterval(autoSlide, 10);

    $('.slide').hover(
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

    var fw = $('.slide li').first().width()+100;

    if (mnum > fw) {
        $('.slide').append($('.slide li').first()).css({
            left: 0
        });

        mnum = 0;

    } else {
        $('.slide').css({
            left: -mnum + 'px'
        });
    }
}; // slide section --------------------------------------------------------------------

$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer -------------------------------------------------------------------