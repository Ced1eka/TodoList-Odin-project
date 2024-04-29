import {showModal, modalContent} from './modal.js'

//replace body with content later on

const content = document.querySelector(".content");
const mainbar = document.createElement("div");
mainbar.classList.add('mainbar', 'flex');
content.appendChild(mainbar);

export const task = document.createElement("div");
task.className = "task flex";
mainbar.appendChild(task);

const taskLabel = document.createElement("div");
taskLabel.className = "task-label";



const userProjectHeader = document.createElement("button");
userProjectHeader.className = "user-project-header flex";

const ionChev = document.createElement("ion-icon");
ionChev.setAttribute("name", "chevron-down-circle-outline");

const spanHeader = document.createElement("span");
spanHeader.textContent = "Insert witty task/project name HERE";

userProjectHeader.appendChild(ionChev);
userProjectHeader.appendChild(spanHeader);

const taskHamburger = document.createElement("button");
taskHamburger.className = "task-hamburger flex";

const ionOptions = document.createElement("ion-icon");
ionOptions.setAttribute("name", "options-outline");

const sortBy = document.createElement("span");
sortBy.textContent = "sort by insert here";

taskHamburger.appendChild(ionOptions);
taskHamburger.appendChild(sortBy);

export const addTodo = document.createElement('button');
addTodo.className = 'add-new-todo flex';

const ionPlusCircle = document.createElement('ion-icon');
ionPlusCircle.setAttribute('name', 'add-circle-outline');

const spanTodo = document.createElement('span');
spanTodo.textContent = 'new task';

addTodo.appendChild(ionPlusCircle);
addTodo.appendChild(spanTodo);

taskLabel.appendChild(userProjectHeader);
taskLabel.appendChild(taskHamburger);


// add code here to dynamically create new todo items when addTodo is clicked

task.appendChild(taskLabel);
task.appendChild(addTodo);

const userTodos = document.createElement("div");
userTodos.className = "user-todos-sorted";
mainbar.appendChild(userTodos);


// when the new task button is clicked shows modal
const btns = document.querySelectorAll(".add-new-todo");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(sampleTask);
    showModal();
    modalContent.show();
  });
});
