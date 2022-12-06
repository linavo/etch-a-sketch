// defined variables to use for global scope
let color = "black";
let click = true;
let slide = document.querySelector("#myRange");
let amount = document.querySelector(".sliderAmount");

// this function will populate the board when user first opens website
function populateBoard(size) {
  let board = document.querySelector(".grid");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}
// call function to initiate it
populateBoard(slide.value);

// onclick function to change the color, check HTML
function changeColor(choice) {
  color = choice;
}

// this will color the squares
function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color === "white") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = color;
    }
  }
}

// this will reset the game
function resetGrid() {
  let board = document.querySelector(".grid");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

// this allows users to stop coloring when they click
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
  }
});

// this is to change how many squares are on the screen
slide.addEventListener("input", () => {
  let grid = document.querySelector(".grid");
  let newValue = document.querySelector("#myRange").value;
  amount.textContent = newValue;
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${newValue}, 2fr); grid-template-rows: repeat(${newValue}, 2fr);`
  );
  for (let i = 0; i < newValue ** 2; i++) {
    let divs = document.createElement("div");
    grid.appendChild(divs);
  }
});
