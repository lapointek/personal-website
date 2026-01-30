const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});

document.querySelectorAll(".content").forEach((div) => {
  const video = div.querySelector("video");
  const link = div.dataset.link;

  div.addEventListener("click", (e) => {
    if (video.paused) {
      video.play;
    } else {
      window.open(link, "_blank");
    }
  });
});
