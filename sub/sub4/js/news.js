//news.js

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

$(function () {
    var click = 0;
    var pageNum = 1;
    var limit = 0;

    $('.btn_right').click(function (e) {
        if (limit === 3) return false;

        if (click === 1) return false;
        ++click;

        ++pageNum;
        $('.page_num').text(pageNum);

        ++limit;
        $('.slide').animate({
            left: -960 * limit + 'px'
        }, function () {
            click = 0;
        });

        if (limit === 3) {
            $(this).attr('src', 'img/section1/arrow-right1.png').css({
                cursor: 'default'
            });
        } else {
            $(this).attr('src', 'img/section1/arrow-right.png').css({
                cursor: 'pointer'
            });
        }

        if (limit > 0) {
            $('.btn_left').attr('src', 'img/section1/arrow-left.png').css({
                cursor: 'pointer'
            });
        }

        $('.bar').animate({
            width: 25 * pageNum + '%'
        });

    });

    $('.btn_left').click(function (e) {
        e.preventDefault();
        if (limit === 0) return false;

        if (click === 1) return false;
        ++click;

        --pageNum;
        $('.page_num').text(pageNum);

        $('.slide').animate({
            left: (-960 * limit) + 960 + 'px'
        }, function () {
            click = 0;
        });

        --limit;

        if (limit < 1) {
            $('.btn_left').attr('src', 'img/section1/arrow-left1.png').css({
                cursor: 'default'
            });
        } else {
            $('.btn_right').attr('src', 'img/section1/arrow-right.png').css({
                cursor: 'pointer'
            });
        }

        $('.bar').animate({
            width: 25 * pageNum + '%'
        });
    });





});



















$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer -------------------------------------------------------------------