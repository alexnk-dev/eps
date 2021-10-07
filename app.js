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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  // console.log(form);
  // let fData = new FormData(form);
  // const vals = Object.fromEntries(fData.entries());
  // console.log(">>", vals);

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
    const vals = Object.fromEntries(formData.entries());
    console.log(">>", vals);
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });
    console.log(response);
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
    } else {
      alert("Error");
    }
  }
});
