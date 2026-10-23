// Ejercicio 05: Color Changer
// =============================
// Objetivo: Al hacer click en un boton de color, cambiar el fondo de la caja.
// El boton "Random" genera un color hexadecimal aleatorio.

// Iteration 1: Selecciona el div con id "color-box" y el contenedor de botones con id "palette"

const colorBox = document.querySelector(".color-box")
const btnColors = document.querySelector("#palette")

// Iteration 2: Añade UN solo event listener "click" al contenedor "palette" (delegacion de eventos).
// Dentro del listener:
// - Comprueba que el elemento clickeado es un <button> (usa event.target.tagName)
// - Lee el atributo data-color del boton (usa dataset.color o getAttribute("data-color"))

// Iteration 3: Si data-color es "random", genera un color hex aleatorio.
// Pista: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')


// Iteration 4: Aplica el color al backgroundColor de color-box
// y actualiza su textContent con el valor hexadecimal del color.


btnColors.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {
        let color = event.target.getAttribute("data-color")
        if (color === "random") {
            let colorRandom = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
            colorBox.setAttribute("style", `background-color: ${colorRandom}`)
        } else {
            colorBox.setAttribute("style", `background-color: ${color}`)
        }
    }
})