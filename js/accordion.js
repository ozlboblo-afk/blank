const mediaQuery = window.matchMedia("(max-width: 1024px)");
const accordions = document.querySelectorAll(".infoAccordion");

function updateAccordion() {
  if (mediaQuery.matches) {
    // 1024px以下：全部閉じる
    accordions.forEach((item) => {
      item.removeAttribute("open");
    });
  } else {
    // 1025px以上：全部開く
    accordions.forEach((item) => {
      item.setAttribute("open", "");
    });
  }
}

updateAccordion();

mediaQuery.addEventListener("change", updateAccordion);

// 1024px以下は1つだけ開く
accordions.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!mediaQuery.matches) return;

    if (item.open) {
      accordions.forEach((other) => {
        if (other !== item) {
          other.removeAttribute("open");
        }
      });
    }
  });
});
