AOS.init({

});

const banner_list = new Swiper(".banner_list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {//자동슬라이드
        delay: 3000,  //밀리세컨 2.5초
        disableOnInteraction: false,
    },
    loop: true,
});

$(".pause").click(function () {
    banner_list.autoplay.stop();
    $(".pause").hide();
    $(".play").show();
});
$(".play").click(function () {
    banner_list.autoplay.start();
    $(".play").hide();
    $(".pause").show();
});

//best
const best_list = new Swiper(".best_list", {
    autoplay: {//자동슬라이드
        delay: 3000,  //밀리세컨 2.5초
        disableOnInteraction: false,
    },
    centeredSlides: true,
    loop: true,
    speed: 1500,
    slidesPerView: 1.5,
    spaceBetween: 20,

    breakpoints: {
        1400: { //min 이상부터 
            slidesPerView: 4,
            spaceBetween: 20,
        },
        900: { //min 이상부터 
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: { //min 이상부터 
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

//new 
$(".new_button button").eq(0).addClass("active");

$(".new_button button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".new_img a").eq(num).fadeIn().siblings().hide();
});