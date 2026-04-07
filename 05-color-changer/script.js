// Ejercicio 05: Color Changer

// Seleccionar elementos del DOM
const colorBox = document.querySelector("#color-box");
const palette = document.querySelector("#palette");

// Generar un color hexadecimal aleatorio
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

// Delegacion de eventos: un solo listener en el contenedor
palette.addEventListener("click", (event) => {
  // Solo reaccionar si se hizo click en un boton
  if (event.target.tagName !== "BUTTON") return;

  // Leer el color del atributo data-color
  let color = event.target.dataset.color;

  // Si es "random", generar un color aleatorio
  if (color === "random") {
    color = getRandomColor();
  }

  // Aplicar el color a la caja
  colorBox.style.backgroundColor = color;
  colorBox.textContent = color;
});
