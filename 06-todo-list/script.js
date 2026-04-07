// Ejercicio 06: TODO List

// Seleccionar elementos del DOM
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");

// Mostrar u ocultar el mensaje de lista vacia
function toggleEmptyMessage() {
  emptyMessage.style.display = todoList.children.length === 0 ? "block" : "none";
}

// Añadir nueva tarea
addBtn.addEventListener("click", () => {
  const taskText = prompt("Escribe el nombre de la tarea:");

  // Validar que el usuario introdujo texto
  if (!taskText || !taskText.trim()) return;

  // Crear el elemento <li>
  const li = document.createElement("li");

  // Crear el <span> con el texto de la tarea
  const span = document.createElement("span");
  span.textContent = taskText.trim();

  // Crear boton "Completar"
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Completar";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Crear boton "Eliminar"
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    toggleEmptyMessage();
  });

  // Contenedor de acciones
  const actions = document.createElement("div");
  actions.classList.add("todo-actions");
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  // Montar el <li>
  li.appendChild(span);
  li.appendChild(actions);

  // Añadir a la lista
  todoList.appendChild(li);
  toggleEmptyMessage();
});
