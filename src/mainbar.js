import { appendProjectTask } from "./newProjectTask.js";
import { showModal, modalContent } from "./modal.js";
import { retrieveTodoElementFromStorage } from "./taskStorage.js";



//get content and append mainbar
const content = document.querySelector(".content");
const mainbar = document.createElement("div");
mainbar.classList.add("mainbar", "flex");
content.appendChild(mainbar);

//get variable from appendProjectTask module
const { task, addTodo } = appendProjectTask();
//append default project/task on page load
mainbar.appendChild(task);
console.log('this is from default mainbar page load',task.id)

//appends todo's to each project on page load
document.addEventListener("DOMContentLoaded", function () {


  // Retrieve the todo elements from sessionStorage
  const retrievedTodoElements = retrieveTodoElementFromStorage();
  console.log('this is retrievedtodoelements',retrievedTodoElements)

  if (retrievedTodoElements.length > 0) {
    // Append the retrieved todo elements to the parent element in reverse order
    const parentElement = document.querySelector(".task");
    const referenceNode = parentElement.querySelector(".add-new-todo");

    for (let i = retrievedTodoElements.length - 1; i >= 0; i--) {
      parentElement.insertBefore(retrievedTodoElements[i], referenceNode);
    }
  }
});

//handles creation of new todo divs
addTodo.addEventListener("click", () => {
  showModal();
  modalContent.show();
});

//selects new project button and appends a new task div
const btnNewProject = document.getElementById("newProject");
btnNewProject.addEventListener("click", () => {
  const { task, addTodo } = appendProjectTask();
  mainbar.insertBefore(task, userTodos);
  console.log('this is from inside new project button',task.id)

  addTodo.addEventListener("click", () => {
    showModal();
    modalContent.show();
  });
});

/* basically find a way to isolate each stored todo items to it's own
project div and on page reload re append them dynamically , right now it
just appends to the main one so i think i need to set a unique id to each todo
that it then matches to its own unique project div so it can append properly?

1. generate id for default project div

2. generate id for each dynamically created project div

*/

const userTodos = document.createElement("div");
userTodos.className = "user-todos-sorted";
mainbar.appendChild(userTodos);
