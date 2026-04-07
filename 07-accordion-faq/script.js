// Ejercicio 07: Accordion FAQ
// =============================
// Objetivo: Crear un acordeon donde solo una respuesta puede estar abierta a la vez.

// Iteration 1: Selecciona todos los elementos con clase "accordion-header" usando querySelectorAll


// Iteration 2: Itera sobre cada header con forEach y añade un event listener "click" a cada uno.


// Iteration 3: Dentro del listener:
// - Obtén el .accordion-item padre del header clickeado (usa .parentElement o .closest)
// - Comprueba si ya tiene la clase "active"


// Iteration 4: Cierra todos los accordion-items abiertos:
// - Selecciona todos los .accordion-item y quita la clase "active" de cada uno


// Iteration 5: Si el item clickeado NO estaba activo, añade la clase "active".
// (Si ya estaba activo, al quitarla en la Iteration 4 ya queda cerrado)

