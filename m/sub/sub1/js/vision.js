//vision.js

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

    $('.vision_box1').delay(1000).animate({
        opacity: 1,
        bottom: 0
    }, 1000);
});
//main ---------------------------------------------------------------------------

$(window).scroll(function () {
    var scTop = $(this).scrollTop();

    if (scTop > 300) {
        $('.vision_box2').animate({
            opacity: 1,
            bottom: 0
        }, 1000);
    }

    setTimeout(function () {
        if (scTop > 2800) {
            $('.hearts_title .txt_red').animate({
                opacity: 1
            }, 1000);
        }

        if (scTop > 2800) {
            $('.hearts_title .txt_gold').animate({
                opacity: 1
            }, 2500);
        }

        if (scTop > 2800) {
            $('#hearts .hearts_txt').animate({
                opacity: 1
            }, 2500);
        }
    });
});
// scroll effect ----------------------------------------------------------------------

$(function () {
    $('.family_title img').click(function () {
        $('.family_site').stop().slideToggle();
    });

});
// footer ----------------------------------------------------------------------