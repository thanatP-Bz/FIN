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
  showcase.classList.add("reveal-showcase");
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

//obsever
/* observe idea*/
const revealIdea = document.querySelectorAll(".reveal-idea");

const revealBox = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("reveal-active");
    }
    observer.unobserve(entry.target);
  });
};

const ideaObserve = new IntersectionObserver(revealBox, {
  threshold: 0.1,
});

revealIdea.forEach((item) => {
  ideaObserve.observe(item);
});

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

// observe content
const about = document.querySelector(".about-us_container");
const textContainer = document.querySelector(".about-us_container");
const imageContainer = document.querySelector(".content-image");

const revealContent = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    textContainer.classList.add("about-us_active");
    imageContainer.classList.add("content-image_active");
  }
  observer.unobserve(entry.target);
};

const textObserve = new IntersectionObserver(revealContent, {
  threshold: 0.15,
});

/* textObserve.observe(about); */

//obsever Concept
const concept = document.querySelector(".concept");
const conceptContainer = document.querySelector(".text-concept_container");
const conceptImg1 = document.querySelector(".concept-image_image-1");

const revealConcept = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    conceptContainer.classList.add("text-concept_container-active");
    conceptImg1.classList.add("concept-image_1-active");
  }
  observer.unobserve(entry.target);
};

const observerConcept = new IntersectionObserver(revealConcept, {
  threshold: 0.4,
});

//observe projects
const projects = document.querySelector(".projects");
const projectContainer = document.querySelector(".project-grid__container");
const projectHeader = document.querySelector(".project-header");

const revealProjects = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    projectContainer.classList.add("project-active");
    projectHeader.classList.add("project-active");
  }
  observer.unobserve(entry.target);
};

const observeProjects = new IntersectionObserver(revealProjects, {
  threshold: 0.2,
});

//observe profile
const profile = document.querySelector(".profile");
const profileImg = document.querySelector(".proflie-image_container");
const profileContent = document.querySelector(".profile-text_container");

const revealProfile = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    profileImg.classList.add("profile-active");
    profileContent.classList.add("profile-active");
  }
  observer.unobserve(entry.target);
};

const observeProfile = new IntersectionObserver(revealProfile, {
  threshold: 0.4,
});

//oberve news
const newsBox = document.querySelectorAll(".news-box");
const newH1 = document.querySelector(".news-h1");

const revealNewsBox = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("news-box__active");
      newH1.classList.add("news-h1__active");
    }
  });
};

const observeNews = new IntersectionObserver(revealNewsBox, {
  threshold: 0,
});

newsBox.forEach((item) => {
  observeNews.observe(item);
});

//obseve btn
const newsBtn = document.querySelector(".btn-news");

const revealBtn = (entries) => {
  [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    newsBtn.classList.add("show-btn");
  }
};

const observeBtn = new IntersectionObserver(revealBtn, {
  threshold: 0.1,
});
