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
  const $pageBlur = document.querySelectorAll(".blur__bg");

  $openHeader.addEventListener("click", () => {
    $openHeader.style.display = "none";
    document.querySelector(".contact").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";

    for (let i = 0; i < $pageBlur.length; i++) {
      $pageBlur[i].style.filter = "blur(5px)";
    }
  });

  $openFooter.addEventListener("click", () => {
    $openHeader.style.display = "none";
    document.querySelector(".contact").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
    
    for (let i = 0; i < $pageBlur.length; i++) {
      $pageBlur[i].style.filter = "blur(5px)";
    }
  });

  $close.addEventListener("click", () => {
    $openHeader.style.display = "flex";
    document.querySelector(".contact").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    
    for (let i = 0; i < $pageBlur.length; i++) {
      $pageBlur[i].style.filter = "blur(0px)";
    }
  });
})();
