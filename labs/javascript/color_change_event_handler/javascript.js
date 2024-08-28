document.addEventListener('DOMContentLoaded', function () {
  const blueButton = document.getElementById("blue-button");
  const textElement = document.getElementById("colorful-text");

  blueButton.onclick = function() {
    textElement.classList.add("blue");
    textElement.classList.remove("green");
    textElement.classList.remove("red");
  }
}, false);