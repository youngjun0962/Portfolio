//environmental.js

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
        console.log(scTop);
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

    $('#system').find('.title, .stitle, .circle').delay(500).animate({
        bottom: 0,
        opacity: 1
    }, 1000);
});
//main ---------------------------------------------------------------------------

$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop > 200) {
        $('.system_bottom').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

    if (scTop > 600) {
        $('#energy').find('.title, .stitle, .circle').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

    if (scTop > 950) {
        $('.energy_bottom').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

    if (scTop > 1400) {
        $('#water').find('.title, .stitle, .circle').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

    if (scTop > 1700) {
        $('.water_bottom').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

    if (scTop > 2200) {
        $('#pack').find('.title, .stitle, .circle').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

    if (scTop > 2350) {
        $('.pack_bottom').animate({
            bottom: 0,
            opacity: 1
        }, 1000);
    }

});
//scroll effect ------------------------------------------------------------------------

$(function () {
    $('.family_title img').click(function () {
        $('.family_site').stop().slideToggle();
    });

}); // footer ----------------------------------------------------------------------