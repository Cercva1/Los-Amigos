// ── MENU TABS ──
document.querySelectorAll(".menu-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".menu-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});

// ── SCROLL FADE-IN ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".menu-card, .review-card, .exp-feature, .contact-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
