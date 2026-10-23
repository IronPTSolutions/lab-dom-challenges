// Ejercicio 03: Counter
// ======================
// Objetivo: Crear un contador que se pueda incrementar, decrementar y resetear.

// Iteration 1: Declara una variable "count" inicializada a 0
let count = 0

// Iteration 2: Selecciona el elemento con id "counter-display" y los tres botones
const counterDisplay = document.querySelector("#counter-display")

// Iteration 3: Crea una funcion "updateDisplay" que actualice el textContent del display con el valor de count
function updateDisplay () {
    counterDisplay.textContent = count
}

// Iteration 4: Añade event listeners a cada boton:
// - increase-btn: incrementa count en 1 y llama a updateDisplay
const btnMenos = document.querySelector("#decrease-btn")
btnMenos.addEventListener("click", function () {
    count -= 1
    updateDisplay()
})
// - decrease-btn: decrementa count en 1 y llama a updateDisplay
const btnMas = document.querySelector("#increase-btn")
btnMas.addEventListener("click", function () {
    count += 1
    updateDisplay()
})
// - reset-btn: establece count a 0 y llama a updateDisplay

const btnReset = document.querySelector("#reset-btn")
btnReset.addEventListener("click", function () {
    count = 0
    updateDisplay()
})