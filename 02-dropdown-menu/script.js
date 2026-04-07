// Ejercicio 02: Dropdown Menu

// Seleccionar elementos del DOM
const dropdownBtn = document.querySelector("#dropdown-btn");
const dropdownMenu = document.querySelector("#dropdown-menu");

// Toggle del menu al hacer click en el boton
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

// Bonus: Cerrar el menu al hacer click fuera del dropdown
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    dropdownMenu.classList.add("hidden");
  }
});
