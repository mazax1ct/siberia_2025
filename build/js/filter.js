$(document).on('click', '.js-filter-opener', function (){
  $('.filter__form').slideToggle();
  return false;
});

$('.js-square-slider').ionRangeSlider({
   skin: 'flat',
   type: "double",
   min: 17,
   max: 74,
   from: 17
});

$('.js-guests-slider').ionRangeSlider({
   skin: 'flat',
   type: "double",
   min: 1,
   max: 4,
   from: 1
});
