import { createStore } from "redux";
import excelReducer from "./reducer";

const store = createStore(
    excelReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;