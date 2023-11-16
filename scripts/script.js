const modalToggle = document.querySelectorAll(".hamburger");
const modal = document.getElementById("modal");
const animatedText = document.getElementById("animated-text");
const overlay = document.getElementById("overlay");
const cursor = document.getElementById("cursor");
const heroContent = document.getElementById("hero-content");

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
// Cursor element
// Implements typing effect
function type() {
  // Get substring with 1 characater added
  var text = animation[objectIndex].text.substring(0, index + 1);
  animatedText.innerHTML = text;
  index++;

  // If full sentence has been displayed then start to delete the sentence after some time
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

// Implements deleting effect
function deleteLetter() {
  // Get substring with 1 characater deleted
  var text = animation[objectIndex].text.substring(0, index - 1);
  animatedText.innerHTML = text;
  index--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (objectIndex == animation.length - 1) {
      objectIndex = 0;
    } else objectIndex++;

    overlay.style.backgroundColor = animation[objectIndex].color;
    heroContent.style.color = animation[objectIndex].textColor;

    index = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(type, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(type, 100);
type();
