const menuBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");
const more = document.querySelectorAll(".btn-more");
const cardContent = document.querySelectorAll(".card__content");

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
