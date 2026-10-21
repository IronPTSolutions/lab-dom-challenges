// Ejercicio 01: Toggle Visibility
// =================================
// Objetivo: Al hacer click en el boton, mostrar u ocultar el mensaje secreto.

// Iteration 1: Selecciona el boton con id "toggle-btn"
const btn = document.querySelector("#toggle-btn")

// Iteration 2: Selecciona el div con id "secret-message"
const divMensaje = document.querySelector("#secret-message")


// Iteration 3: Añade un event listener de tipo "click" al boton.
// Dentro del listener, usa classList.toggle("hidden") para alternar la visibilidad del mensaje.

btn.addEventListener("click", function () {
    divMensaje.classList.toggle("hidden")
})
