// Ejercicio 01: Toggle Visibility

// Seleccionar elementos del DOM
const toggleBtn = document.querySelector("#toggle-btn");
const secretMessage = document.querySelector("#secret-message");

// Alternar visibilidad al hacer click
toggleBtn.addEventListener("click", () => {
  secretMessage.classList.toggle("hidden");
});
