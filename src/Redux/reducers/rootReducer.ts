import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {chatReducer} from './chatReducer';
import {boardReducer} from './boardReducer';
import {UserReducer} from './UserReducer';

export const rootReducer = combineReducers({
    chat: chatReducer,
    board: boardReducer,
    user: UserReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store