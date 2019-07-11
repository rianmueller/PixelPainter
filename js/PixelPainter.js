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

let stamp = [];

// LEFT COLUMN
let leftColumn = document.createElement("div");
leftColumn.id = "outerLeft";
pixelPainter.appendChild(leftColumn);

// RIGHT COLUMN - CANVAS
let rightColumn = document.createElement("div");
rightColumn.id = "outerRight";
pixelPainter.appendChild(rightColumn);

// PALETTE
let palette = document.createElement("div");
palette.id = "palette";
palette.className = "container";
leftColumn.appendChild(palette);

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
leftColumn.appendChild(activeColorBox);

// ACTIVE COLOR CELL
let activeColorCell = document.createElement("div");
activeColorCell.id = "activeColor";
activeColorCell.style.backgroundColor = "#ffffff";
activeColorBox.appendChild(activeColorCell);

// ERASE
let eraseButton = document.createElement("button");
eraseButton.id = "erase";
eraseButton.innerHTML = "Erase";
eraseButton.addEventListener("click", erase);
leftColumn.appendChild(eraseButton);

// CLEAR
let clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.innerHTML = "Clear";
clearButton.addEventListener("click", clear);
leftColumn.appendChild(clearButton);

// SAVE
let saveButton = document.createElement("button");
saveButton.id = "save";
saveButton.innerHTML = "Save";
saveButton.addEventListener("click", save);
leftColumn.appendChild(saveButton);

// CANVAS
let canvas = document.createElement("div");
canvas.id = "canvas";
canvas.className = "container";
rightColumn.appendChild(canvas);

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
    stamp[i] = allPixels[i].style.backgroundColor;
    allPixels[i].style.backgroundColor = "#ffffff";
    allPixels[i].removeEventListener("mouseover", dragColor);
    allPixels[i].removeEventListener("mouseup", endColor);
  }
}

// STAMP
let stampFrame = document.createElement("div");
stampFrame.id = "stamp";
stampFrame.className = "stampContainer";
leftColumn.appendChild(stampFrame);

// STAMP CONTENT
for (i = 0; i < 256; i++) {
  let stampPixel = document.createElement("div");
  stampPixel.className = "stampPixel";
  stampPixel.style.backgroundColor = stamp[i];
  stampFrame.appendChild(stampPixel);
}

function save() {
  let allPixels = document.querySelectorAll(".pixel");
  let stampPixel = document.querySelectorAll(".stampPixel");
  for (i = 0; i < 256; i++) {
    stamp[i] = allPixels[i].style.backgroundColor;
    stampPixel[i].style.backgroundColor = stamp[i];
  }
  console.log(stamp);
}
