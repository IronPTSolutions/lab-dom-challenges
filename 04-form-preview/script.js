// Ejercicio 04: Form Preview

// Seleccionar inputs del formulario
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const bioInput = document.querySelector("#bio-input");

// Seleccionar elementos de preview
const previewName = document.querySelector("#preview-name");
const previewEmail = document.querySelector("#preview-email");
const previewBio = document.querySelector("#preview-bio");

// Textos placeholder por defecto
const defaults = {
  name: "Tu nombre",
  email: "tu@email.com",
  bio: "Cuentanos algo sobre ti...",
};

// Actualizar preview en tiempo real
nameInput.addEventListener("input", () => {
  previewName.textContent = nameInput.value.trim() || defaults.name;
});

emailInput.addEventListener("input", () => {
  previewEmail.textContent = emailInput.value.trim() || defaults.email;
});

bioInput.addEventListener("input", () => {
  previewBio.textContent = bioInput.value.trim() || defaults.bio;
});
