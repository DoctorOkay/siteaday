var colorBtn = document.getElementById("get-color"),
    colorText = document.getElementById("color-text");

colorBtn.addEventListener("click", changeBackground);

function randomColor() {
  // random RGB value
  var red = Math.floor(Math.random() * 256),
      green = Math.floor(Math.random() * 256),
      blue = Math.floor(Math.random() * 256),
      colorStr = "rgb(" + red + ", " + green + ", " + blue + ")";

  return colorStr;
}

function changeBackground() {
  var newColor = randomColor();
  document.body.style.background = newColor;
  colorText.textContent = newColor;
}

changeBackground();
