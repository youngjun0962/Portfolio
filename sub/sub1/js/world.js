//world.js

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
                zIndex: 10001,
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
                borderBottom: 'none',
                zIndex: 0
            });

            $('.snb_wrap h3 a').css({
                color: '#fff'
            });
        }
    });

}); // snb ---------------------------------------------------------------------------

$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    console.log(scTop);

    if(scTop > 100) {
        $('.globally_title').animate({
            opacity: 1
        },500);

        $('.globally_title span').delay(500).animate({
            opacity: 1
        },500);

        $('#globally p').delay(1000).animate({
            opacity: 1
        },500);
    }




}); // main ---------------------------------------------------------------------------


$(function () {

    $('.world_menu li').click(function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on')

        var worldName = $(this).attr('data-world');

        $('.world_wrap>li').removeClass('world_on');
        $('.' + worldName).addClass('world_on');
        $('.modal_box').fadeOut();
    });

    $('.modal_btn').click(function (e) {
        e.preventDefault();
        $(this).next().fadeIn();
        $('#modal_bg').show();
    });

    $('.btn_close').click(function (e) {
        e.preventDefault();
        $('.modal_box').fadeOut();
        $('#modal_bg').hide();
    });
}); // modal -------------------------------------------------------------------------- 

$(function () {

    var cpage = 1;
    var cmove = 0;

    $('.right_arr').click(function (evt) {
        evt.preventDefault();

        if (cpage === 3) return false;
        ++cpage;
        cmove += 750;
        $('.page_num').text(cpage);
        $('.slide').animate({
            marginLeft: -cmove
        });

        if (cpage === 2) autoCount2();
        if (cpage === 3) autoCount3();


    });

    $('.left_arr').click(function (evt) {
        evt.preventDefault();
        if (cpage === 1) return false;
        --cpage;
        cmove -= 750;
        $('.page_num').text(cpage);
        $('.slide').animate({
            marginLeft: -cmove
        });
    });

    $(window).scroll(function () {
        var scTop = $(this).scrollTop();

        if (scTop > 1260) {
            autoCount1();
        }
    });

    var count0 = count1 = count2 = count3 = count4 = count5 = count6 = 0

    function autoCount1() {

        autoCnt0 = setInterval(count0Fn, 35);

        function count0Fn() {
            count0 += 0.1;
            if (count0 > 14.5) {
                clearInterval(autoCnt0);
            } else {
                $('.slide>li').eq(0).find('span').text(Math.round(count0 * 10) / 10);
            }
        };

        autoCnt1 = setInterval(count1Fn, 1);

        function count1Fn() {
            ++count1;
            if (count1 > 1200) {
                clearInterval(autoCnt1);
            } else {
                $('.slide>li').eq(1).find('span').text(count1);
            }
        };

        autoCnt2 = setInterval(count2Fn, 30);

        function count2Fn() {
            ++count2;
            if (count2 > 170) {
                clearInterval(autoCnt2);
            } else {
                $('.slide>li').eq(2).find('span').text(count2);
            }
        };
    };

    function autoCount2() {

        autoCnt3 = setInterval(count3Fn, 43.63636363636364);

        function count3Fn() {
            ++count3;
            if (count3 > 55) {
                clearInterval(autoCnt3);
            } else {
                $('.slide>li').eq(3).find('span').text(count3);
            }
        };

        autoCnt4 = setInterval(count4Fn, 77.41935483870968);

        function count4Fn() {
            ++count4;
            if (count4 > 31) {
                clearInterval(autoCnt4);
            } else {
                $('.slide>li').eq(4).find('span').text(count4);
            }
        };

        autoCnt5 = setInterval(count5Fn, 35);

        function count5Fn() {
            ++count5;
            if (count5 > 70) {
                clearInterval(autoCnt5);
            } else {
                $('.slide>li').eq(5).find('span').text(count5);
            }
        };
    }

    function autoCount3() {

        autoCnt6 = setInterval(count6Fn, 40);

        function count6Fn() {
            count6 += 0.1;
            if (count6 > 4) {
                clearInterval(autoCnt6);
            } else {
                $('.slide>li').eq(6).find('span').text(Math.ceil(count6 * 10) / 10);
            }
        };
    }

}); // global --------------------------------------------------------------------------

$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer ----------------------------------------------------------------------