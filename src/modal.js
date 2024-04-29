import { CreateTask } from "./newtask";
import { addTodo, task } from "./mainbar";

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalSubmit = document.getElementById("modalSubmit");


function showModal() {
  modal.style.display = "block";
}

//closes both modal and it's container
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.style.display = "none";
    console.log("clicked!");
  }
};


//handles modal submit button and stores values
const modalSubmitted = modalSubmit.addEventListener("click", () => {
  // should take in all values from the input and select elements
  // and pass them onto the newtask.js module
  const taskDescription = modalContent.querySelector("#newTask");
  const taskType = modalContent.querySelector("#task-type");
  const taskPriority = modalContent.querySelector("#task-priority");

  const taskDescriptionValue = taskDescription.value;
  const taskTypeValue = taskType.value;
  const taskPriorityValue = taskPriority.value;


  const newtododo = new CreateTask(taskDescriptionValue, taskTypeValue,taskPriorityValue)


  modalContent.close();
  modal.style.display = "none";

  const todoDiv = document.createElement('div');
todoDiv.classList.add('todo', 'flex');

const input = document.createElement('input');
input.setAttribute('type', 'radio');

const label = document.createElement('label');
label.setAttribute('for', '');
label.textContent = taskDescriptionValue;

const p = document.createElement('p');
p.textContent = taskTypeValue;

// Append input, label, and p elements to the todo div
todoDiv.appendChild(input);
todoDiv.appendChild(label);
todoDiv.appendChild(p);

task.insertBefore(todoDiv, addTodo);



});



export {
  showModal,
  modalContent,
};
