$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /**Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots: false,
        nav:true, 
    });


    // click to move up
    // ini coding untuk scroll up or down than give it the time for it
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });

});