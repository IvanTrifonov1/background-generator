var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".random");

function generateRandomColor() {
  var randColor1 = Math.floor(Math.random() * 255 + 1);
  var randColor2 = Math.floor(Math.random() * 255 + 1);
  var randColor3 = Math.floor(Math.random() * 255 + 1);
  var randColor4 = Math.floor(Math.random() * 255 + 1);
  var randColor5 = Math.floor(Math.random() * 255 + 1);
  var randColor6 = Math.floor(Math.random() * 255 + 1);

  body.style.background = "linear-gradient(to right, rgb(" + randColor1 + ", " + randColor2 +
    ", " + randColor3 + "), rgb(" + randColor4 + ", " + randColor5 + ", " + randColor6 + ")";
}

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColor);
