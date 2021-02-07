import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {chatReducer} from './chatReducer'

export const rootReducer = combineReducers({
    chat: chatReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store