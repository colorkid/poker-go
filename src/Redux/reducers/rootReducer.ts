import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {chatReducer} from './chatReducer';
import {boardReducer} from './boardReducer';

export const rootReducer = combineReducers({
    chat: chatReducer,
    board: boardReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store