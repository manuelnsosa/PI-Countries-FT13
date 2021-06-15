import rootReducer from "../reducer/index.js";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  // redux thunk me sirve para manejar acciones asincrónicas (importante para los requests al backend)
);

export default store;
