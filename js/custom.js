$(document).ready(function(){
    $('.cls').click(function(){
        $('.search form').toggleClass('show');
    });
    $('.banner .slider').lightSlider({
        item:1,
        loop:true,
        slideMove:1,
        mode:'fade',
        pager:true,
        controls:false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1200
    });  
    $('.slider-experts .slider').lightSlider({
        item:1,
        loop:true,
        mode:'fade',
        pager:false,
        auto:false,
        controls:true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1200,
        pause:3000
        
    }); 
    $('.slider-customers .slider').lightSlider({
        item:1,
        loop:true,
        mode:'fade',
        pager:false,
        auto:true,
        controls:true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1200,
        pause:3000
    });  

    $('.slider-certification .item').click(function(){
        var src = $(this).children('img').attr('src');
        $('.popup-certification').fadeIn();
        $('.popup-certification .img img').attr({'src': src});
    });
    $('.popup-certification .close').click(function(){
        $('.popup-certification').fadeOut();
    });
    
    $('.video-wraper .img').click(function () {
        $('.popup-video').fadeIn();
        let url = $(this).parent('.video-wraper').children('.iframe-video').text();
        $('.popup-video .iframe').html("<iframe id=\"video\" src=\"https://www.youtube.com/embed/" + url + "?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"></iframe>")
    })
    $('.popup-video .close').click(function () {
        $('.popup-video').fadeOut();
        $(this).parent('.video').children('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    })
    $('.select .value-show').click(function () {
        $(this).parents('.select').children('.box-select').slideToggle()
    })
    $('.box-select span').click(function () {
        var val = $(this).data('val');
        var sl = $(this).data('sl');
        var price = $(this).data('price');
        $(this).parents('.select').children('.value-show').html("" + val +"")
        $('.right-price > span').html(sl)
        $('.right-price p span').html(""+ price +"đ")
        $(this).parent('.box-select').slideUp();
    })
    $('.show-contact').click(function (e) {
        e.preventDefault();
        $('.popup-contact').fadeIn();
    })
    $('.popup-contact .close').click(function () {
        $('.popup-contact').fadeOut();
    })

    $('.touch-on').click(function(){
        $('.touch-on').toggleClass('active');
        $(this).parents('header').children('.mn-top').toggleClass('show');
        $(this).parents('.click-mb').children('.click-mb .bg-black-x').toggleClass('touch-off')
    });
    $('.bg-black-x').click(function() {
        $('.touch-on').removeClass('active');
        $(this).parents('header').children('.mn-top').removeClass('show');
        $(this).removeClass('touch-off')
    })
    $('.sm-li .plus').click(function(){
        $(this).parents('.sm-li').children('.sub-mn').slideToggle();
        $(this).parents('.sm-li').children('.plus').toggleClass('active');
    })
    $('.nav-code a').click(function () {
        $(".nav-code a").removeClass("active");
        $(".tab-code").removeClass("active");
        $(this).addClass("active")
        var tab = $(this).data("tab");
        $("#" + tab).toggleClass("active");
    })
});
if ($('header').length) {
    fixmenu = function () {
        var tigger = $('header').height() + 10;
        var scrollTop = $(window).scrollTop();
        if ($(window).width() > 0) {
            if (scrollTop > tigger) {
                $('.mn-top').addClass('fixed');
            } else {
                $('.mn-top').removeClass('fixed');
            }
        } 
    };
    fixmenu();
    $(window).on('scroll', function () {
        fixmenu();
    });
}