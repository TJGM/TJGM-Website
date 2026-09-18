document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero-container");
  const header = document.querySelector(".md-header");
  if (!hero) return;

  const desktopParallax = window.matchMedia("(min-width: 901px)");
  let parallaxRaf = 0;
  let headerRaf = 0;

  function applyParallax() {
    parallaxRaf = 0;
    if (!desktopParallax.matches) {
      hero.style.backgroundPosition = "center top";
      return;
    }
    hero.style.backgroundPosition = "center " + (window.pageYOffset * 0.5) + "px";
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
  desktopParallax.addEventListener("change", applyParallax);
  applyParallax();
  updateHeader();
});