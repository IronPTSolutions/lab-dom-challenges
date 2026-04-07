// Ejercicio 08: Image Gallery
// =============================
// Objetivo: Crear una galeria de imagenes con navegacion prev/next y thumbnails clicables.

// Iteration 1: Define un array de imagenes (emojis). Ejemplo:
// const images = ['🏔️', '🌅', '🌊', '🌻', '🌌']
// Declara una variable currentIndex = 0


// Iteration 2: Selecciona los elementos: "main-display", "prev-btn", "next-btn", "counter",
// y todos los .thumb dentro de "thumbnails"


// Iteration 3: Crea una funcion "updateGallery" que:
// - Actualice el textContent de main-display con images[currentIndex]
// - Actualice el background del main-image con el color del thumb activo
// - Actualice el contador con `${currentIndex + 1} / ${images.length}`
// - Quite la clase "active" de todos los thumbs y la añada al thumb con el indice actual


// Iteration 4: Añade event listeners a los botones prev/next:
// - next: incrementa currentIndex. Si llega al final, vuelve a 0.
// - prev: decrementa currentIndex. Si llega a -1, va al ultimo.
// Despues de cambiar el indice, llama a updateGallery()


// Iteration 5: Añade event listener a cada thumb.
// Al hacer click, actualiza currentIndex con el data-index del thumb y llama a updateGallery()

