$(document).on('click', '.js-filter-opener', function () {
  if($('body').width() < 1024){
    $('body').addClass('is-overflow');
    $('.filter__form').show();
  } else {
    $('.filter__form').slideToggle();
  }

  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('body').removeClass('is-overflow');
  $('.filter__form').hide();
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
