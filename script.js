//fun stuff
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}

function randomHexColor() {
  let [r, g, b] = randomRgbColor();

  let hr = r.toString(16).padStart(2, "0");
  let hg = g.toString(16).padStart(2, "0");
  let hb = b.toString(16).padStart(2, "0");

  return "#" + hr + hg + hb;
}
function changeColor() {
  let hex = randomHexColor();
  document.body.style.backgroundColor = hex;
}

function clickHandler(event) {
  changeColor();
  event.preventDefault();
}

document.addEventListener("keypress", clickHandler);

changeColor();

//fun stuff ended

document.addEventListener("keydown", function (event) {
  sound(event.key);
});

function sound(key) {
  switch (key) {
    case "q":
      const sound1 = new Audio("sounds/q.mp3");
      sound1.play();
      break;

    case "w":
      var sound2 = new Audio("sounds/w.mp3");
      sound2.play();
      break;

    case "e":
      var sound3 = new Audio("sounds/e.mp3");
      sound3.play();
      break;

    case "r":
      var sound4 = new Audio("sounds/r.mp3");
      sound4.play();
      break;

    case "u":
      var sound5 = new Audio("sounds/u.mp3");
      sound5.play();
      break;

    case "i":
      var sound6 = new Audio("sounds/i.mp3");
      sound6.play();
      break;

    case "o":
      var sound7 = new Audio("sounds/o.mp3");
      sound7.play();
      break;

    case "p":
      var sound8 = new Audio("sounds/p.mp3");
      sound8.play();
      break;
  }
}
