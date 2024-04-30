import { CreateTask } from "./newtask";
import { addTodo, task } from "./mainbar";

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalSubmit = document.getElementById("modalSubmit");


let parentTaskDiv;

function showModal() {
  modal.style.display = "block";
   // Find the parent task flex div
   const addTodoButton = document.activeElement;
   parentTaskDiv = addTodoButton.closest(".task");
}

//closes both modal and it's container
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.style.display = "none";
  }
};

//handles modal submit button and stores values
export const modalSubmitted = modalSubmit.addEventListener("click", () => {
  //get the input and select elements
  const taskDescription = modalContent.querySelector("#newTask");
  const taskType = modalContent.querySelector("#task-type");
  const taskPriority = modalContent.querySelector("#task-priority");
  //store values inside variables
  const taskDescriptionValue = taskDescription.value;
  const taskTypeValue = taskType.value;
  const taskPriorityValue = taskPriority.value;

  //create new class using values
  const newtododo = new CreateTask(
    taskDescriptionValue,
    taskTypeValue,
    taskPriorityValue
  );


  parentTaskDiv.insertBefore(newtododo.addNewTask(), parentTaskDiv.querySelector(".add-new-todo"));

  // task.insertBefore(newtododo.addNewTask(), addTodo);

  //close modal after clicking submit button
  modalContent.close();
  if (modalContent.open === false) {
    taskDescription.value = "";
    taskType.value = "";
    taskPriority.value = "";
  }
  modal.style.display = "none";

  console.log(typeof newtododo, newtododo);
});

export { showModal, modalContent };
