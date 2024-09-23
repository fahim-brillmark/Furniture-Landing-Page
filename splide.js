document.addEventListener("DOMContentLoaded", function () {
  new Splide("#slider1", {
    type: "loop",
    perPage: 4,
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
  new Splide("#slider3", {
    type: "loop",
    perPage: 4,
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
  new Splide("#slider4", {
    type: "loop",
    perPage: 4,
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
  new Splide("#slider5", {
    type: "loop",
    perPage: 4,
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

  // Testimonials Slider

  new Splide("#slider2", {
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
