export {};

const swiper = new Swiper('.stock__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  navigation: {
    nextEl: '.stock__slider-btn_next',
    prevEl: '.stock__slider-btn_prev',
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  },
});
