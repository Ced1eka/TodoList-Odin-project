// export function retrieveTodoElementFromStorage() {
//   // Retrieve the serialized HTML string from sessionStorage

//   const parsedTodoDivs = [];

//   function getAllSessionStorageKeys() {
//     const keys = [];
//     for (let i = 0; i < sessionStorage.length; i++) {
//       const key = sessionStorage.key(i);
//       keys.push(key);
//     }
//     return keys;
//   }
//   const seshkeys = getAllSessionStorageKeys();

//   seshkeys.forEach((key) => {
//     const todoDivHTML = sessionStorage.getItem(key);
//     if (todoDivHTML) {
//       // Recreate the todoDiv element by parsing the HTML string
//       const parser = new DOMParser();
//       const parsedTodoDiv = parser.parseFromString(todoDivHTML, "text/html")
//         .body.firstChild;
//       // return parsedTodoDiv;

//       parsedTodoDivs.push(parsedTodoDiv);
//     }
//   });

//   console.log(parsedTodoDivs);
//   return parsedTodoDivs.length > 0 ? parsedTodoDivs : null;
// }

export function retrieveTodoElementFromStorage() {
      // Retrieve the serialized HTML string from sessionStorage
      const parsedTodoDivs = [];

      // Retrieve the array of todo keys from sessionStorage
      const todoKeys = JSON.parse(sessionStorage.getItem('todoKeys')) || [];

      // Iterate over the todo keys in the specified order
      todoKeys.forEach((key) => {
        const todoDivHTML = sessionStorage.getItem(key);
        if (todoDivHTML) {
          // Recreate the todoDiv element by parsing the HTML string
          const parser = new DOMParser();
          const parsedTodoDiv = parser.parseFromString(todoDivHTML, "text/html").body.firstChild;
          parsedTodoDivs.push(parsedTodoDiv);
        }
      });

      return parsedTodoDivs;
    }
