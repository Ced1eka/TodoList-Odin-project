export function createNewTodoElement (description, priority,type){


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


const todoDivHTML = todoDiv.outerHTML;



function storeTodoElement(todoKey) {
  // Retrieve the existing array of todo keys from sessionStorage
  let todoKeys = JSON.parse(sessionStorage.getItem('todoKeys')) || [];

  // Add the new todo key to the array
  todoKeys.unshift(todoKey);

  // Store the updated array back in sessionStorage
  sessionStorage.setItem('todoKeys', JSON.stringify(todoKeys));

  // Store the HTML string in sessionStorage with the generated key
  sessionStorage.setItem(todoKey, todoDivHTML);

  // Return the generated key for reference
  return todoKey;
}


const todoKey = storeTodoElement(todoDivHTML);



return {todoDiv, todoKey};
}