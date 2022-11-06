import { createStore, combineReducers } from "redux"

import viewLinks from "../reducers/viewLinks";
import userInfo from "../reducers/userInfo";
import booksInfo from "../reducers/booksInfo";

const store = createStore(
    combineReducers({viewLinks, userInfo, booksInfo}), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;