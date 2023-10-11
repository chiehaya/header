
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// ハンバーガーメニュー
const hamburger = $(".js-hamburger");

hamburger.on("click", function () {
    if ($('.js-hamburger').hasClass('is-open')){
        $('.js-sp-nav').fadeOut();
        $(this).removeClass('is-open');
    }else {
        $('.js-sp-nav').fadeIn();
        $(this).addClass('is-open')
    }
});

});
