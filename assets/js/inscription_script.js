// button d'incscription
const inscriptionBtn = document.querySelector(".button button");
const form = document.querySelector(".inscription-programme");
const annuler = document.querySelector(".annuler-inscription");
const valider = document.querySelector(".valider-inscription");
annuler.addEventListener("click", () => {
  form.classList.toggle("active");
});

valider.addEventListener("click", () => {
  form.classList.toggle("active");
});

inscriptionBtn.addEventListener("click", () => {
  form.classList.toggle("active");
});
