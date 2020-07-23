$('.product-slider-for-js').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider-nav-js',
});

$('.product-slider-nav-js').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slider-for-js',
    arrows: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1199.98,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                arrows: false,
            }
        }
    ]
});

$(document).ready(function () {
    $(".other-products-slider-js").slick({
        arrows: true,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                }
            }
        ]
    });
})