import { appendProjectTask } from "./newProjectTask.js";
import { showModal, modalContent } from "./modal.js";

//get content and append mainbar
const content = document.querySelector(".content");
const mainbar = document.createElement("div");
mainbar.classList.add("mainbar", "flex");
content.appendChild(mainbar);

//get variable from appendProjectTask module
export const { task, addTodo } = appendProjectTask();
//append default project/task on page load
mainbar.appendChild(task);


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
