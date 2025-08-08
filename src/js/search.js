$(document).on('keyup', '.js-input', function () {
  if($(this).val() !== '') {
    $(this).closest('form').find('.js-input-clear').addClass('is-active');
  } else {
    $(this).closest('form').find('.js-input-clear').removeClass('is-active');
  }
});

$(document).on('click', '.js-input-clear', function () {
  $(this).closest('form').find('.js-input').val('');
  $(this).removeClass('is-active');
  $(this).closest('form').find('.js-input').focus();
  return false;
});
