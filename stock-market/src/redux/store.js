import { createStore } from "redux";
import stockReducer from "./reducers";

const store = createStore(stockReducer);

export default store;
