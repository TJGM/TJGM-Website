document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero-container");
  const header = document.querySelector(".md-header");
  if (!hero) return;

  const bg = hero.querySelector(".hero-bg");
  let parallaxRaf = 0;
  let headerRaf = 0;

  function applyParallax() {
    parallaxRaf = 0;
    if (!bg) return;
    const y = window.pageYOffset;
    const factor = window.innerWidth <= 768 ? 0.2 : 0.45;
    bg.style.transform = "translate3d(0, " + (y * factor) + "px, 0)";
  }

  function updateHeader() {
    headerRaf = 0;
    if (!header) return;
    const scrollY = window.scrollY;
    if (window.innerWidth <= 768) {
      header.classList.toggle("transparent-over-hero", scrollY < 8);
    } else {
      header.classList.toggle("transparent-over-hero", scrollY < hero.offsetHeight * 0.5);
    }
  }

  function onScroll() {
    if (!parallaxRaf) parallaxRaf = requestAnimationFrame(applyParallax);
    if (!headerRaf) headerRaf = requestAnimationFrame(updateHeader);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  applyParallax();
  updateHeader();
});