// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll animation
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
