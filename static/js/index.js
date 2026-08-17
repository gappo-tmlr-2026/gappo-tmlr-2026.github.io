(function () {
  "use strict";

  function setupNavigation() {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.getElementById("site-navigation");

    if (!burger || !menu) {
      return;
    }

    burger.addEventListener("click", function () {
      const isActive = burger.classList.toggle("is-active");
      menu.classList.toggle("is-active", isActive);
      burger.setAttribute("aria-expanded", String(isActive));
      burger.setAttribute("aria-label", isActive ? "Close navigation" : "Open navigation");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  function makeLabel(className, text) {
    const label = document.createElement("span");
    label.className = className;
    label.textContent = text;
    return label;
  }

  function makePlaceholder(item, reason) {
    const placeholder = document.createElement("div");
    placeholder.className = "experiment-placeholder";
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", item.alt || item.title + " media coming soon");

    const monogram = document.createElement("strong");
    monogram.setAttribute("aria-hidden", "true");
    monogram.textContent = "G1";

    const status = document.createElement("span");
    status.textContent = reason || "Media coming soon";

    placeholder.append(monogram, status);
    return placeholder;
  }

  function makeMedia(item) {
    const media = document.createElement("div");
    media.className = "experiment-media";

    if (item.status !== "ready") {
      media.appendChild(makePlaceholder(item));
      return media;
    }

    if (!item.videoSrc) {
      console.warn("Experiment marked ready without videoSrc:", item.id);
      media.appendChild(makePlaceholder(item, "Media unavailable"));
      return media;
    }

    const video = document.createElement("video");
    video.controls = true;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.loop = true;
    video.playsInline = true;
    video.dataset.visibilityAutoplay = "";
    video.preload = "none";
    video.setAttribute("aria-label", item.alt || item.title);
    if (item.posterSrc) {
      video.poster = item.posterSrc;
    }

    const source = document.createElement("source");
    source.src = item.videoSrc;
    source.type = "video/mp4";
    video.appendChild(source);
    video.appendChild(document.createTextNode("Your browser does not support MP4 video."));
    media.appendChild(video);
    return media;
  }

  function makeExperimentCard(item) {
    const card = document.createElement("article");
    card.className = "experiment-card";
    card.dataset.experimentId = item.id;
    card.appendChild(makeMedia(item));

    const body = document.createElement("div");
    body.className = "experiment-body";

    const meta = document.createElement("div");
    meta.className = "experiment-meta";
    meta.appendChild(makeLabel("terrain-label", item.terrain));
    meta.appendChild(makeLabel("status-label" + (item.status === "ready" ? " is-ready" : ""), item.status === "ready" ? "Available" : "Coming soon"));

    const title = document.createElement("h3");
    title.textContent = item.title;

    const caption = document.createElement("p");
    caption.textContent = item.caption;

    body.append(meta, title, caption);
    card.appendChild(body);
    return card;
  }

  function renderExperiments() {
    const galleries = document.querySelectorAll("[data-experiment-gallery]");
    if (galleries.length === 0) {
      return;
    }

    const experiments = Array.isArray(window.GAPPO_EXPERIMENTS) ? window.GAPPO_EXPERIMENTS : [];
    galleries.forEach(function (gallery) {
      const galleryItems = experiments.filter(function (item) {
        return item.gallery === gallery.dataset.experimentGallery;
      });
      const fragment = document.createDocumentFragment();

      if (galleryItems.length === 0) {
        fragment.appendChild(makePlaceholder({ title: "G1 experiments" }, "Experiment registry unavailable"));
      } else {
        galleryItems.forEach(function (item) {
          fragment.appendChild(makeExperimentCard(item));
        });
      }
      gallery.replaceChildren(fragment);
    });
  }

  function setupVisibilityPlayback() {
    const videos = Array.from(document.querySelectorAll("video[data-visibility-autoplay]"));
    if (videos.length === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    function play(video) {
      video.play().catch(function () {
        // Controls remain available if the browser blocks autoplay.
      });
    }

    if (!("IntersectionObserver" in window)) {
      videos.forEach(play);
      return;
    }

    const visibleVideos = new Set();
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const video = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          visibleVideos.add(video);
          play(video);
        } else {
          visibleVideos.delete(video);
          video.pause();
        }
      });
    }, { threshold: [0, 0.35, 0.75] });

    videos.forEach(function (video) {
      observer.observe(video);
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        videos.forEach(function (video) {
          video.pause();
        });
      } else {
        visibleVideos.forEach(play);
      }
    });
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }

  function setupCitationCopy() {
    const button = document.getElementById("copy-citation");
    if (!button) {
      return;
    }

    button.addEventListener("click", async function () {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) {
        return;
      }

      const originalLabel = button.textContent;
      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(target.textContent);
          copied = true;
        } else {
          copied = fallbackCopy(target.textContent);
        }
      } catch (error) {
        console.warn("Could not copy citation:", error);
      }

      button.textContent = copied ? "Copied" : "Copy failed";
      window.setTimeout(function () {
        button.textContent = originalLabel;
      }, 1800);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupNavigation();
    renderExperiments();
    setupVisibilityPlayback();
    setupCitationCopy();
  });
})();
