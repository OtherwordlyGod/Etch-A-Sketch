let canvasSize = 16;   // Default size for the canvas (16x16 grid)

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
    // use of event delegation
    if (mouseDown && event.target.classList.contains("grid-item")) { 

      const target = event.target;

      if (parseFloat(target.style.opacity) < 1) { 

        changeOpacity(target); 

      };

      event.target.style.backgroundColor = randomRGB();
    };

  });

};

const button = document.getElementById("button");

button.addEventListener("click", () => {

  let input = document.getElementById("canvas-size")

  clearAndRedrawCanvas(input.value);

})

function clearAndRedrawCanvas(userInput) {

  container.innerHTML = "";

  generateCanvas(userInput);

}

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeOpacity(target) {

    let currentOpacity = parseFloat(target.style.opacity);

    currentOpacity += 0.1;

    if (currentOpacity > 1) { // clamps opacity to 1
      currentOpacity = 1;
    }

    target.style.opacity = currentOpacity;  
};

// Ensure that DOM is fully loaded before generating the canvas
document.addEventListener("DOMContentLoaded", () => {
  generateCanvas(canvasSize);
});


