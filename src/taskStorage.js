import { stringTodo } from "./mainbar";


(function (){
      sessionStorage.setItem('theObj',JSON.stringify(stringTodo))
})();



// for (let key in stringify) {
//       // Check if the key is a property of the object (not inherited)
//       if (stringify.hasOwnProperty(key)) {
//           // Generate a unique key dynamically based on the current key
//           const uniqueKey = 'task' + key; // Example: 'task_description', 'task_priority', etc.

//           // Store the corresponding value in sessionStorage using the unique key
//           seshStorage.setItem(uniqueKey, stringify[key]);
//       }
//   }