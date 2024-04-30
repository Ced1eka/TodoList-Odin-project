import { appendProjectTask } from './newProjectTask.js';
import {showModal, modalContent} from './modal.js'


//replace body with content later on

const content = document.querySelector(".content");
 const mainbar = document.createElement("div");
mainbar.classList.add('mainbar', 'flex');
content.appendChild(mainbar);

function bindAddTodoEventListeners() {
  const addTodoButtons = document.querySelectorAll(".add-new-todo");
  addTodoButtons.forEach(button => {
      button.addEventListener("click", () => {
          showModal();

      });
  });
}


export const {task, addTodo,btn} = appendProjectTask();
mainbar.appendChild(task);
bindAddTodoEventListeners();

 Array.from(btn).forEach(button => {
  button.addEventListener('click', () => {
      showModal();
      modalContent.show();
  });
});


const btnNewProject = document.getElementById('newProject');
btnNewProject.addEventListener('click',()=>{
 const {task, addTodo,btn} = appendProjectTask();
mainbar.appendChild(task);
bindAddTodoEventListeners();


Array.from(btn).forEach(button => {
  button.addEventListener('click', () => {
let parentTaskDiv;
const addTodoButton = document.activeElement;
parentTaskDiv = addTodoButton.closest(".task");
      showModal();
      modalContent.show();
  });
});
// const btns = document.querySelectorAll(".add-new-todo");
Array.from(addTodo).forEach((button) => {
  button.addEventListener("click", () => {

    showModal();
    modalContent.show();
    console.log(parentDiv); // Check if parentTaskDiv is correct
  });
});

})



const userTodos = document.createElement("div");
userTodos.className = "user-todos-sorted";
mainbar.appendChild(userTodos);
