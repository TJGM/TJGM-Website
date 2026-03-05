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

  // =====================================================
  // PINCH / PAN / DOUBLE TAP ZOOM (FULLSCREEN ONLY)
  // =====================================================
  function enableZoom(container) {

    let scale = 1;
    let startScale = 1;
    let translateX = 0;
    let translateY = 0;
    let startX = 0;
    let startY = 0;
    let isPanning = false;
    let isPinching = false;
    let lastTap = 0;

    const zoomTarget = container;

    function updateTransform() {
      zoomTarget.style.transform =
        `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function resetZoom() {
      scale = 1;
      translateX = 0;
      translateY = 0;
      updateTransform();
    }

    function getDistance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    let initialDistance = 0;

    container.addEventListener("touchstart", e => {

      if (!container.classList.contains("is-fullscreen")) return;

      if (e.touches.length === 2) {
        isPinching = true;
        initialDistance = getDistance(e.touches);
        startScale = scale;
      }

      if (e.touches.length === 1 && scale > 1) {
        isPanning = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
      }

      // Double tap
      const now = Date.now();
      if (now - lastTap < 300) {
        if (scale === 1) {
          scale = 2;
        } else {
          resetZoom();
        }
        updateTransform();
      }
      lastTap = now;

    }, { passive: false });

    container.addEventListener("touchmove", e => {

      if (!container.classList.contains("is-fullscreen")) return;

      if (isPinching && e.touches.length === 2) {
        e.preventDefault();
        const newDistance = getDistance(e.touches);
        scale = Math.min(Math.max(1, startScale * (newDistance / initialDistance)), 4);
        updateTransform();
      }

      if (isPanning && e.touches.length === 1) {
        e.preventDefault();
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        updateTransform();
      }

    }, { passive: false });

    container.addEventListener("touchend", () => {
      isPanning = false;
      isPinching = false;
    });

    return resetZoom;
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
    const afterCaption  = container.querySelector('.compare-caption.after');

    container.style.cursor = 'ew-resize';

    let dragging = false;
    let wasDragging = false;
    let sliderPercent = 50;

    function setClip(offsetX) {
      if (container.classList.contains("is-fullscreen") && container.style.transform.includes("scale(2")) return;

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
    let resetZoom = null;

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

      resetZoom = enableZoom(container);

      window.dispatchEvent(new Event('resize'));
    }

    function exit() {
      if (!overlay) return;

      if (resetZoom) resetZoom();

      placeholder.parentNode.insertBefore(container, placeholder);
      placeholder.remove();
      overlay.remove();

      container.classList.remove("is-fullscreen");
      btn.textContent = "⛶";

      document.body.style.overflow = "";

      overlay = null;
      placeholder = null;

      window.dispatchEvent(new Event('resize'));
    }

    btn.addEventListener("click", e => { e.stopPropagation(); overlay ? exit() : enter(); });
    document.addEventListener("click", e => { if (!overlay) return; if (e.target === overlay && !wasDragging) exit(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") exit(); });

  });

});