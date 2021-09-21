import Request from "./projects.js";

const checkpointArrow = 800;

const $openHeader = document.querySelector(".header__contact");
const $openFooter = document.querySelector(".footer__contact");
const $contactClose = document.querySelector(".contact__close");
const $pageBlur = document.querySelectorAll(".blur__bg");
const $body = document.querySelector("body");
const $contact = document.querySelector(".contact");
const $contactTitle = document.querySelector(".title");
const $contactText = document.querySelector(".contact__text");
const $contactForm = document.querySelector(".form__wrapper");

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
  $openHeader.addEventListener("click", () => {
    setTimeout(openContact, 300);
  });

  $openFooter.addEventListener("click", () => {
    setTimeout(openContact, 300);
  });

  $contactClose.addEventListener("click", () => {
    closeContact();
  });
})();

function openContact() {
  $openHeader.style.display = "none";
  $body.style.overflow = "hidden";
  $contact.classList.toggle("active");
  setTimeout(function () {
    $contactClose.classList.toggle("active");
    $contactTitle.classList.toggle("active");
    $contactText.classList.toggle("active");
    $contactForm.classList.toggle("active");
  }, 600);

  for (let i = 0; i < $pageBlur.length; i++) {
    $pageBlur[i].style.filter = "blur(5px)";
  }
}

function closeContact() {
  $openHeader.style.display = "flex";
  $body.style.overflow = "auto";

  $contact.classList.toggle("active");
  $contactClose.classList.toggle("active");
  $contactTitle.classList.toggle("active");
  $contactText.classList.toggle("active");
  $contactForm.classList.toggle("active");

  for (let i = 0; i < $pageBlur.length; i++) {
    $pageBlur[i].style.filter = "blur(0px)";
  }
}

Request();
