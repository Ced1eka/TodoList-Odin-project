import { storeElement } from "./storeElement";

export let todoDivHTML;

export function createNewTodoElement(description, priority, type) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo", "flex");

  const input = document.createElement("input");
  input.setAttribute("type", "radio");

  const label = document.createElement("label");
  label.setAttribute("for", "");
  label.textContent = description;

  const todoPriority = document.createElement("p");
  todoPriority.textContent = priority;

  const todoType = document.createElement("p");
  todoType.textContent = `#${type}`;

  // Append input, label, and p elements to the todo div
  todoDiv.appendChild(input);
  todoDiv.appendChild(label);
  todoDiv.appendChild(todoPriority);
  todoDiv.appendChild(todoType);

  todoDivHTML = todoDiv.outerHTML;

  //could include in return if value is needed later
  // const todoKey = storeTodoElement(todoDivHTML);


  storeElement(todoDivHTML);

  // return {todoDiv, todoKey};
  return { todoDiv };
}
