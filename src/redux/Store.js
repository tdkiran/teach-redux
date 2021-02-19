import { createStore } from "redux";
import { todos } from "./reducer";

export const store = createStore(
  todos,
  {
    currentItem: "",
    list: ["buy eggs"],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch({
//   type: 'ADD',
//   data: 'Read the docs'
// })

// console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]
