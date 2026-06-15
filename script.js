(() => {
  "use strict";

  const frame = document.getElementById("artFrame");
  const zoomButton = document.getElementById("zoomButton");
  const lightbox = document.getElementById("lightbox");
  const closeLightboxButton = document.getElementById("closeLightbox");

  if (!frame || !zoomButton || !lightbox || !closeLightboxButton) {
    return;
  }

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function openLightbox() {
    lightbox.hidden = false;
    zoomButton.setAttribute("aria-pressed", "true");
    document.body.style.overflow = "hidden";
    closeLightboxButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    zoomButton.setAttribute("aria-pressed", "false");
    document.body.style.overflow = "";
    zoomButton.focus();
  }

  zoomButton.addEventListener("click", openLightbox);
  closeLightboxButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });

  if (canHover && !prefersReducedMotion) {
    frame.addEventListener("pointermove", (event) => {
      const rect = frame.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 4;
      const rotateX = (0.5 - y) * 4;

      frame.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.006)`;
      frame.style.boxShadow = "0 28px 70px rgba(68, 38, 77, 0.28)";
    });

    frame.addEventListener("pointerleave", () => {
      frame.style.transform = "";
      frame.style.boxShadow = "";
    });
  }
})();
