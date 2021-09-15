//index.js
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

        if (scTop > 500) {
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

    var page = 0;

    function leftmove() {
        ++page

        if (page === 4) {
            $('.main_slide').css({
                left: 0
            });

            page = 1;
        }

        $('.main_slide').animate({
            left: (-100 * page) + '%'
        }, 1000);
    }

    var autoSlide = setInterval(function () {
        leftmove();
    }, 3000);
}); // main ----------------------------------------------------------------------



$(function () {

    $('.brand_btn li').click(function (e) {
        e.preventDefault();
        var bname = $(this).attr('id');

        $(this).addClass('btn_sel').siblings().removeClass('btn_sel');

        $('.synopsis_' + bname).fadeIn(1500).siblings().css({
            display: 'none'
        });

        $('.logo_' + bname).fadeIn(1500).siblings().css({
            display: 'none'
        });


        $('.wrap_' + bname).addClass('brand_on').siblings().removeClass('brand_on');
        $(this).children().addClass('btn_on').end().siblings().children().removeClass('btn_on');

        dragslider();
    });
    // brand_btn




    function dragslider() {
        var sname = $('.btn_sel').attr('id')
        var bslider = $('.slide_' + sname);
        var imgwidth = bslider.width();
        var barwidth = $('.brand_on .pr_scrollbar').width();
        var dragwidth = $('.brand_on .pr_scrollbar_drag').width();
        var barmax = barwidth - dragwidth;
        var barpos;
        var imgmax = imgwidth - barwidth;
        var imgpos;

        $('.slide_wrap>div>ul').css('-webkit-overflow-scrolling', 'touch');
        $('.pr_scrollbar_drag').css('-webkit-overflow-scrolling', 'touch');

        $('.pr_scrollbar_drag').css({
            left: '0px'
        });
        bslider.css({
            left: '0px'
        });

        bslider.draggable({
            axis: 'x'
        });

        bslider.on('drag', function () {
            imgpos = $(this).position().left;

            if (imgpos < -imgmax) {
                bslider.css({
                    left: (-imgmax + 1) + 'px'
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
                left: -barpos + 'px'
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

    var conpos = 0;

    $('.btn_top').click(function (e) {
        e.preventDefault();

        if (conpos === 0) return false

        conpos += 70;

        $('.news_contents').animate({
            marginTop: conpos + 'px'
        });
    });

    $('.btn_bottom').click(function (e) {
        e.preventDefault();

        if (conpos === -140) return false

        conpos += -70;

        $('.news_contents').animate({
            marginTop: conpos + 'px'
        });
    });


}); // news ----------------------------------------------------------------------

$(function () {
    $('.family_title img').click(function(){
        $('.family_site').stop().slideToggle();
    });    

}); // footer ----------------------------------------------------------------------