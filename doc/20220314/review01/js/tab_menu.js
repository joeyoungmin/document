$(function () {
  //////////////////////////////

  function tabMenu() {
    var idx = $(this).index();
    $(".tab-link li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content > div").removeClass("active");
    $(".tab-content > div").eq(idx).addClass("active");
    // $('.tab-content > div').eq(idx).addClass('active').siblings().removeClass('active');
  }

  $(".tab-link li").on("click", tabMenu);

  $(".topBannerToggle .inner").on("click", function () {
    $(this).toggleClass("active");
    $(".header-wrap .container").slideToggle();
  });

  $(".popup .closebtn").on("click", function () {
    $(".popup").hide();
  });

  //////////////////////////////
});
