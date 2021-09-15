//social.js

$(function () {
    var clickControl = 0

    $('.header_menu').click(function () {
        if (clickControl === 1) return false;

        clickControl = 1

        $('nav').animate({
            right: '0px'
        }, function () {
            $('.border_top').animate({
                opacity: 1
            }, 400);

            clickControl = 0
        });

        $('.close_btn').stop().click(function () {
            $('nav').animate({
                right: '-110%'
            }, function () {
                $('.border_top').css({
                    opacity: 0
                });
            });
        });
    });

    $(window).scroll(function () {
        var scTop = $(this).scrollTop();

        if (scTop > 450) {
            $('header').css({
                backgroundColor: '#fff',
                borderBottom: '1px solid #ccc'
            });
        } else {
            $('header').css({
                backgroundColor: 'transparent',
                borderBottom: 'none'
            });
        }
    });
});
// header ----------------------------------------------------------------------

$(function () {
    $('.main_wrap').animate({
        opacity: 1,
        bottom: 0
    }, 1000);

    $('.our_top, .circle, .our_top_txt').delay(500).animate({
        bottom: 0,
        opacity: 1
    }, 1000);
});
//main ---------------------------------------------------------------------------

$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    console.log(scTop);
    if (scTop > 270) {
        $('.our_bottom').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

});
//scroll effect ------------------------------------------------------------------------

$(function () {
    var acall = setInterval(autoSlide, 10);

    $('.slide').on('touchstart', function () {
        clearInterval(acall);
    }).on('touchend', function () {
        acall = setInterval(autoSlide, 10);
    });
});

var mnum = 0;

function autoSlide() {
    mnum++;

    var fw = $('.slide li').first().width() + 100;

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
    $('.family_title img').click(function () {
        $('.family_site').stop().slideToggle();
    });

}); // footer ----------------------------------------------------------------------