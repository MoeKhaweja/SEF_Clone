const modalToggle = document.querySelectorAll(".hamburger");
const modal = document.getElementById("modal");
const animatedText = document.getElementById("animated-text");
const overlay = document.getElementById("overlay");
const cursor = document.getElementById("cursor");
const heroContent = document.getElementById("hero-content");
const fcs = document.getElementById("fcs");
const fsw = document.getElementById("fsw");
const fsd = document.getElementById("fsd");
const uiux = document.getElementById("uiux");
const fcsTab = document.getElementById("fcs-tab");
const fswTab = document.getElementById("fsw-tab");
const fsdTab = document.getElementById("fsd-tab");
const uiuxTab = document.getElementById("uiux-tab");
const programs = document.querySelector(".programs");

fcs.addEventListener("click", () => {
  switchTab(fcsTab, "#ffc635", fcs);
});
fsw.addEventListener("click", () => {
  switchTab(fswTab, "#28eea7", fsw);
});
fsd.addEventListener("click", () => {
  switchTab(fsdTab, "#9864da", fsd);
});
uiux.addEventListener("click", () => {
  switchTab(uiuxTab, "#fb508e", uiux);
});

function switchTab(element, color, button) {
  let i;
  let x = document.getElementsByClassName("tab-content");
  let y = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].classList.remove("tab-active");
  }
  element.style.display = "flex";
  button.classList.add("tab-active");
  programs.style.backgroundColor = color;
}

modalToggle.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.toggle("modal-toggle");
  });
});
let i = 0;
var speed = 50;
const animation = [
  {
    color: "rgba(40, 238, 167, 0.93)",
    text: "SOFTWARE ENGINEER?",
    textColor: "black",
  },
  {
    color: "rgba(152, 100, 218, 0.93)",
    text: "DATA ENGINEER?",
    textColor: "white",
  },
  {
    color: "rgba(251, 80, 142, 0.93)",
    text: "ui/ux designer?",
    textColor: "white",
  },
];

var _INTERVAL_VAL;
var index = 0;
let objectIndex = 0;
function type() {
  var text = animation[objectIndex].text.substring(0, index + 1);
  animatedText.innerHTML = text;
  index++;
  if (text === animation[objectIndex].text) {
    // Hide the cursor
    cursor.classList.add("blink");
    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(deleteLetter, 50);
      cursor.classList.remove("blink");
    }, 1000);
  }
}

function deleteLetter() {
  var text = animation[objectIndex].text.substring(0, index - 1);
  animatedText.innerHTML = text;
  index--;
  if (text === "") {
    clearInterval(_INTERVAL_VAL);
    if (objectIndex == animation.length - 1) {
      objectIndex = 0;
    } else objectIndex++;

    overlay.style.backgroundColor = animation[objectIndex].color;
    heroContent.style.color = animation[objectIndex].textColor;
    index = 0;
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(type, 100);
    }, 200);
  }
}

_INTERVAL_VAL = setInterval(type, 100);
type();
