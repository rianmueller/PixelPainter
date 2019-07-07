let colorPalette = [
  "#000000",
  "#222034",
  "#45283c",
  "#663931",
  "#8f563b",
  "#df7126",
  "#d9a066",
  "#eec39a",
  "#fbf236",
  "#99e550",
  "#6abe30",
  "#37946e",
  "#4b692f",
  "#524b24",
  "#323c39",
  "#3f3f74",
  "#306082",
  "#5b6ee1",
  "#639bff",
  "#5fcde4",
  "#cbdbfc",
  "#ffffff",
  "#9badb7",
  "#847e87",
  "#696a6a",
  "#595652",
  "#76428a",
  "#ac3232",
  "#d95763",
  "#d77bba",
  "#8f974a",
  "#8a6f30"
];

// PALETTE
let palette = document.createElement("div");
palette.id = "palette";
palette.className = "container";
pixelPainter.appendChild(palette);

// PALETTE COLORS
for (i = 0; i < 32; i++) {
  let color = document.createElement("div");
  color.className = "color";
  color.style.backgroundColor = colorPalette[i];
  color.addEventListener("click", pickColor);
  palette.appendChild(color);
}

// ACTIVE COLOR BOX
let activeColorBox = document.createElement("div");
activeColorBox.id = "activeColorBox";
activeColorBox.className = "container";
pixelPainter.appendChild(activeColorBox);

// ACTIVE COLOR CELL
let activeColorCell = document.createElement("div");
activeColorCell.id = "activeColor";
activeColorCell.style.backgroundColor = "#333333";
activeColorBox.appendChild(activeColorCell);

// ERASE
let eraseButton = document.createElement("button");
eraseButton.id = "erase";
eraseButton.innerHTML = "Erase";
eraseButton.addEventListener("click", erase);
pixelPainter.appendChild(eraseButton);

// CLEAR
let clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.innerHTML = "Clear";
clearButton.addEventListener("click", clear);
pixelPainter.appendChild(clearButton);

// CANVAS
let canvas = document.createElement("div");
canvas.id = "canvas";
canvas.className = "container";
pixelPainter.appendChild(canvas);

// PIXELS
for (i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  pixel.addEventListener("mousedown", setColor);
  canvas.appendChild(pixel);
}

let activeColor = "#ffffff";

function pickColor() {
  activeColor = this.style.backgroundColor;
  activeColorCell.style.backgroundColor = activeColor;
}

function setColor() {
  let allPixels = document.querySelectorAll(".pixel");
  for (i = 0; i < 256; i++) {
    allPixels[i].addEventListener("mouseover", dragColor);
    allPixels[i].addEventListener("mouseup", endColor);
  }
  this.style.backgroundColor = activeColor;
}

function dragColor() {
  this.style.backgroundColor = activeColor;
}

function endColor() {
  let allPixels = document.querySelectorAll(".pixel");
  for (i = 0; i < 256; i++) {
    allPixels[i].removeEventListener("mouseover", dragColor);
    allPixels[i].removeEventListener("mouseup", endColor);
  }
}

function erase() {
  activeColor = "#ffffff";
  activeColorCell.style.backgroundColor = activeColor;
}

function clear() {
  let allPixels = document.querySelectorAll(".pixel");
  for (i = 0; i < 256; i++) {
    allPixels[i].style.backgroundColor = "#ffffff";
  }
}
