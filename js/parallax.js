// Parallax scrolling effect for hero section
document.addEventListener("DOMContentLoaded", function() {
  const hero = document.querySelector(".hero-container");

  if (!hero) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    // Move the background slightly slower than scroll
    hero.style.backgroundPosition = `center ${scrollTop * 0.5}px`;
  });
});

// Header transparency based on scroll position
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".md-header");
    const hero = document.querySelector(".hero-container");

    if (!hero) return; // exit if no hero on this page

    const mobileBreakpoint = 768; // px

    function updateHeader() {
        const scrollY = window.scrollY;
        const isMobile = window.innerWidth <= mobileBreakpoint;
        const heroHeight = hero.offsetHeight;
        const fadePoint = heroHeight * 0.50; // 75% of hero height

        if (isMobile) {
            // mobile: transparent only at top
            header.classList.toggle("transparent-over-hero", scrollY === 0);
        } else {
            // desktop: transparent until 75% of hero scrolled
            header.classList.toggle("transparent-over-hero", scrollY < fadePoint);
        }
    }

    window.addEventListener("scroll", updateHeader);
    window.addEventListener("resize", updateHeader);
    updateHeader(); // initialize on load
});
