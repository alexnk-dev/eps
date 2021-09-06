const menuBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav");
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
