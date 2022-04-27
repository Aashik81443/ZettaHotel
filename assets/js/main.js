$(document).ready(function () {
    function initBgCover(context) {
        if (!context) context = $('body');
        context.find('.bg-cover').each(function () {
            var holder = $(this);
            var image = holder.find('> img').hide();
            var imageSrc = image.prop('src');
            holder.css({
                backgroundImage: 'url(' + imageSrc + ')',
            });
        });
    }

    initBgCover();

    /* smooth scroll*/
    $('a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //services-slider
    $('.services-slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            }
        ]
    });
    //gallery-slider
    $('.gallery-slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            }
        ]
    });

    //testimonial-slider
    $('.testimonial-slider').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            }
        ]
    });

        //gallery-slider
        $('.banner-slider').slick({
            infinite: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            slidesToScroll: 1,          
        });

    //   fancybox
    $('.fancybox').fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    //minDate and maxDate Example
    $('#datepicker').datetimepicker({
        format: 'Y-m-d',
        timepicker: false,
        //minDate: '-1970/01/02', //yesterday is minimum date
        //maxDate: '+1970/01/02' //tomorrow is maximum date
    });


});