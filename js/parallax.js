document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero-container");
  const header = document.querySelector(".md-header");
  if (!hero) return;

  let parallaxRaf = 0;
  let headerRaf = 0;

  function applyParallax() {
    parallaxRaf = 0;
    const y = window.pageYOffset;
    const factor = window.innerWidth <= 768 ? 0.25 : 0.5;
    hero.style.backgroundPosition = "center " + (y * factor) + "px";
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