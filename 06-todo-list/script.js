// Ejercicio 06: TODO List
// ========================
// Objetivo: Crear una lista de tareas donde se pueden añadir, completar y eliminar tareas.

// Iteration 1: Selecciona el boton "add-btn", la lista "todo-list" y el mensaje "empty-message"
const btnAdd = document.getElementById("add-btn")
const todoList = document.querySelector("#todo-list")
const message = document.querySelector("#empty-message")

// Iteration 2: Añade un event listener "click" al boton "add-btn".
// Dentro del listener, usa prompt() para pedir el texto de la tarea.
// Si el usuario introduce texto (no vacio ni null), continua a la Iteration 3.


// Iteration 3: Crea un nuevo <li> con document.createElement("li").
// - Añade un <span> con el texto de la tarea
// - Añade un boton "Completar" con clase "complete-btn"
// - Añade un boton "Eliminar" con clase "delete-btn"
// - Usa appendChild para añadir el <li> a la lista

// Iteration 4: Añade funcionalidad a los botones:
// - "Completar": al hacer click, alterna la clase "completed" en el <li> padre
// - "Eliminar": al hacer click, elimina el <li> padre con .remove()

let toDoListNumber = 0

const emptyMessage = document.querySelector("#empty-message")

btnAdd.addEventListener("click", function () {
    let text = window.prompt("Introduce aquí la tarea")
    let newToDo = document.createElement("li")
    newToDo.innerHTML = `<span> ${text} </span> <button class="complete-btn"> Completar </button> <button class="delete-btn"> Eliminar </button>`
    todoList.appendChild(newToDo)
    toDoListNumber += 1

    const btnComplete = newToDo.querySelector(".complete-btn")
    const btnDelete = newToDo.querySelector(".delete-btn")

    btnComplete.addEventListener("click", function () {
        newToDo.classList.toggle("completed")
    })

    btnDelete.addEventListener("click", function () {
        newToDo.remove()
        toDoListNumber -= 1
        console.log(toDoListNumber)

        if (toDoListNumber === 0) {
        document.querySelector("body").appendChild(emptyMessage)
    }
    })

    if (toDoListNumber > 0) {
        emptyMessage.remove()
    }

})

// Iteration 5: Muestra u oculta el mensaje "empty-message" segun si la lista tiene elementos o no.
// Pista: comprueba todo-list.children.length despues de añadir o eliminar.

