/*global $ , alert , console */

$(function () {
    
    'use strict';
    
    //Adjust header height
    
    var myHeader = $('.header'),
        mySlider = $('.bxslider'),
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
    
        myHeader.height($(window).height());
            //Center Bxslider
    
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    
        });

    });
    
   
    //Center Bxslider
    
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    
    });
    
    //Trigger Bx Slider
    mySlider.bxSlider({
        pager : true
    });
    $('.slider').bxSlider({
        pager : true,
        controls:true
    });
    //smooth scroll
    
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
    
    //scroll to top fade-out on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    
    
});