const mainLinks = document.querySelectorAll(".main-link");
const mainLinks_a = document.querySelectorAll(".main-link a");
const containerNavbar = document.querySelectorAll(".container-navbar");
let active;
mainLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    mainLinks.forEach((el) => {
      el.classList.remove("active");
    });

    el.classList.add("active");
    active = el;
  });
});
let url = window.location.pathname;

mainLinks_a.forEach((el) => {
  if (url.slice(1) == el.getAttribute("href")) {
    active = el;
  }
});
console.log(active);
mainLinks.forEach((el) => {
  el.classList.remove("active");
});
active.closest("li").classList.add("active");
// ---------------------------------------------------
