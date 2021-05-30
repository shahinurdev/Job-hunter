import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    user: userReducer
})

export const store = createStore(combinedReducer, composeWithDevTools());