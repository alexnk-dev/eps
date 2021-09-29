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

let currentImage = 0;
console.log(currentImage);

function changeSlide(direction) {
  if (direction === "up") {
    currentImage++;
    if (currentImage === slidesCount) {
      currentImage = 0;
    }
  }
  if (direction === "down") {
    currentImage--;
    if (currentImage < 0) {
      currentImage = slidesCount - 1;
    }
  }
}

arrowLeft.addEventListener("click", () => {
  changeSlide("down");
  console.log(currentImage);
});

arrowRight.addEventListener("click", () => {
  changeSlide("up");
  console.log(currentImage);
});

for (var i = 0; i < slidesCount.length; i++) {
  slidesCount[i].addEventListener("mouseover", function () {
    if (activeImage.length > 0) {
      activeImage[0].classList.remove("item__image--active");
    }

    this.classList.add("item__image--active");
    document.querySelector(".item__image--main").src = this.src;
    // document.getElementById("featured").src = this.src;
  });
}
