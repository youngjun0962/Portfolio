//media.js 

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

$(function(){

    $('#btn_menu p').click(function(){
        $(this).addClass('btn_on').siblings().removeClass('btn_on');
    });

    $('.btn_tv').on('click',function(e){
        e.preventDefault();
        $('.tv').addClass('on').siblings().removeClass('on');
        $('.sns li').css({
            display : 'none'
        }).slice(0,8).show();
        $('.load_more').css({
            display : 'block'
        });
    });

    $('.btn_sns').click(function(e){
        e.preventDefault();
        $('.sns').addClass('on').siblings().removeClass('on');
        $('.tv li').css({
            display : 'none'
        }).slice(0,8).show();
        $('.load_more').css({
            display : 'block'
        });
        
    });

    $('.tv li').slice(0,8).show();
    $('.sns li').slice(0,8).show();
    
    $('.load_more').on('click',function(e){
        e.preventDefault();
        $('.tv li:hidden').slice(0,8).slideDown(600);

        if($('.tv li:hidden').length === 0) {
            $('.load_more').fadeOut();
        }

        $('.sns li:hidden').slice(0,8).slideDown(600);

        if($('.sns li:hidden').length === 0) {
            $('.load_more').fadeOut();
        }

        $('html,body').animate({
            scrollTop : $(this).offset().top
        }, 1000);
    });

});  // contents ------------------------------------------------------------------------

$(function () {
    $('#footer_top .family_btn').click(function () {
        $('.fsite').stop().slideToggle();
    });
}); // footer -------------------------------------------------------------------