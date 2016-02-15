var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    pauseBtn = document.querySelector("#pause-btn"),
    fasterBtn = document.getElementById("faster"),
    slowerBtn = document.getElementById("slower"),
    speed = 200,
    maxSpeed = 50,
    minSpeed = 5000,
    interval;

function drawCircle(context2d, center, radius) {
  context2d.beginPath();
  context2d.arc(center.x, center.y, radius, 0, (Math.PI * 2), false);
  context2d.fill()
}

function getRandomCoordinates() {
  var randCoords = {};

  randCoords.x = Math.floor(Math.random() * canvas.width + 1);
  randCoords.y = Math.floor(Math.random() * canvas.height + 1);

  return randCoords;
}

function randomColor() {
  // random RGB value
  var red = Math.floor(Math.random() * 256),
      green = Math.floor(Math.random() * 256),
      blue = Math.floor(Math.random() * 256),
      colorStr = "rgb(" + red + ", " + green + ", " + blue + ")";

  return colorStr;
}

function randomDot(e) {
  var center = getRandomCoordinates(),
      radius = Math.floor(Math.random() * 50);
  context.fillStyle = randomColor()
  drawCircle(context, center, radius);
}

function pause(e) {
  window.clearInterval(interval);
  this.textContent = "Resume";
  this.removeEventListener("click", pause);
  this.addEventListener("click", resume);
}

function resume(e) {
  interval = window.setInterval(randomDot, speed);
  this.textContent = "Pause";
  this.removeEventListener("click", resume);
  this.addEventListener("click", pause);

}

function faster(e) {
  if (speed <= maxSpeed) {
    speed = maxSpeed;
  } else {
    speed -= 50;
  }

  setTimer();
  return speed;
}

function slower(e) {
  if (speed >= minSpeed) {
    speed = minSpeed;
  } else {
    speed += 50;
  }

  setTimer();
  return speed;
}

function setTimer() {
  window.clearInterval(interval);
  interval = window.setInterval(randomDot, speed);
}

pauseBtn.addEventListener("click", pause);
fasterBtn.addEventListener("click", faster);
slowerBtn.addEventListener("click", slower);
interval = window.setInterval(randomDot, speed);
