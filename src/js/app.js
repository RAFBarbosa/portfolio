// (function() {
//   const $btn = document.querySelector('.header__btn');
//   const $nav = document.querySelector('.header__nav');

//   $btn.addEventListener('click', () => {
//     $btn.classList.toggle('active');
//     $nav.classList.toggle('active');
//   });
// })()

const checkpoint = 400;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  var opacity = 1;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".arrow__wrapper").style.opacity = opacity;
});
