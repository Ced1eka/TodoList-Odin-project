import { createNewTodoElement } from "./appendNewTodo";

export class CreateTask {
  constructor(taskDescriptionValue, taskPriorityValue, taskTypeValue) {
    this.taskDescriptionValue = taskDescriptionValue;
    this.taskPriorityValue = taskPriorityValue;
    this.taskTypeValue = taskTypeValue;
  }

  addNewTask() {
    const {todoDiv, todoKey} = createNewTodoElement(
      this.taskDescriptionValue,
      this.taskPriorityValue,
      this.taskTypeValue
    );

    // return newTodoElement;
    return { todoDiv, todoKey };
  }
}
