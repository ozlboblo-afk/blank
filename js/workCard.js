const workButtons = document.querySelectorAll(".workCardButton");
const workPanelArea = document.querySelector(".workPanelArea");
const workPanels = document.querySelectorAll(".workPanel");
const backButtons = document.querySelectorAll(".workBackButton");
const workPanelOverlay = document.querySelector(".workPanelOverlay");

workPanelOverlay.addEventListener("click", closeWork);
function openWork(workName) {
  workPanelArea.classList.add("is-open");

  workPanels.forEach((panel) => {
    const isTarget = panel.dataset.workPanel === workName;

    panel.classList.toggle("is-open", isTarget);
  });

  document.body.classList.add("is-fixed");
}

function closeWork() {
  workPanelArea.classList.remove("is-open");

  workPanels.forEach((panel) => {
    panel.classList.remove("is-open");
  });

  document.body.classList.remove("is-fixed");
}

workButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const workCard = button.closest(".workCard");

    openWork(workCard.dataset.work);
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", closeWork);
});
