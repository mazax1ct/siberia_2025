//отслеживание скролла для шапки
var header = $('.header'),
    toTop = $('.js-to-top'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > $('.header').height() * 2) {
		header.addClass('is-scrolled');
	}

  if (scrolled == 0) {
		header.removeClass('is-scrolled');
	}

  if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('is-out');
	} else {
		header.removeClass('is-out');
	}

	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);


//открытие главного меню
$(document).on('click', '.js-menu-opener', function () {
  const _this = $(this);
  if(!_this.hasClass('is-active')) {
    $('body').addClass('is-overflow');
    $('.header__dropdown').addClass('is-open');
    _this.find('use').attr('xlink:href', 'images/sprite.svg#close_icon');
    _this.find('span').text('ЗАКРЫТЬ');
    _this.addClass('is-active');
  } else {
    _this.find('use').attr('xlink:href', 'images/sprite.svg#burger_icon');
    _this.find('span').text('МЕНЮ');
    _this.removeClass('is-active');
    $('body').removeClass('is-overflow');
    $('.header__dropdown').removeClass('is-open');
  }

  return false;
});

//закрытие главного меню
$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('is-overflow');
  $('.header__dropdown').removeClass('is-open');
  $('.js-menu-opener').find('use').attr('xlink:href', 'images/sprite.svg#burger_icon');
  $('.js-menu-opener').find('span').text('МЕНЮ');
  $('.js-menu-opener').removeClass('is-active');
  return false;
});

//второй уровень меню
$(document).on('click', '.js-menu-lvl2', function () {
  if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $('.main-menu__dropdown').removeClass('is-open');
    $('.main-menu__inner').removeClass('is-overflow');
  } else {
    $('.js-menu-lvl2').removeClass('is-active');
    $('.main-menu__dropdown').removeClass('is-open');
    $(this).addClass('is-active');
    $('.main-menu__inner').addClass('is-overflow');
    $(this).next('.main-menu__dropdown').addClass('is-open');
  }
  return false;
});

$(document).on('click', '.js-menu-lvl2-close', function () {
  $('.js-menu-lvl2').removeClass('is-active');
  $('.main-menu__inner').removeClass('is-overflow');
  $('.main-menu__dropdown').removeClass('is-open');
  return false;
});

//аккордион
$(document).on('click', '.js-accordion-toggler', function () {
  let _this = $(this);
  if(!_this.hasClass('is-active')){
    _this.closest('.accordion').find('.accordion__body').slideDown();
    _this.addClass('is-active');
  }else{
    _this.closest('.accordion').find('.accordion__body').slideUp();
    _this.removeClass('is-active');
  }
  return false;
});
