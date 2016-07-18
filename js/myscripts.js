/*global $ , alert , console */

$(function () {
    
    'use strict';
    
    //Adjust header height
    
    var myHeader = $('.header'),
        mySlider = $('.bxslider'),
        $messages = $('.error-message-wrapper');
    
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
    
    //Triger Mixitup
    $('.gallery').mixItUp();
    //Adjust shuffle links
    
    $('.shuffle li').click(function () {
    
        $(this).addClass('selected').siblings().removeClass('selected');
        
    
    });
    
   
    //Color on click
    
    $('.form .form-input').click(function () {
        $(this).addClass('input-selected').siblings().removeClass('input-selected');
        
    });
    $.validate({
        errorMessagePosition : $messages,
        scrollToTopOnError : false // Set this property to true if you have a long form
    });
    
    
    //scroll to top fade-out on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    
    //Custom Auto Slider
    (function AutoSlider() {
        $('.work .opinions .slider .active').each(function () {
    
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000 , function (){
                
                $(this).removeClass('active').next().addClass('active').fadeIn();
                AutoSlider();
                
                });
    
            }
            else{
                $(this).delay(5000).fadeOut(1000 , function (){
                    $(this).removeClass('active');
                    $('.work .opinions .slider > div').eq(0).addClass('active').fadeIn();
                    AutoSlider();
                    
                });

            }
        
        
        });
        
        
        
    }());
//Spread Bars navbar
    
    $('#hidden_nav').click(function(){
    if( $(".links").css('display') == 'block') {
        $('.links').css('display' , 'none');
    }
        else {
                $('.links').css('display' , 'block');
            }
    
    });
});