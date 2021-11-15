const menuBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");
const more = document.querySelectorAll(".btn-more");
const cardContent = document.querySelectorAll(".card__content");
const itemBtn = document.querySelector(".item__btn");
// const contactsFull = document.querySelector(".contact-us--hidden");
// const header = document.querySelector("header");
// const main = document.querySelector("main");
// const footer = document.querySelector("footer");
// const copyright = document.querySelector(".copyright");
// const btnSend = document.querySelector(".btn__send");

const CLASS_LIST = {
  MODAL: "modal",
  MODAL_ACTIVE: "modal--active",
  MODAL_HAS_SCROLL: "modal--has-scroll",
  MODAL_DIALOG_BODY: "modal__dialog-body",
  TRIGGER_OPEN: "js-modal-open",
  TRIGGER_CLOSE: "js-modal-close",
};

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

const path = window.location.pathname;
let page = path.split("/").pop();
if (page.length < 2) {
  page = "index.html";
}

let formSend = async function formSend(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  const vals = Object.fromEntries(formData.entries());
  console.log(">>", vals);
  let response = await fetch("../../sendmail.php", {
    method: "POST",
    body: formData,
  });
  console.log(response);
  if (response.ok) {
    let result = await response.json();
    e.target.reset();
  } else {
    alert("Error");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  if (!form) return;
  form.addEventListener("submit", formSend);
});

document.addEventListener("DOMContentLoaded", function () {
  const form2 = document.getElementById("form-contacts");
  if (!form2) return;
  form2.addEventListener("submit", formSend);
});

// itemBtn?.addEventListener("click", () => {
//   contactsFull.classList.toggle("contact-us--hidden");
//   header.style.filter = "blur(20px)";
//   main.style.filter = "blur(20px)";
//   footer.style.filter = "blur(20px)";
//   copyright.style.filter = "blur(20px)";
// });

// btnSend?.addEventListener("click", () => {
//   contactsFull.classList.toggle("contact-us--hidden");
//   header.style.filter = "blur(0px)";
//   main.style.filter = "blur(0px)";
//   footer.style.filter = "blur(0px)";
//   copyright.style.filter = "blur(0px)";
// });

document.addEventListener("click", (event) => {
  //open
  if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
    console.log("open");
    event.preventDefault();
    //const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
    //console.log(event.target);
    //const modalId = target.getAttribute("href").replace("#", "");
    //console.log
    const modal = document.getElementById("modal1");

    document.body.style.paddingRight = `${getScrollBarWidth()}px`;
    document.body.style.overflow = "hidden";

    modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
  }
  // close
  if (
    event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
    event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
  ) {
    console.log("close");
    event.preventDefault();
    const modal = document.getElementById("modal1");
    modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    document.body.style.overflow = "";
  }
});

document.body.addEventListener("keyup", (event) => {
  if (event.key == "Escape") {
    event.preventDefault();
    const modal = document.getElementById("modal1");
    modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    document.body.style.overflow = "";
  }
});

const getScrollBarWidth = () => {
  const item = document.createElement("div");
  item.style.position = "absolute";
  item.style.top = "-9999px";
  item.style.width = "50px";
  item.style.height = "50px";
  item.style.overflow = "scroll";
  item.style.visibility = "hidden";

  document.body.appendChild(item);
  const scrollBarWidth = item.offsetWidth - item.clientWidth;
  document.body.removeChild(item);

  return scrollBarWidth;
};
