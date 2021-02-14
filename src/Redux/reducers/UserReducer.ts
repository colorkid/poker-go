import {SET_NAME, PUSH_USER_NAME, REMOVE_USER} from "../../Constants/userConstants";

export interface IUserReducer {
    user: IUserState,
}

export interface IGetName {
    name: string
}

export interface IUserState {
    name: string,
    colleagues: string[],
}

const initialState: IUserState = {
    name: '',
    colleagues: [],
}

export const UserReducer = (state: IUserState = initialState, action: any): IUserState => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload.name,
            }
        case PUSH_USER_NAME:
            return pushUser(state, action.payload.name)
        case REMOVE_USER:
            return {
                ...state,
                colleagues: state.colleagues// state.colleagues.filter(colleagues => colleagues.length && colleagues !== action.payload.name)
            }
        default:
            return state
    }
}

const pushUser = (state: any, name: string) => {
    return !state.colleagues.includes(name)
        ? {
            ...state,
            colleagues: [...state.colleagues, name],
        } : state
}