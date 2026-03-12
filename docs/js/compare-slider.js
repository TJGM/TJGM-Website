document.addEventListener("DOMContentLoaded", () => {

  // -------------------
  // Dynamic vh for mobile
  // -------------------
  const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  };
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', setVh);

  // -------------------
  // Fullscreen logic (shared)
  // -------------------
  function setupFullscreen(container, btn) {
    let overlay = null, placeholder = null;
    const preventScroll = e => e.preventDefault();

    function enter() {
      overlay = document.createElement("div");
      overlay.className = "compare-overlay";

      placeholder = document.createElement("div");
      container.parentNode.insertBefore(placeholder, container);

      overlay.appendChild(container);
      document.body.appendChild(overlay);

      container.classList.add("is-fullscreen");
      btn.textContent = "✖";

      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("wheel", preventScroll, { passive: false });
      window.dispatchEvent(new Event('resize'));
    }

    function exit() {
      if (!overlay) return;
      placeholder.parentNode.insertBefore(container, placeholder);
      placeholder.remove();
      overlay.remove();

      container.classList.remove("is-fullscreen");
      btn.textContent = "⛶";

      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);

      overlay = null;
      placeholder = null;
      window.dispatchEvent(new Event('resize'));
    }

    btn.addEventListener("click", e => { e.stopPropagation(); overlay ? exit() : enter(); });
    document.addEventListener("click", e => { if (overlay && e.target === overlay) exit(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") exit(); });
  }

  // =========================
  // 1. Comparison sliders
  // =========================
  document.querySelectorAll('.compare-container').forEach(container => {
    const topImage = container.querySelector('.compare-top');
    if (!topImage) return;

    const slider = container.querySelector('.compare-slider');
    const line = container.querySelector('.compare-line');
    const beforeCaption = container.querySelector('.compare-caption.before');
    const afterCaption = container.querySelector('.compare-caption.after');

    container.style.cursor = 'ew-resize';

    let dragging = false, wasDragging = false, sliderPercent = 50;

    const setClip = offsetX => {
      const rect = container.getBoundingClientRect();
      offsetX = Math.max(0, Math.min(offsetX - rect.left, rect.width));
      sliderPercent = (offsetX / rect.width) * 100;
      updateVisuals();
    };

    const updateVisuals = () => {
      const rect = container.getBoundingClientRect();
      topImage.style.clipPath = `inset(0 0 0 ${sliderPercent}%)`;
      slider.style.left = line.style.left = sliderPercent + '%';
      slider.style.top = rect.height / 2 + 'px';
      line.style.height = rect.height + 'px';

      const fadeZone = 20;
      if (beforeCaption) beforeCaption.style.opacity = Math.min(1, sliderPercent / fadeZone);
      if (afterCaption) afterCaption.style.opacity = Math.min(1, (100 - sliderPercent) / fadeZone);
    };

    ['mousedown', 'touchstart'].forEach(ev => {
      slider.addEventListener(ev, e => { dragging = true; wasDragging = false; e.preventDefault(); });
    });

    ['mousemove', 'touchmove'].forEach((ev, i) => {
      document.addEventListener(ev, e => {
        if (!dragging) return;
        wasDragging = true;
        const clientX = i === 1 ? e.touches[0].clientX : e.clientX;
        setClip(clientX);
      });
    });

    ['mouseup', 'touchend'].forEach(ev => {
      document.addEventListener(ev, () => { dragging = false; setTimeout(() => { wasDragging = false; }, 0); });
    });

    container.addEventListener('click', e => { if (!wasDragging) setClip(e.clientX); });

    const img = container.querySelector('img');
    const init = () => updateVisuals();
    img.complete ? init() : img.onload = init;
    window.addEventListener('resize', updateVisuals);

    // Fullscreen button
    const btn = document.createElement("button");
    btn.className = "compare-fullscreen-btn";
    btn.textContent = "⛶";
    container.appendChild(btn);
    setupFullscreen(container, btn);
  });

  // =========================
  // 2. Fullscreen only for markdown images
  // =========================
  const path = window.location.pathname;
  const shouldAddFullscreen = path !== '/' && path !== '/news/' &&
    !path.startsWith('/news/archive/') && !path.startsWith('/news/category/');

  if (shouldAddFullscreen) {
    document.querySelectorAll(".md-content .md-typeset img").forEach(img => {
      if (img.closest(".compare-container,.md-logo,.md-header,.md-nav,.md-footer")) return;

      const container = document.createElement("div");
      container.className = "compare-container fullscreen-only";
      img.parentNode.insertBefore(container, img);
      container.appendChild(img);
      container.style.cursor = 'default';

      const btn = document.createElement("button");
      btn.className = "compare-fullscreen-btn";
      btn.textContent = "⛶";
      container.appendChild(btn);

      setupFullscreen(container, btn);
    });
  }

});