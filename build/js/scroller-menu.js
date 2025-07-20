let scrollerSideOffset = 40;
var scroller;

$(document).ready(function() {
    if ($('body').width() >= 1200) {
        scrollerSideOffset = (window.innerWidth - 1170) / 2;
    }

    scroller = new Swiper('.js-scroller', {
        loop: false,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
        slidesOffsetAfter: 16,
        slidesOffsetBefore: 16,
        watchOverflow: true,
        resistanceRatio: 0,

        breakpoints: {
            1200: {
                slidesOffsetAfter: scrollerSideOffset,
                slidesOffsetBefore: scrollerSideOffset
            }
        }
    });
});

$(window).on("resize", function() {
    if ($('body').width() >= 1200) {
        scrollerSideOffset = (window.innerWidth - 1170) / 2;
        scroller.params.slidesOffsetAfter = scrollerSideOffset;
        scroller.params.slidesOffsetBefore = scrollerSideOffset;
        setTimeout(function() {
            scroller.update();
        }, 100);
    }
});
