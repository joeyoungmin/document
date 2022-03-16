$(function(){



//////////////////////////////

function tabMenu() {
    
    var idx = $(this).index();
    $('.tab-link li').removeClass('active');
    $(this).addClass("active");
    $('.tab-content > div').removeClass('active');
    $('.tab-content > div').eq(idx).addClass('active');
    // $('.tab-content > div').eq(idx).addClass('active').siblings().removeClass('active');
}


$('.tab-link li').on('click', tabMenu);


$('.xi-close').on('click', function(){

    $('.header-wrap').slideToggle(2000);
    
});


//////////////////////////////





})