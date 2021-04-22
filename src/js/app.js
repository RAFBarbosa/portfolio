// (function() {
//   const $btn = document.querySelector('.header__btn');
//   const $nav = document.querySelector('.header__nav');

//   $btn.addEventListener('click', () => {
//     $btn.classList.toggle('active');
//     $nav.classList.toggle('active');
//   });
// })()

const checkpointArrow = 800;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  let opacity = 1;

  if (currentScroll <= checkpointArrow) {
    opacity = 1 - currentScroll / checkpointArrow;
  } else {
    opacity = 0;
  }
  document.querySelector(".arrow__wrapper").style.opacity = opacity;
});

(function () {
  const $open = document.querySelector(".contact__btn");
  const $close = document.querySelector(".contact__close");

  $open.addEventListener("click", () => {
    document.getElementById("contact__form").style.display = "flex";
  });

  $close.addEventListener("click", () => {
    document.getElementById("contact__form").style.display = "none";
  });
})();
