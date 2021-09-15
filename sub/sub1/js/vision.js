//vision.js

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
        console.log(scTop);

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

$(function () {

    $(window).scroll(function () {
        var scTop = $(this).scrollTop();

        console.log(scTop);

        if (scTop > 100) {
            $('.vision1_txt').animate({
                opacity: 1
            }, 2000);
        }


        if (scTop > 700) {
            $('.vision2_txt').animate({
                opacity: 1
            }, 2000);
        }

        setTimeout(function () {
            if (scTop > 1900) {
                $('.hearts_title .txt_red').animate({
                    opacity: 1
                }, 1000);
            }

            if (scTop > 1900) {
                $('.hearts_title .txt_gold').animate({
                    opacity: 1
                }, 2500);
            }
        });
    });
}); // scroll effect --------------------------------------------------------------------

$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });

});

// footer ----------------------------------------------------------------------