$(document).on('click', '.js-procedure-show-all', function () {
  $(this).closest('.big-card__content').removeClass('is-collapsed');
  return false;
});
