const drawerButton = document.querySelector(".drawerButton");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".drawerOverlay");

drawerButton.addEventListener("click", () => {
  drawerButton.classList.toggle("is-open");
  sidebar.classList.toggle("is-open");
  overlay.classList.toggle("is-open");
});

overlay.addEventListener("click", () => {
  drawerButton.classList.remove("is-open");
  sidebar.classList.remove("is-open");
  overlay.classList.remove("is-open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    drawerButton.classList.remove("is-open");
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
  }
});
document.querySelectorAll(".globalNav a").forEach((link) => {
  link.addEventListener("click", () => {
    drawerButton.classList.remove("is-open");
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
  });
});
