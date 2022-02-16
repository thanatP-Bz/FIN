const toggleButton = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".side-bar");
const showcase = document.querySelector(".showcase");
const logo = document.querySelector(".logo");
const navlinks = document.querySelector(".nav-links");
const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");
const themeBtn = document.querySelector(".theme-btn");

//header effect
window.addEventListener("DOMContentLoaded", () => {
  logo.classList.add("reveal-logo");
  navlinks.classList.add("reveal-nav");
});

toggleButton.addEventListener("click", () => {
  //toggle sidebar
  sidebar.classList.toggle("show-side_bar");
  showcase.classList.toggle("showcase-hidden");

  //hidden scroll bar and show bottom link
  if (sidebar.classList.contains("show-side_bar")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  //add and remove icons
  if (!icon1.classList.contains("hidden")) {
    icon1.classList.add("hidden");
    icon2.classList.remove("hidden");
  } else {
    icon1.classList.remove("hidden");
    icon2.classList.add("hidden");
  }
});

//set back default icons
const reset = () => {
  const viewWidthUpdate = window.innerWidth;

  if (viewWidthUpdate > 800) {
    showcase.classList.remove("showcase-hidden");
    sidebar.classList.remove("show-side_bar");
    icon1.classList.remove("hidden");
    icon2.classList.add("hidden");
    document.body.style.overflow = "visible";
  }
};
window.onresize = reset;

//obsverve top-link
const header = document.getElementById("header");
const topLink = document.querySelector(".top-link");

const revealTopLInk = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) topLink.classList.add("top-link_active");
  else topLink.classList.remove("top-link_active");
};

const topLInkObserve = new IntersectionObserver(revealTopLInk, {
  threshold: 0,
  rootMargin: `-300px 0px 0px 0px`,
});

topLInkObserve.observe(header);

/* about observer */
const contentHistory = document.querySelector(".history-text__container");
const contentHistoryImg = document.querySelector(".history-img__container");

const revealHistory = (entries) => {
  [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    contentHistoryImg.classList.add("show-content_img");
    contentHistory.classList.add("show-content");
  }
};

const observeHistory = new IntersectionObserver(revealHistory, {
  threshold: 0.1,
  rootMargin: "0px 0px -200px 0px",
});

observeHistory.observe(contentHistoryImg, contentHistory);

//observe lastest
const contentLastest = document.querySelectorAll(
  ".about-lastest__text--container"
);
const lastestHeader = document.querySelector(".about-lastest__h1");

const revealLastest = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add("show-lastest");
      lastestHeader.classList.add("show-lastest");
    }
  });
};

const observeLatest = new IntersectionObserver(revealLastest, {
  threshold: 0.1,
});

contentLastest.forEach((item) => {
  observeLatest.observe(item);
});

const contentImg = document.querySelectorAll(".about-lastest-img__container");

const revealLastestImg = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add("show-lastest__img");
    }
  });
};

const observeLatestImg = new IntersectionObserver(revealLastestImg, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
});

contentImg.forEach((item) => {
  observeLatestImg.observe(item);
});
