let canvasSize = 16;

const container = document.getElementById("container");

function generateCanvas(size) {
   for (let i = 0; i < size * size; i ++) {
       const square = document.createElement("div");
       square.classList.add("grid-item");
       square.style.width = `${500 / size}px`;
       square.style.height = `${500 / size}px`;
       square.style.opacity = 0.1;
       container.appendChild(square);
   };

let mouseDown = false;
   container.addEventListener("mousedown", () => {
      mouseDown = true;
   });

   container.addEventListener("mouseup", () => {
      mouseDown = false;
   });

 container.addEventListener("mouseover", (event) => {
    if (mouseDown === true && event.target.classList.contains("grid-item")) {
      const target = event.target;
      const currentColor = window.getComputedStyle(target).backgroundColor;
    
      if (currentColor != "rgba(0, 0, 0, 0)") {
        changeOpacity(event);
      }; 
      event.target.style.backgroundColor = randomRGB();
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

function changeOpacity(event) {
  const secondTarget = event.target;
  let currentOpacity = parseFloat(window.getComputedStyle(secondTarget).opacity);
  currentOpacity += 0.1;
  if (currentOpacity > 1) {
    currentOpacity = 1;
  };
  console.log(currentOpacity);
  event.target.style.opacity = currentOpacity;
}

generateCanvas(canvasSize);


