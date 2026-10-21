// Ejercicio 02: Dropdown Menu
// =============================
// Objetivo: Abrir y cerrar un menu desplegable al hacer click en el boton.
// Bonus: Cerrar el menu cuando se hace click fuera de el.

// Iteration 1: Selecciona el boton con id "dropdown-btn" y el menu con id "dropdown-menu"
const btnMenu = document.querySelector("#dropdown-btn")
const menu = document.querySelector("#dropdown-menu")

// Iteration 2: Añade un event listener "click" al boton que haga toggle de la clase "hidden" en el menu
btnMenu.addEventListener("click", function () {
    menu.classList.toggle("hidden")
})

// Iteration 3 (Bonus): Añade un event listener "click" al document.
// Si el click NO fue dentro del .dropdown, oculta el menu añadiendo la clase "hidden".
// Pista: usa el metodo .closest() o .contains()

const dropdown = document.querySelector(".dropdown")
document.onclick = function (event) {
    if (!dropdown.contains(event.target)) {
        menu.classList.add("hidden")
    }
}