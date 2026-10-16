const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const content = document.querySelectorAll(".content");
const mediaElements = document.querySelectorAll("img, video");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    root: null,
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0,
  },
);

content.forEach((mediaElement) => {
  observer.observe(mediaElement);
});
