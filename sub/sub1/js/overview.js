//overview.js

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

    if (scTop > 200) {
        $('#better h2,p').animate({
            opacity: 1
        }, 1000);
    }

    if (scTop > 1100) {
        $('#effect1').animate({
            opacity: 1
        }, 1000);
    }

    if (scTop > 1500) {
        $('#effect3').animate({
            opacity: 1
        }, 1000);
    }
    if (scTop > 1800) {
        $('#effect2').animate({
            opacity: 1
        }, 1000);
    }

    if (scTop > 2600) {
        $('#giovanni .gio_wrap').animate({
            opacity: 1
        }, 1000);
    }
}); // scroll effect --------------------------------------------------------------------

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
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer ----------------------------------------------------------------------