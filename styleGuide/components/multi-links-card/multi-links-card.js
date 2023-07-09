$('.js-accordion-trigger').click(function() {
  $(this).next().slideToggle(); // 開閉処理
  $(this).toggleClass('open'); // アイコンを変化させたりする場合は必要
  if ($(this).next().attr('aria-expanded') === 'false') {
    $(this).next().attr('aria-expanded', 'true');
  } else {
    $(this).next().attr('aria-expanded', 'false');
  }
});