import { createStore } from "redux";
import { todos } from "./reducer";

export const store = createStore(
  todos,
  {
    currentItem: "",
    list: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
