// Ejercicio 10: Shopping List con localStorage
// ==============================================
// Objetivo: Lista de la compra con persistencia en localStorage.
// Los datos sobreviven al recargar la pagina.

// Iteration 1: Selecciona los elementos: "item-input", "add-btn", "shopping-list", "clear-btn"


// Iteration 2: Crea una funcion "getItems" que lea la lista de localStorage.
// - Usa localStorage.getItem("shoppingList")
// - Si existe, parsea el JSON con JSON.parse y devuelvelo
// - Si no existe, devuelve un array vacio []


// Iteration 3: Crea una funcion "saveItems(items)" que guarde el array en localStorage.
// - Usa localStorage.setItem("shoppingList", JSON.stringify(items))


// Iteration 4: Crea una funcion "renderList" que:
// - Lea los items con getItems()
// - Limpie el contenido de shopping-list (innerHTML = "")
// - Para cada item, cree un <li> con:
//   - Un <span> con el nombre del producto
//   - Un boton "Comprado" (clase "toggle-btn") que alterne el estado bought
//   - Un boton "Eliminar" (clase "delete-btn") que elimine el item
// - Si item.bought es true, añade la clase "bought" al <li>


// Iteration 5: Añade event listener al boton "add-btn":
// - Lee el valor del input
// - Si no esta vacio, añade un objeto { name: valor, bought: false } al array
// - Guarda con saveItems() y renderiza con renderList()
// - Limpia el input


// Iteration 6: Implementa las acciones de los botones "Comprado" y "Eliminar":
// - Comprado: cambia item.bought a !item.bought, guarda y renderiza
// - Eliminar: quita el item del array con splice, guarda y renderiza


// Iteration 7: Añade event listener al boton "clear-btn":
// - Vacia el array, guarda y renderiza


// Iteration 8: Al cargar la pagina, llama a renderList() para mostrar los items guardados

