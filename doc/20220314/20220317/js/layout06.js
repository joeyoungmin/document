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



//유튜브 플레이어를 써볼까?

jQuery("#bgndVideo").YTPlayer({
    videoURL:'vdEyBDIQTAg',
    containment:'.movieBg',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
});

$('.movieBg i:first-child').on('click', function(){
    $('#bgndVideo').YTPPause();
});
$('.movieBg i:last-child').on('click', function(){
    $('#bgndVideo').YTPPlay();
});

$('.tab_menu li').on('click',function(){
    var idx = $(this).index();
    $(this).addClass('block').siblings().removeClass('block');
    $('.tab_content>div').eq(idx).addClass('block').siblings().removeClass('block');
});

$('.custonerArea .container>div .btn').hover(function() {
    $(".custonerArea .container>div i").css({
        opacity:1,
    });
        }, function(){
            $(".custonerArea .container>div i").css({
                opacity:0,
            });
        });






//////////////////////////////

})