import { todoDivHTML } from "./appendNewTodo";



export function storeElement(todoKey) {
      // Retrieve the existing array of todo keys from sessionStorage
      let todoKeys = JSON.parse(sessionStorage.getItem('todoKeys')) || [];

      // Add the new todo key to the array
      todoKeys.unshift(todoKey);

      // Store the updated array back in sessionStorage
      sessionStorage.setItem('todoKeys', JSON.stringify(todoKeys));

      // Store the HTML string in sessionStorage with the generated key
      sessionStorage.setItem(todoKey, todoDivHTML);

      // Return the generated key for reference
      return todoKey;
    }