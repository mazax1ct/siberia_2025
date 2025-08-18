$(document).on('click', '.js-test-start', function () {
  $('.page').addClass('is-overflow');
  $('.test__popup-wrapper').addClass('is-open');

  return false;
});

$(document).on('click', '.js-test-close', function () {
  $('.test__popup-wrapper').removeClass('is-open');
  $('.page').removeClass('is-overflow');
  $('#test_form').trigger('reset');
  $('.test__step').removeClass('is-active');
  $('.test__step').first().addClass('is-active');
  $('.test__progress-section').removeClass('is-active');
  $('.test__progress-section').first().addClass('is-active');
  return false;
});

$(document).on('click', '.js-test-prev', function () {
  let currStep = $('.test__step.is-active');
  let prevStep = currStep.prev('.test__step');

  if(!prevStep.length) {
    $('.test__popup-wrapper').removeClass('is-open');
    $('.page').removeClass('is-overflow');
  }else{
    prevStep.addClass('is-active');
    currStep.removeClass('is-active');
  }

  if(currStep.hasClass('js-next-section')){
    $('.test__progress-section.is-active').last().removeClass('is-active')
  }

  return false;
});

$(document).on('click', '.js-test-next', function () {
  let currStep = $('.test__step.is-active');
  let nextStep = currStep.next('.test__step');

  if(nextStep.length){
    nextStep.addClass('is-active');
    currStep.removeClass('is-active');
  }

  if(nextStep.hasClass('js-next-section')){
    $('.test__progress-section.is-active').last().next().addClass('is-active')
  }

  return false;
});

$('.js-test-slider').ionRangeSlider({
   skin: 'round',
   min: 1,
   max: 5,
   from: 3,
   hide_min_max: true
});

$(document).on('click', '.js-test-finish', function () {
  $('.test__popup').append('<div class="test-loader"><p><img src="images/content/test/test-loader.svg" alt=""></p><p>Секунду, готовим ваш план</p></div>');

  $.ajax({
  	url: '/test-result.html',
  	method: 'get',
    cache: false,
  	dataType: 'html',
  	data: {result: '30'},
  	success: function(data) {
  		alert(data);
  	},
    error: function( req, status, err ) {
      console.log( 'что-то пошло не так', status, err );
    }
  }).done(function() {
    $('.test-loader').remove();
  });
  return false;
});
