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
