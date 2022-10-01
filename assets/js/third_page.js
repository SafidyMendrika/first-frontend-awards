const ordinateur = document.querySelector(".third > .content > .right > img");

window.addEventListener("mousemove", (e) => {
  var x = e.pageX / 100;
  var y = e.pageY / 100;
  ordinateur.style.setProperty("--x", `${x}px`);
  ordinateur.style.setProperty("--y", `${y}px`);
});
