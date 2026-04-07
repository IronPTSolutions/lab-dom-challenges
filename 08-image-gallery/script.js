// Ejercicio 08: Image Gallery

// Array de imagenes y estado
const images = ["🏔️", "🌅", "🌊", "🌻", "🌌"];
let currentIndex = 0;

// Seleccionar elementos del DOM
const mainDisplay = document.querySelector("#main-display");
const mainImage = document.querySelector("#main-image");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const counter = document.querySelector("#counter");
const thumbs = document.querySelectorAll(".thumb");

// Actualizar la galeria con la imagen actual
function updateGallery() {
  // Actualizar imagen principal
  mainDisplay.textContent = images[currentIndex];

  // Actualizar fondo con el color del thumb activo
  mainImage.style.backgroundColor = thumbs[currentIndex].style.backgroundColor;

  // Actualizar contador
  counter.textContent = `${currentIndex + 1} / ${images.length}`;

  // Actualizar clase "active" en los thumbs
  thumbs.forEach((thumb) => thumb.classList.remove("active"));
  thumbs[currentIndex].classList.add("active");
}

// Navegacion: siguiente (con wrap-around)
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
});

// Navegacion: anterior (con wrap-around)
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
});

// Click en thumbnails
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    currentIndex = Number(thumb.dataset.index);
    updateGallery();
  });
});

// Inicializar la galeria
updateGallery();
