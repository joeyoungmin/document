$(function(){

/////////////////////////////////////////////////

// var left = 1;

// function mainslide(){

//     $('.mainslide').css({left:-(left*100)+"%"});
//     left=left+1;
//     if(left===3){left=0}

// }

// setInterval(mainslide,2000)

$('.mainslide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
});

$('.mainVisual .slideArrow i:first-child').on('click',function(){

    $('.mainslide').slick('slickPrev')

});

$('.mainVisual .slideArrow i:last-child').on('click',function(){

    $('.mainslide').slick('slickNext')

})

// mainslide();

////////////////////////////////////////////////

});