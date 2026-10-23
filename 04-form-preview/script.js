// Ejercicio 04: Form Preview
// ============================
// Objetivo: Cada vez que el usuario escribe en un campo del formulario,
// el valor se muestra automaticamente en la tarjeta de preview.

// Iteration 1: Selecciona los 3 inputs: "name-input", "email-input", "bio-input"
const nameInput = document.querySelector("#name-input")
const emailInput = document.querySelector("#email-input")
const bioInput = document.querySelector("#bio-input")

// Iteration 2: Selecciona los 3 elementos de preview: "preview-name", "preview-email", "preview-bio"
const namePreview = document.querySelector("#preview-name")
const emailPreview = document.querySelector("#preview-email")
const bioPreview = document.querySelector("#preview-bio")

// Iteration 3: Añade un event listener de tipo "input" a cada campo del formulario.

nameInput.addEventListener("input", function (event) {
    namePreview.textContent = event.target.value
    console.log(event.data)
})

emailInput.addEventListener("input", function (event) {
    emailPreview.textContent = event.target.value
    console.log(event.data)
})

bioInput.addEventListener("input", function (event) {
    bioPreview.textContent = event.target.value
    console.log(event.data)
})

// Dentro del listener, actualiza el textContent del elemento de preview correspondiente
// con el valor actual del input (usa .value).
// Si el input esta vacio, muestra el texto placeholder original.

