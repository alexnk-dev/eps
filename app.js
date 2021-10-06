const menuBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");
const more = document.querySelectorAll(".btn-more");
const cardContent = document.querySelectorAll(".card__content");
const arrowLeft = document.querySelector(".item__arrow--left");
const arrowRight = document.querySelector(".item__arrow--right");
const slidesCount = document.getElementsByClassName("item__image");
const activeImage = document.getElementsByClassName("item__image--active");
console.log(activeImage);

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.classList.add("nav--active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.classList.remove("nav--active");
    menuOpen = false;
  }
});

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", () => {
    more[i].classList.toggle("btn-more--active");
    console.log(more[i].previousSibling.previousSibling);
    more[i].previousSibling.previousSibling.classList.toggle("card__content");
    more[i].previousSibling.previousSibling.classList.toggle(
      "card__content--active"
    );
  });
}

const galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  loopedSlides: 4,
});
const galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: "auto",
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
