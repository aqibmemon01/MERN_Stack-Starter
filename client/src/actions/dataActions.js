import * as todos from '.././apis/todos';
// import axios from 'axios';
// const api = 'http://localhost:4000/api/todos';
// //Get-All-Todos

// export const getAllTodos = () => dispatch =>{
//     console.log("Getting todo ...");
//     return todos.getAll()
//       .then(todos => dispatch({
//             type:'GET-ALL-TODOS',
//             todos:todos
//         }))
//       .catch((error) => console.log("error while getting todos",error));  
//   }
// //Add Todo
// export const addTodo = (todo = {}) => dispatch =>{
//     console.log("Adding todo ...",todo);
//    return todos.add(todo)
//     .then(() => dispatch({
//         type:'ADD-TODO',
//         todo:todo
//     }))
//     .catch((error) => console.log("Error While Add todo",error))
// }
