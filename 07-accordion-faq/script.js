// Ejercicio 07: Accordion FAQ

// Seleccionar todos los headers del acordeon
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    // Obtener el item padre del header clickeado
    const currentItem = header.parentElement;

    // Comprobar si ya esta activo
    const isActive = currentItem.classList.contains("active");

    // Cerrar todos los items abiertos
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Si no estaba activo, abrirlo
    if (!isActive) {
      currentItem.classList.add("active");
    }
  });
});
