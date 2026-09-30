/* =========================
   Work Panel
========================= */

/* =========================
   Work Data
========================= */

const works = {
  sen: {
    number: "01",
    title: "SEN HAIR SALON",
    color: "var(--project-01)",
    category: "Hair Salon Website",

    meta: {
      role: "Design / Coding",
      tools: "Figma / VS Code",
      year: "2026",
    },

    slides: [
      {
        image: "assets/img/sen/sen01.webp",
        alt: "SEN HAIR SALON ファーストビュー",
        text: "余白と写真で、サロンの空気感を表現。",
      },
      {
        image: "assets/img/sen/sen02.webp",
        alt: "SEN HAIR SALON SERVICEセクション",
        text: "落ち着いた世界観の中で、情報を整理。",
      },
      {
        image: "assets/img/sen/sen03.webp",
        alt: "SEN HAIR SALON STYLEページ",
        text: "写真を主役に、ヘアスタイルを見やすく配置。",
      },
      {
        image: "assets/img/sen/sen04.webp",
        alt: "SEN HAIR SALON ACCESSページ",
        text: "必要な情報をまとめ、迷わない導線に。",
      },
      {
        image: "assets/img/sen/sen05.webp",
        alt: "SEN HAIR SALON APPOINTMENTセクション",
        text: "最後まで世界観を保ち、予約へ自然につなげる。",
      },
    ],

    url: "https://sen-hair-salon.vercel.app/",
  },

  dogSalon: {
    number: "02",
    title: "DOG SALON",
    color: "var(--project-02)",
    category: "Dog Salon Landing Page",

    meta: {
      role: "Design / Coding",
      tools: "Figma / VS Code",
      year: "2026",
    },

    slides: [
      {
        image: "assets/img/dogsalon/dogsalon01.webp",
        alt: "DOG SALON ファーストビュー",
        text: "やさしい写真と余白で、親しみやすさを表現。",
      },
      {
        image: "assets/img/dogsalon/dogsalon02.webp",
        alt: "DOG SALON ご来店・施術セクション",
        text: "写真と情報を組み合わせ、安心感を伝える。",
      },
      {
        image: "assets/img/dogsalon/dogsalon03.webp",
        alt: "DOG SALON SERVICE / PRICEセクション",
        text: "必要な情報を整理し、直感的に選べる構成に。",
      },
      {
        image: "assets/img/dogsalon/dogsalon04.webp",
        alt: "DOG SALON VOICEセクション",
        text: "お客様の声を、写真とともに見やすく紹介。",
      },
      {
        image: "assets/img/dogsalon/dogsalon05.webp",
        alt: "DOG SALON ACCESS / CONTACTセクション",
        text: "店舗情報から問い合わせまで、自然につなげる。",
      },
    ],

    url: "https://dog-salon-lp.vercel.app/",
  },

  form: {
    number: "03",
    title: "FORM / FURNITURE",
    color: "var(--project-03)",
    category: "Furniture Website",

    meta: {
      role: "Design / Coding",
      tools: "Figma / VS Code",
      year: "2026",
    },

    slides: [
      {
        image: "assets/img/form/form01.webp",
        alt: "FORM / FURNITURE ファーストビュー",
        text: "余白を活かし、家具の存在感を引き立てる。",
      },
      {
        image: "assets/img/form/form02.webp",
        alt: "FORM / FURNITURE PRODUCT CATEGORYセクション",
        text: "カテゴリを視覚的に整理し、回遊しやすく。",
      },
      {
        image: "assets/img/form/form03.webp",
        alt: "FORM / FURNITURE PRODUCTページ",
        text: "商品を整然と並べ、選びやすい一覧に。",
      },
      {
        image: "assets/img/form/form04.webp",
        alt: "FORM / FURNITURE PRODUCT DETAIL",
        text: "商品を大きく見せ、詳細情報をスマートに整理。",
      },
      {
        image: "assets/img/form/form05.webp",
        alt: "FORM / FURNITURE MATERIAL / MATERIALセクション",
        text: "素材の質感を活かし、ブランドの世界観を表現。",
      },
      {
        image: "assets/img/form/form06.webp",
        alt: "FORM / FURNITURE MATERIAL / ABOUTセクション",
        text: "素材と余白で、ブランドの背景を丁寧に伝える。",
      },
    ],

    url: "https://form-furniture-ivory.vercel.app/",
  },
};

