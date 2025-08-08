let scrollerMenuSideOffset = 40;
var scrollerMenu;

$(document).ready(function() {
    if ($('body').width() >= 1200) {
        scrollerMenuSideOffset = (window.innerWidth - 1170) / 2;
    }

    scrollerMenu = new Swiper('.js-scroller-menu', {
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
                //slidesOffsetAfter: scrollerMenuSideOffset,
                slidesOffsetBefore: scrollerMenuSideOffset
            }
        }
    });
});

$(window).on("resize", function() {
    if ($('body').width() >= 1200) {
        scrollerMenuSideOffset = (window.innerWidth - 1170) / 2;
        //scrollerMenu.params.slidesOffsetAfter = scrollerMenuSideOffset;
        scrollerMenu.params.slidesOffsetBefore = scrollerMenuSideOffset;
        setTimeout(function() {
            scrollerMenu.update();
        }, 100);
    }
});
