$('.js-hamburger-button').click(function() {
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true');
    $('.js-hamburger-menu').fadeIn();
    $('.js-hamburger-button').attr('aria-label', 'メニューを閉じる');
    $('.c-hamburger-menu__link')[0].focus();
  } else {
    $(this).attr('aria-expanded', 'false');
    $('.js-hamburger-menu').fadeOut();
    $('.js-hamburger-button').attr('aria-label', 'メニューを開く');
  }
});
$(document).on('click', function(e) {
  if ($('.js-hamburger-button').attr('aria-expanded') === 'true' && !$(e.target).closest('.js-hamburger-button').length) {
    if (!$(e.target).closest('.js-hamburger-menu').length) {
      $('.js-hamburger-button').attr('aria-expanded', 'false');
      $('.js-hamburger-menu').fadeOut();
      $('.js-hamburger-button').attr('aria-label', 'メニューを開く');
    }
  }
});
$(document).on('keydown', function(e){
  if (e.which === 27) {
    $('.js-hamburger-button').attr('aria-expanded', 'false');
    $('.js-hamburger-menu').fadeOut();
    $('.js-hamburger-button').attr('aria-label', 'メニューを開く');
  }
});
$('.js-hamburger-menu__focus-trap').on("focus", function(){
  $('.js-hamburger-button').focus();
});