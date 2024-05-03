import { CreateTask } from "./newtask";

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
    modalContent.close();
  }
};

//handles modal submit button and stores values
modalSubmit.addEventListener("click", () => {
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

  const { todoDiv, todoKey } = newtododo.addNewTask();

  // appends the new todo div element to the nearest element above the new task button
  parentTaskDiv.insertBefore(
    todoDiv,
    parentTaskDiv.querySelector(".add-new-todo")
  );



  //close modal after clicking submit button
  modalContent.close();
  if (modalContent.open === false) {
    taskDescription.value = "";
    taskType.value = "";
    taskPriority.value = "";
  }
  modal.style.display = "none";
});

export { showModal, modalContent };
