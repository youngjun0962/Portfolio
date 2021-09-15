//environmental.js

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
        $('.system_bg').css({
            top : 0,
            opacity : 1,
        });
    }

    if(scTop > 800) {

        $('.energy').animate({
            top : 0,
            opacity : 1
        },1500);

        $('.water').delay(500).animate({
            top : 0,
            opacity : 1
        },1500);

        $('.pack').delay(1000).animate({
            top : 0,
            opacity : 1
        },1500);
    }

    if(scTop > 1600) {
        $('.energy_bg').css({
            top : 0,
            opacity : 1
        });

        $('.energy_txt_wrap>.content_title, .energy_txt_wrap>.small_txt').css({
            top : 0,
            opacity : 1
        });

    }

    if(scTop > 2400) {
        $('.water_bg').css({
            top : 0,
            opacity : 1
        });

        $('.water_txt_wrap>.content_title, .water_txt_wrap>.small_txt').css({
            top : 0,
            opacity : 1
        });


        if(scTop > 3100) {

            $('.pack_txt2 li:eq(0)').animate({
                opacity : 1
            },1500);
            
            $('.pack_txt2 li:eq(1)').delay(500).animate({
                opacity : 1
            },1500);

            $('.pack_txt2 li:eq(2)').delay(1000).animate({
                opacity : 1
            },1500);
        }
    }

}); // scroll effect ------------------------------------------------------------------

$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer -------------------------------------------------------------------