/* =========================
   Elements
========================= */

const workCards = document.querySelectorAll(".workCardButton");

const workPanelArea = document.querySelector(".workPanelArea");
const workPanel = document.querySelector(".workPanel");
const workPanelOverlay = document.querySelector(".workPanelOverlay");
const workPanelClose = document.querySelector(".workPanelClose");

const workPanelNumber = document.querySelector(".workPanelNumber");

const workPanelTitle = document.querySelector("#workPanelTitle");
const workDetailCategory = document.querySelector(".workDetailCategory");

const workSliderTrack = document.querySelector(".workSliderTrack");
const workSliderThumbs = document.querySelector(".workSliderThumbs");
const workSliderPrev = document.querySelector(".workSliderPrev");
const workSliderNext = document.querySelector(".workSliderNext");

const workSliderCurrent = document.querySelector(".workSliderCurrent");
const workSliderTotal = document.querySelector(".workSliderTotal");

const infoAccordions = document.querySelectorAll(".infoAccordion");

const workDetailLink = document.querySelector(".workDetailLink");

const metaElements = {
  role: document.querySelector('[data-meta="role"]'),
  tools: document.querySelector('[data-meta="tools"]'),
  year: document.querySelector('[data-meta="year"]'),
};

/* =========================
   State
========================= */

let currentWork = null;
let currentSlide = 0;
let lastTrigger = null;

/* =========================
   Render Work
========================= */

const renderWork = (work) => {
  currentWork = work;
  currentSlide = 0;

  /* Header */
  workPanelNumber.textContent = work.number;
  workPanelNumber.style.setProperty("--project-color", work.color);

  /* Detail */
  workPanelTitle.textContent = work.title;
  workDetailCategory.textContent = work.category;

  metaElements.role.textContent = work.meta.role;
  metaElements.tools.textContent = work.meta.tools;
  metaElements.year.textContent = work.meta.year;

  /* Link */
  workDetailLink.href = work.url;

  workSliderTrack.innerHTML = "";
  workSliderThumbs.innerHTML = "";

  work.slides.forEach((slide, index) => {
    /* Main Slide */
    const figure = document.createElement("figure");

    figure.className = "workSlide";
    figure.setAttribute("aria-hidden", index === 0 ? "false" : "true");

    figure.innerHTML = `
    <div class="workSlideVisual visual">
      <img
        src="${slide.image}"
        alt="${slide.alt}"
      />
    </div>

    <figcaption class="workSlideCaption">
      ${slide.text}
    </figcaption>
  `;

    workSliderTrack.appendChild(figure);

    /* Thumbnail */
    const thumbnail = document.createElement("button");

    thumbnail.className = "workSliderThumb visual";
    thumbnail.type = "button";
    thumbnail.setAttribute("role", "tab");
    thumbnail.setAttribute("aria-label", `${index + 1}枚目を表示`);
    thumbnail.setAttribute("aria-selected", index === 0 ? "true" : "false");
    thumbnail.setAttribute("tabindex", index === 0 ? "0" : "-1");

    thumbnail.innerHTML = `
    <img
      src="${slide.image}"
      alt=""
    />
  `;

    thumbnail.addEventListener("click", () => {
      currentSlide = index;
      updateSlide();
    });

    workSliderThumbs.appendChild(thumbnail);
  });

  workSliderTotal.textContent = String(work.slides.length).padStart(2, "0");

  updateSlide();
};

/* =========================
   Slider
========================= */

