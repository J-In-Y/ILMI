//depth2
$(".gnb > li").mouseenter(function () {
    $("#header").addClass("active"), 500;
    $(this).find(".depth2").stop().fadeIn(500);
    $(".depth2_bg").stop().fadeIn();
});
$(".gnb > li").mouseleave(function () {
    $("#header").removeClass("active"), 500;
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
});

$(".mgnb_wrap").hide();
$(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
});
$(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
});

// mgnb depth2
$(".mgnb > li").click(function () {
    $(this).find(".mdepth2").stop().slideDown();
    $(this).siblings().find(".mdepth2").stop().slideUp();
});
