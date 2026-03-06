document.addEventListener("DOMContentLoaded", () => {

  // -------------------
  // Dynamic vh for mobile
  // -------------------
  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', setVh);

  // =========================
  // 1. Comparison sliders
  // =========================
  document.querySelectorAll('.compare-container').forEach(container => {

    const topImage = container.querySelector('.compare-top');
    if (!topImage) return;

    const slider = container.querySelector('.compare-slider');
    const line = container.querySelector('.compare-line');
    const beforeCaption = container.querySelector('.compare-caption.before');
    const afterCaption  = container.querySelector('.compare-caption.after');

    container.style.cursor = 'ew-resize';

    let dragging = false;
    let wasDragging = false;
    let sliderPercent = 50;

    function setClip(offsetX) {
      const rect = container.getBoundingClientRect();
      offsetX = offsetX - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      sliderPercent = (offsetX / rect.width) * 100;
      updateVisuals();
    }

    function updateVisuals() {
      const rect = container.getBoundingClientRect();
      topImage.style.clipPath = `inset(0 0 0 ${sliderPercent}%)`;
      slider.style.left = sliderPercent + '%';
      slider.style.top = rect.height / 2 + 'px';
      line.style.left = sliderPercent + '%';
      line.style.height = rect.height + 'px';

      const fadeZone = 20;
      const beforeOpacity = Math.min(1, Math.max(0, sliderPercent / fadeZone));
      const afterOpacity  = Math.min(1, Math.max(0, (100 - sliderPercent) / fadeZone));
      if (beforeCaption) beforeCaption.style.opacity = beforeOpacity;
      if (afterCaption)  afterCaption.style.opacity  = afterOpacity;
    }

    slider.addEventListener('mousedown', e => { dragging = true; wasDragging = false; e.preventDefault(); });
    slider.addEventListener('touchstart', e => { dragging = true; wasDragging = false; e.preventDefault(); });
    document.addEventListener('mousemove', e => { if (!dragging) return; wasDragging = true; setClip(e.clientX); });
    document.addEventListener('touchmove', e => { if (!dragging || !e.touches[0]) return; wasDragging = true; setClip(e.touches[0].clientX); });
    document.addEventListener('mouseup', () => { dragging = false; setTimeout(() => { wasDragging = false; }, 0); });
    document.addEventListener('touchend', () => { dragging = false; setTimeout(() => { wasDragging = false; }, 0); });
    container.addEventListener('click', e => { if (wasDragging) return; setClip(e.clientX); });

    const img = container.querySelector('img');
    const init = () => updateVisuals();
    if (img.complete) init(); else img.onload = init;
    window.addEventListener('resize', updateVisuals);

    const btn = document.createElement("button");
    btn.className = "compare-fullscreen-btn";
    btn.textContent = "⛶";
    container.appendChild(btn);

    let overlay = null;
    let placeholder = null;
    function preventScroll(e) { e.preventDefault(); }

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
    document.addEventListener("click", e => { if (!overlay) return; if (e.target === overlay && !wasDragging) exit(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") exit(); });

  });

  // =========================
  // 2. Fullscreen ONLY for markdown images
  // =========================

  const path = window.location.pathname;

  if (
    path !== '/' &&
    path !== '/news/' &&
    !path.startsWith('/news/archive/') &&
    !path.startsWith('/news/category/')
  ) {

    document.querySelectorAll(".md-content .md-typeset img").forEach(img => {

      if (
        img.closest(".compare-container") ||
        img.closest(".md-logo") ||
        img.closest(".md-header") ||
        img.closest(".md-nav") ||
        img.closest(".md-footer")
      ) return;

      const container = document.createElement("div");
      container.className = "compare-container fullscreen-only";

      img.parentNode.insertBefore(container, img);
      container.appendChild(img);

      container.style.cursor = 'default';

      const btn = document.createElement("button");
      btn.className = "compare-fullscreen-btn";
      btn.textContent = "⛶";
      container.appendChild(btn);

      let overlay = null;
      let placeholder = null;
      function preventScroll(e) { e.preventDefault(); }

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
      document.addEventListener("click", e => { if (!overlay) return; if (e.target === overlay) exit(); });
      document.addEventListener("keydown", e => { if (e.key === "Escape") exit(); });

    });

  }

});