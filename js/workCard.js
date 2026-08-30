const workCards = document.querySelectorAll(".workCard");
const worksGrid = document.querySelector(".worksGrid");
const workOpenArea = document.querySelector(".workOpenArea");
const workPanels = document.querySelectorAll(".workOpenPanel");

workCards.forEach((card) => {
  const button = card.querySelector(".workCardButton");

  // Coming Soonにはボタンがないのでスキップ
  if (!button) return;

  button.addEventListener("click", () => {
    // すでに開いている場合は何もしない
    if (card.classList.contains("is-open")) return;

    const workName = card.dataset.work;

    const targetPanel = document.querySelector(
      `[data-work-panel="${workName}"]`,
    );

    if (!targetPanel) return;

    // 他のカード・パネルをリセット
    workCards.forEach((item) => {
      item.classList.remove("is-open");

      const itemButton = item.querySelector(".workCardButton");

      if (itemButton) {
        itemButton.setAttribute("aria-expanded", "false");
      }
    });

    workPanels.forEach((panel) => {
      panel.classList.remove("is-open");

      const detail = panel.querySelector(".workDetail");

      if (detail) {
        detail.setAttribute("aria-hidden", "true");
      }
    });

    // 選択したカード
    card.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");

    // 選択したパネル
    targetPanel.classList.add("is-open");

    const detail = targetPanel.querySelector(".workDetail");

    if (detail) {
      detail.setAttribute("aria-hidden", "false");
    }

    worksGrid.classList.add("is-hidden");
    workOpenArea.classList.add("is-open");
  });
});

// BACK TO LIST
workPanels.forEach((panel) => {
  const backButton = panel.querySelector(".workBackButton");

  if (!backButton) return;

  backButton.addEventListener("click", () => {
    // 開いているカードを取得
    const openCard = worksGrid.querySelector(".workCard.is-open");

    if (openCard) {
      openCard.classList.remove("is-open");

      const button = openCard.querySelector(".workCardButton");

      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    }

    // 開いているパネルを閉じる
    panel.classList.remove("is-open");

    const detail = panel.querySelector(".workDetail");

    if (detail) {
      detail.setAttribute("aria-hidden", "true");
    }

    worksGrid.classList.remove("is-hidden");
    workOpenArea.classList.remove("is-open");
  });
});
