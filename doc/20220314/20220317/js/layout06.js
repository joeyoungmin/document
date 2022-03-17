$(function(){



//////////////////////////////

//top banner 

function topbannerHandler() {
    // $('.top-banner').hide(); //display:none;
    $('.top-banner').slideUp();
}

$('.top-banner .container i').on('click', topbannerHandler);

$('.visual-slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
});

//////////////////////////////





})