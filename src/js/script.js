
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// ハンバーガーメニュー
const button = $(".js-button");
const globalNav = $(".js-page-nav");
const buttonBody = $(".js-button__body");

button.on("click", function () {
    buttonBody.toggleClass("is-active");
    globalNav.toggleClass("is-show");
});

});
