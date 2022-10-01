// Animations
const cards = document.querySelectorAll(".card");

var observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

const logos = document.querySelectorAll(".partenaire-item");
logos.forEach((logo) => {
  observer.observe(logo);
});
