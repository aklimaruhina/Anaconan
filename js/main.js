$(document).ready(function() 
{
    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    });
    $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    });
    $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
    });
    $(".single-table").hover(function(){
        $(".single-table").removeClass("active");
        $(this).addClass("active");
    });
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    $("#gallery-list").owlCarousel({
     
        items: 4,
        pagination: true,
       
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        responsive: true,
        startDragging: true,
        autoPlay: 4000
     
    }),
    $('#testimonial-list').owlCarousel({
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true,
        autoPlay: 4000
    });
    $(function(){
        $.scrollUp({
            scrollSpeed: 500,    
            easingType: 'linear',
            scrollText: '<i class="fa fa-angle-up"></i>',
            animation: 'fade',           // Fade, slide, none
            animationSpeed: 400
        });
    });
});
