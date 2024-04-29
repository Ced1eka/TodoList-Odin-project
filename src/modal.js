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
  }
};

//handles modal submit button and stores values
const modalSubmitted = modalSubmit.addEventListener("click", () => {
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

  //create new todo element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo", "flex");

  const input = document.createElement("input");
  input.setAttribute("type", "radio");

  const label = document.createElement("label");
  label.setAttribute("for", "");
  label.textContent = taskDescriptionValue;

  const todoPriority = document.createElement("p");
  todoPriority.textContent = taskPriorityValue;

  const todoType = document.createElement("p");
  todoType.textContent = `#${taskTypeValue}`;

  // Append input, label, and p elements to the todo div
  todoDiv.appendChild(input);
  todoDiv.appendChild(label);
  todoDiv.appendChild(todoPriority);
  todoDiv.appendChild(todoType);

  task.insertBefore(todoDiv, addTodo);

  //close modal after clicking submit button
  modalContent.close();
  if (modalContent.open === false) {
    taskDescription.value = "";
    taskType.value = "";
    taskPriority.value = "";
  }
  modal.style.display = "none";

  console.log(todoDiv)
});

export { showModal, modalContent };
