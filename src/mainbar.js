import { appendProjectTask } from "./newProjectTask.js";
import { showModal, modalContent } from "./modal.js";
import { retrieveTodoElementFromStorage } from "./taskStorage.js";



//get content and append mainbar
const content = document.querySelector(".content");
const mainbar = document.createElement("div");
mainbar.classList.add("mainbar", "flex");
content.appendChild(mainbar);

//get variable from appendProjectTask module
export const { task, addTodo } = appendProjectTask();
//append default project/task on page load
mainbar.appendChild(task);

// document.addEventListener("DOMContentLoaded", function () {
//   // Retrieve the todo element from sessionStorage

//   const retrievedTodoElement = retrieveTodoElementFromStorage();
//   console.log('from mainbar', retrievedTodoElement);

//   if (retrievedTodoElement && retrievedTodoElement.length > 0) {
//     // Append the retrieved todo element to a parent element in the DOM
//     const parentElement = document.querySelector(".task"); // Replace ".task" with the selector for the desired parent element
//     const referenceNode = parentElement.querySelector(".add-new-todo"); // Select the reference node

//     retrievedTodoElement.forEach((todoEle) =>{

//   parentElement.insertBefore(todoEle, referenceNode);
// })
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the todo elements from sessionStorage
  const retrievedTodoElements = retrieveTodoElementFromStorage();
  console.log(retrievedTodoElements)

  if (retrievedTodoElements.length > 0) {
    // Append the retrieved todo elements to the parent element in reverse order
    const parentElement = document.querySelector(".task");
    const referenceNode = parentElement.querySelector(".add-new-todo");

    for (let i = retrievedTodoElements.length - 1; i >= 0; i--) {
      parentElement.insertBefore(retrievedTodoElements[i], referenceNode);
    }
  }
});



addTodo.addEventListener("click", () => {
  showModal();
  modalContent.show();
});

const btnNewProject = document.getElementById("newProject");
btnNewProject.addEventListener("click", () => {
  const { task, addTodo } = appendProjectTask();
  mainbar.appendChild(task);

  addTodo.addEventListener("click", () => {
    showModal();
    modalContent.show();
  });
});

const userTodos = document.createElement("div");
userTodos.className = "user-todos-sorted";
mainbar.appendChild(userTodos);
