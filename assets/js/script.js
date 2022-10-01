let arrowDown = document.querySelector(".arrow-down");
let frontendText = document.querySelector(".front");
let frontSpans = frontendText.querySelectorAll("span");
let awardText = document.querySelector(".award");
let awardSpans = awardText.querySelectorAll("span");

//inverssement d'un tableau
function reverse(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[array.length - i - 1]);
  }
  return newArray;
}
let newArray = reverse(awardSpans);

function removeAllActive() {
  for (let i = 0; i < frontSpans.length; i++) {
    frontSpans[i].classList.remove("active");
    if (i < newArray.length) {
      newArray[i].classList.remove("active");
    }
    console.log("aloo");
  }
}
function goScrollToSecond() {
  let index = 0;
  window.setInterval(() => {
    if (index < frontSpans.length) {
      frontSpans[index].classList.add("active");
      if (index < newArray.length) {
        newArray[index].classList.add("active");
      }
    } else if (index == frontSpans.length) {
      window.location.href = "#second";
    } else if (index == frontSpans.length + 5) {
      removeAllActive();
    } else {
    }
    index++;
  }, 100);
}

arrowDown.addEventListener("click", goScrollToSecond);
// let scrolled = false;
// window.addEventListener("scroll", () => {
//   if (!scrolled) {

//     goScrollToSecond;
//     scrolled = true;
//   }
// });

const bars = document.querySelector(".icon-bars"),
  menu = document.querySelector(".first header .header-content nav"),
  header = document.querySelector("header");

bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  menu.classList.toggle("active");

  if (header.classList.value !== "active") {
    setTimeout(() => {
      document.querySelector("style").innerHTML = `
    ::-webkit-scrollbar {
      display: none;
    }
    body {
      overflow: hidden;
    }`;
      header.classList.add("active");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("style").innerHTML = ``;
      header.classList.remove("active");
    }, 200);
  }
});
