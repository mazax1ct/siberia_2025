var scrollerSideOffset = 16;
var swiperInstances = {};
var swiperAjaxInstances = {};

if ($('body').width() >= 1200) {
    scrollerSideOffset = (window.innerWidth - 1170) / 2;
}

$('.js-scroller').each(function(index, element) {
    var $this = $(this);
    $this.addClass("js-instance-" + index);

    swiperInstances[index] = new Swiper(".js-instance-" + index, {
      loop: false,
      freeMode: true,
      grabCursor: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
      watchOverflow: true,
      resistanceRatio: 0,

      breakpoints: {
          1200: {
              spaceBetween: 20,
              slidesOffsetBefore: scrollerSideOffset
          }
      }
    });

    swiperInstances[index].on('resize', function () {
      if ($('body').width() >= 1200) {
          scrollerSideOffset = (window.innerWidth - 1170) / 2;
      }
      swiperInstances[index].params.slidesOffsetBefore = scrollerSideOffset;
      swiperInstances[index].update();
    });
});
