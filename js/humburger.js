const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".headerNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  headerNav.classList.toggle("is-open");
});
