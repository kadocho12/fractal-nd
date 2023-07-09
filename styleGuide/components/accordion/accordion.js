$('.js-accordion-trigger').click(function() {
  $(this).parent().next().slideToggle(); // 開閉処理
  $(this).toggleClass('-open'); // アイコンを変化させたりする場合は必要
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true');
  } else {
    $(this).attr('aria-expanded', 'false');
  }
});