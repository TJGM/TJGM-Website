document.addEventListener("DOMContentLoaded", () => {

  const setVh = () => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  };
  setVh();

  let resizeRaf = 0;
  const onResize = () => {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;
      setVh();
      window.dispatchEvent(new CustomEvent("compare:resize"));
    });
  };
  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);

  let active = null;
  let dragging = false;
  let wasDragging = false;

  function setClip(instance, pageX) {
    const rect = instance.container.getBoundingClientRect();
    if (!rect.width) return;
    const x = Math.max(0, Math.min(pageX - rect.left, rect.width));
    instance.sliderPercent = (x / rect.width) * 100;
    instance.updateVisuals();
  }

  window.addEventListener("pointermove", e => {
    if (!dragging || !active) return;
    wasDragging = true;
    setClip(active, e.clientX);
  });

  window.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    setTimeout(() => { wasDragging = false; }, 0);
  });

  let fsOverlay = null;
  let fsPlaceholder = null;
  let fsContainer = null;
  let fsBtn = null;

  const preventScroll = e => e.preventDefault();

  function exitFullscreen() {
    if (!fsOverlay || !fsContainer) return;

    fsPlaceholder.parentNode.insertBefore(fsContainer, fsPlaceholder);
    fsPlaceholder.remove();
    fsOverlay.remove();

    fsContainer.classList.remove("is-fullscreen");
    if (fsBtn) {
      fsBtn.textContent = "⛶";
      fsBtn.setAttribute("aria-label", "View fullscreen");
    }

    document.body.style.overflow = "";
    document.removeEventListener("touchmove", preventScroll);
    document.removeEventListener("wheel", preventScroll);

    fsOverlay = null;
    fsPlaceholder = null;
    fsContainer = null;
    fsBtn = null;
    window.dispatchEvent(new Event("resize"));
  }

  function enterFullscreen(container, btn) {
    if (fsOverlay) exitFullscreen();

    fsOverlay = document.createElement("div");
    fsOverlay.className = "compare-overlay";

    fsPlaceholder = document.createElement("div");
    container.parentNode.insertBefore(fsPlaceholder, container);

    fsOverlay.appendChild(container);
    document.body.appendChild(fsOverlay);

    container.classList.add("is-fullscreen");
    btn.textContent = "✖";
    btn.setAttribute("aria-label", "Close fullscreen");

    fsContainer = container;
    fsBtn = btn;

    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });
    window.dispatchEvent(new Event("resize"));
  }

  document.addEventListener("click", e => {
    if (fsOverlay && e.target === fsOverlay) exitFullscreen();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") exitFullscreen();
  });

  function setupFullscreen(container, btn) {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      if (fsOverlay && fsContainer === container) exitFullscreen();
      else enterFullscreen(container, btn);
    });
  }

  function ensureEl(container, selector, tag, className) {
    let el = container.querySelector(selector);
    if (!el) {
      el = document.createElement(tag);
      if (className) el.className = className;
      container.appendChild(el);
    }
    return el;
  }

  function mediaCaption(el, fallback) {
    if (!el) return fallback;
    const caption = el.getAttribute("caption");
    if (caption && caption.trim()) return caption.trim();
    return fallback;
  }

  function whenLoaded(el) {
    if (!el) return Promise.resolve();
    if (el.tagName === "VIDEO") {
      if (el.readyState >= 2) return Promise.resolve();
      return new Promise(resolve => {
        el.addEventListener("loadeddata", resolve, { once: true });
        el.addEventListener("error", resolve, { once: true });
      });
    }
    if (el.complete && el.naturalWidth) return Promise.resolve();
    return new Promise(resolve => {
      el.addEventListener("load", resolve, { once: true });
      el.addEventListener("error", resolve, { once: true });
    });
  }

  function syncVideos(before, after) {
    if (!before || !after) return;

    before.muted = true;
    after.muted = true;
    before.playsInline = true;
    after.playsInline = true;
    before.setAttribute("playsinline", "");
    after.setAttribute("playsinline", "");

    let syncing = false;
    const follow = () => {
      if (syncing) return;
      if (Math.abs(after.currentTime - before.currentTime) > 0.08) {
        syncing = true;
        after.currentTime = before.currentTime;
        syncing = false;
      }
    };

    before.addEventListener("play", () => { after.play().catch(() => {}); });
    before.addEventListener("pause", () => { after.pause(); });
    before.addEventListener("seeked", follow);
    before.addEventListener("timeupdate", follow);

    after.addEventListener("play", () => {
      if (before.paused) before.play().catch(() => {});
    });
    after.addEventListener("pause", () => {
      if (!before.paused) before.pause();
    });

    const tryPlay = () => {
      before.play().catch(() => {});
      after.play().catch(() => {});
    };
    tryPlay();
    document.addEventListener("click", tryPlay, { once: true });
  }

  function hydrateCompare(container) {
    if (container.classList.contains("fullscreen-only")) return;

    let topWrap = container.querySelector(".compare-top");
    const medias = [
      ...container.querySelectorAll(":scope > img, :scope > video")
    ];

    if (!topWrap && medias.length >= 2) {
      topWrap = document.createElement("div");
      topWrap.className = "compare-top";
      topWrap.appendChild(medias[1]);
      container.appendChild(topWrap);
    }

    if (!container.querySelector(".compare-top")) return;

    ensureEl(container, ".compare-line", "div", "compare-line");
    ensureEl(container, ".compare-slider", "div", "compare-slider");

    const beforeEl = container.querySelector(":scope > img, :scope > video");
    const afterEl = container.querySelector(".compare-top img, .compare-top video");

    if (!container.querySelector(".compare-caption.before")) {
      const cap = document.createElement("div");
      cap.className = "compare-caption before";
      cap.textContent = mediaCaption(beforeEl, "Before");
      container.appendChild(cap);
    }

    if (!container.querySelector(".compare-caption.after")) {
      const cap = document.createElement("div");
      cap.className = "compare-caption after";
      cap.textContent = mediaCaption(afterEl, "After");
      container.appendChild(cap);
    }

    if (beforeEl && beforeEl.tagName === "VIDEO" && afterEl && afterEl.tagName === "VIDEO") {
      syncVideos(beforeEl, afterEl);
    }
  }

  function addFullscreenButton(container) {
    if (container.querySelector(".compare-fullscreen-btn")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "compare-fullscreen-btn";
    btn.textContent = "⛶";
    btn.setAttribute("aria-label", "View fullscreen");
    container.appendChild(btn);
    setupFullscreen(container, btn);
  }

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  document.querySelectorAll(".compare-container").forEach(container => {
    hydrateCompare(container);

    const topImage = container.querySelector(".compare-top");
    if (!topImage) return;

    const slider = container.querySelector(".compare-slider");
    const line = container.querySelector(".compare-line");
    const beforeCaption = container.querySelector(".compare-caption.before");
    const afterCaption = container.querySelector(".compare-caption.after");
    const beforeEl = container.querySelector(":scope > img, :scope > video");
    const afterEl = container.querySelector(".compare-top img, .compare-top video");

    function applyCursor() {
      container.style.cursor = finePointer.matches ? "ew-resize" : "default";
      slider.style.cursor = "ew-resize";
      line.style.cursor = "ew-resize";
    }
    applyCursor();
    finePointer.addEventListener("change", applyCursor);

    const instance = {
      container,
      topImage,
      slider,
      line,
      beforeCaption,
      afterCaption,
      sliderPercent: 50,
      updateVisuals() {
        const rect = container.getBoundingClientRect();
        topImage.style.clipPath = `inset(0 0 0 ${this.sliderPercent}%)`;
        slider.style.left = line.style.left = this.sliderPercent + "%";
        slider.style.top = rect.height / 2 + "px";
        line.style.height = rect.height + "px";

        const fadeZone = 20;
        if (beforeCaption) beforeCaption.style.opacity = Math.min(1, this.sliderPercent / fadeZone);
        if (afterCaption) afterCaption.style.opacity = Math.min(1, (100 - this.sliderPercent) / fadeZone);
      }
    };

    const startDrag = e => {
      dragging = true;
      wasDragging = false;
      active = instance;
      if (e.currentTarget.setPointerCapture && e.pointerId != null) {
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
      }
      e.preventDefault();
    };

    // Handle + line: always
    slider.addEventListener("pointerdown", startDrag);
    line.addEventListener("pointerdown", startDrag);

    // Desktop mouse: click/drag anywhere on the image
    container.addEventListener("pointerdown", e => {
      if (e.target.closest(".compare-fullscreen-btn")) return;
      if (e.pointerType !== "mouse") return;
      startDrag(e);
      setClip(instance, e.clientX);
    });

    window.addEventListener("compare:resize", () => instance.updateVisuals());

    Promise.all([whenLoaded(beforeEl), whenLoaded(afterEl)]).then(() => {
      instance.updateVisuals();
    });

    addFullscreenButton(container);
  });

  const path = window.location.pathname;
  const shouldAddFullscreen =
    path !== "/" &&
    path !== "/news/" &&
    !path.startsWith("/news/archive/") &&
    !path.startsWith("/news/category/");

  if (shouldAddFullscreen) {
    document.querySelectorAll(".md-content .md-typeset img").forEach(img => {
      if (img.closest(".compare-container,.md-logo,.md-header,.md-nav,.md-footer")) return;

      const wrap = document.createElement("div");
      wrap.className = "compare-container fullscreen-only";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
      wrap.style.cursor = "default";
      addFullscreenButton(wrap);
    });
  }
});