import { applyMiddleware, createStore } from "redux";
import reducer, { fetcher } from "./reducer";

const store = createStore(reducer, applyMiddleware(fetcher))

export default store