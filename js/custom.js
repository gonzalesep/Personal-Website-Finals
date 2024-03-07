$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function() {
    // Fade out the loading animation and white DIV covering the website after everything is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    // Scroll menu
    var sections = $('.section');
    var nav = $('.navbar-fixed-top,footer');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // Smooth scrolling on clicking menu links
    nav.find('a').on('click', function() {
        var $el = $(this);
        var id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });

    // Change menu opacity on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // Parallax initialization
    $(window).stellar();

    // AOS initialization
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    // Isotope initialization
    $('#projects').waitForImages(function() {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function() {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    // Initialize animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form validation
    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: false
            },
            message: {
                required: true
            },
            password: {
                required: true,
                minlength: 8
            },
            repeat_password: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "This field is required",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "This field is required",
                email: "Please enter a valid email address"
            },
            message: {
                required: "This field is required"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 8 characters long"
            },
            repeat_password: {
                required: "Please repeat your password",
                minlength: "Your password must be at least 8 characters long",
                equalTo: "Passwords do not match"
            }
        }
    });

    // Ensure phone number input contains only digits
    document.getElementById('contact_number').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
});
