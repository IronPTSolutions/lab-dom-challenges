// Ejercicio 09: Form Validation

// Seleccionar formulario y elementos
const form = document.querySelector("#signup-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const formResult = document.querySelector("#form-result");

// Seleccionar mensajes de error
const usernameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const confirmPasswordError = document.querySelector("#confirm-password-error");

// Funciones de validacion (devuelven string de error o vacio si es valido)
function validateUsername(value) {
  if (value.length < 3) return "El nombre de usuario debe tener al menos 3 caracteres";
  return "";
}

function validateEmail(value) {
  if (!value.includes("@") || !value.includes(".")) return "El email debe contener '@' y '.'";
  return "";
}

function validatePassword(value) {
  if (value.length < 6) return "La contraseña debe tener al menos 6 caracteres";
  return "";
}

function validateConfirmPassword(value) {
  if (value !== passwordInput.value) return "Las contraseñas no coinciden";
  return "";
}

// Aplicar resultado de validacion a un campo
function applyValidation(input, errorElement, errorMessage) {
  if (errorMessage) {
    errorElement.textContent = errorMessage;
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    errorElement.textContent = "";
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
}

// Validacion en tiempo real
usernameInput.addEventListener("input", () => {
  applyValidation(usernameInput, usernameError, validateUsername(usernameInput.value));
});

emailInput.addEventListener("input", () => {
  applyValidation(emailInput, emailError, validateEmail(emailInput.value));
});

passwordInput.addEventListener("input", () => {
  applyValidation(passwordInput, passwordError, validatePassword(passwordInput.value));
  // Revalidar confirmacion si ya tiene valor
  if (confirmPasswordInput.value) {
    applyValidation(confirmPasswordInput, confirmPasswordError, validateConfirmPassword(confirmPasswordInput.value));
  }
});

confirmPasswordInput.addEventListener("input", () => {
  applyValidation(confirmPasswordInput, confirmPasswordError, validateConfirmPassword(confirmPasswordInput.value));
});

// Validacion al enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validar todos los campos
  const errors = [
    { input: usernameInput, error: usernameError, message: validateUsername(usernameInput.value) },
    { input: emailInput, error: emailError, message: validateEmail(emailInput.value) },
    { input: passwordInput, error: passwordError, message: validatePassword(passwordInput.value) },
    { input: confirmPasswordInput, error: confirmPasswordError, message: validateConfirmPassword(confirmPasswordInput.value) },
  ];

  // Aplicar validacion a cada campo
  errors.forEach(({ input, error, message }) => applyValidation(input, error, message));

  // Comprobar si todos son validos
  const allValid = errors.every(({ message }) => message === "");

  if (allValid) {
    formResult.textContent = "Registro exitoso! Bienvenido, " + usernameInput.value;
    formResult.classList.add("success");
  } else {
    formResult.classList.remove("success");
  }
});
