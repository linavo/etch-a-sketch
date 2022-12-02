let grid = document.querySelector(".grid");
let slide = document.querySelector("#myRange");
let amount = document.querySelector(".sliderAmount");

grid.style.gridTemplateColumns = `repeat(${slide.value},1fr)`;
grid.style.gridTemplateRows = `repeat(${slide.value},1fr)`;

let choose = document.querySelector("#choose");
let rainbow = document.querySelector("#rainbow");
let eraser = document.querySelector("#eraser");
let clearScreen = document.querySelector("#clearScreen");

for (let i = 0; i < slide.value ** 2; i++) {
  let squares = document.createElement("div");
  choose.addEventListener("click", draw);
  rainbow.addEventListener("click", rainbowMode);
  eraser.addEventListener("click", eraseDrawings);
  clearScreen.addEventListener("click", clearTheScreen);
  grid.appendChild(squares);

  function colorBlack() {
    squares.style.backgroundColor = "black";
  }
  function colorRainbow() {
    squares.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  function eraseColor() {
    squares.style.backgroundColor = "white";
  }
  function clearTheScreen() {
    squares.style.backgroundColor = "white";
  }
  function draw() {
    squares.addEventListener("mouseover", colorBlack);
    squares.removeEventListener("mouseover", colorRainbow);
    squares.removeEventListener("mouseover", eraseColor);
  }
  function rainbowMode() {
    squares.addEventListener("mouseover", colorRainbow);
    squares.removeEventListener("mouseover", colorBlack);
    squares.removeEventListener("mouseover", eraseColor);
  }
  function eraseDrawings() {
    squares.addEventListener("mouseover", eraseColor);
    squares.removeEventListener("mouseover", colorBlack);
    squares.removeEventListener("mouseover", colorRainbow);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

slide.addEventListener("input", () => {
  let newValue = document.querySelector("#myRange").value;
  amount.textContent = newValue;
  removeAllChildNodes(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${newValue}, 2fr); grid-template-rows: repeat(${newValue}, 2fr);`
  );
  for (let i = 0; i < newValue ** 2; i++) {
    let divs = document.createElement("div");
    choose.addEventListener("click", black);
    rainbow.addEventListener("click", rainbowColor);
    eraser.addEventListener("click", erase);
    clearScreen.addEventListener("click", clear);
    grid.append(divs);
    function black() {
      divs.addEventListener("mouseover", () => {
        divs.style.backgroundColor = "black";
      });
    }
    function rainbowColor() {
      divs.addEventListener("mouseover", () => {
        divs.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      });
    }
    function erase() {
      divs.addEventListener("mouseover", () => {
        divs.style.backgroundColor = "white";
      });
    }
    function clear() {
      divs.style.backgroundColor = "white";
    }
  }
});
