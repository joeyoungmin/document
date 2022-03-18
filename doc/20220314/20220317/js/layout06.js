$(function(){



//////////////////////////////

//top banner 

function topbannerHandler() {
    // $('.top-banner').hide(); //display:none;
    $('.top-banner').slideUp();
}

$('.top-banner .container i').on('click', topbannerHandler);

$('.visualSlide').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: '    <div class="msLeft"></div>      ',
    nextArrow: '    <div class="msRight"></div>      '
});


// 슬라이드에 애니메이션...
$('.visualSlide figure').eq(1).addClass('oo');
$('.visualSlide').on('afterChange', function (e,s,c){
    $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
    if (c===1) {
        $('.msLeft').addClass('oo')
    } else {
        $('.msLeft').removeClass('oo')
    }
});



$('.eproduct-slide').slick({
    arrows:false,
    autoplay:true,
    autoplayspeend:1000,
    
});

$('.event-product i:nth-of-type(1)').on('click',function(){
    $('.eproduct-slide').slick('slickPause')
});

$('.event-product i:nth-of-type(2)').on('click',function(){
    $('.eproduct-slide').slick('slickPlay')
});


$('.aproduct-slide').slick({
    arrows:false,
    dots:true,
    slidesToShow:5,
    centerMode: true,
});

$('.all-product i:first-child').on('click', function(){
    $('.aproduct-slide').slick('slickPrev')
});

$('.all-product i:last-child').on('click', function(){
    $('.aproduct-slide').slick('slickNext')
});






//////////////////////////////





})