// Ejercicio 10: Shopping List con localStorage

// Seleccionar elementos del DOM
const itemInput = document.querySelector("#item-input");
const addBtn = document.querySelector("#add-btn");
const shoppingList = document.querySelector("#shopping-list");
const clearBtn = document.querySelector("#clear-btn");

// Leer items de localStorage
function getItems() {
  const data = localStorage.getItem("shoppingList");
  return data ? JSON.parse(data) : [];
}

// Guardar items en localStorage
function saveItems(items) {
  localStorage.setItem("shoppingList", JSON.stringify(items));
}

// Renderizar la lista completa
function renderList() {
  const items = getItems();
  shoppingList.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    if (item.bought) li.classList.add("bought");

    // Nombre del producto
    const span = document.createElement("span");
    span.textContent = item.name;

    // Contenedor de acciones
    const actions = document.createElement("div");
    actions.classList.add("item-actions");

    // Boton "Comprado"
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = item.bought ? "Pendiente" : "Comprado";
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.addEventListener("click", () => {
      const current = getItems();
      current[index].bought = !current[index].bought;
      saveItems(current);
      renderList();
    });

    // Boton "Eliminar"
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      const current = getItems();
      current.splice(index, 1);
      saveItems(current);
      renderList();
    });

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    shoppingList.appendChild(li);
  });
}

// Añadir nuevo producto
addBtn.addEventListener("click", () => {
  const value = itemInput.value.trim();
  if (!value) return;

  const items = getItems();
  items.push({ name: value, bought: false });
  saveItems(items);
  renderList();
  itemInput.value = "";
});

// Vaciar la lista
clearBtn.addEventListener("click", () => {
  saveItems([]);
  renderList();
});

// Renderizar al cargar la pagina
renderList();
