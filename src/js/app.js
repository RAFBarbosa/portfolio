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
  const $openHeader = document.querySelector(".contact__btn");
  const $openFooter = document.querySelector(".footer__contact");
  const $close = document.querySelector(".contact__close");

  $openHeader.addEventListener("click", () => {
    document.getElementById("contact__form").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
  });

  $openFooter.addEventListener("click", () => {
    document.getElementById("contact__form").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
  });

  $close.addEventListener("click", () => {
    document.getElementById("contact__form").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  });
})();
