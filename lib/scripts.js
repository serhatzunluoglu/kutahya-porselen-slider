$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: false,
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 16,
      },
      600: {
        items: 3,
        margin: 16,
      },
      1020: {
        items: 4,
      },
    },
  });
  $(".owl-prev span, .owl-next span").empty();
});
