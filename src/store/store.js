import { applyMiddleware, createStore } from "redux";

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)))``