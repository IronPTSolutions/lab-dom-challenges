// Ejercicio 09: Form Validation
// ===============================
// Objetivo: Validar un formulario de registro en tiempo real.

// Iteration 1: Selecciona el formulario "signup-form" y todos los inputs y mensajes de error.


// Iteration 2: Crea funciones de validacion que reciban un valor y devuelvan un string de error
// (vacio si es valido):
// - validateUsername(value): minimo 3 caracteres
// - validateEmail(value): debe contener "@" y "."
// - validatePassword(value): minimo 6 caracteres
// - validateConfirmPassword(value): debe coincidir con el campo password


// Iteration 3: Añade event listeners "input" a cada campo.
// Dentro del listener:
// - Llama a la funcion de validacion correspondiente
// - Si hay error: muestra el error en el <p> de error, añade clase "invalid" al input, quita "valid"
// - Si es valido: limpia el <p> de error, añade clase "valid" al input, quita "invalid"


// Iteration 4: Añade un event listener "submit" al formulario.
// - Usa event.preventDefault() para evitar el envio del formulario
// - Valida todos los campos a la vez
// - Si todos son validos, muestra un mensaje de exito en "form-result" con la clase "success"
// - Si alguno falla, muestra los errores correspondientes

