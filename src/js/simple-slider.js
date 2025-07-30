function addZero(num) {
  return (num > 9) ? num : '0' + num;
}

$(document).ready(function() {
  $('.js-simple-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 16,
      slidesPerView: 1,
      resistanceRatio: 0,

      pagination: {
        el: '.js-simple-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        type: "fraction",
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero
      },

      navigation: {
        nextEl: '.js-simple-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-simple-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});
