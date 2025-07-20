$(document).on('click', '.js-procedure-show-all', function () {
  $(this).closest('.procedure-card__content').removeClass('is-collapsed');
  return false;
});
