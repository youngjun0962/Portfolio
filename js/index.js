/* index.js */

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

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop > 400) {
        $('.world_title').animate({
            opacity: 1
        }, 1000);
    }

    if (scTop > 500) {
        $('.txt_gold').animate({
            opacity: 1
        }, 1000);

        $('.world_img').animate({
            top : 0,
            opacity : 1
        }, 1500);
    }

    if (scTop > 600) {
        $('.world_info').animate({
            opacity: 1
        }, 1000);
    }
});
// world ---------------------------------------------------------------------------

$(function () {
    $('.brand_btn li').click(function (e) {
        e.preventDefault();
        var bname = $(this).attr('id')
        
        $('.logo_' + bname).fadeIn(1500).siblings('img').css({
            display: 'none'
        });

        $('.brand_logo .brand_more_btn a').attr('href', 'sub/sub3/' + bname + '.html');

        $('.brand_' + bname).fadeIn(1500).siblings().css({
            display: 'none'
        });
        $(this).children().addClass('btn_on').end().siblings().children().removeClass('btn_on');

        dragslider();
    });
    // brand_btn

    function dragslider() {
        var bslider = $('.brand_info>div:visible>.brand_slide>ul');
        var imgwidth = bslider.width();
        var barmax = 780;
        var barpos;
        var imgmax = imgwidth - 930;
        var imgpos;
        $('.pr_scrollbar_drag').css({
            left: '0px'
        });
        $('.brand_info>div:visible>.brand_slide>ul').css({
            left: '0px'
        });

        bslider.draggable({
            axis: 'x'
        });

        bslider.on('drag', function () {
            imgpos = $(this).position().left;

            if (imgpos < -imgmax) {
                bslider.css({
                    left: -imgmax + 'px'
                });
                return false
            } else if (imgpos > 0) {
                bslider.css({
                    left: '0px'
                });
                return false
            }

            barpos = imgpos * barmax / imgmax;
            $('.pr_scrollbar_drag').css({
                left: -barpos + 'px',
            });
        });
        // img_slider 

        $('.pr_scrollbar_drag').draggable({
            axis: 'x',
            containment: 'parent'
        });

        $('.pr_scrollbar_drag').on('drag', function () {
            barpos = $(this).position().left;
            imgpos = barpos * imgmax / barmax;
            bslider.css({
                left: -imgpos + 'px'
            });
        });
        // scrollbar 
    }

    dragslider();

}); // brand_slide ----------------------------------------------------------------------

$(function () {
    $('.sustain_icon').hover(
        function () {
            $(this).find('.circle').stop().fadeIn();
        },
        function () {
            $(this).find('.circle').stop().fadeOut();
        }
    )
});

$(function () {
    $('.news_contents li').click(function (e) {
        e.preventDefault();
        $(this).addClass('sel_on').siblings().removeClass('sel_on');
        var selcon = $(this).children('a').attr('href');
        $(selcon).addClass('news_on').siblings().removeClass('news_on');
    });

    var conpos = 0;

    $('.btn_top').click(function (e) {
        e.preventDefault();

        if (conpos === 0) return false

        conpos += 100;

        $('.news_contents').animate({
            marginTop: conpos + 'px'
        });
    });

    $('.btn_bottom').click(function (e) {
        e.preventDefault();

        if (conpos === -200) return false

        conpos += -100;

        $('.news_contents').animate({
            marginTop: conpos + 'px'
        });
    });

}); // news ----------------------------------------------------------------------

$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer ----------------------------------------------------------------------