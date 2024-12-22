let canvasSize = 16;
let brightnessLevel = 1;

const container = document.getElementById("container");

function generateCanvas(size) {
   for (let i = 0; i < size * size; i ++) {
       const square = document.createElement("div");
       square.classList.add("grid-item");
       square.style.width = `${500 / size}px`;
       square.style.height = `${500 / size}px`;
       container.appendChild(square);
   };

let mouseDown = false;
   container.addEventListener("mousedown", () => {
      mouseDown = true;
   });

   container.addEventListener("mouseup", () => {
      mouseDown = false;
   });

 container.addEventListener("mousemove", (event) => {
    if (mouseDown === true && event.target.classList.contains("grid-item")) {
      const target = event.target;
      const currentColor = window.getComputedStyle(target).backgroundColor;
      
      if (currentColor === "rgba(0, 0, 0, 0)") {
        event.target.style.backgroundColor = randomRGB();
        brightnessLevel -= 0.1;
        changeBrightness(event, brightnessLevel);
      } 
    };
  });
};

const button = document.getElementById("button");

button.addEventListener("click", () => {
  let input = document.getElementById("canvas-size")
  redrawCanvas(input.value);
})

function redrawCanvas(userInput) {
  let child = container.lastElementChild;
  
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  };
  
  generateCanvas(userInput);
}

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBrightness(e, level) {
  if (level < 0.1) {
    e.target.style.filter = "brightness(0)";
  } else {
  e.target.style.filter = `brightness(${level})`;
  };

  console.log(level);
};

  

generateCanvas(canvasSize);


