$(document).ready(function(){
    //navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });

    //navbar background change in scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >=80){
            $('.navbar').addClass('bg-navbar');
        }else{
            $('.navbar').removeClass('bg-navbar');
        }
    });

    // aos
    AOS.init();
});