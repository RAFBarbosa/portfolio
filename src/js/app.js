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

const $openHeader = document.querySelector(".header__contact");
const $openFooter = document.querySelector(".footer__contact");
const $close = document.querySelector(".contact__close");
const $pageBlur = document.querySelectorAll(".blur__bg");
const $body = document.querySelector("body");
const $contact = document.querySelector(".contact");
const $contactTitle = document.querySelector(".contact__title");
const $contactText = document.querySelector(".contact__text");

(function () {
  $openHeader.addEventListener("click", () => {
    setTimeout(openContact, 300);
  });

  $openFooter.addEventListener("click", () => {
    setTimeout(openContact, 300);
  });

  $close.addEventListener("click", () => {
    closeContact();
  });
})();

function openContact() {
  $openHeader.style.display = "none";
  // $contact.style.display = "flex";
  $body.style.overflow = "hidden";
  $contact.classList.toggle("active");
  setTimeout(function () {
    $contactTitle.classList.toggle("active");
  }, 600);
  setTimeout(function () {
    $contactText.classList.toggle("active");
  }, 800);

  for (let i = 0; i < $pageBlur.length; i++) {
    $pageBlur[i].style.filter = "blur(5px)";
  }
}

function closeContact() {
  // $openHeader.style.display = "flex";
  $contact.style.display = "none";
  $body.style.overflow = "auto";

  for (let i = 0; i < $pageBlur.length; i++) {
    $pageBlur[i].style.filter = "blur(0px)";
  }
}
