$(document).ready(function() {
  $('#test_form')[0].reset();
});

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

$(document).on('change', 'label.js-test-next', function () {
  let currStep = $('.test__step.is-active');
  let nextStep = currStep.next('div');

  if(nextStep.length) {
    currStep.removeClass('is-active');
    nextStep.addClass('is-active');
  }

  if(nextStep.hasClass('js-next-section')){
    $('.test__progress-section.is-active').last().next().addClass('is-active')
  }
});

$(document).on('click', 'button.js-test-next', function () {
  let currStep = $('.test__step.is-active');
  let nextStep = currStep.next('div');

  if(nextStep.length) {
    currStep.removeClass('is-active');
    nextStep.addClass('is-active');
  }

  if(nextStep.hasClass('js-next-section')){
    $('.test__progress-section.is-active').last().next().addClass('is-active')
  }
});

$('.js-test-slider').ionRangeSlider({
   skin: 'round',
   min: 1,
   max: 5,
   from: 3,
   hide_min_max: true
});

$(document).on('click', '.js-pre-finish', function () {
  $('.js-test-finish').prop('disabled', false)
});

$(document).on('click', '.js-test-finish', function (e) {
  e.preventDefault();

  $('.test__popup').append('<div class="test-loader"><p><div class="loader"></div></p><p>Секунду, готовим ваш план</p></div>');

  let formElem = $("#test_form");
  let formData = new FormData(formElem[0]);

  console.log(formData);

  $.ajax({
  	url: 'test-result.html',
  	method: 'GET',
    cache: false,
  	dataType: 'html',
  	data: formData,
    processData: false,
    contentType: false,
  	success: function(data) {
      setTimeout(function() {
        $('.test-loader').remove();
        $('body').removeClass('is-overflow');
        $('#test_container').find('.test').remove();
        $('#test_container').append(data);
        $('.js-scroller-ajax').each(function(index, element) {
            var $this = $(this);
            $this.addClass("js-instance-ajax" + index);

            swiperAjaxInstances[index] = new Swiper(".js-instance-ajax" + index, {
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

            swiperAjaxInstances[index].on('resize', function () {
              if ($('body').width() >= 1200) {
                  scrollerSideOffset = (window.innerWidth - 1170) / 2;
              }
              swiperAjaxInstances[index].params.slidesOffsetBefore = scrollerSideOffset;
              swiperAjaxInstances[index].update();
            });
        });
      }, 1000);
  	},
    error: function( req, status, err ) {
      setTimeout(function() {
        console.log( 'что-то пошло не так', status, err );
      }, 1000);
    }
  });
});
