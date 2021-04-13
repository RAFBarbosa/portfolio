(function() {
  const $btn = document.querySelector('.header__btn');
  const $nav = document.querySelector('.header__nav');

  $btn.addEventListener('click', () => {
    $btn.classList.toggle('active');
    $nav.classList.toggle('active');
  });
})()