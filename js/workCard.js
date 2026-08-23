const workCards = document.querySelectorAll(".workCard");
const worksGrid = document.querySelector(".worksGrid");
const workOpenArea = document.querySelector(".workOpenArea");
const backButton = workOpenArea.querySelector(".workBackButton");
const detail = workOpenArea.querySelector(".workDetail");

workCards.forEach((card) => {
  const button = card.querySelector(".workCardButton");

  // Coming Soonにはボタンがないのでスキップ
  if (!button) return;

  button.addEventListener("click", () => {
    // すでに開いている場合は何もしない
    if (card.classList.contains("is-open")) return;

    card.classList.add("is-open");
    worksGrid.classList.add("is-hidden");
    workOpenArea.classList.add("is-open");

    button.setAttribute("aria-expanded", "true");

    if (detail) {
      detail.setAttribute("aria-hidden", "false");
    }
  });
});

// BACK TO LIST
if (backButton) {
  backButton.addEventListener("click", () => {
    const openCard = worksGrid.querySelector(".workCard.is-open");

    if (openCard) {
      openCard.classList.remove("is-open");

      const button = openCard.querySelector(".workCardButton");

      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    }

    workOpenArea.classList.remove("is-open");

    if (detail) {
      detail.setAttribute("aria-hidden", "true");
    }

    worksGrid.classList.remove("is-hidden");
  });
}
