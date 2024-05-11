// const SLIDER_BTN_RIGHT = document.querySelector(".slider__btn-right");
// const SLIDER_WRAPPER = document.querySelector(".slider__wrapper");

// SLIDER_BTN_RIGHT.addEventListener("click", function (e) {
//     SLIDER_WRAPPER.style.marginLeft = "1100px";
// });

var owl = $(".owl-carousel");

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 1100,
    startPosition: 1,
    smartSpeed: 800,
    items: 1,
});
// Go to the next item
$(".slider__btn-right").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".slider__btn-left").click(function () {
    owl.trigger("prev.owl.carousel");
});

console.log([1, 2, 3]);
