var map_scroll = function(e) {
  if($('body').width() < 1200) {
    let wW = $('body').width();
    let mapW = $('.map__inner').width();
    let scroll = mapW / 2 - wW + wW / 2;
    $('.map').scrollLeft(scroll);
  }
};

$(document).ready(function() {
  map_scroll();
});

$(window).on("resize", map_scroll);
