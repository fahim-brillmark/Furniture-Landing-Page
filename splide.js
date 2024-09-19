document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1150: {
        perPage: 2,
      },
      800: {
        perPage: 1,
      },
    },
  }).mount();
});
