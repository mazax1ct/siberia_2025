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
    $('.header__dropdown.main-menu').addClass('is-open');
    _this.find('use').attr('xlink:href', 'images/sprite.svg#close_icon');
    _this.find('span').text('ЗАКРЫТЬ');
    _this.addClass('is-active');
  } else {
    _this.find('use').attr('xlink:href', 'images/sprite.svg#burger_icon');
    _this.find('span').text('МЕНЮ');
    _this.removeClass('is-active');
    $('body').removeClass('is-overflow');
    $('.header__dropdown.main-menu').removeClass('is-open');
  }

  return false;
});

//закрытие главного меню
$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('is-overflow');
  $('.header__dropdown.main-menu').removeClass('is-open');
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

//открытие поиска
$(document).on('click', '.js-search-opener', function () {
  const _this = $(this);
  if(!_this.hasClass('is-active')) {
    $('body').addClass('is-overflow');
    $('.header__dropdown.search-popup').addClass('is-open');
    _this.addClass('is-active');
  } else {
    _this.removeClass('is-active');
    $('body').removeClass('is-overflow');
    $('.header__dropdown.search-popup').removeClass('is-open');
  }

  return false;
});

//закрытие поиска
$(document).on('click', '.js-search-closer', function () {
  $('body').removeClass('is-overflow');
  $('.header__dropdown.search-popup').removeClass('is-open');
  $('.js-search-opener').removeClass('is-active');
  return false;
});

//варианты быстрого поиска
$(document).on('click', '.search-option', function() {
  let query = $(this).text();
  $('.search-form__input').val(query).focus();
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

//табы
$(document).on('click', '.js-tab-button', function () {
  $(this).closest('.tabs').find('.js-tab-button').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-tab='+$(this).attr('data-tab')+']').addClass('is-active');
  return false;
});

//копирование ссылки
$(document).on('click', '.js-copy', function() {
  const _this = $(this);
  _this.addClass('is-active');
  navigator.clipboard.writeText($(this).attr('data-text'));
  setTimeout(function() {
    _this.removeClass('is-active');
  }, 1000);
  return false;
});
