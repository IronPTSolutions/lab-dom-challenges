// Ejercicio 03: Counter

// Estado del contador
let count = 0;

// Seleccionar elementos del DOM
const counterDisplay = document.querySelector("#counter-display");
const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");

// Actualizar el display con el valor actual
function updateDisplay() {
  counterDisplay.textContent = count;
}

// Event listeners para cada boton
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