const updateSlide = () => {
  const slides = workSliderTrack.querySelectorAll(".workSlide");
  const thumbs = workSliderThumbs.querySelectorAll(".workSliderThumb");

  if (!slides.length) return;

  /* メイン画像 */
  workSliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  /* ARIA */
  slides.forEach((slide, index) => {
    slide.setAttribute(
      "aria-hidden",
      index === currentSlide ? "false" : "true",
    );
  });

  /* カウンター */
  workSliderCurrent.textContent = String(currentSlide + 1).padStart(2, "0");

  /* サムネイル */
  thumbs.forEach((thumb, index) => {
    const isActive = index === currentSlide;

    thumb.classList.toggle("is-active", isActive);

    thumb.setAttribute("aria-selected", isActive ? "true" : "false");

    thumb.setAttribute("tabindex", isActive ? "0" : "-1");
  });

  /* 現在のサムネイルを表示位置まで移動 */
  thumbs[currentSlide]?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest",
  });
};

const nextSlide = () => {
  if (!currentWork) return;

  currentSlide = (currentSlide + 1) % currentWork.slides.length;

  updateSlide();
};

const prevSlide = () => {
  if (!currentWork) return;

  currentSlide =
    (currentSlide - 1 + currentWork.slides.length) % currentWork.slides.length;

  updateSlide();
};

/* =========================
   Open
========================= */

const openWorkPanel = (workName, trigger) => {
  const work = works[workName];

  if (!work) return;

  lastTrigger = trigger;

  renderWork(work);

  workPanelArea.classList.add("is-open");
  workPanel.classList.add("is-active");

  workPanelArea.setAttribute("aria-hidden", "false");

  document.body.classList.add("is-panel-open");

  /*
    Allow the browser to finish the opening state
    before moving focus.
  */
  requestAnimationFrame(() => {
    workPanelClose.focus();
  });
};

/* =========================
   Close
========================= */

const closeWorkPanel = () => {
  workPanelArea.classList.remove("is-open");
  workPanel.classList.remove("is-active");

  workPanelArea.setAttribute("aria-hidden", "true");

  document.body.classList.remove("is-panel-open");

  if (lastTrigger) {
    lastTrigger.focus();
    lastTrigger = null;
  }
};

/* =========================
   Work Card
========================= */

workCards.forEach((card) => {
  const workCard = card.closest(".workCard");

  if (!workCard) return;

  const workName = workCard.dataset.work;
  const work = works[workName];

  if (!work) return;

  const workNumber = workCard.querySelector(".workNumber");

  if (workNumber) {
    workNumber.style.setProperty("--project-color", work.color);
  }

  card.addEventListener("click", () => {
    openWorkPanel(workName, card);
  });
});

/* =========================
   Close Button
========================= */

workPanelClose.addEventListener("click", closeWorkPanel);

/* =========================
   Overlay
========================= */

workPanelOverlay.addEventListener("click", closeWorkPanel);

/* =========================
   Slider Controls
========================= */

workSliderNext.addEventListener("click", nextSlide);

workSliderPrev.addEventListener("click", prevSlide);

/* =========================
   Keyboard
========================= */

document.addEventListener("keydown", (event) => {
  if (!workPanelArea.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeWorkPanel();
  }

  if (event.key === "ArrowRight") {
    nextSlide();
  }

  if (event.key === "ArrowLeft") {
    prevSlide();
  }
});

/* =========================
   Focus Trap
========================= */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;

  if (!workPanelArea.classList.contains("is-open")) return;

  const focusableElements = workPanel.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );

  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

/* =========================
   Info Accordion
========================= */

const updateInfoAccordion = () => {
  const isTablet = window.matchMedia("(min-width: 768px)").matches;

  infoAccordions.forEach((accordion) => {
    if (isTablet) {
      accordion.open = true;
    } else {
      accordion.open = false;
    }
  });
};

updateInfoAccordion();

window.addEventListener("resize", updateInfoAccordion);
