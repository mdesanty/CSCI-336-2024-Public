document.addEventListener('DOMContentLoaded', function() {
  const addTodoBtn = document.getElementById("add-todo-btn");

  addTodoBtn.addEventListener('click', function() {
    const todoInput = document.getElementsByClassName('todo-input')[0];
    const todoValue = todoInput.value;

    addTodo(todoValue);
    todoInput.value = '';
  });
});

function addTodo(todoString) {
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoString;

  const todoList = document.getElementById("todo-list");
  todoList.appendChild(newTodo);
}
