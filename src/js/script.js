
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// ハンバーガーメニュー
const hamburger = $(".js-hamburger");
const globalNav = $(".js-page-nav");

hamburger.on("click", function () {
    hamburger.toggleClass("is-open");
    globalNav.toggleClass("is-show");
});

});
