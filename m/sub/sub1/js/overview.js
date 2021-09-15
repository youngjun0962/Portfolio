//overview.js
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
        console.log(scTop)

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
});
//main ---------------------------------------------------------------------------

$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    console.log(scTop);
    if (scTop >= 100) {
        $('#better p').animate({
            opacity: 1
        }, 1000);
    }

    if (scTop >= 1600) {
        $('.gio_wrap').animate({
            opacity: 1
        }, 1000);
    }
});
// scroll effect -----------------------------------------------------------------------

$(function () {
    var acall = setInterval(autoSlide, 10);

    $('.slider').hover(
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

    var fw = $('.slider li').first().width();

    if (mnum > fw) {
        $('.slider').append($('.slider li').first()).css({
            left: 0
        });

        mnum = 0;

    } else {
        $('.slider').css({
            left: -mnum + 'px'
        });
    }
};

// auto slide --------------------------------------------------------------------

$(function () {
    $('.family_title img').click(function () {
        $('.family_site').stop().slideToggle();
    });

}); // footer ----------------------------------------------------------------------