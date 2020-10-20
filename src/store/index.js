import { kadromierzReducer } from "../reducers";

import { createStore } from "redux";
const store = createStore(
  kadromierzReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
